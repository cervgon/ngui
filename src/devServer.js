import angular from 'angular';
import ngui from './index';

import Template from './devServer.html';

const App = angular.module('app', [ngui]);

App.component('app', {
    template: Template,
    controller: function($scope, $rootScope, $interval, $timeout, nguiLoader, nguiModal) {
        var $ctrl = this;
        //console.log("App controller");

        // BGLoader
        $ctrl.bgurl = "https://raw.githubusercontent.com/cervgon/ngui/master/images/beer.jpg";
        $ctrl.prebgcss = "url(\"data:image/svg+xml;charset=UTF-8, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' height='300' width='400'%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Crect x='0' y='0' width='100' height='100' fill='rgb(242,245,247)'/%3E%3Crect x='100' y='0' width='100' height='100' fill='rgb(248,249,249)'/%3E%3Crect x='200' y='0' width='100' height='100' fill='rgb(250,250,251)'/%3E%3Crect x='300' y='0' width='100' height='100' fill='rgb(248,249,249)'/%3E%3Crect x='0' y='100' width='100' height='100' fill='rgb(255,255,255)'/%3E%3Crect x='100' y='100' width='100' height='100' fill='rgb(241,245,249)'/%3E%3Crect x='200' y='100' width='100' height='100' fill='rgb(240,245,248)'/%3E%3Crect x='300' y='100' width='100' height='100' fill='rgb(254,254,254)'/%3E%3Crect x='0' y='200' width='100' height='100' fill='rgb(244,247,250)'/%3E%3Crect x='100' y='200' width='100' height='100' fill='rgb(255,255,255)'/%3E%3Crect x='200' y='200' width='100' height='100' fill='rgb(255,255,255)'/%3E%3Crect x='300' y='200' width='100' height='100' fill='rgb(254,254,254)'/%3E%3C/svg%3E\") no-repeat center";

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

        // Tabs
        $ctrl.tabsData = {
            model: "Third",
            items: ["First","Second","Third","Forth","Fifth"]
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

        // Masonry
        $ctrl.bricks = [
            {
                template:"<div>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti <span style='color: #f00'>quos dolores</span> et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</div>"
            },
            {
                template:"<div>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.<br>Id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. <i>Temporibus autem quibusdam et aut officiis debitis aut rerum</i> necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</div>"
            },
            {
                template:"<div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>"
            }
            /*,
            {
                template:"<div>Itaque earum <hr>rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut doloribus asperiores repellat.</div>"
            },
            {
                template:"<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <span style='font-size:1.5em; text-decoration: underline'>dolor in reprehenderit in voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>"
            },
            {
                template:"<div>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</div>"
            }*/
        ];

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

        // Radar
        $ctrl.radarData = [
            [10,50,60,90,45,40],
            [90,80,40,70,55,90],
            [70,20,70,30,35,70],
            [40,40,50,55,90,40],
            [20,20,70,65,50,20]
        ];

        let ditext = '';
        let lineData = [];
        for (var i = 0; i < 100; i++) {
            let pppp = Math.sin(i/5)*i;
            ditext +=  pppp + ',';
            lineData[i] = pppp
        }
        $ctrl.lineData = lineData;

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
