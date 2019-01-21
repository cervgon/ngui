import angular from 'angular';
import Styles from './styles.scss';

export default angular
    .module('ngui.list', [])
    .component('list', {
        template: `
            <div class="list">
                <ng-transclude></ng-transclude>
                <br>
            </div>
        `,
        transclude: true,
        controller: function() {
            "ngInject";
            var $ctrl = this;
        }
    })
    .component('listItem', {
        bindings: {
            nguiOndelete: '&?',
            nguiOptions: '<'
        },
        require: {
            parentCtrl: '^list'
        },
        template: `
            <div class="list-item" ng-class="{'open':$ctrl.expandedDiv}">
                <span ng-click="$ctrl.onToggle()" class="toggle"></span>
                <span ng-click="$ctrl.onDelete()" ng-if="$ctrl.nguiOndelete && !$ctrl.disabled" class="delete"></span>
                <ng-transclude></ng-transclude>
            </div>
        `,
        transclude: true,
        controller: function($timeout) {
            "ngInject";
            var $ctrl = this;

            $ctrl.expanded = false;
            $ctrl.expandedDiv = false;

            $ctrl.onToggle = function() {
                if ($ctrl.expanded) {
                    $ctrl.expandedDiv = !$ctrl.expandedDiv;
                    $timeout(function() {
                        $ctrl.expanded = !$ctrl.expanded;
                    }, 500);
                } else {
                    $ctrl.expanded = !$ctrl.expanded;
                    $timeout(function() {
                        $ctrl.expandedDiv = !$ctrl.expandedDiv;
                    }, 100);
                }
            }

            $ctrl.onDelete = function() {
                if ($ctrl.expanded) {
                    $ctrl.expandedDiv = false;
                    $timeout(function() {
                        $ctrl.expanded = false;
                        console.log("now delete");
                        $ctrl.nguiOndelete();
                    }, 500);
                } else {
                    console.log("now delete");
                    $ctrl.nguiOndelete();
                }
            }

            function updateOptions(options) {
                if (!options)
                    return;
                //console.log("[LIST] updateOptions", options, $ctrl);
                $ctrl.opened = options.opened || false;
                $ctrl.disabled = options.disabled || false;

                if($ctrl.opened != $ctrl.expanded){
                    $ctrl.onToggle()
                }
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
    .component('listItemFold', {
        template: `
            <div class="list-item-fold">
                <ng-transclude></ng-transclude>
                <br>
            </div>
        `,
        require: {
            parentCtrl: '^listItem'
        },
        transclude: true,
        controller: function() {
            "ngInject";
            var $ctrl = this;
        }
    })
    .component('listItemExpand', {
        require: {
            parentCtrl: '^listItem'
        },
        template: `
            <div class="list-item-expand" ng-if="$ctrl.parentCtrl.expanded == true">
                <ng-transclude></ng-transclude>
                <br>
            </div>
        `,
        transclude: true,
        controller: function() {
            "ngInject";
            var $ctrl = this;
        }
    })
    .name;
