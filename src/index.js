import angular from 'angular';
import App from './app';

import { spinner, dropdown } from "./components";

App.component('app', {
    template: `
        <div>
            <h1>App</h1>
            <spinner></spinner>
            <dropdown p-options="$ctrl.countries"></dropdown>
            <hr>
            <dropdown p-options="$ctrl.names"></dropdown>

        </div>
    `,
    controller: function() {
        var $ctrl = this;
        console.log("App controller");

        $ctrl.countries = ["Argentina", "United States"];
        $ctrl.names = ["John", "Doe", "Foo", "Bar"];
    }
});
