import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('tooltip', {
    template: Template,
    bindings: {
        nguiOptions: '<'
    },
    controller: function($element, $timeout) {
        "ngInject";
        var $ctrl = this;

        function updateOptions(options) {
            if (!options)
                return;
            console.log("[TOOLTIP] updateOptions", options, $ctrl);

            $ctrl.message = options.message || "";
            $ctrl.position = options.position || 'top';
            $ctrl.timeout = options.timeout || 0;
            $ctrl.show = options.show || true;
        }

        $ctrl.$onChanges = function(changes) {
            updateOptions(changes.nguiOptions.currentValue);
        }

        $ctrl.$onInit = function() {
            if (!this.nguiOptions)
                this.nguiOptions = {};
            updateOptions(this.nguiOptions);

            if ($ctrl.timeout > 0) {
                $timeout(function() {
                    $ctrl.show = false;
                }, $ctrl.timeout * 1000);
            }
        }

        return;

        $ctrl.$onInit = function() {

            var timeFadeOut = 4000;
            if ($ctrl.nguiTimeout != undefined) {
                if ($ctrl.nguiTimeout < 1) {
                    $ctrl.nguiTimeout = 1
                }
                timeFadeOut = $ctrl.nguiTimeout * 1000;
            }
            var timeRemove = timeFadeOut + 1000;

            $timeout(function() {
                $ctrl.positionClass += ' fadeOut';
                $ctrl.positionClass += $ctrl.fadeOutClass;
            }, timeFadeOut)
            $timeout(function() {
                $ctrl.showTooltip = false;
            }, timeRemove)

            $element.ready(function() {

                var el = $element[0];
                var prevSib = el.previousElementSibling;
                var prevSibW = prevSib.offsetWidth;
                var prevSibH = prevSib.offsetHeight;
                var rect = el.getBoundingClientRect();
                var tooltipW = el.children[0].offsetWidth;
                var tooltipH = el.children[0].offsetHeight;
                var bodyH = document.body.offsetHeight;

                function show() {
                    $ctrl.visibility = 'visible';
                }

                function setLeft() {
                    $ctrl.positionClass = 'left';
                    $ctrl.top = (prevSibH - tooltipH) / 2 + 'px';
                    $ctrl.right = prevSibW + 8 + 'px';
                    $ctrl.bottom = 'auto';
                    $ctrl.left = 'auto';
                    $ctrl.fadeOutClass = 'Left';
                    show();
                }

                function setRight() {
                    $ctrl.positionClass = 'right';
                    $ctrl.top = (prevSibH - tooltipH) / 2 + 'px';
                    $ctrl.right = 'auto';
                    $ctrl.bottom = 'auto;'
                    $ctrl.left = '8px';
                    $ctrl.fadeOutClass = 'Right';
                    show();
                }

                function setBottom() {
                    $ctrl.positionClass = 'bottom';
                    $ctrl.top = prevSibH + 6 + 'px';
                    $ctrl.right = 'auto';
                    $ctrl.bottom = 'auto';
                    $ctrl.left = '-' + (prevSibW / 2) - tooltipW / 2 - 1 + 'px';
                    $ctrl.fadeOutClass = 'Bottom';
                    show();
                }

                function setTop() {
                    $ctrl.positionClass = 'top';
                    $ctrl.top = -6 - tooltipH + 'px';
                    $ctrl.right = 'auto';
                    $ctrl.bottom = 'auto';
                    $ctrl.left = '-' + (prevSibW / 2) - tooltipW / 2 - 1 + 'px';
                    $ctrl.fadeOutClass = 'Top';
                    show();
                }

                switch ($ctrl.nguiPosition) {
                    case 'left':
                        if (rect.left - prevSibW - tooltipW < 0) {
                            // Doesn't fit on the left
                            setRight();
                        } else {
                            // Fits on the left
                            setLeft();
                        }
                        break;
                    case 'right':
                        if (window.innerWidth - rect.right - tooltipW < 0) {
                            // Doesn't fit on the right
                            setBottom();
                        } else {
                            // Fits on the right
                            setRight();
                        }
                        break;
                    case 'bottom':
                        if (bodyH - el.offsetTop - tooltipH < 0) {
                            // Doesn't fit on the bottom
                            setTop();
                        } else {
                            // Fits on the bottom
                            setBottom();
                        }
                        break;
                    case 'top':
                    default:
                        if (rect.top - prevSibH - tooltipH < 0) {
                            // Doesn't fit on the top
                            setBottom();
                        } else {
                            // Fits on the top
                            setTop();
                        }
                }
            });
            $ctrl.showTooltip = true;
        }
    }
});
