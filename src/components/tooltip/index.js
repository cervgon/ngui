import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('tooltip', {
    template: Template,
    bindings: {
        nguiMessage: '@'
    },
    controller: function() {
        var $ctrl = this;

        $ctrl.$onInit = function (){
            
        }
    }
});
