import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.bgloaded', [])
    .component('bgloaded', {
        template: `
        <div class="main" style="{{$ctrl.prebgcss}}; background-size: cover;">
            <div ng-show="$ctrl.showBG" ng-class="{'fadeIn':$ctrl.fadeInBG}" style="background-image: url({{$ctrl.bgurl}})">
                <ng-transclude></ng-transclude>
            </div>
        </div>
        `,
        transclude: true,
        bindings: {
            nguiOptions: '<'
        },
        controller: function($scope) {
            "ngInject";
            var $ctrl = this;
            function updateOptions(options) {
                if (!options)
                    return;
                $ctrl.bgurl = options.bgurl || false;
                $ctrl.prebgcss = options.prebgcss || false;
                $ctrl.showBG = false;
                $ctrl.fadeInBG = false;

                var image = new Image();
                var prev = new Date().valueOf();
                image.onload = function () {
                    // the image must have been cached by the browser, so it should load quickly
                    var now = new Date().valueOf();
                    var compare = now - prev;
                    $scope.$apply(function(){
                        if(compare >= 400){
                            $ctrl.fadeInBG = true;
                        }
                        $ctrl.showBG = true;
                    });
                };
                image.src = $ctrl.bgurl;
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
