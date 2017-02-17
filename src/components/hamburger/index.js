import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('hamburger', {
    template: Template,
    bindings: {
        nguiOpen: '=',
    },
    controller: function() {
        "ngInject";
        var $ctrl = this;
        $ctrl.toggle = function() {
            $ctrl.nguiOpen = !$ctrl.nguiOpen;
        }
        $ctrl.$onInit = function (){
        }
    }
});
