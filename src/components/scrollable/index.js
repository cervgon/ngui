import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

export default angular
    .module('ngui.scrollable', [])
    .component('scrollable', {
        template: Template,
        controller: function($window,$scope,$timeout) {
            "ngInject";
            var $ctrl = this;

            $ctrl.$onInit = function() {
                $ctrl.scrolled = false;
                angular.element($window).bind("scroll", function() {
                    if(this.pageYOffset > 300 && !$ctrl.scrolled){
                        $ctrl.scrolled = true;
                        $scope.$apply();
                        $timeout(function(){
                            $ctrl.hideIndicator = true;
                        },2000);
                    }
                });
                if ("ontouchstart" in document.documentElement) {
                    $ctrl.finger = true;
                }
            }
        }
    })
    .name
