import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.line', [])
    .component('line', {
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
                $ctrl.width = options.width || 250;
                $ctrl.height = options.height || 150;
                $ctrl.strokeColor = options.color || "#8ed6c3";
                $ctrl.strokeWidth = options.strokeWidth || 3;
                $ctrl.time = options.time || 1;
            }

            let oldDots = '';

            $ctrl.drawLine = function(data){
                let linestroke = $ctrl.strokeWidth;
                let usableHeight = $ctrl.height - linestroke;

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
                let step = Math.round(($ctrl.width-linestroke)/data.length);
                if(oldDots === ''){
                    for(let i=0; i < data.length; i++){
                        let x = linestroke + i*step;
                        let y = $ctrl.height - linestroke;
                        oldDots+= x + ' ' + y + ' ';
                    }
                }
                for(let i=0; i < data.length; i++){
                    let x = (linestroke/2) + i*step;
                    let y =  usableHeight - Math.trunc(((data[i] - min) / (max - min)) * usableHeight*100)/100 + linestroke/2;
                    dots+= x + ' ' + y + ' ';
                }
                $ctrl.line =
                    '<polyline id="poly" points="" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="'+$ctrl.strokeColor+'" style="stroke-width: '+$ctrl.strokeWidth+'">' +
                    '<animate attributeName="points" dur="'+$ctrl.time+'s" fill="freeze" from="'+oldDots+'" to="'+dots+'" />' +
                    '</polyline>';
                oldDots = dots;
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
                $ctrl.drawLine($ctrl.data);
            }


            $ctrl.$onInit = function() {

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .filter('unsafe', function($sce) { return $sce.trustAsHtml })
    .name
