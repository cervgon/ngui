import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.progbar', [])
    .component('progbar', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function() {
            "ngInject";
            var $ctrl = this;

            function updateOptions(options) {
                if (!options)
                    return;
                //console.log("[PROGBAR] updateOptions", options, $ctrl);
                $ctrl.color = options.color || 'gray';
                $ctrl.label = options.label || false;
                switch ($ctrl.color) {
                    case 'red':
                        $ctrl.colorClass = 'redProgress';
                        break;
                    case 'salmon':
                        $ctrl.colorClass = 'salmonProgress';
                        break;
                    case 'orange':
                        $ctrl.colorClass = 'orangeProgress';
                        break;
                    case 'amber':
                        $ctrl.colorClass = 'amberProgress';
                        break;
                    case 'yellow':
                        $ctrl.colorClass = 'yellowProgress';
                        break;
                    case 'lemon':
                        $ctrl.colorClass = 'lemonProgress';
                        break;
                    case 'green':
                        $ctrl.colorClass = 'greenProgress';
                        break;
                    case 'emerald':
                        $ctrl.colorClass = 'emeraldProgress';
                        break;
                    case 'blue':
                        $ctrl.colorClass = 'blueProgress';
                        break;
                    case 'lavender':
                        $ctrl.colorClass = 'lavenderProgress';
                        break;
                    case 'violet':
                        $ctrl.colorClass = 'violetProgress';
                        break;
                    case 'pink':
                        $ctrl.colorClass = 'pinkProgress';
                        break;
                    case 'black':
                        $ctrl.colorClass = 'blackProgress';
                        break;
                    case 'gray':
                        $ctrl.colorClass = 'grayProgress';
                        break;
                    default:
                        $ctrl.colorClass = '';
                }
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.$onInit = function() {
                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
