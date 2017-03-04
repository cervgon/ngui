import main from '../../main.js';
// import Template from './template.html';
import Styles from './styles.css';

main.component('list', {
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
});

main.component('listItem', {
    bindings: {
        nguiOndelete: '&?'
    },
    require: {
        parentCtrl: '^list'
    },
    template: `
        <div class="list-item" ng-class="{'open':$ctrl.expandedDiv}">
            <span ng-click="$ctrl.onToggle()" class="toggle"></span>
            <span ng-click="$ctrl.onDelete()" ng-if="$ctrl.nguiOndelete" class="delete"></span>
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
    }
});

main.component('listItemFold', {
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
});

main.component('listItemExpand', {
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
});

export default "fix later"; // TODO: Fix later
