import main from '../../main.js';
// import Template from './template.html';
// import Styles from './styles.css';

main.component('list', {
    template: `
        <div class="list">
            <ng-transclude></ng-transclude>
        </div>
    `,
    transclude : true,
    controller: function() {
        var $ctrl = this;
    }
});

main.component('listItem', {
    bindings: {
        nguiOndelete: '&'
    },
    require: {
        parentCtrl: '^list'
    },
    template: `
        <div class="list-item" style="background-color: red;">
            <span style="float: right; color: white; cursor: pointer;" ng-click="$ctrl.onToggle()">O</span>
            <span style="float: right; color: white; cursor: pointer;" ng-click="$ctrl.onDelete()">X</span>

            <ng-transclude></ng-transclude>
            <hr />
        </div>
    `,
    transclude : true,
    controller: function() {
        var $ctrl = this;

        $ctrl.expanded = false;

        $ctrl.onToggle = function() {
            $ctrl.expanded = !$ctrl.expanded;
        }

        $ctrl.onDelete = function() {
            $ctrl.expanded = false;
            console.log("now delete");
            $ctrl.nguiOndelete();
        }
    }
});

main.component('listItemFold', {
    template: `
        <div class="list-item-fold" style="background-color: blue;">
            <ng-transclude></ng-transclude>
        </div>
    `,
    require: {
        parentCtrl: '^listItem'
    },
    transclude : true,
    controller: function() {
        var $ctrl = this;
    }
});

main.component('listItemExpand', {
    require: {
        parentCtrl: '^listItem'
    },
    template: `
        <div class="list-item-expand" ng-if="$ctrl.parentCtrl.expanded == true" style="background-color: green;">
            <ng-transclude></ng-transclude>
        </div>
    `,
    transclude : true,
    controller: function() {
        var $ctrl = this;
    }
});

export default "fix later"; // TODO: Fix later
