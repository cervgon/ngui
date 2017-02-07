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
    template: `
        <div class="list-item" style="background-color: red;">
            <span style="float: right; color: white;" ng-click="$ctrl.onToggle()">X</span>
            <ng-transclude ></ng-transclude>
            <hr />
        </div>
    `,
    transclude : true,
    controller: function() {
        var $ctrl = this;

        $ctrl.onToggle = function() {
            console.log("toggle");
        }
    }
});

main.component('listItemFold', {
    template: `
        <div class="list-item-fold" style="background-color: blue;">
            <ng-transclude></ng-transclude>
        </div>
    `,
    transclude : true,
    controller: function() {
        var $ctrl = this;
    }
});

export default main.component('listItemExpand', {
    bindings: {
        nguiExpanded: '='
    },
    template: `
        <div class="list-item-expand" ng-if="$ctrl.nguiExpanded !== undefined" style="background-color: green;">
            <ng-transclude></ng-transclude>
        </div>
    `,
    transclude : true,
    controller: function() {
        var $ctrl = this;

        $ctrl.onToggle = function() {
            console.log("toggle expand");

        }
    }
});
