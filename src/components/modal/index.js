import angular from 'angular';
import Template from './template.html';
import cssCoreButton from '../../css/core_button.css';
import cssButton from '../../css/button.element.css';
import Styles from './styles.css';

export default angular
    .module('ngui.modal', [])
    .service('nguiModal', function($rootScope, $timeout) {
        "ngInject";
        this.alert = function(data) {
            $timeout(function() {
                $rootScope.$broadcast('nguiModal', {
                    message: data.message,
                    yesButton: data.yesButton || "Ok",
                    yesClass: data.yesClass || "btnLight",
                    yesCallback: data.yesCallback,
                    align: data.align,
                    blackBg: data.blackBg,
                });
            });
        };

        this.success = function(data) {
            $timeout(function() {
                $rootScope.$broadcast('nguiModal', {
                    message: data.message,
                    yesButton: data.yesButton || "Ok",
                    yesClass: data.yesClass || "btnGreenLight",
                    yesCallback: data.yesCallback,
                    align: data.align,
                    blackBg: data.blackBg,
                });
            });
        };

        this.error = function(data) {
            $timeout(function() {
                $rootScope.$broadcast('nguiModal', {
                    message: data.message,
                    yesButton: data.yesButton || "Ok",
                    yesClass: data.yesClass || "btnRedLight",
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
                    yesClass: data.yesClass || "btnGreenLight",
                    yesCallback: data.yesCallback,
                    noButton: data.noButton || "No",
                    noClass: data.noClass || "btnLight",
                    noCallback: data.noCallback,
                    align: data.align,
                    options: true,
                    blackBg: data.blackBg,
                });
            });
        };

        this.danger = function(data) {
            $timeout(function() {
                $rootScope.$broadcast('nguiModal', {
                    message: data.message,
                    yesButton: data.yesButton || "Yes",
                    yesClass: data.yesClass || "btnRedLight",
                    yesCallback: data.yesCallback,
                    noButton: data.noButton || "No",
                    noClass: data.noClass || "btnLight",
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
                    yesClass: data.yesClass || "btnLight",
                    yesCallback: data.yesCallback,
                    noButton: data.noButton || "No",
                    noClass: data.noClass || "btnLight",
                    noCallback: data.noCallback,
                    align: data.align,
                    options: data.options,
                    customHtml: data.customHtml,
                    blackBg: data.blackBg,
                    modalData: data.modalData
                });
            });
        };
    })
    .component('modal', {
        template: Template,
        controller: function($scope, $rootScope, $timeout, $element, $compile) {
            "ngInject";
            var $ctrl = this;
            $ctrl.show = false;
            $ctrl.message = "";
            $ctrl.align = "right";
            $ctrl.yesButton = "Yes";
            $ctrl.yesClass = "btnLight";
            $ctrl.yesCallback = function() {};
            $ctrl.noButton = "No";
            $ctrl.noClass = "btnLight";
            $ctrl.noCallback = function() {};
            $ctrl.options = false;
            $ctrl.customHtml = "";

            $scope.$modalData = {};

            $ctrl.onYes = function() {
                //console.log("[MODAL] $modalData:", $scope.$modalData);
                $ctrl.show = false;
                if ($ctrl.yesCallback)
                    $ctrl.yesCallback($scope.$modalData);
            }

            $ctrl.onNo = function() {
                //console.log("[MODAL] $modalData:", $scope.$modalData);
                $ctrl.show = false;
                if ($ctrl.noCallback)
                    $ctrl.noCallback($scope.$modalData);
            }

            $scope.$on('nguiModal', function(event, data) {
                $timeout(function() {
                    //console.log("[MODAL] nguiModal event", data);
                    $rootScope.$broadcast('nguiLoader', {show: false}); // If there is an open preloader, remove it.
                    $ctrl.show = true;
                    $ctrl.message = data.message || "";
                    $ctrl.yesButton = data.yesButton || "Yes";
                    $ctrl.yesCallback = data.yesCallback || null;
                    $ctrl.yesClass = data.yesClass || "btnLight";
                    $ctrl.noButton = data.noButton || "No";
                    $ctrl.noClass = data.noClass || "btnLight";
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
    })
    .name
