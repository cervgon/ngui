import angular from 'angular';
import App from './app';

import { loader, dropdown } from "./components";

App.component('app', {
    templateUrl: 'src/home.html',
    controller: function() {
        var $ctrl = this;
        console.log("App controller");

        $ctrl.loading = 'loading..';
        $ctrl.names = ["John", "Doe", "Foo", "Bar"];
    }
});
