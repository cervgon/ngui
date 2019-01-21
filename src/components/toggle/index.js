import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';
import angularTouch from 'angular-touch';

export default angular
    .module('ngui.toggle', ['ngTouch'])
    .component('toggle', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function() {
            "ngInject";
            var $ctrl = this;

            function updateOptions(options) {
                if (!options)
                    return;
                $ctrl.oncolor = options.oncolor || '#4bd763';
                $ctrl.offcolor = options.offcolor || '#dddddd';
                $ctrl.circlecolor = options.circlecolor || '#ffffff';
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.toggle = function() {
                $ctrl.nguiModel = !$ctrl.nguiModel;
            }
            $ctrl.changeStatus = function (status){
                console.log('changeStatus is triggered');
                $ctrl.nguiModel = status;
            }

            $ctrl.$onInit = function() {

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
