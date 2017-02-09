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
        <div class="list-item">
            <span ng-click="$ctrl.onToggle()" class="toggle"ng-class="{'open':$ctrl.expanded}"></span>
            <span ng-click="$ctrl.onDelete()" class="delete"></span>
            <ng-transclude></ng-transclude>
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
        <div class="list-item-fold">
            <ng-transclude></ng-transclude>
            <br>
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
        <div class="list-item-expand" ng-if="$ctrl.parentCtrl.expanded == true">
            <ng-transclude></ng-transclude>
            <br>
        </div>
    `,
    transclude : true,
    controller: function() {
        var $ctrl = this;
    }
});

export default "fix later"; // TODO: Fix later
