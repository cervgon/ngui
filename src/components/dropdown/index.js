import main from '../../main.js';
import Template from './template.html';
import NGUI from '../../ngui.css';
import Style from './style.css';

export default main.component('dropdown', {
    template: Template,
    bindings: {
        nguiOptions: '=',
        nguiPlaceholder: '@',
        nguiBordered: '@'
    },
    controller: function() {
        var $ctrl = this;
        $ctrl.toggle = function(){
            $ctrl.opened = !$ctrl.opened;
        }
        $ctrl.changeOption = function(option){
            $ctrl.selectedOption = option;
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
