import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('dropdown', {
    template: Template,
    bindings: {
        nguiOptions: '=',
        nguiPlaceholder: '@',
        nguiBordered: '@'
    },
    controller: function() {
        var $ctrl = this;
        $ctrl.onFocus = function() {
            $ctrl.opened = true;
        }
        $ctrl.onBlur = function() {
            $ctrl.opened = false;
        }
        $ctrl.changeOption = function(option){
            $ctrl.selectedOption = option;
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
