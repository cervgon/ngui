import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

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
            var promise;

            $ctrl.start = function(){
                promise = $timeout(function(){
                        $ctrl.nguiModel = false;
                    },$ctrl.timeout*1000)
            }

            function updateOptions(options) {
                if (!options)
                    return;
                //console.log("[TOOLTIP] updateOptions", options, $ctrl);
                $ctrl.message = options.message || "Your message goes here";
                $ctrl.position = options.position || 'top';
                $ctrl.color = options.color || '#fff';
                $ctrl.bgcolor = options.bgcolor || '#005e9d';
                if(options.timeout > 0) {
                    $ctrl.timeout = options.timeout;
                }
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            function show() {
                $ctrl.visibility = 'visible';
            }
            $ctrl.clear = function (){
                $timeout.cancel(promise);
                $ctrl.nguiModel = false;
            }

            $ctrl.timeoutThis = function(){

                $ctrl.visibility = 'hidden';

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

                    function setLeftSL() {
                        $ctrl.positionClass = 'left';
                        $ctrl.top = -(tooltipH + prevSibH)/2 + 'px';
                        $ctrl.right = 'auto';
                        $ctrl.bottom = 'auto';
                        $ctrl.left = -tooltipW - 4 + 'px';
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

                    function setRightSL() {
                        $ctrl.positionClass = 'right';
                        $ctrl.top = -(tooltipH + prevSibH)/2 + 'px';
                        $ctrl.right = 'auto';
                        $ctrl.bottom = 'auto;'
                        $ctrl.left = prevSibW + 8 + 'px';
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

                    function setBottomSL(){
                        $ctrl.positionClass = 'bottom';
                        $ctrl.top = '6px';
                        $ctrl.right = 'auto';
                        $ctrl.bottom = 'auto';
                        $ctrl.left = (prevSibW / 2) - tooltipW / 2 - 1 + 'px';
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

                    function setTopSL() {
                        $ctrl.positionClass = 'top';
                        $ctrl.top = -6 - prevSibH - tooltipH + 'px';
                        $ctrl.right = 'auto';
                        $ctrl.bottom = 'auto';
                        $ctrl.left = (prevSibW / 2) - tooltipW / 2 - 1 + 'px';
                        $ctrl.fadeOutClass = 'Top';
                        show();
                    }

                    function fitLeft(){
                        if (rect.left - prevSibW - tooltipW < 0) {
                            return false;
                        }
                        return true;
                    }

                    function fitRight(){
                        if (window.innerWidth - rect.right - tooltipW < 0) {
                            return false;
                        }
                        return true;
                    }

                    function fitBottom(){
                        if (bodyH - el.offsetTop - tooltipH - prevSibH - 6 < 0) {
                            return false;
                        }
                        return true;
                    }

                    function fitBottomSL(){
                        if (bodyH - el.offsetTop - tooltipH < 0) {
                            return false;
                        }
                        return true;
                    }

                    function fitTop(){
                        if (rect.top - tooltipH -6 < 0) {
                            return false;
                        }
                        return true;
                    }

                    function fitLeftSL(){
                        if (rect.left - tooltipW < 0) {
                            return false;
                        }
                        return true;
                    }

                    function fitRightSL(){
                        if (rect.left - tooltipW < 0) {
                            return false;
                        }
                        return true;
                    }

                    function fitTopSL(){
                        if (rect.top - prevSibH - tooltipH - 6 < 0) {
                            return false;
                        }
                        return true;
                    }

                    $timeout(function(){
                        var pos = $ctrl.nguiOptions.position;
                        if(el.offsetTop - prevSib.offsetTop > 1){
                            // prev Sibling width = 100%
                            switch ($ctrl.nguiOptions.position) {
                                case 'left':
                                    pos = 'leftSL';
                                    break;
                                case 'right':
                                    pos = 'rightSL';
                                    break;
                                case 'bottom':
                                    pos = 'bottomSL';
                                    break;
                                case 'top':
                                default:
                                    pos = 'topSL';
                                    break;
                            }
                        }

                        switch (pos) {
                            case 'left':
                                if (fitLeft()) {
                                    setLeft();
                                } else {
                                    if (fitRight()) {
                                        setRight();
                                    } else {
                                        setTop();
                                    }
                                }
                                break;
                            case 'right':
                                if (fitRight()) {
                                    setRight();

                                } else {
                                    if (fitLeft()) {
                                        setLeft();
                                    }
                                    else {
                                        setTop();
                                    }
                                }
                                break;
                            case 'bottom':
                                if (fitBottom()) {
                                    setBottom();
                                } else {
                                    setTop();
                                }
                                break;
                            case 'leftSL':
                                if(fitLeftSL()){
                                    setLeftSL();
                                } else {
                                    if(fitRightSL()) {
                                        setRightSL();
                                    } else {
                                        if(fitTopSL()){
                                            setTopSL();
                                        } else {
                                            setBottomSL();
                                        }
                                    }
                                }
                                break;
                            case 'rightSL':
                                if(fitRightSL()) {
                                    setRightSL();
                                } else {
                                    if(fitLeftSL()) {
                                        setLeftSL();
                                    } else {
                                        if(fitTopSL()){
                                            setTopSL();
                                        } else {
                                            setBottomSL();
                                        }
                                    }
                                }
                                break;
                            case 'bottomSL':
                                if(fitBottomSL()){
                                    setBottomSL();
                                } else {
                                    setTopSL();
                                }
                                break;
                            case 'topSL':
                                if(fitTopSL()){
                                    setTopSL();
                                } else {
                                    setBottomSL();
                                }
                                break;
                            case 'top':
                            default:
                                if (fitTop()) {
                                    setTop();
                                } else {
                                    setBottom();
                                }
                                break;
                        }
                    },100)
                });
                if($ctrl.timeout > 0){
                    $timeout.cancel(promise);
                    $ctrl.start();
                }
            };

            $ctrl.$onInit = function() {
                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
