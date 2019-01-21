import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

export default angular
    .module('ngui.masonry', [])
    .component('masonry', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        transclude: true,
        controller: function($timeout,$window,$element) {
            "ngInject";
            var $ctrl = this;

            var lastInnerWidth = -1;

            function updateOptions(options) {
                if (options){
                    $ctrl.bricks = options.bricks || '';
                    $ctrl.alignment = options.alignment || '';
                    $ctrl.colWidth = options.width || 0;
                }

                var masonryDiv;
                var innerWidth = 0;

                $timeout(function(){

                    //console.log($element);

                    masonryDiv = $element[0].children[0];

                    if(!$ctrl.alignment && $ctrl.colWidth > 0){
                        masonryDiv.children[0].style.margin = 0;
                    }

                    function masonry(){

                        if($ctrl.colWidth > 0){
                            var counter = 1;
                            innerWidth = 0;
                            while($ctrl.colWidth * counter < masonryDiv.clientWidth){
                                innerWidth += $ctrl.colWidth;
                                counter++;
                            }
                        } else{
                            innerWidth = masonryDiv.children[0].clientWidth;
                        }

                        if(innerWidth != lastInnerWidth){
                            lastInnerWidth = innerWidth;
                        } else{
                            return;
                        }

                        // masonry Elements
                        var masonryElements = masonryDiv.children[0].children;
                        var masonryElementsTransclude = masonryDiv.children[0].lastElementChild.children;

                        if(!masonryElements && !masonryElementsTransclude) return;

                        var lastHeights = [];
                        var targetLoc = 0;

                        // build
                        var columns = 1;
                        var items = 0;

                        var space = 0;
                        if($ctrl.colWidth > 0){
                            masonryDiv.children[0].style.maxWidth = innerWidth + 'px';
                            space = $ctrl.colWidth;
                            var fractionColumn = innerWidth / space;
                            columns = Math.floor(fractionColumn);
                        } else {
                            var fractionColumn = innerWidth / 280;
                            columns = Math.floor(fractionColumn);
                            space = innerWidth/columns;
                        }
                        if(columns < 1) columns = 1;

                        if(columns > 1){
                            for(var i=0; i < columns; i++){lastHeights[i] = 0;}
                            for(var i=0; i < masonryElements.length; i++){
                                if(masonryElements[i].localName != 'ng-transclude'){
                                    masonryElements[i].style.width = space + 'px';
                                    masonryElements[i].style.position = 'absolute';
                                    items++;
                                }
                            }
                            for(var i=0; i< masonryElementsTransclude.length;i++){
                                masonryElementsTransclude[i].style.width = space + 'px';
                                masonryElementsTransclude[i].style.position = 'absolute';
                                items++;
                            }
                            if($ctrl.alignment == 'center'){
                                if(items < columns){
                                    masonryDiv.children[0].style.maxWidth = space * items + 'px';
                                }
                            }

                            // Draw
                            for(var i = 0; i < masonryElements.length; i++){
                                var iTop = lastHeights[targetLoc];
                                var iLeft = targetLoc * masonryElements[i].clientWidth;
                                masonryElements[i].style.top = iTop+'px';
                                masonryElements[i].style.left = iLeft+'px';

                                // current height
                                var iHeight = masonryElements[i].clientHeight;
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

                            // Draw transclude
                            for(var i = 0; i < masonryElementsTransclude.length; i++){
                                var iTop = lastHeights[targetLoc];
                                var iLeft = targetLoc * masonryElementsTransclude[i].clientWidth;
                                masonryElementsTransclude[i].style.top = iTop+'px';
                                masonryElementsTransclude[i].style.left = iLeft+'px';

                                // current height
                                var iHeight = masonryElementsTransclude[i].clientHeight;
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
                            var masonryMaxHeight = lastHeights.reduce(function(a,b) {
                                return Math.max(a,b);
                            });
                            masonryDiv.children[0].style.minHeight = 'calc('+ masonryMaxHeight + 'px + 1em)';

                        } else {
                            // not masonry
                            for(var i=0; i<masonryElements.length; i++){
                                masonryElements[i].style.width = 'auto';
                                masonryElements[i].style.position = 'static';
                            }
                            for(var i=0; i<masonryElementsTransclude.length; i++){
                                masonryElementsTransclude[i].style.width = 'auto';
                                masonryElementsTransclude[i].style.position = 'static';
                            }
                            masonryDiv.style.minHeight = 'auto';
                        }
                    }

                    masonry();
                    angular.element($window).bind('resize', function(){
                        masonry();
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
    .filter('trusted', function($sce){
        return function(html){
            return $sce.trustAsHtml(html);
        };
    })
    .name;