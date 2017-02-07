import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('progbar', {
    template: Template,
    bindings: {
        nguiValue: '=',
        nguiColor: '@'
    },
    controller: function() {
        var $ctrl = this;
        $ctrl.$onInit = function (){
            $ctrl.nguiColorClass = '';
            if($ctrl.nguiColor !== undefined){
                switch($ctrl.nguiColor) {
                    case 'red':
                        $ctrl.nguiColorClass = 'redProgress';
                        break;
                    case 'salmon':
                        $ctrl.nguiColorClass = 'salmonProgress';
                        break;
                    case 'orange':
                        $ctrl.nguiColorClass = 'orangeProgress';
                        break;
                    case 'amber':
                        $ctrl.nguiColorClass = 'amberProgress';
                        break;
                    case 'yellow':
                        $ctrl.nguiColorClass = 'yellowProgress';
                        break;
                    case 'lemon':
                        $ctrl.nguiColorClass = 'lemonProgress';
                        break;
                    case 'green':
                        $ctrl.nguiColorClass = 'greenProgress';
                        break;
                    case 'emerald':
                        $ctrl.nguiColorClass = 'emeraldProgress';
                        break;
                    case 'blue':
                        $ctrl.nguiColorClass = 'blueProgress';
                        break;
                    case 'lavender':
                        $ctrl.nguiColorClass = 'lavenderProgress';
                        break;
                    case 'violet':
                        $ctrl.nguiColorClass = 'violetProgress';
                        break;
                    case 'pink':
                        $ctrl.nguiColorClass = 'pinkProgress';
                        break;
                    case 'black':
                        $ctrl.nguiColorClass = 'blackProgress';
                        break;
                    case 'gray':
                        $ctrl.nguiColorClass = 'grayProgress';
                        break;
                    default:
                    $ctrl.nguiColorClass = '';
                }
            }
        }
    }
});
