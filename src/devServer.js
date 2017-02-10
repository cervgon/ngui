import angular from 'angular';
import main from './main';
import {loader, dropdown} from "./components";

import Template from './devServer.html';

const App = angular.module('app', ["ngui"]);

App.component('app', {
    template: Template,
    controller: function($interval) {
        var $ctrl = this;
        console.log("App controller");
        $ctrl.parseDate = function(d) {
            var str = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
            return str;
        }

        $ctrl.quantity = 0;

        $interval(function() {
            $ctrl.quantity += 10;
        }, 300);

        $ctrl.loading = 'loading..';
        $ctrl.names = ["John", "Doe", "Foo", "Bar"];

        for (var i = 0; i < 200; i++) {
            $ctrl.names.push("A"+i);
        }

        $ctrl.ondelete = function() {
            console.log("bla");
        }

        $ctrl.someDate = new Date();

        $ctrl.users = [
            {
                name: "John",
                last: "Doe",
                dob: new Date(),
                arrested: false
            }, {
                name: "Carlitos",
                last: "Carlos",
                dob: new Date(),
                arrested: false
            }, {
                name: "Bad",
                last: "Guy",
                dob: new Date(),
                arrested: true
            }, {
                name: "El",
                last: "Pity",
                dob: new Date(),
                arrested: false
            }
        ];
    }
});
