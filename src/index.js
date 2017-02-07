import angular from 'angular';
import App from './app';

import { loader, dropdown, progbar } from "./components";

App.component('app', {
    templateUrl: 'src/home.html',
    controller: function() {
        var $ctrl = this;
        //console.log("App controller");

        $ctrl.loading = 'loading..';
        $ctrl.names = ["John", "Doe", "Foo", "Bar", "Bar1", "Bar2", "Bar3", "Bar4", "Bar5", "Bar6", "Bar7", "Bar8", "Bar9", "Bar10", "Bar11", "Bar12", "Bar13", "Bar14", "Bar15", "Bar16", "Bar17"];
    }
});
