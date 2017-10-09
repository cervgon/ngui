import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.pie', [])
    .component('pie', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function($timeout) {
            "ngInject";
            var $ctrl = this;

            $ctrl.removeDecimal = function(number){
                let returnNumber = Math.trunc(number);
                return returnNumber;
            }
            $ctrl.getDecimal = function(number){
                let returnNumber = Math.round((number % 1)*10);
                if(returnNumber > 0) return '.'+returnNumber;
                else return;
            }

            function updateOptions(options) {
                if (!options)
                    return;
                $ctrl.data = options.data || [];
                $ctrl.type = options.type || '#';
                $ctrl.totalTime = options.time || 2;
                $ctrl.strokeWidth = options.strokeWidth || 3;
                $ctrl.radius = options.radius || 90;
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            function showPie(){
                $timeout(function(){
                    $ctrl.pieReady = true;
                },50);
            }

            function drawNumericChart(){
                let values = [];
                let pi = Math.PI;
                let pieces = $ctrl.l1.length;
                $ctrl.time1 = $ctrl.totalTime/pieces;
                let radius = $ctrl.radius;
                let max = 0;
                for (let i = 0; i < pieces; i++) {
                    let v = $ctrl.l1[i];
                    max += v;
                }
                let per = Math.trunc(2*radius*pi*10)/10;
                let hue = 0;
                for (let i=0; i < pieces; i++){
                    let color = 'hsl('+hue+', 70%, 62%)';
                    hue += Math.trunc(360*$ctrl.l1[i]/max);
                    values.push({'color':color,'dasharray':[0,per],'angle':0});
                }
                $ctrl.valuesl1 = values;
                //Draw
                $timeout(function(){
                    let acum = 0;
                    for (let i = 0; i < pieces; i++){
                        let v = $ctrl.l1[i];
                        let currentValue = Math.trunc(((v)/max)*per*10)/10;
                        values[i].dasharray[0] = currentValue -1;
                        values[i].angle = 360*acum/max -90;
                        acum += v;
                    }
                    $ctrl.reference = acum;
                    $ctrl.valuesl1 = values;
                },600);
            }

            function drawPercentageChart(){
                let values = [];
                let pi = Math.PI;
                let pieces = $ctrl.l1.length;
                $ctrl.time1 = $ctrl.totalTime/pieces;
                let radius = $ctrl.radius;
                let max = 0;
                for (let i = 0; i < pieces; i++) {
                    let v = $ctrl.l1[i];
                    max += v;
                }
                if(max>100) {
                    console.error('Values sum greater than 100%');
                    $ctrl.error = '> 100%';
                    return;
                } else {
                    max = 100;
                }
                let per = Math.trunc(2*radius*pi*10)/10;
                let hue = 0;
                for (let i=0; i < pieces; i++){
                    let color = 'hsl('+hue+', 70%, 62%)';
                    hue += Math.trunc(360*$ctrl.l1[i]/max);
                    values.push({'color':color,'dasharray':[0,per],'angle':0});
                }
                $ctrl.valuesl1 = values;
                //Draw
                $timeout(function(){
                    let acum = 0;
                    for (let i = 0; i < pieces; i++){
                        let v = $ctrl.l1[i];
                        let currentValue = Math.trunc(((v)/max)*per*10)/10;
                        values[i].dasharray[0] = currentValue - 1;
                        values[i].angle = 360*acum/max -90;
                        acum += v;
                    }
                    $ctrl.reference = '%';
                    $ctrl.valuesl1 = values;
                },600);
            }

            function drawNumericPie(){
                // get data layers
                let layers = 0;
                let ndata = $ctrl.data;
                if(!ndata.length){
                    console.error('Wrong pie data');
                    return;
                }
                let max = 0;
                let l1 = [];
                for(let i=0; i < ndata.length; i++){
                    max += ndata[i].value;
                    l1[i] = ndata[i].value;
                    if(ndata[i].default) $ctrl.currentValue = i;
                }
                $ctrl.l1 = l1;
                drawNumericChart();
                showPie();
            }
            function drawPercentagePie(){
                // get data layers
                let layers = 0;
                let ndata = $ctrl.data;
                if(!ndata.length){
                    console.error('Wrong pie data');
                    return;
                }
                let max = 0;
                let l1 = [];
                for(let i=0; i < ndata.length; i++){
                    max += ndata[i].value;
                    l1[i] = ndata[i].value;
                    if(ndata[i].default) $ctrl.currentValue = i;
                }
                $ctrl.l1 = l1;
                drawPercentageChart();
                showPie();
            }


            $ctrl.$onInit = function() {

                $ctrl.pieReady = false;
                $ctrl.currentValue = 0;

                switch($ctrl.type){
                    case '%':
                        drawPercentagePie();
                        break;
                    default:
                        drawNumericPie();
                        break;
                }

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
