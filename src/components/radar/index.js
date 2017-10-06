import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.radar', [])
    .component('radar', {
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
                $ctrl.data = options.data;
                $ctrl.min = options.min || 0;
                $ctrl.max = options.max || 100;
                $ctrl.backgroundsteps = options.backgroundsteps || 10;
                $ctrl.colors = options.colors || ['#8ed6c3','#9ecef2','#9ea8f2','#ba9ef2','#ed8ed9'];
                $ctrl.labels = options.labels || [''];
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.$onInit = function() {
                $ctrl.radarReady = false;

                var radarW = 360;
                var radarH = 300;
                var cx = radarW/2;
                var cy = radarH/2;
                var radius = 130;

                var pi = Math.PI;

                var n = $ctrl.data[0].length;
                var ang = 360 / n;

                // Draw any poligon
                function drawpol(array,scale,min,max,regular) {
                    var s = scale || 1;
                    var drawvar = '';
                    for (var i = 0; i < n; i++) {
                        var cang = (ang * i + 90) * (pi / 180);
                        if(regular){
                            var v = (max - min) / (max - min);
                        } else {
                            var v = (array[i] - min) / (max - min);
                        }
                        var px = Math.trunc((cx - (Math.cos(cang) * radius) * v * s) * 1000) / 1000;
                        var py = Math.trunc((cy- (Math.sin(cang) * radius) * v * s) * 1000) / 1000;
                        drawvar += px + ',' + py + ' ';
                    }
                    return drawvar;
                }

                $ctrl.poligon = "<polygon class='poligon' points='"+ drawpol($ctrl.data[0],1,$ctrl.min,$ctrl.max,true) +"' />";

                var steps = '';
                for(var i = 0; i < $ctrl.backgroundsteps; i++){
                    var backgroundsteps = (1/$ctrl.backgroundsteps)* (i+1);
                    steps += "<polygon class='steps' points='"+ drawpol($ctrl.data[0],backgroundsteps,$ctrl.min,$ctrl.max,true) +"' fill='none' stroke-width='1' />"
                }
                $ctrl.steps = steps;

                var lines = '';
                for(var i = 0; i < n; i++){
                    var cang = (ang * i + 90) * (pi / 180);
                    var px = Math.trunc((cx - (Math.cos(cang) * radius)) * 1000) / 1000;
                    var py = Math.trunc((cy - (Math.sin(cang) * radius)) * 1000) / 1000;
                    lines += "<line class='lines' x1='"+cx+"' y1='"+cy+"' x2='"+px+"' y2='"+py+"' stroke-width='1'/>"
                }
                $ctrl.lines = lines;

                var texts = '';
                var centerPolygon = '';

                for(var i = 0; i < n; i++){
                    if($ctrl.labels[i]){
                        var deg = ang * i;
                        var cang = (deg + 90) * (pi / 180);
                        var px = Math.trunc((cx - (Math.cos(cang) * radius)) * 1000) / 1000;
                        var py = Math.trunc((cy - (Math.sin(cang) * radius)) * 1000) / 1000;


                        let textAnchor = 'start';
                        let alignmentBaseline = 'middle';

                        if(deg<5){
                            textAnchor = 'middle';
                            py -= 10;
                        }
                        if(deg >= 5 && deg < 180){
                            px += 4;
                        }
                        if(deg > 150 && deg < 210){
                            alignmentBaseline = 'hanging';
                            py += 4;
                        }
                        if(deg > 175 && deg < 185){
                            textAnchor = 'middle';
                        }
                        // true if text should be right aligned
                        if(deg >180){
                            textAnchor = 'end';
                            px -= 10;
                        }
                        texts += "<text x='"+px+"' y='"+py+"' text-anchor='"+textAnchor+"' alignment-baseline='"+alignmentBaseline+"' fill='#666' font-size='12' font-weight='300'>"+$ctrl.labels[i]+"</text>"
                        centerPolygon += radarW/2 + ',' + radarH/2 + ' ';
                    }
                }
                $ctrl.texts = texts;

                $ctrl.centerPolygon = centerPolygon;

                var draws = '';
                for(var i = 0; i < $ctrl.data.length; i++){
                    var cl = $ctrl.colors.length;
                    var color = $ctrl.colors[i- Math.trunc(i/cl)*cl];
                    draws += "<polygon points='' fill='"+color+"' opacity='0.15'><animate attributeName='points' dur='0.3s' begin='"+(i+1)*0.4+"s' fill='freeze' from='"+ $ctrl.centerPolygon +"' to='"+ drawpol($ctrl.data[i],1,$ctrl.min,$ctrl.max,false) +"'/></polygon>";
                    draws += "<polygon points='' fill='none' stroke='"+color+"' stroke-width='1.5' stroke-linejoin='round'><animate attributeName='points' dur='0.3s' begin='"+(i+1)*0.4+"s' fill='freeze' from='"+ $ctrl.centerPolygon +"' to='"+ drawpol($ctrl.data[i],1,$ctrl.min,$ctrl.max,false) +"'/></polygon>";

                }
                $ctrl.draws = draws;

                $timeout(function(){
                    $ctrl.radarReady = true;
                },50);

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .filter('unsafe', function($sce) { return $sce.trustAsHtml })
    .name
