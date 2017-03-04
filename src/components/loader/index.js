import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

main.service('nguiLoader', function($rootScope, $timeout) {
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
});

export default main.component('loader', {
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
});
