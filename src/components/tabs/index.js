import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

export default angular
    .module('ngui.tabs', [])
    .component('tabs', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function($timeout) {
            "ngInject";
            var $ctrl = this;

            $ctrl.changeOption = function(option) {
                $ctrl.nguiModel = option;
            }

            function updateOptions(options) {
                if (!options)
                    return;
                $ctrl.options = options.options || [];
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.$onInit = function() {
                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
