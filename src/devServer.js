import angular from 'angular';
import main from './main';
import { loader, dropdown } from "./components";

import Template from './devServer.html';

const App = angular.module('app', ["ngui"]);

App.component('app', {
    template: Template,
    controller: function($interval) {
        var $ctrl = this;
        console.log("App controller");
        $ctrl.quantity = 0;

        $interval(function () {
            $ctrl.quantity += 10;
        }, 300);

        $ctrl.loading = 'loading..';
        $ctrl.names = ["John", "Doe", "Foo", "Bar"];
    }
});
