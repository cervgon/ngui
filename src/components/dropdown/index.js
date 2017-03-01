import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('dropdown', {
    template: Template,
    bindings: {
        nguiModel: '=',
        nguiOptions: '<',
        // nguiPlaceholder: '@',
        // nguiBordered: '@',
        // nguiDisabled: '@'
    },
    controller: function($timeout) {
        "ngInject";
        var $ctrl = this;

        $ctrl.onFocus = function() {
            if ($ctrl.disabled)
                return;
            $ctrl.opened = true;
        }

        $ctrl.onBlur = function() {
            $timeout(function() {
                $ctrl.opened = false;
            }, 200);
        }

        $ctrl.changeOption = function(option) {
            $ctrl.nguiModel = option;

            // $ctrl.selectedOption = option;
            // $ctrl.nguiModel = option;
            $ctrl.opened = false;
            console.log("Dropdown value changed to", $ctrl.nguiModel);
            document.activeElement.blur();
        }

        $ctrl.$onInit = function() {
            console.log("this.nguiOptions in $onInit", this.nguiOptions);
            var initialValue = this.nguiOptions;
            $ctrl.options = initialValue.options || [];
            $ctrl.opened = initialValue.opened || false;
            $ctrl.placeholder = initialValue.placeholder || "Select";
            $ctrl.bordered = initialValue.bordered || false;
            $ctrl.disabled = initialValue.disabled || false;
            // $ctrl.selectedOption = initialValue.placeholder || null;
            // $ctrl.options = JSON.parse($ctrl.nguiOptions);
            // $ctrl.opened = false;
            // $ctrl.selectedOption = $ctrl.nguiPlaceholder;
            // if($ctrl.nguiBordered !== undefined){
            //     $ctrl.bordered = true;
            // }
        }
    }
});
