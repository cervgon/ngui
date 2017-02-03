import App from '../../app.js';
import Template from './template.html';
import Styles from './style.css';

export default App.component('dropdown', {
    template: Template,
    bindings: {
        pOptions: '='
    },
    controller: function() {
        var $ctrl = this;
        console.log($ctrl);

        $ctrl.selectedOption = "";

        $ctrl.onChange = function() {
            console.log("Selected option:",$ctrl.selectedOption);
        }

    }
});
