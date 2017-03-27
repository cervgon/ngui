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
                align: data.align,
                blackBg: data.blackBg,
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
                options: true,
                blackBg: data.blackBg,
            });
        });
    };

    this.custom = function(data) {
        $timeout(function() {
            $rootScope.$broadcast('nguiModal', {
                message: data.message,
                yesButton: data.yesButton || "Yes",
                noButton: data.noButton || "No",
                yesCallback: data.yesCallback,
                noCallback: data.noCallback,
                align: data.align,
                options: data.options,
                customHtml: data.customHtml,
                blackBg: data.blackBg,
                modalData: data.modalData
            });
        });
    };
});

export default main.component('modal', {
    template: Template,
    controller: function($scope, $rootScope, $timeout, $element, $compile) {
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
        $ctrl.customHtml = "";

        $scope.$modalData = {};

        $ctrl.onYes = function() {
            console.log("[MODAL] $modalData:", $scope.$modalData);
            $ctrl.show = false;
            if ($ctrl.yesCallback)
                $ctrl.yesCallback($scope.$modalData);
        }

        $ctrl.onNo = function() {
            console.log("[MODAL] $modalData:", $scope.$modalData);
            $ctrl.show = false;
            if ($ctrl.noCallback)
                $ctrl.noCallback($scope.$modalData);
        }

        $scope.$on('nguiModal', function(event, data) {
            $timeout(function() {
                console.log("[MODAL] nguiModal event", data);
                $rootScope.$broadcast('nguiLoader', {show: false}); // If there is an open preloader, remove it.
                $ctrl.show = true;
                $ctrl.message = data.message || "";
                $ctrl.yesButton = data.yesButton || "Yes";
                $ctrl.noButton = data.noButton || "No";
                $ctrl.yesCallback = data.yesCallback || null;
                $ctrl.noCallback = data.noCallback || null;
                $ctrl.options = data.options || false;
                $ctrl.align = data.align || "right";
                $ctrl.blackBg = data.blackBg || false;
                
                $scope.$modalData = data.modalData || {};
                if(data.customHtml) {
                    $timeout(function(){
                        $ctrl.customHtml = $compile(data.customHtml)($scope);
                        $element.find("custom-modal-html").replaceWith($ctrl.customHtml);
                    });
                } else {
                    $ctrl.customHtml = "";
                }
            });
        });
    }
});
