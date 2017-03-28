import angular from 'angular';
import main from './main';
import {
    loader,
    dropdown,
    hamburger,
    list,
    pagination,
    tooltip
} from "./components";

import Template from './devServer2.html';

const App = angular.module('app', ["ngui"]);

App.component('app', {
    template: Template,
    controller: function($scope, $rootScope, $interval, $timeout, nguiLoader, nguiModal) {
        var $ctrl = this;
        console.log("App controller");
        
        // Datepicker
        $ctrl.datepickerData = {
            model: ""
        }

        // Dropdown
        $ctrl.dropdownData = {
            model: "",
            items: []
        }
        for (var i = 0; i < 50; i++) {
            $ctrl.dropdownData.items.push("Option " + i);
        }

        // Hamburger
        $ctrl.hamburgerData = false;

        // List
        $ctrl.listData = {
            items: [
                {
                    name: "John",
                    last: "Doe",
                    sex: "Male",
                    race: "White"
                }, {
                    name: "Foo",
                    last: "Bar",
                    sex: "Male",
                    race: "Black"
                }, {
                    name: "Jim",
                    last: "Carrey",
                    sex: "Male",
                    race: "White"
                }, {
                    name: "Oprah",
                    last: "Winfrey",
                    sex: "Female",
                    race: "Black"
                }
            ],
            onDelete: function(i) {
                console.log("delete", i);
                $ctrl.listData.items.splice(i, 1);
            }
        }

        // Loader
        $ctrl.loaderData = {
            show: function() {
                nguiLoader.show("I will hide in 5 seconds");
                $timeout(function() {
                    nguiLoader.hide();
                }, 5000);
            }
        }

        // Modal
        $ctrl.modalData = {
            alert: function() {
                nguiModal.alert({
                    message: "Hello from alert",
                    yesCallback: function() {
                        console.log("accepted alert");
                    },
                    yesButton: 'Affirmative'
                });
            },
            success: function() {
                nguiModal.success({
                    message: "Successfully shown alert",
                    yesCallback: function() {
                        console.log("accepted alert");
                    },
                    yesButton: 'Awesome'
                });
            },
            error: function() {
                nguiModal.error({
                    message: "Some bad error",
                    yesCallback: function() {
                        console.log("accepted error");
                    },
                    yesButton: 'Okay :('
                });
            },
            prompt: function() {
                nguiModal.prompt({
                    message: "Hello from prompt",
                    yesCallback: function() {
                        console.log("clicked yes");
                    },
                    noCallback: function() {
                        console.log("clicked no");
                    },
                    yesButton: 'Let\'s do it',
                    noButton: 'I don\'t want to'
                });
            },
            danger: function() {
                nguiModal.danger({
                    message: "Wanna do something dangerous?",
                    yesCallback: function() {
                        console.log("clicked yes");
                    },
                    noCallback: function() {
                        console.log("clicked no");
                    },
                    yesButton: 'Let\'s do it',
                    noButton: 'I don\'t want to'
                });
            },
            custom: function() {
                nguiModal.custom({
                    message: "Hello from custom",
                    yesCallback: function(data) {
                        console.log("clicked yes", data);
                    },
                    noCallback: function() {
                        console.log("clicked no");
                    },
                    yesButton: 'Let\'s do it',
                    noButton: 'I don\'t want to',
                    options: true,
                    modalData: {
                        name: "Some name",
                        date: new Date()
                    },
                    customHtml: `
                        <div>
                            <input type="text" ng-model="$modalData.name" />
                            <p>{{$modalData.name}}</p>
                            <p>{{$modalData.date}}</p>
                            
                            <datepicker ngui-model="$modalData.date"></datepicker>
                        </div>
                    `
                });
            }
        }

        // Pagination
        $ctrl.paginationData = {
            items: []
        };
        for (var i = 0; i < 100; i++) {
            $ctrl.paginationData.items.push("Item " + i);
        }

        // Progbar
        $ctrl.progbarData = {
            value: 50,
            color: 'red'
        };

        return;


        // Next is old

















        nguiLoader.show("Loading...");
        $timeout(function() {
            nguiLoader.hide();
        }, 1400);

        $ctrl.parseDate = function(d) {
            var str = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
            return str;
        }

        $ctrl.quantity = 0;

        $interval(function() {
            $ctrl.quantity += 10;
        }, 300);

        $ctrl.names = ["John", "Doe", "Foo", "Bar"];

        $ctrl.menu = false;

        for (var i = 0; i < 200; i++) {
            $ctrl.names.push("A" + i);
        }

        $ctrl.ondelete = function(i) {
            console.log("bla");
            $ctrl.users.splice(i, 1);
            nguiLoader.show("Deleting element");

            $timeout(function() {
                nguiLoader.hide();
            }, 2000);
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
