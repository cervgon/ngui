import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

export default angular
    .module('ngui.loader', [])
    .service('nguiLoader', function($rootScope, $timeout) {
        "ngInject";
        this.show = function(msg) {
            $timeout(function() {
                $rootScope.$broadcast('nguiLoader', {
                    show: true,
                    label: msg
                });
            });
        };

        this.hide = function() {
            $timeout(function() {
                $rootScope.$broadcast('nguiLoader', {show: false});
            });
        };
    })
    .component('loader', {
        template: Template,
        controller: function($scope, $timeout) {
            "ngInject";
            var $ctrl = this;
            $ctrl.show = false;

            $scope.$on('nguiLoader', function(event, data) {
                $timeout(function() {
                    console.log("nguiLoader", data);
                    $ctrl.show = data.show || false;
                    $ctrl.nguiLabel = data.label || "";
                });
            });
        }
    })
    .name
