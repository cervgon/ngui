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
                $ctrl.frontValue = options.data.value || '';
                $ctrl.colors = options.colors || ['#8ed6c3','#9ecef2','#9ea8f2','#ba9ef2','#ed8ed9'];
                $ctrl.totalTime = options.time || 2;
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.$onInit = function() {

                var values = [];

                var pi = Math.PI;
                var pieces = $ctrl.data.length;

                $ctrl.time = $ctrl.totalTime/pieces;

                var piece = Math.trunc(360/pieces);

                var radius = 80;
                var max = 0;
                for (var i = 0; i < pieces; i++) {
                    let v = $ctrl.data[i];
                    max += v;
                }
                var per = Math.trunc(2*radius*pi*10)/10;
                var h = 160;
                for (var i=0; i < pieces; i++){
                    h -= piece;
                    var color = 'hsl('+h+',100%,62%)';
                    values.unshift({'color':color,'dasharray':[0,per],'angle':0});
                }

                $ctrl.values = values;

                $timeout(function(){
                    var acum = 0;
                    for (var i = 0; i < pieces; i++){
                        let v = $ctrl.data[i];
                        var currentValue = Math.trunc(((v)/max)*per*10)/10;
                        values[i].dasharray[0] = currentValue -1;
                        values[i].angle = 360*acum/max -90;
                        acum += v;
                    }
                    $ctrl.values = values;
                },600);

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
