import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.masonry', [])
    .component('masonry', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function($timeout,$window) {
            "ngInject";
            var $ctrl = this;
            function updateOptions(options) {
                if (!options)
                    return;
                $ctrl.bricks = options.bricks || '';

                $timeout(function(){
                    function masorny(innerWidth){
                        // Masorny Elements
                        var masornyElements = angular.element(document.querySelectorAll('.masonry .inner > div'));

                        var lastHeights = [];
                        var targetLoc = 0;

                        // build
                        var columns = 1;
                        if(innerWidth > 768){
                            columns=2;
                            if(innerWidth > 1024){columns=3}
                            if(innerWidth > 1280){columns=4}
                            if(innerWidth > 1500){columns=5}
                            for(var i=0; i<columns; i++){lastHeights[i] = 0;}
                            var percWidth = Math.round(10000 / columns)/100;
                            for(var i=0; i<masornyElements.length;i++){
                                masornyElements[i].style.width = percWidth + "%";
                            }
                        } else {
                            // not masorny
                            for(var i=0; i<masornyElements.length;i++){
                                masornyElements[i].style.width = 'auto';
                            }
                        }

                        // Draw
                        for(var i = 0; i < masornyElements.length; i++){
                            var iTop = lastHeights[targetLoc];
                            var iLeft = targetLoc * masornyElements[i].clientWidth;
                            masornyElements[i].style.top = iTop+'px';
                            masornyElements[i].style.left = iLeft+'px';

                            // current height
                            var iHeight = masornyElements[i].clientHeight;
                            // set new lastHeight
                            lastHeights[targetLoc] += iHeight;

                            // check targetLoc
                            var compHeight = 5000000;
                            for (var j = lastHeights.length - 1; j >= 0; j--)
                            {
                                if(lastHeights[j] <= compHeight){
                                    compHeight = lastHeights[j];
                                    targetLoc = j;
                                }
                            }
                        }
                        var masornyMaxHeight = lastHeights.reduce(function(a, b) {
                            return Math.max(a, b);
                        });
                        angular.element(document.querySelector('.masonry'))[0].style.minHeight = 'calc('+ masornyMaxHeight + 'px + 5em)';
                    }
                    masorny($window.innerWidth);
                    angular.element($window).bind('resize', function(){
                        masorny($window.innerWidth);
                    });
                },200);
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.$onInit = function() {
                if (!this.nguiOptions)
                    this.nguiOptions = {};
                //updateOptions(this.nguiOptions);
            }
        }
    })
    .filter('unsafe', function($sce) { return $sce.trustAsHtml })
    .name
