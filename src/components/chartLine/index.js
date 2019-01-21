import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

export default angular
    .module('ngui.chartLine', [])
    .component('chartLine', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function($timeout) {
            "ngInject";
            var $ctrl = this;

            function updateOptions(options) {
                if (!options)
                    return;
                $ctrl.data = options.data.values || [];
                $ctrl.min = options.data.min;
                $ctrl.max = options.data.max;
                $ctrl.lineData = options.data.line || {};
                $ctrl.lineDataShow = $ctrl.lineData.show || false;
                $ctrl.lineDataY = $ctrl.lineData.y || null;
                $ctrl.lineDataColor = $ctrl.lineData.color || null;
                $ctrl.lineDataStrokeWidth = $ctrl.lineData.strokeWidth || 1;
                $ctrl.width = options.width || 1010;
                $ctrl.height = options.height || 757.5;
                $ctrl.strokeColor = options.color || null;
                $ctrl.strokeWidth = options.strokeWidth || 10;
                $ctrl.time = options.time || 1;
            }

            let oldDots = '';

            $ctrl.drawLine = function(data){
                let linestroke = $ctrl.strokeWidth;
                let usableHeight = $ctrl.height - linestroke;
                let usableWidth = $ctrl.width - linestroke;

                // get max and min
                let max;
                let min;
                if($ctrl.max) {
                    max = $ctrl.max;
                } else {
                    max = - 100000000000000;
                    for(let i=0; i < data.length; i++){
                        let c = data[i];
                        if(c>max){
                            max = c;
                        }
                    }
                }
                if($ctrl.min) {
                    min = $ctrl.min;
                } else {
                    min = 100000000000000;
                    for(let i=0; i < data.length; i++){
                        let c = data[i];
                        if(c<min){
                            min = c;
                        }
                    }
                }
                let dots = '';
                let step = Math.round(usableWidth/(data.length)*100)/100;

                // firstPointY;
                let firstPointY = usableHeight - Math.round(((data[0] - min) / (max - min)) * usableHeight*100)/100 + linestroke/2;

                // zeroPointY
                let zeroPointY = usableHeight;
                zeroPointY = firstPointY;
                if($ctrl.lineDataY) zeroPointY = usableHeight - Math.round((($ctrl.lineDataY - min) / (max - min)) * usableHeight*100)/100 + linestroke/2;

                if(oldDots === ''){
                    for(let i=0; i < data.length; i++){
                        let x = (linestroke/2) + i*step;
                        let y = firstPointY;
                        oldDots+= x + ' ' + y + ' ';
                    }
                }
                for(let i=0; i < data.length; i++){
                    let x = (linestroke/2) + i*step;
                    let y =  usableHeight - Math.round(((data[i] - min) / (max - min)) * usableHeight*100)/100 + linestroke/2;
                    dots+= x + ' ' + y + ' ';
                }
                // Check stroke
                let newStrokeColor = '';
                if($ctrl.strokeColor) newStrokeColor = 'stroke:'+$ctrl.strokeColor+ ';';

                let backgroundLine ='';
                if($ctrl.lineDataShow){
                    // Check chartLine stroke
                    let newLineStroke = '';
                    if($ctrl.lineDataColor) newLineStroke = 'stroke:'+$ctrl.lineDataColor+ ';';
                    backgroundLine = '<chartLine class="zeroLine" x1="'+(linestroke/2)+'" y1="'+zeroPointY+'" x2="'+usableWidth+'" y2="'+zeroPointY+'" stroke-width="'+$ctrl.lineDataStrokeWidth +'" style="'+newLineStroke+'"/>'
                }

                // Populate chartLine
                $ctrl.line =
                    '<svg class="chart" viewBox="0 0 '+$ctrl.width+' '+$ctrl.height+'">'+
                    backgroundLine +
                    '<polyline id="poly" points="" stroke-linecap="round" stroke-linejoin="round" fill="none" style="stroke-width: '+$ctrl.strokeWidth +';'+ newStrokeColor+'">' +
                    '<animate attributeName="points" dur="'+$ctrl.time+'s" fill="freeze" from="'+oldDots+'" to="'+dots+'" />' +
                    '</polyline>'+
                    '</svg>';
                oldDots = dots;
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
                $ctrl.drawLine($ctrl.data);
            }


            $ctrl.$onInit = function() {

                $ctrl.viewBox = '0 0 '+ $ctrl.width + ' ' + $ctrl.height;

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .filter('unsafe', function($sce) { return $sce.trustAsHtml })
    .name
