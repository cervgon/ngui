import App from '../../app.js';
import Template from './template.html';
import NGUI from '../../ngui.css';
import Styles from './style.css';

export default App.component('loader', {
    template: Template,
    bindings: {
        pValue: '='
    },
    controller: function($timeout) {
        var $ctrl = this;
        $ctrl.show = true;
        $timeout(function () {
            $ctrl.show = false;
        }, 1000);
    }
});
