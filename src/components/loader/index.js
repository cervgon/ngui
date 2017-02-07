import main from '../../main.js';
import Template from './template.html';
import NGUI from '../../ngui.css';
import Styles from './style.css';

export default main.component('loader', {
    template: Template,
    bindings: {
        nguiLabel: '='
    },
    controller: function($timeout) {
        var $ctrl = this;
        $ctrl.show = true;
        $timeout(function () {
            $ctrl.show = false;
        }, 1600);
    }
});
