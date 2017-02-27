import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('dropdown', {
    template: Template,
    bindings: {
        nguiOptions: '=',
        nguiPlaceholder: '@',
        nguiBordered: '@',
        disabled: '@'
    },
    controller: function($timeout) {
        "ngInject";
        var $ctrl = this;
        $ctrl.onFocus = function() {
            if($ctrl.disabled)
                return;
            $ctrl.opened = true;
        }
        $ctrl.onBlur = function() {
            $timeout(function(){
                $ctrl.opened = false;
            },200);
        }
        $ctrl.changeOption = function(option){
            $ctrl.selectedOption = option;
            console.log($ctrl.selectedOption);
            $ctrl.opened = false;
        }
        $ctrl.$onInit = function (){
            $ctrl.opened = false;
            $ctrl.selectedOption = $ctrl.nguiPlaceholder;
            if($ctrl.nguiBordered !== undefined){
                $ctrl.bordered = true;
            }
        }
    }
});
