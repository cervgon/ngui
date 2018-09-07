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
        $ctrl.bgurl = "https://raw.githubusercontent.com/cervgon/ngui/master/images/monalisa.jpeg";
        $ctrl.prebgcss = "url(\"data:image/svg+xml;charset=UTF-8, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' height='1700' width='2400'%3E%3Crect width='2400' height='1700' fill='%23000'/%3E%3Ccircle cx='50' cy='50' r='45' fill='rgb(107,107,63)'/%3E%3Ccircle cx='150' cy='50' r='45' fill='rgb(114,112,62)'/%3E%3Ccircle cx='250' cy='50' r='45' fill='rgb(124,124,74)'/%3E%3Ccircle cx='350' cy='50' r='45' fill='rgb(129,128,81)'/%3E%3Ccircle cx='450' cy='50' r='45' fill='rgb(142,136,82)'/%3E%3Ccircle cx='550' cy='50' r='45' fill='rgb(146,140,82)'/%3E%3Ccircle cx='650' cy='50' r='45' fill='rgb(149,140,83)'/%3E%3Ccircle cx='750' cy='50' r='45' fill='rgb(154,141,81)'/%3E%3Ccircle cx='850' cy='50' r='45' fill='rgb(161,148,88)'/%3E%3Ccircle cx='950' cy='50' r='45' fill='rgb(161,155,93)'/%3E%3Ccircle cx='1050' cy='50' r='45' fill='rgb(150,143,90)'/%3E%3Ccircle cx='1150' cy='50' r='45' fill='rgb(139,127,86)'/%3E%3Ccircle cx='1250' cy='50' r='45' fill='rgb(137,125,88)'/%3E%3Ccircle cx='1350' cy='50' r='45' fill='rgb(153,139,95)'/%3E%3Ccircle cx='1450' cy='50' r='45' fill='rgb(173,159,107)'/%3E%3Ccircle cx='1550' cy='50' r='45' fill='rgb(190,179,122)'/%3E%3Ccircle cx='1650' cy='50' r='45' fill='rgb(195,183,122)'/%3E%3Ccircle cx='1750' cy='50' r='45' fill='rgb(193,176,116)'/%3E%3Ccircle cx='1850' cy='50' r='45' fill='rgb(197,178,121)'/%3E%3Ccircle cx='1950' cy='50' r='45' fill='rgb(200,183,127)'/%3E%3Ccircle cx='2050' cy='50' r='45' fill='rgb(202,192,139)'/%3E%3Ccircle cx='2150' cy='50' r='45' fill='rgb(204,199,147)'/%3E%3Ccircle cx='2250' cy='50' r='45' fill='rgb(206,199,143)'/%3E%3Ccircle cx='2350' cy='50' r='45' fill='rgb(194,186,132)'/%3E%3Ccircle cx='50' cy='150' r='45' fill='rgb(113,118,71)'/%3E%3Ccircle cx='150' cy='150' r='45' fill='rgb(124,121,72)'/%3E%3Ccircle cx='250' cy='150' r='45' fill='rgb(138,130,75)'/%3E%3Ccircle cx='350' cy='150' r='45' fill='rgb(145,135,82)'/%3E%3Ccircle cx='450' cy='150' r='45' fill='rgb(152,142,86)'/%3E%3Ccircle cx='550' cy='150' r='45' fill='rgb(160,150,91)'/%3E%3Ccircle cx='650' cy='150' r='45' fill='rgb(163,151,88)'/%3E%3Ccircle cx='750' cy='150' r='45' fill='rgb(169,152,86)'/%3E%3Ccircle cx='850' cy='150' r='45' fill='rgb(174,159,98)'/%3E%3Ccircle cx='950' cy='150' r='45' fill='rgb(123,111,70)'/%3E%3Ccircle cx='1050' cy='150' r='45' fill='rgb(84,63,35)'/%3E%3Ccircle cx='1150' cy='150' r='45' fill='rgb(54,35,21)'/%3E%3Ccircle cx='1250' cy='150' r='45' fill='rgb(31,23,18)'/%3E%3Ccircle cx='1350' cy='150' r='45' fill='rgb(40,28,20)'/%3E%3Ccircle cx='1450' cy='150' r='45' fill='rgb(74,58,40)'/%3E%3Ccircle cx='1550' cy='150' r='45' fill='rgb(153,137,88)'/%3E%3Ccircle cx='1650' cy='150' r='45' fill='rgb(201,187,124)'/%3E%3Ccircle cx='1750' cy='150' r='45' fill='rgb(197,182,122)'/%3E%3Ccircle cx='1850' cy='150' r='45' fill='rgb(200,187,129)'/%3E%3Ccircle cx='1950' cy='150' r='45' fill='rgb(207,196,138)'/%3E%3Ccircle cx='2050' cy='150' r='45' fill='rgb(212,203,137)'/%3E%3Ccircle cx='2150' cy='150' r='45' fill='rgb(214,206,141)'/%3E%3Ccircle cx='2250' cy='150' r='45' fill='rgb(212,204,140)'/%3E%3Ccircle cx='2350' cy='150' r='45' fill='rgb(200,192,131)'/%3E%3Ccircle cx='50' cy='250' r='45' fill='rgb(128,132,84)'/%3E%3Ccircle cx='150' cy='250' r='45' fill='rgb(137,137,83)'/%3E%3Ccircle cx='250' cy='250' r='45' fill='rgb(144,139,84)'/%3E%3Ccircle cx='350' cy='250' r='45' fill='rgb(154,146,91)'/%3E%3Ccircle cx='450' cy='250' r='45' fill='rgb(164,152,93)'/%3E%3Ccircle cx='550' cy='250' r='45' fill='rgb(169,158,99)'/%3E%3Ccircle cx='650' cy='250' r='45' fill='rgb(172,158,94)'/%3E%3Ccircle cx='750' cy='250' r='45' fill='rgb(181,166,103)'/%3E%3Ccircle cx='850' cy='250' r='45' fill='rgb(149,135,93)'/%3E%3Ccircle cx='950' cy='250' r='45' fill='rgb(114,85,47)'/%3E%3Ccircle cx='1050' cy='250' r='45' fill='rgb(192,158,90)'/%3E%3Ccircle cx='1150' cy='250' r='45' fill='rgb(189,149,82)'/%3E%3Ccircle cx='1250' cy='250' r='45' fill='rgb(113,79,39)'/%3E%3Ccircle cx='1350' cy='250' r='45' fill='rgb(33,22,15)'/%3E%3Ccircle cx='1450' cy='250' r='45' fill='rgb(19,14,12)'/%3E%3Ccircle cx='1550' cy='250' r='45' fill='rgb(38,29,23)'/%3E%3Ccircle cx='1650' cy='250' r='45' fill='rgb(171,158,107)'/%3E%3Ccircle cx='1750' cy='250' r='45' fill='rgb(206,197,143)'/%3E%3Ccircle cx='1850' cy='250' r='45' fill='rgb(210,199,142)'/%3E%3Ccircle cx='1950' cy='250' r='45' fill='rgb(216,205,147)'/%3E%3Ccircle cx='2050' cy='250' r='45' fill='rgb(223,214,150)'/%3E%3Ccircle cx='2150' cy='250' r='45' fill='rgb(219,213,153)'/%3E%3Ccircle cx='2250' cy='250' r='45' fill='rgb(215,208,145)'/%3E%3Ccircle cx='2350' cy='250' r='45' fill='rgb(206,196,134)'/%3E%3Ccircle cx='50' cy='350' r='45' fill='rgb(131,134,80)'/%3E%3Ccircle cx='150' cy='350' r='45' fill='rgb(140,141,83)'/%3E%3Ccircle cx='250' cy='350' r='45' fill='rgb(159,155,96)'/%3E%3Ccircle cx='350' cy='350' r='45' fill='rgb(171,159,98)'/%3E%3Ccircle cx='450' cy='350' r='45' fill='rgb(176,165,98)'/%3E%3Ccircle cx='550' cy='350' r='45' fill='rgb(179,167,106)'/%3E%3Ccircle cx='650' cy='350' r='45' fill='rgb(184,171,110)'/%3E%3Ccircle cx='750' cy='350' r='45' fill='rgb(178,170,118)'/%3E%3Ccircle cx='850' cy='350' r='45' fill='rgb(106,83,51)'/%3E%3Ccircle cx='950' cy='350' r='45' fill='rgb(219,178,102)'/%3E%3Ccircle cx='1050' cy='350' r='45' fill='rgb(236,206,128)'/%3E%3Ccircle cx='1150' cy='350' r='45' fill='rgb(238,201,114)'/%3E%3Ccircle cx='1250' cy='350' r='45' fill='rgb(208,157,71)'/%3E%3Ccircle cx='1350' cy='350' r='45' fill='rgb(104,73,30)'/%3E%3Ccircle cx='1450' cy='350' r='45' fill='rgb(27,20,12)'/%3E%3Ccircle cx='1550' cy='350' r='45' fill='rgb(19,15,13)'/%3E%3Ccircle cx='1650' cy='350' r='45' fill='rgb(96,88,60)'/%3E%3Ccircle cx='1750' cy='350' r='45' fill='rgb(194,186,130)'/%3E%3Ccircle cx='1850' cy='350' r='45' fill='rgb(209,200,140)'/%3E%3Ccircle cx='1950' cy='350' r='45' fill='rgb(219,212,145)'/%3E%3Ccircle cx='2050' cy='350' r='45' fill='rgb(225,216,146)'/%3E%3Ccircle cx='2150' cy='350' r='45' fill='rgb(231,225,162)'/%3E%3Ccircle cx='2250' cy='350' r='45' fill='rgb(226,221,156)'/%3E%3Ccircle cx='2350' cy='350' r='45' fill='rgb(211,200,133)'/%3E%3Ccircle cx='50' cy='450' r='45' fill='rgb(114,117,68)'/%3E%3Ccircle cx='150' cy='450' r='45' fill='rgb(123,118,65)'/%3E%3Ccircle cx='250' cy='450' r='45' fill='rgb(157,149,90)'/%3E%3Ccircle cx='350' cy='450' r='45' fill='rgb(168,159,94)'/%3E%3Ccircle cx='450' cy='450' r='45' fill='rgb(180,172,107)'/%3E%3Ccircle cx='550' cy='450' r='45' fill='rgb(187,176,117)'/%3E%3Ccircle cx='650' cy='450' r='45' fill='rgb(196,185,122)'/%3E%3Ccircle cx='750' cy='450' r='45' fill='rgb(152,138,90)'/%3E%3Ccircle cx='850' cy='450' r='45' fill='rgb(106,78,43)'/%3E%3Ccircle cx='950' cy='450' r='45' fill='rgb(223,179,108)'/%3E%3Ccircle cx='1050' cy='450' r='45' fill='rgb(235,198,115)'/%3E%3Ccircle cx='1150' cy='450' r='45' fill='rgb(233,188,103)'/%3E%3Ccircle cx='1250' cy='450' r='45' fill='rgb(222,169,86)'/%3E%3Ccircle cx='1350' cy='450' r='45' fill='rgb(172,124,55)'/%3E%3Ccircle cx='1450' cy='450' r='45' fill='rgb(46,33,18)'/%3E%3Ccircle cx='1550' cy='450' r='45' fill='rgb(16,10,10)'/%3E%3Ccircle cx='1650' cy='450' r='45' fill='rgb(50,45,31)'/%3E%3Ccircle cx='1750' cy='450' r='45' fill='rgb(142,134,82)'/%3E%3Ccircle cx='1850' cy='450' r='45' fill='rgb(171,167,107)'/%3E%3Ccircle cx='1950' cy='450' r='45' fill='rgb(185,195,126)'/%3E%3Ccircle cx='2050' cy='450' r='45' fill='rgb(217,213,137)'/%3E%3Ccircle cx='2150' cy='450' r='45' fill='rgb(231,227,150)'/%3E%3Ccircle cx='2250' cy='450' r='45' fill='rgb(231,227,149)'/%3E%3Ccircle cx='2350' cy='450' r='45' fill='rgb(207,197,127)'/%3E%3Ccircle cx='50' cy='550' r='45' fill='rgb(61,62,34)'/%3E%3Ccircle cx='150' cy='550' r='45' fill='rgb(87,82,39)'/%3E%3Ccircle cx='250' cy='550' r='45' fill='rgb(105,94,44)'/%3E%3Ccircle cx='350' cy='550' r='45' fill='rgb(111,101,49)'/%3E%3Ccircle cx='450' cy='550' r='45' fill='rgb(118,117,63)'/%3E%3Ccircle cx='550' cy='550' r='45' fill='rgb(173,168,108)'/%3E%3Ccircle cx='650' cy='550' r='45' fill='rgb(185,181,121)'/%3E%3Ccircle cx='750' cy='550' r='45' fill='rgb(118,107,65)'/%3E%3Ccircle cx='850' cy='550' r='45' fill='rgb(80,55,31)'/%3E%3Ccircle cx='950' cy='550' r='45' fill='rgb(169,121,60)'/%3E%3Ccircle cx='1050' cy='550' r='45' fill='rgb(192,143,67)'/%3E%3Ccircle cx='1150' cy='550' r='45' fill='rgb(164,116,46)'/%3E%3Ccircle cx='1250' cy='550' r='45' fill='rgb(149,106,46)'/%3E%3Ccircle cx='1350' cy='550' r='45' fill='rgb(123,88,37)'/%3E%3Ccircle cx='1450' cy='550' r='45' fill='rgb(49,34,18)'/%3E%3Ccircle cx='1550' cy='550' r='45' fill='rgb(18,12,12)'/%3E%3Ccircle cx='1650' cy='550' r='45' fill='rgb(33,27,22)'/%3E%3Ccircle cx='1750' cy='550' r='45' fill='rgb(93,93,55)'/%3E%3Ccircle cx='1850' cy='550' r='45' fill='rgb(129,136,90)'/%3E%3Ccircle cx='1950' cy='550' r='45' fill='rgb(138,155,97)'/%3E%3Ccircle cx='2050' cy='550' r='45' fill='rgb(182,184,107)'/%3E%3Ccircle cx='2150' cy='550' r='45' fill='rgb(230,224,142)'/%3E%3Ccircle cx='2250' cy='550' r='45' fill='rgb(228,224,148)'/%3E%3Ccircle cx='2350' cy='550' r='45' fill='rgb(201,194,119)'/%3E%3Ccircle cx='50' cy='650' r='45' fill='rgb(51,58,36)'/%3E%3Ccircle cx='150' cy='650' r='45' fill='rgb(66,72,40)'/%3E%3Ccircle cx='250' cy='650' r='45' fill='rgb(73,69,35)'/%3E%3Ccircle cx='350' cy='650' r='45' fill='rgb(69,67,34)'/%3E%3Ccircle cx='450' cy='650' r='45' fill='rgb(76,76,38)'/%3E%3Ccircle cx='550' cy='650' r='45' fill='rgb(112,108,61)'/%3E%3Ccircle cx='650' cy='650' r='45' fill='rgb(111,108,64)'/%3E%3Ccircle cx='750' cy='650' r='45' fill='rgb(79,70,46)'/%3E%3Ccircle cx='850' cy='650' r='45' fill='rgb(95,69,39)'/%3E%3Ccircle cx='950' cy='650' r='45' fill='rgb(203,157,83)'/%3E%3Ccircle cx='1050' cy='650' r='45' fill='rgb(203,156,78)'/%3E%3Ccircle cx='1150' cy='650' r='45' fill='rgb(208,157,77)'/%3E%3Ccircle cx='1250' cy='650' r='45' fill='rgb(209,167,88)'/%3E%3Ccircle cx='1350' cy='650' r='45' fill='rgb(184,137,61)'/%3E%3Ccircle cx='1450' cy='650' r='45' fill='rgb(52,36,17)'/%3E%3Ccircle cx='1550' cy='650' r='45' fill='rgb(16,10,10)'/%3E%3Ccircle cx='1650' cy='650' r='45' fill='rgb(25,21,15)'/%3E%3Ccircle cx='1750' cy='650' r='45' fill='rgb(90,91,55)'/%3E%3Ccircle cx='1850' cy='650' r='45' fill='rgb(118,126,79)'/%3E%3Ccircle cx='1950' cy='650' r='45' fill='rgb(117,136,80)'/%3E%3Ccircle cx='2050' cy='650' r='45' fill='rgb(142,157,92)'/%3E%3Ccircle cx='2150' cy='650' r='45' fill='rgb(207,208,132)'/%3E%3Ccircle cx='2250' cy='650' r='45' fill='rgb(209,206,127)'/%3E%3Ccircle cx='2350' cy='650' r='45' fill='rgb(188,180,108)'/%3E%3Ccircle cx='50' cy='750' r='45' fill='rgb(25,30,24)'/%3E%3Ccircle cx='150' cy='750' r='45' fill='rgb(37,44,27)'/%3E%3Ccircle cx='250' cy='750' r='45' fill='rgb(49,53,31)'/%3E%3Ccircle cx='350' cy='750' r='45' fill='rgb(56,60,31)'/%3E%3Ccircle cx='450' cy='750' r='45' fill='rgb(49,55,31)'/%3E%3Ccircle cx='550' cy='750' r='45' fill='rgb(50,55,34)'/%3E%3Ccircle cx='650' cy='750' r='45' fill='rgb(49,48,31)'/%3E%3Ccircle cx='750' cy='750' r='45' fill='rgb(30,23,21)'/%3E%3Ccircle cx='850' cy='750' r='45' fill='rgb(73,48,28)'/%3E%3Ccircle cx='950' cy='750' r='45' fill='rgb(220,169,92)'/%3E%3Ccircle cx='1050' cy='750' r='45' fill='rgb(208,161,82)'/%3E%3Ccircle cx='1150' cy='750' r='45' fill='rgb(201,152,80)'/%3E%3Ccircle cx='1250' cy='750' r='45' fill='rgb(224,174,91)'/%3E%3Ccircle cx='1350' cy='750' r='45' fill='rgb(148,105,45)'/%3E%3Ccircle cx='1450' cy='750' r='45' fill='rgb(33,20,11)'/%3E%3Ccircle cx='1550' cy='750' r='45' fill='rgb(17,11,11)'/%3E%3Ccircle cx='1650' cy='750' r='45' fill='rgb(18,13,11)'/%3E%3Ccircle cx='1750' cy='750' r='45' fill='rgb(61,63,43)'/%3E%3Ccircle cx='1850' cy='750' r='45' fill='rgb(94,103,67)'/%3E%3Ccircle cx='1950' cy='750' r='45' fill='rgb(107,125,77)'/%3E%3Ccircle cx='2050' cy='750' r='45' fill='rgb(124,144,91)'/%3E%3Ccircle cx='2150' cy='750' r='45' fill='rgb(150,168,102)'/%3E%3Ccircle cx='2250' cy='750' r='45' fill='rgb(143,158,93)'/%3E%3Ccircle cx='2350' cy='750' r='45' fill='rgb(123,132,78)'/%3E%3Ccircle cx='50' cy='850' r='45' fill='rgb(16,19,20)'/%3E%3Ccircle cx='150' cy='850' r='45' fill='rgb(28,34,25)'/%3E%3Ccircle cx='250' cy='850' r='45' fill='rgb(35,39,27)'/%3E%3Ccircle cx='350' cy='850' r='45' fill='rgb(46,50,31)'/%3E%3Ccircle cx='450' cy='850' r='45' fill='rgb(47,52,34)'/%3E%3Ccircle cx='550' cy='850' r='45' fill='rgb(44,50,34)'/%3E%3Ccircle cx='650' cy='850' r='45' fill='rgb(36,41,28)'/%3E%3Ccircle cx='750' cy='850' r='45' fill='rgb(21,18,17)'/%3E%3Ccircle cx='850' cy='850' r='45' fill='rgb(27,15,13)'/%3E%3Ccircle cx='950' cy='850' r='45' fill='rgb(170,122,56)'/%3E%3Ccircle cx='1050' cy='850' r='45' fill='rgb(172,124,56)'/%3E%3Ccircle cx='1150' cy='850' r='45' fill='rgb(153,110,48)'/%3E%3Ccircle cx='1250' cy='850' r='45' fill='rgb(192,142,64)'/%3E%3Ccircle cx='1350' cy='850' r='45' fill='rgb(113,80,30)'/%3E%3Ccircle cx='1450' cy='850' r='45' fill='rgb(22,16,9)'/%3E%3Ccircle cx='1550' cy='850' r='45' fill='rgb(11,8,7)'/%3E%3Ccircle cx='1650' cy='850' r='45' fill='rgb(12,9,10)'/%3E%3Ccircle cx='1750' cy='850' r='45' fill='rgb(47,50,35)'/%3E%3Ccircle cx='1850' cy='850' r='45' fill='rgb(77,88,55)'/%3E%3Ccircle cx='1950' cy='850' r='45' fill='rgb(79,94,58)'/%3E%3Ccircle cx='2050' cy='850' r='45' fill='rgb(87,103,64)'/%3E%3Ccircle cx='2150' cy='850' r='45' fill='rgb(98,120,73)'/%3E%3Ccircle cx='2250' cy='850' r='45' fill='rgb(106,124,72)'/%3E%3Ccircle cx='2350' cy='850' r='45' fill='rgb(90,100,59)'/%3E%3Ccircle cx='50' cy='950' r='45' fill='rgb(13,17,18)'/%3E%3Ccircle cx='150' cy='950' r='45' fill='rgb(23,29,21)'/%3E%3Ccircle cx='250' cy='950' r='45' fill='rgb(29,34,24)'/%3E%3Ccircle cx='350' cy='950' r='45' fill='rgb(32,35,25)'/%3E%3Ccircle cx='450' cy='950' r='45' fill='rgb(39,42,32)'/%3E%3Ccircle cx='550' cy='950' r='45' fill='rgb(46,54,36)'/%3E%3Ccircle cx='650' cy='950' r='45' fill='rgb(55,60,36)'/%3E%3Ccircle cx='750' cy='950' r='45' fill='rgb(35,32,22)'/%3E%3Ccircle cx='850' cy='950' r='45' fill='rgb(14,7,12)'/%3E%3Ccircle cx='950' cy='950' r='45' fill='rgb(68,48,25)'/%3E%3Ccircle cx='1050' cy='950' r='45' fill='rgb(189,141,68)'/%3E%3Ccircle cx='1150' cy='950' r='45' fill='rgb(179,131,55)'/%3E%3Ccircle cx='1250' cy='950' r='45' fill='rgb(143,104,40)'/%3E%3Ccircle cx='1350' cy='950' r='45' fill='rgb(66,49,20)'/%3E%3Ccircle cx='1450' cy='950' r='45' fill='rgb(15,11,6)'/%3E%3Ccircle cx='1550' cy='950' r='45' fill='rgb(9,8,7)'/%3E%3Ccircle cx='1650' cy='950' r='45' fill='rgb(12,10,9)'/%3E%3Ccircle cx='1750' cy='950' r='45' fill='rgb(56,53,30)'/%3E%3Ccircle cx='1850' cy='950' r='45' fill='rgb(92,95,56)'/%3E%3Ccircle cx='1950' cy='950' r='45' fill='rgb(100,109,61)'/%3E%3Ccircle cx='2050' cy='950' r='45' fill='rgb(86,102,60)'/%3E%3Ccircle cx='2150' cy='950' r='45' fill='rgb(89,109,70)'/%3E%3Ccircle cx='2250' cy='950' r='45' fill='rgb(91,103,62)'/%3E%3Ccircle cx='2350' cy='950' r='45' fill='rgb(88,97,61)'/%3E%3Ccircle cx='50' cy='1050' r='45' fill='rgb(10,13,18)'/%3E%3Ccircle cx='150' cy='1050' r='45' fill='rgb(16,18,19)'/%3E%3Ccircle cx='250' cy='1050' r='45' fill='rgb(27,29,24)'/%3E%3Ccircle cx='350' cy='1050' r='45' fill='rgb(31,32,23)'/%3E%3Ccircle cx='450' cy='1050' r='45' fill='rgb(43,45,32)'/%3E%3Ccircle cx='550' cy='1050' r='45' fill='rgb(59,62,44)'/%3E%3Ccircle cx='650' cy='1050' r='45' fill='rgb(78,79,48)'/%3E%3Ccircle cx='750' cy='1050' r='45' fill='rgb(50,46,28)'/%3E%3Ccircle cx='850' cy='1050' r='45' fill='rgb(15,9,11)'/%3E%3Ccircle cx='950' cy='1050' r='45' fill='rgb(6,5,8)'/%3E%3Ccircle cx='1050' cy='1050' r='45' fill='rgb(57,41,24)'/%3E%3Ccircle cx='1150' cy='1050' r='45' fill='rgb(82,59,30)'/%3E%3Ccircle cx='1250' cy='1050' r='45' fill='rgb(45,30,16)'/%3E%3Ccircle cx='1350' cy='1050' r='45' fill='rgb(38,27,16)'/%3E%3Ccircle cx='1450' cy='1050' r='45' fill='rgb(30,20,13)'/%3E%3Ccircle cx='1550' cy='1050' r='45' fill='rgb(14,9,9)'/%3E%3Ccircle cx='1650' cy='1050' r='45' fill='rgb(11,9,12)'/%3E%3Ccircle cx='1750' cy='1050' r='45' fill='rgb(36,36,27)'/%3E%3Ccircle cx='1850' cy='1050' r='45' fill='rgb(82,86,58)'/%3E%3Ccircle cx='1950' cy='1050' r='45' fill='rgb(93,98,59)'/%3E%3Ccircle cx='2050' cy='1050' r='45' fill='rgb(85,90,58)'/%3E%3Ccircle cx='2150' cy='1050' r='45' fill='rgb(83,88,60)'/%3E%3Ccircle cx='2250' cy='1050' r='45' fill='rgb(83,87,52)'/%3E%3Ccircle cx='2350' cy='1050' r='45' fill='rgb(88,95,57)'/%3E%3Ccircle cx='50' cy='1150' r='45' fill='rgb(9,12,19)'/%3E%3Ccircle cx='150' cy='1150' r='45' fill='rgb(11,16,16)'/%3E%3Ccircle cx='250' cy='1150' r='45' fill='rgb(30,34,26)'/%3E%3Ccircle cx='350' cy='1150' r='45' fill='rgb(51,53,35)'/%3E%3Ccircle cx='450' cy='1150' r='45' fill='rgb(67,69,46)'/%3E%3Ccircle cx='550' cy='1150' r='45' fill='rgb(79,82,57)'/%3E%3Ccircle cx='650' cy='1150' r='45' fill='rgb(91,90,57)'/%3E%3Ccircle cx='750' cy='1150' r='45' fill='rgb(57,55,35)'/%3E%3Ccircle cx='850' cy='1150' r='45' fill='rgb(15,9,13)'/%3E%3Ccircle cx='950' cy='1150' r='45' fill='rgb(5,4,7)'/%3E%3Ccircle cx='1050' cy='1150' r='45' fill='rgb(23,18,16)'/%3E%3Ccircle cx='1150' cy='1150' r='45' fill='rgb(113,90,43)'/%3E%3Ccircle cx='1250' cy='1150' r='45' fill='rgb(91,71,33)'/%3E%3Ccircle cx='1350' cy='1150' r='45' fill='rgb(106,82,34)'/%3E%3Ccircle cx='1450' cy='1150' r='45' fill='rgb(99,73,32)'/%3E%3Ccircle cx='1550' cy='1150' r='45' fill='rgb(27,17,14)'/%3E%3Ccircle cx='1650' cy='1150' r='45' fill='rgb(21,15,14)'/%3E%3Ccircle cx='1750' cy='1150' r='45' fill='rgb(24,21,19)'/%3E%3Ccircle cx='1850' cy='1150' r='45' fill='rgb(69,69,46)'/%3E%3Ccircle cx='1950' cy='1150' r='45' fill='rgb(95,96,54)'/%3E%3Ccircle cx='2050' cy='1150' r='45' fill='rgb(105,106,65)'/%3E%3Ccircle cx='2150' cy='1150' r='45' fill='rgb(113,109,61)'/%3E%3Ccircle cx='2250' cy='1150' r='45' fill='rgb(131,115,55)'/%3E%3Ccircle cx='2350' cy='1150' r='45' fill='rgb(105,100,50)'/%3E%3Ccircle cx='50' cy='1250' r='45' fill='rgb(20,24,27)'/%3E%3Ccircle cx='150' cy='1250' r='45' fill='rgb(28,35,27)'/%3E%3Ccircle cx='250' cy='1250' r='45' fill='rgb(50,55,35)'/%3E%3Ccircle cx='350' cy='1250' r='45' fill='rgb(48,49,29)'/%3E%3Ccircle cx='450' cy='1250' r='45' fill='rgb(40,41,26)'/%3E%3Ccircle cx='550' cy='1250' r='45' fill='rgb(40,43,29)'/%3E%3Ccircle cx='650' cy='1250' r='45' fill='rgb(39,42,29)'/%3E%3Ccircle cx='750' cy='1250' r='45' fill='rgb(18,21,15)'/%3E%3Ccircle cx='850' cy='1250' r='45' fill='rgb(6,5,9)'/%3E%3Ccircle cx='950' cy='1250' r='45' fill='rgb(16,12,13)'/%3E%3Ccircle cx='1050' cy='1250' r='45' fill='rgb(86,68,35)'/%3E%3Ccircle cx='1150' cy='1250' r='45' fill='rgb(183,144,69)'/%3E%3Ccircle cx='1250' cy='1250' r='45' fill='rgb(193,150,65)'/%3E%3Ccircle cx='1350' cy='1250' r='45' fill='rgb(199,155,68)'/%3E%3Ccircle cx='1450' cy='1250' r='45' fill='rgb(181,136,57)'/%3E%3Ccircle cx='1550' cy='1250' r='45' fill='rgb(65,44,22)'/%3E%3Ccircle cx='1650' cy='1250' r='45' fill='rgb(53,37,24)'/%3E%3Ccircle cx='1750' cy='1250' r='45' fill='rgb(21,16,17)'/%3E%3Ccircle cx='1850' cy='1250' r='45' fill='rgb(28,25,22)'/%3E%3Ccircle cx='1950' cy='1250' r='45' fill='rgb(60,58,31)'/%3E%3Ccircle cx='2050' cy='1250' r='45' fill='rgb(81,80,38)'/%3E%3Ccircle cx='2150' cy='1250' r='45' fill='rgb(129,113,46)'/%3E%3Ccircle cx='2250' cy='1250' r='45' fill='rgb(147,129,55)'/%3E%3Ccircle cx='2350' cy='1250' r='45' fill='rgb(112,111,55)'/%3E%3Ccircle cx='50' cy='1350' r='45' fill='rgb(22,23,22)'/%3E%3Ccircle cx='150' cy='1350' r='45' fill='rgb(26,27,20)'/%3E%3Ccircle cx='250' cy='1350' r='45' fill='rgb(47,45,25)'/%3E%3Ccircle cx='350' cy='1350' r='45' fill='rgb(53,48,28)'/%3E%3Ccircle cx='450' cy='1350' r='45' fill='rgb(43,41,23)'/%3E%3Ccircle cx='550' cy='1350' r='45' fill='rgb(20,21,17)'/%3E%3Ccircle cx='650' cy='1350' r='45' fill='rgb(18,17,16)'/%3E%3Ccircle cx='750' cy='1350' r='45' fill='rgb(6,7,9)'/%3E%3Ccircle cx='850' cy='1350' r='45' fill='rgb(16,12,12)'/%3E%3Ccircle cx='950' cy='1350' r='45' fill='rgb(126,98,45)'/%3E%3Ccircle cx='1050' cy='1350' r='45' fill='rgb(208,171,89)'/%3E%3Ccircle cx='1150' cy='1350' r='45' fill='rgb(226,185,96)'/%3E%3Ccircle cx='1250' cy='1350' r='45' fill='rgb(227,185,91)'/%3E%3Ccircle cx='1350' cy='1350' r='45' fill='rgb(228,187,94)'/%3E%3Ccircle cx='1450' cy='1350' r='45' fill='rgb(204,158,66)'/%3E%3Ccircle cx='1550' cy='1350' r='45' fill='rgb(94,62,30)'/%3E%3Ccircle cx='1650' cy='1350' r='45' fill='rgb(64,45,27)'/%3E%3Ccircle cx='1750' cy='1350' r='45' fill='rgb(30,23,17)'/%3E%3Ccircle cx='1850' cy='1350' r='45' fill='rgb(35,27,23)'/%3E%3Ccircle cx='1950' cy='1350' r='45' fill='rgb(64,58,33)'/%3E%3Ccircle cx='2050' cy='1350' r='45' fill='rgb(142,130,62)'/%3E%3Ccircle cx='2150' cy='1350' r='45' fill='rgb(162,144,60)'/%3E%3Ccircle cx='2250' cy='1350' r='45' fill='rgb(144,130,52)'/%3E%3Ccircle cx='2350' cy='1350' r='45' fill='rgb(120,113,51)'/%3E%3Ccircle cx='50' cy='1450' r='45' fill='rgb(23,24,21)'/%3E%3Ccircle cx='150' cy='1450' r='45' fill='rgb(36,33,24)'/%3E%3Ccircle cx='250' cy='1450' r='45' fill='rgb(79,70,32)'/%3E%3Ccircle cx='350' cy='1450' r='45' fill='rgb(85,77,30)'/%3E%3Ccircle cx='450' cy='1450' r='45' fill='rgb(57,54,28)'/%3E%3Ccircle cx='550' cy='1450' r='45' fill='rgb(45,43,25)'/%3E%3Ccircle cx='650' cy='1450' r='45' fill='rgb(21,19,16)'/%3E%3Ccircle cx='750' cy='1450' r='45' fill='rgb(11,11,9)'/%3E%3Ccircle cx='850' cy='1450' r='45' fill='rgb(82,57,32)'/%3E%3Ccircle cx='950' cy='1450' r='45' fill='rgb(211,172,87)'/%3E%3Ccircle cx='1050' cy='1450' r='45' fill='rgb(234,199,109)'/%3E%3Ccircle cx='1150' cy='1450' r='45' fill='rgb(233,197,105)'/%3E%3Ccircle cx='1250' cy='1450' r='45' fill='rgb(235,198,104)'/%3E%3Ccircle cx='1350' cy='1450' r='45' fill='rgb(232,191,99)'/%3E%3Ccircle cx='1450' cy='1450' r='45' fill='rgb(198,148,62)'/%3E%3Ccircle cx='1550' cy='1450' r='45' fill='rgb(96,63,31)'/%3E%3Ccircle cx='1650' cy='1450' r='45' fill='rgb(59,43,24)'/%3E%3Ccircle cx='1750' cy='1450' r='45' fill='rgb(70,55,27)'/%3E%3Ccircle cx='1850' cy='1450' r='45' fill='rgb(88,70,38)'/%3E%3Ccircle cx='1950' cy='1450' r='45' fill='rgb(42,35,23)'/%3E%3Ccircle cx='2050' cy='1450' r='45' fill='rgb(66,61,28)'/%3E%3Ccircle cx='2150' cy='1450' r='45' fill='rgb(128,114,51)'/%3E%3Ccircle cx='2250' cy='1450' r='45' fill='rgb(160,139,66)'/%3E%3Ccircle cx='2350' cy='1450' r='45' fill='rgb(170,147,70)'/%3E%3Ccircle cx='50' cy='1550' r='45' fill='rgb(25,25,22)'/%3E%3Ccircle cx='150' cy='1550' r='45' fill='rgb(25,24,20)'/%3E%3Ccircle cx='250' cy='1550' r='45' fill='rgb(38,33,20)'/%3E%3Ccircle cx='350' cy='1550' r='45' fill='rgb(77,69,33)'/%3E%3Ccircle cx='450' cy='1550' r='45' fill='rgb(81,72,30)'/%3E%3Ccircle cx='550' cy='1550' r='45' fill='rgb(35,32,19)'/%3E%3Ccircle cx='650' cy='1550' r='45' fill='rgb(3,5,9)'/%3E%3Ccircle cx='750' cy='1550' r='45' fill='rgb(38,31,19)'/%3E%3Ccircle cx='850' cy='1550' r='45' fill='rgb(179,140,68)'/%3E%3Ccircle cx='950' cy='1550' r='45' fill='rgb(229,197,102)'/%3E%3Ccircle cx='1050' cy='1550' r='45' fill='rgb(234,201,107)'/%3E%3Ccircle cx='1150' cy='1550' r='45' fill='rgb(238,207,117)'/%3E%3Ccircle cx='1250' cy='1550' r='45' fill='rgb(237,208,117)'/%3E%3Ccircle cx='1350' cy='1550' r='45' fill='rgb(235,199,102)'/%3E%3Ccircle cx='1450' cy='1550' r='45' fill='rgb(193,144,59)'/%3E%3Ccircle cx='1550' cy='1550' r='45' fill='rgb(111,81,35)'/%3E%3Ccircle cx='1650' cy='1550' r='45' fill='rgb(117,89,37)'/%3E%3Ccircle cx='1750' cy='1550' r='45' fill='rgb(116,91,42)'/%3E%3Ccircle cx='1850' cy='1550' r='45' fill='rgb(76,62,34)'/%3E%3Ccircle cx='1950' cy='1550' r='45' fill='rgb(28,25,18)'/%3E%3Ccircle cx='2050' cy='1550' r='45' fill='rgb(8,10,13)'/%3E%3Ccircle cx='2150' cy='1550' r='45' fill='rgb(35,26,19)'/%3E%3Ccircle cx='2250' cy='1550' r='45' fill='rgb(72,53,31)'/%3E%3Ccircle cx='2350' cy='1550' r='45' fill='rgb(97,82,41)'/%3E%3Ccircle cx='50' cy='1650' r='45' fill='rgb(35,30,24)'/%3E%3Ccircle cx='150' cy='1650' r='45' fill='rgb(54,42,25)'/%3E%3Ccircle cx='250' cy='1650' r='45' fill='rgb(64,50,28)'/%3E%3Ccircle cx='350' cy='1650' r='45' fill='rgb(82,69,32)'/%3E%3Ccircle cx='450' cy='1650' r='45' fill='rgb(64,55,27)'/%3E%3Ccircle cx='550' cy='1650' r='45' fill='rgb(9,12,13)'/%3E%3Ccircle cx='650' cy='1650' r='45' fill='rgb(4,8,12)'/%3E%3Ccircle cx='750' cy='1650' r='45' fill='rgb(39,35,24)'/%3E%3Ccircle cx='850' cy='1650' r='45' fill='rgb(130,104,54)'/%3E%3Ccircle cx='950' cy='1650' r='45' fill='rgb(189,159,82)'/%3E%3Ccircle cx='1050' cy='1650' r='45' fill='rgb(219,186,97)'/%3E%3Ccircle cx='1150' cy='1650' r='45' fill='rgb(233,209,123)'/%3E%3Ccircle cx='1250' cy='1650' r='45' fill='rgb(235,213,126)'/%3E%3Ccircle cx='1350' cy='1650' r='45' fill='rgb(215,185,96)'/%3E%3Ccircle cx='1450' cy='1650' r='45' fill='rgb(140,114,48)'/%3E%3Ccircle cx='1550' cy='1650' r='45' fill='rgb(62,50,26)'/%3E%3Ccircle cx='1650' cy='1650' r='45' fill='rgb(40,34,23)'/%3E%3Ccircle cx='1750' cy='1650' r='45' fill='rgb(20,19,16)'/%3E%3Ccircle cx='1850' cy='1650' r='45' fill='rgb(10,10,15)'/%3E%3Ccircle cx='1950' cy='1650' r='45' fill='rgb(6,7,11)'/%3E%3Ccircle cx='2050' cy='1650' r='45' fill='rgb(7,7,12)'/%3E%3Ccircle cx='2150' cy='1650' r='45' fill='rgb(14,13,19)'/%3E%3Ccircle cx='2250' cy='1650' r='45' fill='rgb(60,42,32)'/%3E%3Ccircle cx='2350' cy='1650' r='45' fill='rgb(83,61,37)'/%3E%3C/svg%3E\") no-repeat center";

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
