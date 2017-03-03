import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('hamburger', {
    template: Template,
    bindings: {
        nguiModel: '=',
    },
    controller: function() {
        "ngInject";
        var $ctrl = this;
        $ctrl.toggle = function() {
            $ctrl.nguiModel = !$ctrl.nguiModel;
        }
    }
});
