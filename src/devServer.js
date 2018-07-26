import angular from 'angular';
import ngui from './index';

import Template from './devServer.html';

const App = angular.module('app', [ngui]);

App.component('app', {
    template: Template,
    controller: function($scope, $rootScope, $interval, $timeout, nguiLoader, nguiModal) {
        var $ctrl = this;
        console.log("App controller");

        // BGLoader
        $ctrl.bgurl = "https://raw.githubusercontent.com/cervgon/ngui/master/images/beer.jpg";
        $ctrl.prebgcss = "background: url(\"data:image/svg+xml;charset=UTF-8, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' height='1800' width='2500'%3E%3Crect width='2500' height='1800' fill='%23000'/%3E%3Crect x='0' y='0' width='100' height='100' fill='rgb(215,208,195)'/%3E%3Crect x='100' y='0' width='100' height='100' fill='rgb(220,212,194)'/%3E%3Crect x='200' y='0' width='100' height='100' fill='rgb(222,213,195)'/%3E%3Crect x='300' y='0' width='100' height='100' fill='rgb(215,206,188)'/%3E%3Crect x='400' y='0' width='100' height='100' fill='rgb(217,207,189)'/%3E%3Crect x='500' y='0' width='100' height='100' fill='rgb(229,220,200)'/%3E%3Crect x='600' y='0' width='100' height='100' fill='rgb(222,212,191)'/%3E%3Crect x='700' y='0' width='100' height='100' fill='rgb(218,211,196)'/%3E%3Crect x='800' y='0' width='100' height='100' fill='rgb(222,213,193)'/%3E%3Crect x='900' y='0' width='100' height='100' fill='rgb(223,214,196)'/%3E%3Crect x='1000' y='0' width='100' height='100' fill='rgb(216,207,189)'/%3E%3Crect x='1100' y='0' width='100' height='100' fill='rgb(220,212,197)'/%3E%3Crect x='1200' y='0' width='100' height='100' fill='rgb(46,46,48)'/%3E%3Crect x='1300' y='0' width='100' height='100' fill='rgb(224,216,198)'/%3E%3Crect x='1400' y='0' width='100' height='100' fill='rgb(217,208,189)'/%3E%3Crect x='1500' y='0' width='100' height='100' fill='rgb(218,209,191)'/%3E%3Crect x='1600' y='0' width='100' height='100' fill='rgb(224,216,201)'/%3E%3Crect x='1700' y='0' width='100' height='100' fill='rgb(220,210,196)'/%3E%3Crect x='1800' y='0' width='100' height='100' fill='rgb(218,207,188)'/%3E%3Crect x='1900' y='0' width='100' height='100' fill='rgb(218,209,191)'/%3E%3Crect x='2000' y='0' width='100' height='100' fill='rgb(219,208,189)'/%3E%3Crect x='2100' y='0' width='100' height='100' fill='rgb(219,210,192)'/%3E%3Crect x='2200' y='0' width='100' height='100' fill='rgb(215,203,186)'/%3E%3Crect x='2300' y='0' width='100' height='100' fill='rgb(211,202,182)'/%3E%3Crect x='2400' y='0' width='100' height='100' fill='rgb(212,202,188)'/%3E%3Crect x='0' y='100' width='100' height='100' fill='rgb(216,206,192)'/%3E%3Crect x='100' y='100' width='100' height='100' fill='rgb(221,213,198)'/%3E%3Crect x='200' y='100' width='100' height='100' fill='rgb(222,213,194)'/%3E%3Crect x='300' y='100' width='100' height='100' fill='rgb(208,197,178)'/%3E%3Crect x='400' y='100' width='100' height='100' fill='rgb(208,198,177)'/%3E%3Crect x='500' y='100' width='100' height='100' fill='rgb(213,204,184)'/%3E%3Crect x='600' y='100' width='100' height='100' fill='rgb(218,208,187)'/%3E%3Crect x='700' y='100' width='100' height='100' fill='rgb(218,208,194)'/%3E%3Crect x='800' y='100' width='100' height='100' fill='rgb(227,218,200)'/%3E%3Crect x='900' y='100' width='100' height='100' fill='rgb(225,216,197)'/%3E%3Crect x='1000' y='100' width='100' height='100' fill='rgb(223,213,187)'/%3E%3Crect x='1100' y='100' width='100' height='100' fill='rgb(186,189,208)'/%3E%3Crect x='1200' y='100' width='100' height='100' fill='rgb(43,15,17)'/%3E%3Crect x='1300' y='100' width='100' height='100' fill='rgb(192,190,201)'/%3E%3Crect x='1400' y='100' width='100' height='100' fill='rgb(46,35,43)'/%3E%3Crect x='1500' y='100' width='100' height='100' fill='rgb(216,206,185)'/%3E%3Crect x='1600' y='100' width='100' height='100' fill='rgb(220,210,189)'/%3E%3Crect x='1700' y='100' width='100' height='100' fill='rgb(208,198,177)'/%3E%3Crect x='1800' y='100' width='100' height='100' fill='rgb(216,202,177)'/%3E%3Crect x='1900' y='100' width='100' height='100' fill='rgb(217,208,188)'/%3E%3Crect x='2000' y='100' width='100' height='100' fill='rgb(212,202,179)'/%3E%3Crect x='2100' y='100' width='100' height='100' fill='rgb(212,202,181)'/%3E%3Crect x='2200' y='100' width='100' height='100' fill='rgb(212,200,182)'/%3E%3Crect x='2300' y='100' width='100' height='100' fill='rgb(209,194,176)'/%3E%3Crect x='2400' y='100' width='100' height='100' fill='rgb(204,190,170)'/%3E%3Crect x='0' y='200' width='100' height='100' fill='rgb(211,196,176)'/%3E%3Crect x='100' y='200' width='100' height='100' fill='rgb(215,201,181)'/%3E%3Crect x='200' y='200' width='100' height='100' fill='rgb(223,209,189)'/%3E%3Crect x='300' y='200' width='100' height='100' fill='rgb(204,190,165)'/%3E%3Crect x='400' y='200' width='100' height='100' fill='rgb(204,185,151)'/%3E%3Crect x='500' y='200' width='100' height='100' fill='rgb(219,210,190)'/%3E%3Crect x='600' y='200' width='100' height='100' fill='rgb(224,213,199)'/%3E%3Crect x='700' y='200' width='100' height='100' fill='rgb(208,198,184)'/%3E%3Crect x='800' y='200' width='100' height='100' fill='rgb(225,215,201)'/%3E%3Crect x='900' y='200' width='100' height='100' fill='rgb(214,203,184)'/%3E%3Crect x='1000' y='200' width='100' height='100' fill='rgb(154,152,169)'/%3E%3Crect x='1100' y='200' width='100' height='100' fill='rgb(216,113,13)'/%3E%3Crect x='1200' y='200' width='100' height='100' fill='rgb(49,20,18)'/%3E%3Crect x='1300' y='200' width='100' height='100' fill='rgb(201,202,215)'/%3E%3Crect x='1400' y='200' width='100' height='100' fill='rgb(151,158,185)'/%3E%3Crect x='1500' y='200' width='100' height='100' fill='rgb(213,198,170)'/%3E%3Crect x='1600' y='200' width='100' height='100' fill='rgb(217,201,179)'/%3E%3Crect x='1700' y='200' width='100' height='100' fill='rgb(210,195,168)'/%3E%3Crect x='1800' y='200' width='100' height='100' fill='rgb(215,201,179)'/%3E%3Crect x='1900' y='200' width='100' height='100' fill='rgb(209,195,175)'/%3E%3Crect x='2000' y='200' width='100' height='100' fill='rgb(201,187,167)'/%3E%3Crect x='2100' y='200' width='100' height='100' fill='rgb(209,195,170)'/%3E%3Crect x='2200' y='200' width='100' height='100' fill='rgb(205,190,163)'/%3E%3Crect x='2300' y='200' width='100' height='100' fill='rgb(204,190,165)'/%3E%3Crect x='2400' y='200' width='100' height='100' fill='rgb(203,189,166)'/%3E%3Crect x='0' y='300' width='100' height='100' fill='rgb(195,173,147)'/%3E%3Crect x='100' y='300' width='100' height='100' fill='rgb(201,179,155)'/%3E%3Crect x='200' y='300' width='100' height='100' fill='rgb(185,162,137)'/%3E%3Crect x='300' y='300' width='100' height='100' fill='rgb(220,204,185)'/%3E%3Crect x='400' y='300' width='100' height='100' fill='rgb(177,141,115)'/%3E%3Crect x='500' y='300' width='100' height='100' fill='rgb(229,214,195)'/%3E%3Crect x='600' y='300' width='100' height='100' fill='rgb(226,211,194)'/%3E%3Crect x='700' y='300' width='100' height='100' fill='rgb(210,195,177)'/%3E%3Crect x='800' y='300' width='100' height='100' fill='rgb(208,194,172)'/%3E%3Crect x='900' y='300' width='100' height='100' fill='rgb(32,23,31)'/%3E%3Crect x='1000' y='300' width='100' height='100' fill='rgb(170,168,185)'/%3E%3Crect x='1100' y='300' width='100' height='100' fill='rgb(37,5,3)'/%3E%3Crect x='1200' y='300' width='100' height='100' fill='rgb(151,121,0)'/%3E%3Crect x='1300' y='300' width='100' height='100' fill='rgb(155,98,4)'/%3E%3Crect x='1400' y='300' width='100' height='100' fill='rgb(61,61,82)'/%3E%3Crect x='1500' y='300' width='100' height='100' fill='rgb(22,15,18)'/%3E%3Crect x='1600' y='300' width='100' height='100' fill='rgb(222,211,194)'/%3E%3Crect x='1700' y='300' width='100' height='100' fill='rgb(219,208,195)'/%3E%3Crect x='1800' y='300' width='100' height='100' fill='rgb(203,182,155)'/%3E%3Crect x='1900' y='300' width='100' height='100' fill='rgb(198,179,153)'/%3E%3Crect x='2000' y='300' width='100' height='100' fill='rgb(194,171,145)'/%3E%3Crect x='2100' y='300' width='100' height='100' fill='rgb(198,177,151)'/%3E%3Crect x='2200' y='300' width='100' height='100' fill='rgb(204,187,161)'/%3E%3Crect x='2300' y='300' width='100' height='100' fill='rgb(195,175,147)'/%3E%3Crect x='2400' y='300' width='100' height='100' fill='rgb(200,179,154)'/%3E%3Crect x='0' y='400' width='100' height='100' fill='rgb(144,70,0)'/%3E%3Crect x='100' y='400' width='100' height='100' fill='rgb(187,141,100)'/%3E%3Crect x='200' y='400' width='100' height='100' fill='rgb(159,94,37)'/%3E%3Crect x='300' y='400' width='100' height='100' fill='rgb(182,133,90)'/%3E%3Crect x='400' y='400' width='100' height='100' fill='rgb(153,86,29)'/%3E%3Crect x='500' y='400' width='100' height='100' fill='rgb(184,136,88)'/%3E%3Crect x='600' y='400' width='100' height='100' fill='rgb(154,82,0)'/%3E%3Crect x='700' y='400' width='100' height='100' fill='rgb(143,60,0)'/%3E%3Crect x='800' y='400' width='100' height='100' fill='rgb(137,60,0)'/%3E%3Crect x='900' y='400' width='100' height='100' fill='rgb(156,161,190)'/%3E%3Crect x='1000' y='400' width='100' height='100' fill='rgb(23,7,0)'/%3E%3Crect x='1100' y='400' width='100' height='100' fill='rgb(144,111,0)'/%3E%3Crect x='1200' y='400' width='100' height='100' fill='rgb(220,191,0)'/%3E%3Crect x='1300' y='400' width='100' height='100' fill='rgb(202,170,0)'/%3E%3Crect x='1400' y='400' width='100' height='100' fill='rgb(129,140,182)'/%3E%3Crect x='1500' y='400' width='100' height='100' fill='rgb(125,135,177)'/%3E%3Crect x='1600' y='400' width='100' height='100' fill='rgb(167,111,64)'/%3E%3Crect x='1700' y='400' width='100' height='100' fill='rgb(209,179,150)'/%3E%3Crect x='1800' y='400' width='100' height='100' fill='rgb(147,95,39)'/%3E%3Crect x='1900' y='400' width='100' height='100' fill='rgb(198,172,138)'/%3E%3Crect x='2000' y='400' width='100' height='100' fill='rgb(152,106,65)'/%3E%3Crect x='2100' y='400' width='100' height='100' fill='rgb(207,182,156)'/%3E%3Crect x='2200' y='400' width='100' height='100' fill='rgb(196,169,133)'/%3E%3Crect x='2300' y='400' width='100' height='100' fill='rgb(184,154,119)'/%3E%3Crect x='2400' y='400' width='100' height='100' fill='rgb(179,153,118)'/%3E%3Crect x='0' y='500' width='100' height='100' fill='rgb(166,94,8)'/%3E%3Crect x='100' y='500' width='100' height='100' fill='rgb(167,92,2)'/%3E%3Crect x='200' y='500' width='100' height='100' fill='rgb(155,69,0)'/%3E%3Crect x='300' y='500' width='100' height='100' fill='rgb(146,66,0)'/%3E%3Crect x='400' y='500' width='100' height='100' fill='rgb(187,145,102)'/%3E%3Crect x='500' y='500' width='100' height='100' fill='rgb(156,74,0)'/%3E%3Crect x='600' y='500' width='100' height='100' fill='rgb(158,89,5)'/%3E%3Crect x='700' y='500' width='100' height='100' fill='rgb(137,51,0)'/%3E%3Crect x='800' y='500' width='100' height='100' fill='rgb(159,94,25)'/%3E%3Crect x='900' y='500' width='100' height='100' fill='rgb(5,0,9)'/%3E%3Crect x='1000' y='500' width='100' height='100' fill='rgb(23,12,0)'/%3E%3Crect x='1100' y='500' width='100' height='100' fill='rgb(6,0,0)'/%3E%3Crect x='1200' y='500' width='100' height='100' fill='rgb(214,184,0)'/%3E%3Crect x='1300' y='500' width='100' height='100' fill='rgb(13,0,0)'/%3E%3Crect x='1400' y='500' width='100' height='100' fill='rgb(182,32,0)'/%3E%3Crect x='1500' y='500' width='100' height='100' fill='rgb(192,38,0)'/%3E%3Crect x='1600' y='500' width='100' height='100' fill='rgb(176,109,29)'/%3E%3Crect x='1700' y='500' width='100' height='100' fill='rgb(139,56,0)'/%3E%3Crect x='1800' y='500' width='100' height='100' fill='rgb(160,96,30)'/%3E%3Crect x='1900' y='500' width='100' height='100' fill='rgb(153,96,28)'/%3E%3Crect x='2000' y='500' width='100' height='100' fill='rgb(165,91,11)'/%3E%3Crect x='2100' y='500' width='100' height='100' fill='rgb(147,56,0)'/%3E%3Crect x='2200' y='500' width='100' height='100' fill='rgb(147,69,0)'/%3E%3Crect x='2300' y='500' width='100' height='100' fill='rgb(165,107,55)'/%3E%3Crect x='2400' y='500' width='100' height='100' fill='rgb(172,126,79)'/%3E%3Crect x='0' y='600' width='100' height='100' fill='rgb(177,110,26)'/%3E%3Crect x='100' y='600' width='100' height='100' fill='rgb(169,81,0)'/%3E%3Crect x='200' y='600' width='100' height='100' fill='rgb(164,74,0)'/%3E%3Crect x='300' y='600' width='100' height='100' fill='rgb(162,68,0)'/%3E%3Crect x='400' y='600' width='100' height='100' fill='rgb(158,61,0)'/%3E%3Crect x='500' y='600' width='100' height='100' fill='rgb(152,55,0)'/%3E%3Crect x='600' y='600' width='100' height='100' fill='rgb(152,53,0)'/%3E%3Crect x='700' y='600' width='100' height='100' fill='rgb(146,47,0)'/%3E%3Crect x='800' y='600' width='100' height='100' fill='rgb(154,74,0)'/%3E%3Crect x='900' y='600' width='100' height='100' fill='rgb(129,139,179)'/%3E%3Crect x='1000' y='600' width='100' height='100' fill='rgb(12,4,0)'/%3E%3Crect x='1100' y='600' width='100' height='100' fill='rgb(48,27,0)'/%3E%3Crect x='1200' y='600' width='100' height='100' fill='rgb(10,0,0)'/%3E%3Crect x='1300' y='600' width='100' height='100' fill='rgb(31,1,0)'/%3E%3Crect x='1400' y='600' width='100' height='100' fill='rgb(203,166,0)'/%3E%3Crect x='1500' y='600' width='100' height='100' fill='rgb(208,177,0)'/%3E%3Crect x='1600' y='600' width='100' height='100' fill='rgb(182,106,11)'/%3E%3Crect x='1700' y='600' width='100' height='100' fill='rgb(147,70,0)'/%3E%3Crect x='1800' y='600' width='100' height='100' fill='rgb(170,110,42)'/%3E%3Crect x='1900' y='600' width='100' height='100' fill='rgb(159,86,1)'/%3E%3Crect x='2000' y='600' width='100' height='100' fill='rgb(160,97,13)'/%3E%3Crect x='2100' y='600' width='100' height='100' fill='rgb(183,116,38)'/%3E%3Crect x='2200' y='600' width='100' height='100' fill='rgb(156,77,0)'/%3E%3Crect x='2300' y='600' width='100' height='100' fill='rgb(156,73,0)'/%3E%3Crect x='2400' y='600' width='100' height='100' fill='rgb(156,81,0)'/%3E%3Crect x='0' y='700' width='100' height='100' fill='rgb(174,89,0)'/%3E%3Crect x='100' y='700' width='100' height='100' fill='rgb(171,83,0)'/%3E%3Crect x='200' y='700' width='100' height='100' fill='rgb(182,106,0)'/%3E%3Crect x='300' y='700' width='100' height='100' fill='rgb(164,70,0)'/%3E%3Crect x='400' y='700' width='100' height='100' fill='rgb(158,59,0)'/%3E%3Crect x='500' y='700' width='100' height='100' fill='rgb(153,56,0)'/%3E%3Crect x='600' y='700' width='100' height='100' fill='rgb(153,53,0)'/%3E%3Crect x='700' y='700' width='100' height='100' fill='rgb(155,58,0)'/%3E%3Crect x='800' y='700' width='100' height='100' fill='rgb(150,50,0)'/%3E%3Crect x='900' y='700' width='100' height='100' fill='rgb(146,45,0)'/%3E%3Crect x='1000' y='700' width='100' height='100' fill='rgb(145,45,0)'/%3E%3Crect x='1100' y='700' width='100' height='100' fill='rgb(146,45,0)'/%3E%3Crect x='1200' y='700' width='100' height='100' fill='rgb(207,172,0)'/%3E%3Crect x='1300' y='700' width='100' height='100' fill='rgb(160,65,0)'/%3E%3Crect x='1400' y='700' width='100' height='100' fill='rgb(144,43,0)'/%3E%3Crect x='1500' y='700' width='100' height='100' fill='rgb(158,72,0)'/%3E%3Crect x='1600' y='700' width='100' height='100' fill='rgb(161,72,0)'/%3E%3Crect x='1700' y='700' width='100' height='100' fill='rgb(154,69,0)'/%3E%3Crect x='1800' y='700' width='100' height='100' fill='rgb(151,56,0)'/%3E%3Crect x='1900' y='700' width='100' height='100' fill='rgb(167,81,0)'/%3E%3Crect x='2000' y='700' width='100' height='100' fill='rgb(157,62,0)'/%3E%3Crect x='2100' y='700' width='100' height='100' fill='rgb(146,75,0)'/%3E%3Crect x='2200' y='700' width='100' height='100' fill='rgb(148,64,0)'/%3E%3Crect x='2300' y='700' width='100' height='100' fill='rgb(148,80,0)'/%3E%3Crect x='2400' y='700' width='100' height='100' fill='rgb(154,88,0)'/%3E%3Crect x='0' y='800' width='100' height='100' fill='rgb(173,89,0)'/%3E%3Crect x='100' y='800' width='100' height='100' fill='rgb(178,88,0)'/%3E%3Crect x='200' y='800' width='100' height='100' fill='rgb(173,78,0)'/%3E%3Crect x='300' y='800' width='100' height='100' fill='rgb(169,71,0)'/%3E%3Crect x='400' y='800' width='100' height='100' fill='rgb(160,64,0)'/%3E%3Crect x='500' y='800' width='100' height='100' fill='rgb(161,58,0)'/%3E%3Crect x='600' y='800' width='100' height='100' fill='rgb(68,19,0)'/%3E%3Crect x='700' y='800' width='100' height='100' fill='rgb(159,61,0)'/%3E%3Crect x='800' y='800' width='100' height='100' fill='rgb(147,55,0)'/%3E%3Crect x='900' y='800' width='100' height='100' fill='rgb(11,0,4)'/%3E%3Crect x='1000' y='800' width='100' height='100' fill='rgb(153,49,0)'/%3E%3Crect x='1100' y='800' width='100' height='100' fill='rgb(14,0,0)'/%3E%3Crect x='1200' y='800' width='100' height='100' fill='rgb(155,50,0)'/%3E%3Crect x='1300' y='800' width='100' height='100' fill='rgb(152,45,0)'/%3E%3Crect x='1400' y='800' width='100' height='100' fill='rgb(47,0,0)'/%3E%3Crect x='1500' y='800' width='100' height='100' fill='rgb(46,0,0)'/%3E%3Crect x='1600' y='800' width='100' height='100' fill='rgb(150,53,0)'/%3E%3Crect x='1700' y='800' width='100' height='100' fill='rgb(19,0,0)'/%3E%3Crect x='1800' y='800' width='100' height='100' fill='rgb(159,58,0)'/%3E%3Crect x='1900' y='800' width='100' height='100' fill='rgb(160,57,0)'/%3E%3Crect x='2000' y='800' width='100' height='100' fill='rgb(161,62,0)'/%3E%3Crect x='2100' y='800' width='100' height='100' fill='rgb(163,66,0)'/%3E%3Crect x='2200' y='800' width='100' height='100' fill='rgb(166,70,0)'/%3E%3Crect x='2300' y='800' width='100' height='100' fill='rgb(165,77,0)'/%3E%3Crect x='2400' y='800' width='100' height='100' fill='rgb(170,82,0)'/%3E%3Crect x='0' y='900' width='100' height='100' fill='rgb(180,96,0)'/%3E%3Crect x='100' y='900' width='100' height='100' fill='rgb(177,90,0)'/%3E%3Crect x='200' y='900' width='100' height='100' fill='rgb(177,81,0)'/%3E%3Crect x='300' y='900' width='100' height='100' fill='rgb(173,75,0)'/%3E%3Crect x='400' y='900' width='100' height='100' fill='rgb(171,70,0)'/%3E%3Crect x='500' y='900' width='100' height='100' fill='rgb(170,69,0)'/%3E%3Crect x='600' y='900' width='100' height='100' fill='rgb(167,65,0)'/%3E%3Crect x='700' y='900' width='100' height='100' fill='rgb(168,67,0)'/%3E%3Crect x='800' y='900' width='100' height='100' fill='rgb(163,60,0)'/%3E%3Crect x='900' y='900' width='100' height='100' fill='rgb(162,59,0)'/%3E%3Crect x='1000' y='900' width='100' height='100' fill='rgb(157,54,0)'/%3E%3Crect x='1100' y='900' width='100' height='100' fill='rgb(156,52,0)'/%3E%3Crect x='1200' y='900' width='100' height='100' fill='rgb(157,52,0)'/%3E%3Crect x='1300' y='900' width='100' height='100' fill='rgb(156,52,0)'/%3E%3Crect x='1400' y='900' width='100' height='100' fill='rgb(158,55,0)'/%3E%3Crect x='1500' y='900' width='100' height='100' fill='rgb(160,55,0)'/%3E%3Crect x='1600' y='900' width='100' height='100' fill='rgb(160,57,0)'/%3E%3Crect x='1700' y='900' width='100' height='100' fill='rgb(161,58,0)'/%3E%3Crect x='1800' y='900' width='100' height='100' fill='rgb(164,61,0)'/%3E%3Crect x='1900' y='900' width='100' height='100' fill='rgb(167,66,0)'/%3E%3Crect x='2000' y='900' width='100' height='100' fill='rgb(170,72,0)'/%3E%3Crect x='2100' y='900' width='100' height='100' fill='rgb(168,71,0)'/%3E%3Crect x='2200' y='900' width='100' height='100' fill='rgb(170,74,0)'/%3E%3Crect x='2300' y='900' width='100' height='100' fill='rgb(175,80,0)'/%3E%3Crect x='2400' y='900' width='100' height='100' fill='rgb(174,86,0)'/%3E%3Crect x='0' y='1000' width='100' height='100' fill='rgb(181,97,0)'/%3E%3Crect x='100' y='1000' width='100' height='100' fill='rgb(177,90,0)'/%3E%3Crect x='200' y='1000' width='100' height='100' fill='rgb(180,87,0)'/%3E%3Crect x='300' y='1000' width='100' height='100' fill='rgb(175,79,0)'/%3E%3Crect x='400' y='1000' width='100' height='100' fill='rgb(175,79,0)'/%3E%3Crect x='500' y='1000' width='100' height='100' fill='rgb(173,75,0)'/%3E%3Crect x='600' y='1000' width='100' height='100' fill='rgb(180,144,122)'/%3E%3Crect x='700' y='1000' width='100' height='100' fill='rgb(164,71,0)'/%3E%3Crect x='800' y='1000' width='100' height='100' fill='rgb(161,64,0)'/%3E%3Crect x='900' y='1000' width='100' height='100' fill='rgb(164,60,0)'/%3E%3Crect x='1000' y='1000' width='100' height='100' fill='rgb(160,61,0)'/%3E%3Crect x='1100' y='1000' width='100' height='100' fill='rgb(161,58,0)'/%3E%3Crect x='1200' y='1000' width='100' height='100' fill='rgb(14,0,0)'/%3E%3Crect x='1300' y='1000' width='100' height='100' fill='rgb(174,134,111)'/%3E%3Crect x='1400' y='1000' width='100' height='100' fill='rgb(172,133,109)'/%3E%3Crect x='1500' y='1000' width='100' height='100' fill='rgb(13,0,0)'/%3E%3Crect x='1600' y='1000' width='100' height='100' fill='rgb(164,61,0)'/%3E%3Crect x='1700' y='1000' width='100' height='100' fill='rgb(166,64,0)'/%3E%3Crect x='1800' y='1000' width='100' height='100' fill='rgb(171,70,0)'/%3E%3Crect x='1900' y='1000' width='100' height='100' fill='rgb(173,72,0)'/%3E%3Crect x='2000' y='1000' width='100' height='100' fill='rgb(169,71,0)'/%3E%3Crect x='2100' y='1000' width='100' height='100' fill='rgb(173,77,0)'/%3E%3Crect x='2200' y='1000' width='100' height='100' fill='rgb(171,76,0)'/%3E%3Crect x='2300' y='1000' width='100' height='100' fill='rgb(172,82,0)'/%3E%3Crect x='2400' y='1000' width='100' height='100' fill='rgb(174,89,0)'/%3E%3Crect x='0' y='1100' width='100' height='100' fill='rgb(175,92,0)'/%3E%3Crect x='100' y='1100' width='100' height='100' fill='rgb(179,95,0)'/%3E%3Crect x='200' y='1100' width='100' height='100' fill='rgb(184,94,0)'/%3E%3Crect x='300' y='1100' width='100' height='100' fill='rgb(182,89,0)'/%3E%3Crect x='400' y='1100' width='100' height='100' fill='rgb(177,81,0)'/%3E%3Crect x='500' y='1100' width='100' height='100' fill='rgb(177,81,0)'/%3E%3Crect x='600' y='1100' width='100' height='100' fill='rgb(176,142,117)'/%3E%3Crect x='700' y='1100' width='100' height='100' fill='rgb(171,132,109)'/%3E%3Crect x='800' y='1100' width='100' height='100' fill='rgb(171,70,0)'/%3E%3Crect x='900' y='1100' width='100' height='100' fill='rgb(163,60,0)'/%3E%3Crect x='1000' y='1100' width='100' height='100' fill='rgb(163,63,0)'/%3E%3Crect x='1100' y='1100' width='100' height='100' fill='rgb(158,62,0)'/%3E%3Crect x='1200' y='1100' width='100' height='100' fill='rgb(38,2,0)'/%3E%3Crect x='1300' y='1100' width='100' height='100' fill='rgb(42,6,0)'/%3E%3Crect x='1400' y='1100' width='100' height='100' fill='rgb(173,132,112)'/%3E%3Crect x='1500' y='1100' width='100' height='100' fill='rgb(122,45,0)'/%3E%3Crect x='1600' y='1100' width='100' height='100' fill='rgb(164,124,97)'/%3E%3Crect x='1700' y='1100' width='100' height='100' fill='rgb(167,67,0)'/%3E%3Crect x='1800' y='1100' width='100' height='100' fill='rgb(168,70,0)'/%3E%3Crect x='1900' y='1100' width='100' height='100' fill='rgb(172,76,0)'/%3E%3Crect x='2000' y='1100' width='100' height='100' fill='rgb(176,78,0)'/%3E%3Crect x='2100' y='1100' width='100' height='100' fill='rgb(171,75,0)'/%3E%3Crect x='2200' y='1100' width='100' height='100' fill='rgb(173,79,0)'/%3E%3Crect x='2300' y='1100' width='100' height='100' fill='rgb(174,86,0)'/%3E%3Crect x='2400' y='1100' width='100' height='100' fill='rgb(173,93,0)'/%3E%3Crect x='0' y='1200' width='100' height='100' fill='rgb(171,91,0)'/%3E%3Crect x='100' y='1200' width='100' height='100' fill='rgb(178,94,0)'/%3E%3Crect x='200' y='1200' width='100' height='100' fill='rgb(181,94,0)'/%3E%3Crect x='300' y='1200' width='100' height='100' fill='rgb(182,92,0)'/%3E%3Crect x='400' y='1200' width='100' height='100' fill='rgb(184,91,0)'/%3E%3Crect x='500' y='1200' width='100' height='100' fill='rgb(176,82,0)'/%3E%3Crect x='600' y='1200' width='100' height='100' fill='rgb(178,145,125)'/%3E%3Crect x='700' y='1200' width='100' height='100' fill='rgb(172,138,116)'/%3E%3Crect x='800' y='1200' width='100' height='100' fill='rgb(169,70,0)'/%3E%3Crect x='900' y='1200' width='100' height='100' fill='rgb(176,137,116)'/%3E%3Crect x='1000' y='1200' width='100' height='100' fill='rgb(111,54,4)'/%3E%3Crect x='1100' y='1200' width='100' height='100' fill='rgb(175,139,116)'/%3E%3Crect x='1200' y='1200' width='100' height='100' fill='rgb(18,0,0)'/%3E%3Crect x='1300' y='1200' width='100' height='100' fill='rgb(16,0,0)'/%3E%3Crect x='1400' y='1200' width='100' height='100' fill='rgb(166,126,103)'/%3E%3Crect x='1500' y='1200' width='100' height='100' fill='rgb(34,0,0)'/%3E%3Crect x='1600' y='1200' width='100' height='100' fill='rgb(166,126,101)'/%3E%3Crect x='1700' y='1200' width='100' height='100' fill='rgb(165,125,98)'/%3E%3Crect x='1800' y='1200' width='100' height='100' fill='rgb(171,75,0)'/%3E%3Crect x='1900' y='1200' width='100' height='100' fill='rgb(176,78,0)'/%3E%3Crect x='2000' y='1200' width='100' height='100' fill='rgb(177,81,0)'/%3E%3Crect x='2100' y='1200' width='100' height='100' fill='rgb(177,82,0)'/%3E%3Crect x='2200' y='1200' width='100' height='100' fill='rgb(174,82,0)'/%3E%3Crect x='2300' y='1200' width='100' height='100' fill='rgb(175,87,0)'/%3E%3Crect x='2400' y='1200' width='100' height='100' fill='rgb(178,100,0)'/%3E%3Crect x='0' y='1300' width='100' height='100' fill='rgb(167,83,0)'/%3E%3Crect x='100' y='1300' width='100' height='100' fill='rgb(174,89,0)'/%3E%3Crect x='200' y='1300' width='100' height='100' fill='rgb(178,95,0)'/%3E%3Crect x='300' y='1300' width='100' height='100' fill='rgb(186,98,0)'/%3E%3Crect x='400' y='1300' width='100' height='100' fill='rgb(185,97,0)'/%3E%3Crect x='500' y='1300' width='100' height='100' fill='rgb(179,89,0)'/%3E%3Crect x='600' y='1300' width='100' height='100' fill='rgb(175,79,0)'/%3E%3Crect x='700' y='1300' width='100' height='100' fill='rgb(35,14,7)'/%3E%3Crect x='800' y='1300' width='100' height='100' fill='rgb(172,74,0)'/%3E%3Crect x='900' y='1300' width='100' height='100' fill='rgb(172,132,109)'/%3E%3Crect x='1000' y='1300' width='100' height='100' fill='rgb(171,135,110)'/%3E%3Crect x='1100' y='1300' width='100' height='100' fill='rgb(105,17,0)'/%3E%3Crect x='1200' y='1300' width='100' height='100' fill='rgb(81,54,42)'/%3E%3Crect x='1300' y='1300' width='100' height='100' fill='rgb(25,0,0)'/%3E%3Crect x='1400' y='1300' width='100' height='100' fill='rgb(164,124,97)'/%3E%3Crect x='1500' y='1300' width='100' height='100' fill='rgb(169,71,0)'/%3E%3Crect x='1600' y='1300' width='100' height='100' fill='rgb(167,125,95)'/%3E%3Crect x='1700' y='1300' width='100' height='100' fill='rgb(156,74,0)'/%3E%3Crect x='1800' y='1300' width='100' height='100' fill='rgb(171,73,0)'/%3E%3Crect x='1900' y='1300' width='100' height='100' fill='rgb(177,81,0)'/%3E%3Crect x='2000' y='1300' width='100' height='100' fill='rgb(179,83,0)'/%3E%3Crect x='2100' y='1300' width='100' height='100' fill='rgb(179,86,0)'/%3E%3Crect x='2200' y='1300' width='100' height='100' fill='rgb(174,83,0)'/%3E%3Crect x='2300' y='1300' width='100' height='100' fill='rgb(174,91,0)'/%3E%3Crect x='2400' y='1300' width='100' height='100' fill='rgb(170,100,0)'/%3E%3Crect x='0' y='1400' width='100' height='100' fill='rgb(159,85,0)'/%3E%3Crect x='100' y='1400' width='100' height='100' fill='rgb(169,85,0)'/%3E%3Crect x='200' y='1400' width='100' height='100' fill='rgb(177,94,0)'/%3E%3Crect x='300' y='1400' width='100' height='100' fill='rgb(180,96,0)'/%3E%3Crect x='400' y='1400' width='100' height='100' fill='rgb(185,95,0)'/%3E%3Crect x='500' y='1400' width='100' height='100' fill='rgb(99,62,42)'/%3E%3Crect x='600' y='1400' width='100' height='100' fill='rgb(75,12,0)'/%3E%3Crect x='700' y='1400' width='100' height='100' fill='rgb(171,133,107)'/%3E%3Crect x='800' y='1400' width='100' height='100' fill='rgb(163,123,97)'/%3E%3Crect x='900' y='1400' width='100' height='100' fill='rgb(66,28,9)'/%3E%3Crect x='1000' y='1400' width='100' height='100' fill='rgb(165,123,93)'/%3E%3Crect x='1100' y='1400' width='100' height='100' fill='rgb(159,116,85)'/%3E%3Crect x='1200' y='1400' width='100' height='100' fill='rgb(142,96,69)'/%3E%3Crect x='1300' y='1400' width='100' height='100' fill='rgb(146,60,0)'/%3E%3Crect x='1400' y='1400' width='100' height='100' fill='rgb(167,125,94)'/%3E%3Crect x='1500' y='1400' width='100' height='100' fill='rgb(172,74,0)'/%3E%3Crect x='1600' y='1400' width='100' height='100' fill='rgb(163,117,85)'/%3E%3Crect x='1700' y='1400' width='100' height='100' fill='rgb(138,88,48)'/%3E%3Crect x='1800' y='1400' width='100' height='100' fill='rgb(175,77,0)'/%3E%3Crect x='1900' y='1400' width='100' height='100' fill='rgb(178,80,0)'/%3E%3Crect x='2000' y='1400' width='100' height='100' fill='rgb(176,80,0)'/%3E%3Crect x='2100' y='1400' width='100' height='100' fill='rgb(179,83,0)'/%3E%3Crect x='2200' y='1400' width='100' height='100' fill='rgb(175,89,0)'/%3E%3Crect x='2300' y='1400' width='100' height='100' fill='rgb(170,93,0)'/%3E%3Crect x='2400' y='1400' width='100' height='100' fill='rgb(166,110,46)'/%3E%3Crect x='0' y='1500' width='100' height='100' fill='rgb(156,102,55)'/%3E%3Crect x='100' y='1500' width='100' height='100' fill='rgb(157,80,0)'/%3E%3Crect x='200' y='1500' width='100' height='100' fill='rgb(169,86,0)'/%3E%3Crect x='300' y='1500' width='100' height='100' fill='rgb(177,94,0)'/%3E%3Crect x='400' y='1500' width='100' height='100' fill='rgb(180,96,0)'/%3E%3Crect x='500' y='1500' width='100' height='100' fill='rgb(178,91,0)'/%3E%3Crect x='600' y='1500' width='100' height='100' fill='rgb(181,88,0)'/%3E%3Crect x='700' y='1500' width='100' height='100' fill='rgb(175,79,0)'/%3E%3Crect x='800' y='1500' width='100' height='100' fill='rgb(172,76,0)'/%3E%3Crect x='900' y='1500' width='100' height='100' fill='rgb(171,73,0)'/%3E%3Crect x='1000' y='1500' width='100' height='100' fill='rgb(171,73,0)'/%3E%3Crect x='1100' y='1500' width='100' height='100' fill='rgb(154,101,54)'/%3E%3Crect x='1200' y='1500' width='100' height='100' fill='rgb(154,103,68)'/%3E%3Crect x='1300' y='1500' width='100' height='100' fill='rgb(174,75,0)'/%3E%3Crect x='1400' y='1500' width='100' height='100' fill='rgb(161,115,75)'/%3E%3Crect x='1500' y='1500' width='100' height='100' fill='rgb(177,79,0)'/%3E%3Crect x='1600' y='1500' width='100' height='100' fill='rgb(175,79,0)'/%3E%3Crect x='1700' y='1500' width='100' height='100' fill='rgb(176,80,0)'/%3E%3Crect x='1800' y='1500' width='100' height='100' fill='rgb(176,96,0)'/%3E%3Crect x='1900' y='1500' width='100' height='100' fill='rgb(179,86,0)'/%3E%3Crect x='2000' y='1500' width='100' height='100' fill='rgb(180,87,0)'/%3E%3Crect x='2100' y='1500' width='100' height='100' fill='rgb(175,88,0)'/%3E%3Crect x='2200' y='1500' width='100' height='100' fill='rgb(171,88,0)'/%3E%3Crect x='2300' y='1500' width='100' height='100' fill='rgb(165,97,10)'/%3E%3Crect x='2400' y='1500' width='100' height='100' fill='rgb(188,161,145)'/%3E%3Crect x='0' y='1600' width='100' height='100' fill='rgb(207,202,199)'/%3E%3Crect x='100' y='1600' width='100' height='100' fill='rgb(157,89,0)'/%3E%3Crect x='200' y='1600' width='100' height='100' fill='rgb(160,79,0)'/%3E%3Crect x='300' y='1600' width='100' height='100' fill='rgb(173,90,0)'/%3E%3Crect x='400' y='1600' width='100' height='100' fill='rgb(178,95,0)'/%3E%3Crect x='500' y='1600' width='100' height='100' fill='rgb(178,94,0)'/%3E%3Crect x='600' y='1600' width='100' height='100' fill='rgb(180,90,0)'/%3E%3Crect x='700' y='1600' width='100' height='100' fill='rgb(178,85,0)'/%3E%3Crect x='800' y='1600' width='100' height='100' fill='rgb(175,81,0)'/%3E%3Crect x='900' y='1600' width='100' height='100' fill='rgb(173,77,0)'/%3E%3Crect x='1000' y='1600' width='100' height='100' fill='rgb(174,78,0)'/%3E%3Crect x='1100' y='1600' width='100' height='100' fill='rgb(73,16,0)'/%3E%3Crect x='1200' y='1600' width='100' height='100' fill='rgb(175,79,0)'/%3E%3Crect x='1300' y='1600' width='100' height='100' fill='rgb(175,79,0)'/%3E%3Crect x='1400' y='1600' width='100' height='100' fill='rgb(174,78,0)'/%3E%3Crect x='1500' y='1600' width='100' height='100' fill='rgb(184,83,0)'/%3E%3Crect x='1600' y='1600' width='100' height='100' fill='rgb(178,82,0)'/%3E%3Crect x='1700' y='1600' width='100' height='100' fill='rgb(180,87,0)'/%3E%3Crect x='1800' y='1600' width='100' height='100' fill='rgb(180,87,0)'/%3E%3Crect x='1900' y='1600' width='100' height='100' fill='rgb(178,85,0)'/%3E%3Crect x='2000' y='1600' width='100' height='100' fill='rgb(176,89,0)'/%3E%3Crect x='2100' y='1600' width='100' height='100' fill='rgb(169,84,0)'/%3E%3Crect x='2200' y='1600' width='100' height='100' fill='rgb(162,88,0)'/%3E%3Crect x='2300' y='1600' width='100' height='100' fill='rgb(163,111,66)'/%3E%3Crect x='2400' y='1600' width='100' height='100' fill='rgb(204,199,196)'/%3E%3Crect x='0' y='1700' width='100' height='100' fill='rgb(205,200,197)'/%3E%3Crect x='100' y='1700' width='100' height='100' fill='rgb(177,150,128)'/%3E%3Crect x='200' y='1700' width='100' height='100' fill='rgb(156,82,0)'/%3E%3Crect x='300' y='1700' width='100' height='100' fill='rgb(168,84,0)'/%3E%3Crect x='400' y='1700' width='100' height='100' fill='rgb(178,95,0)'/%3E%3Crect x='500' y='1700' width='100' height='100' fill='rgb(178,95,0)'/%3E%3Crect x='600' y='1700' width='100' height='100' fill='rgb(159,78,0)'/%3E%3Crect x='700' y='1700' width='100' height='100' fill='rgb(178,88,0)'/%3E%3Crect x='800' y='1700' width='100' height='100' fill='rgb(178,85,0)'/%3E%3Crect x='900' y='1700' width='100' height='100' fill='rgb(169,79,0)'/%3E%3Crect x='1000' y='1700' width='100' height='100' fill='rgb(175,81,0)'/%3E%3Crect x='1100' y='1700' width='100' height='100' fill='rgb(172,77,0)'/%3E%3Crect x='1200' y='1700' width='100' height='100' fill='rgb(173,79,0)'/%3E%3Crect x='1300' y='1700' width='100' height='100' fill='rgb(177,81,0)'/%3E%3Crect x='1400' y='1700' width='100' height='100' fill='rgb(177,83,0)'/%3E%3Crect x='1500' y='1700' width='100' height='100' fill='rgb(181,88,0)'/%3E%3Crect x='1600' y='1700' width='100' height='100' fill='rgb(180,87,0)'/%3E%3Crect x='1700' y='1700' width='100' height='100' fill='rgb(171,76,0)'/%3E%3Crect x='1800' y='1700' width='100' height='100' fill='rgb(176,87,0)'/%3E%3Crect x='1900' y='1700' width='100' height='100' fill='rgb(175,88,0)'/%3E%3Crect x='2000' y='1700' width='100' height='100' fill='rgb(171,86,0)'/%3E%3Crect x='2100' y='1700' width='100' height='100' fill='rgb(171,90,0)'/%3E%3Crect x='2200' y='1700' width='100' height='100' fill='rgb(162,99,28)'/%3E%3Crect x='2300' y='1700' width='100' height='100' fill='rgb(206,201,198)'/%3E%3Crect x='2400' y='1700' width='100' height='100' fill='rgb(202,198,193)'/%3E%3C/svg%3E\") no-repeat top center";

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
