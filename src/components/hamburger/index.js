import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

export default angular
    .module('ngui.hamburger', [])
    .component('hamburger', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function() {
            "ngInject";
            var $ctrl = this;
            $ctrl.toggle = function() {
                $ctrl.nguiModel = !$ctrl.nguiModel;
            }
        }
    })
    .name
