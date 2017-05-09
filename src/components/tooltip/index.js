import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.tooltip', [])
    .component('tooltip', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function($element, $timeout) {
            "ngInject";
            var $ctrl = this;

            function updateOptions(options) {
                if (!options)
                    return;
                console.log("[TOOLTIP] updateOptions", options, $ctrl);

                $ctrl.message = options.message || "Your message goes here";
                $ctrl.position = options.position || 'top';
                $ctrl.timeout = options.timeout || 3;
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }
            function show() {
                $ctrl.visibility = 'visible';
            }

            function show() {
                $timeout(function(){
                    $ctrl.visibility = 'visible';
                },200)
            }

            $ctrl.timeoutThis = function(){
                $element.ready(function() {
                    var el = $element[0];
                    var prevSib = el.previousElementSibling;
                    var prevSibW = prevSib.offsetWidth;
                    var prevSibH = prevSib.offsetHeight;
                    var rect = el.getBoundingClientRect();
                    var tooltipW = el.children[0].offsetWidth;
                    var tooltipH = el.children[0].offsetHeight;
                    var bodyH = document.body.offsetHeight;


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
                    $timeout(function(){
                        switch ($ctrl.nguiOptions.position) {
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
                    },400)
                });

                $timeout(function(){
                    $ctrl.nguiModel = false;
                },$ctrl.timeout*1000);

            }

            $ctrl.$onInit = function() {

                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
