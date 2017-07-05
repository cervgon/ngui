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
                $ctrl.data = options.data || [{'radius':50}];
                $ctrl.colors = options.colors || ['#8ed6c3','#9ecef2','#9ea8f2','#ba9ef2','#ed8ed9'];
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.$onInit = function() {

                var values = [];

                var pi = Math.PI;
                var pieces = $ctrl.data.length;
                var piece = Math.trunc(360/pieces);

                var radius = 80;
                var max = 0;
                for (var i = 0; i < pieces; i++) {
                    max += $ctrl.data[i];
                }
                var per = Math.trunc(2*radius*pi*10)/10;
                var h = 160;
                for (var i=0; i < pieces; i++){
                    h -= piece;
                    var color = 'hsl('+h+',100%,72%)';
                    values.unshift({'color':color,'dasharray':[0,per],'angle':0});
                }

                $ctrl.values = values;

                $timeout(function(){
                    var acum = 0;
                    for (var i = pieces - 1; i >= 0; i--){
                        var v = $ctrl.data[i];
                        var currentValue = Math.trunc(((v)/max)*per*10)/10;
                        values[i].dasharray[0] = currentValue;
                        values[i].angle = 360*acum/max;
                        acum += v;
                    }
                    $ctrl.values = values;
                },400);

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
