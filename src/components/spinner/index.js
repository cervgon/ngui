import App from '../../app.js';
import Template from './template.html';
import Styles from './style.css';

export default App.component('spinner', {
    template: Template,
    controller: function($timeout) {
        var $ctrl = this;
        $ctrl.show = true;
        $timeout(function () {
            $ctrl.show = false;
        }, 1000);
    }
});
