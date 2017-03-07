import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

main.service('nguiModal', function($rootScope, $timeout) {
    "ngInject";
    this.alert = function(data) {
        $timeout(function() {
            $rootScope.$broadcast('nguiModal', {
                message: data.message,
                yesButton: data.yesButton || "Ok",
                yesCallback: data.yesCallback,
                align: data.align
            });
        });
    };

    this.prompt = function(data) {
        $timeout(function() {
            $rootScope.$broadcast('nguiModal', {
                message: data.message,
                yesButton: data.yesButton || "Yes",
                noButton: data.noButton || "No",
                yesCallback: data.yesCallback,
                noCallback: data.noCallback,
                align: data.align,
                options: true
            });
        });
    };
});

export default main.component('modal', {
    template: Template,
    controller: function($scope, $timeout) {
        "ngInject";
        var $ctrl = this;
        $ctrl.show = false;
        $ctrl.message = "";
        $ctrl.yesButton = "Yes";
        $ctrl.noButton = "No";
        $ctrl.align = "right";
        $ctrl.yesCallback = function() {};
        $ctrl.noCallback = function() {};
        $ctrl.options = false;

        $ctrl.onYes = function() {
            $ctrl.show = false;
            if ($ctrl.yesCallback)
                $ctrl.yesCallback();
            }

        $ctrl.onNo = function() {
            $ctrl.show = false;
            if ($ctrl.noCallback)
                $ctrl.noCallback();
            }

        $scope.$on('nguiModal', function(event, data) {
            $timeout(function() {
                console.log("nguiModal", data);
                $ctrl.show = true;
                $ctrl.message = data.message || "";
                $ctrl.yesButton = data.yesButton || "Yes";
                $ctrl.noButton = data.noButton || "No";
                $ctrl.yesCallback = data.yesCallback || null;
                $ctrl.noCallback = data.noCallback || null;
                $ctrl.options = data.options || false;
                $ctrl.align = data.align || "right";
            });
        });
    }
});
