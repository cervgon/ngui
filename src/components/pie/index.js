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

            function updateOptions(options) {
                if (!options)
                    return;
                $ctrl.data = options.data.values || [];
                $ctrl.type = options.data.type || '#';
                $ctrl.labels = options.data.labels || null;
                $ctrl.defaultValue = options.data.default || '';
                $ctrl.colors = options.colors || ['#8ed6c3','#9ecef2','#9ea8f2','#ba9ef2','#ed8ed9'];
                $ctrl.totalTime = options.time || 2;
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            function draw(){
                let values = [];
                let pi = Math.PI;
                let pieces = $ctrl.l1.length;
                $ctrl.time1 = $ctrl.totalTime/pieces;
                let radius = 90;
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
                    $ctrl.total = acum;
                    $ctrl.valuesl1 = values;
                },600);
            }

            function drawNumericPie(){
                //console.log('numeric');
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
                    max += ndata[i];
                    l1[i] = ndata[i];
                }
                $ctrl.l1 = l1;
                draw();
            }
            function drawPercentagePie(){
                console.log('percentage');
                // get data layers
                let layers = 0;
                let ndata = $ctrl.data;
                if(!ndata.length){
                    console.error('Wrong pie data');
                    return;
                }
                for(let i=0; i < ndata.length; i++){

                }
            }


            $ctrl.$onInit = function() {

                $ctrl.currentValue =  $ctrl.defaultValue;

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
