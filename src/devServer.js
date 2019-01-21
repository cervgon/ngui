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
        $ctrl.bgurl = "https://raw.githubusercontent.com/cervgon/ngui/master/images/starry-night-image.jpg";
        $ctrl.prebgcss = "url(\"data:image/svg+xml;charset=UTF-8, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' height='2100' width='2700'%3E%3Crect width='2700' height='2100' fill='%23000'/%3E%3Ccircle cx='50' cy='50' r='45' fill='rgb(97,100,139)'/%3E%3Ccircle cx='150' cy='50' r='45' fill='rgb(188,179,103)'/%3E%3Ccircle cx='250' cy='50' r='45' fill='rgb(160,159,130)'/%3E%3Ccircle cx='350' cy='50' r='45' fill='rgb(75,77,144)'/%3E%3Ccircle cx='450' cy='50' r='45' fill='rgb(70,67,112)'/%3E%3Ccircle cx='550' cy='50' r='45' fill='rgb(108,110,129)'/%3E%3Ccircle cx='650' cy='50' r='45' fill='rgb(75,72,126)'/%3E%3Ccircle cx='750' cy='50' r='45' fill='rgb(84,85,140)'/%3E%3Ccircle cx='850' cy='50' r='45' fill='rgb(151,154,129)'/%3E%3Ccircle cx='950' cy='50' r='45' fill='rgb(133,136,148)'/%3E%3Ccircle cx='1050' cy='50' r='45' fill='rgb(152,141,111)'/%3E%3Ccircle cx='1150' cy='50' r='45' fill='rgb(105,108,142)'/%3E%3Ccircle cx='1250' cy='50' r='45' fill='rgb(86,89,141)'/%3E%3Ccircle cx='1350' cy='50' r='45' fill='rgb(78,81,150)'/%3E%3Ccircle cx='1450' cy='50' r='45' fill='rgb(72,75,149)'/%3E%3Ccircle cx='1550' cy='50' r='45' fill='rgb(108,117,159)'/%3E%3Ccircle cx='1650' cy='50' r='45' fill='rgb(133,136,122)'/%3E%3Ccircle cx='1750' cy='50' r='45' fill='rgb(105,107,130)'/%3E%3Ccircle cx='1850' cy='50' r='45' fill='rgb(80,79,134)'/%3E%3Ccircle cx='1950' cy='50' r='45' fill='rgb(78,74,129)'/%3E%3Ccircle cx='2050' cy='50' r='45' fill='rgb(73,69,112)'/%3E%3Ccircle cx='2150' cy='50' r='45' fill='rgb(79,75,122)'/%3E%3Ccircle cx='2250' cy='50' r='45' fill='rgb(91,90,115)'/%3E%3Ccircle cx='2350' cy='50' r='45' fill='rgb(99,105,123)'/%3E%3Ccircle cx='2450' cy='50' r='45' fill='rgb(131,139,108)'/%3E%3Ccircle cx='2550' cy='50' r='45' fill='rgb(139,141,93)'/%3E%3Ccircle cx='2650' cy='50' r='45' fill='rgb(111,112,111)'/%3E%3Ccircle cx='50' cy='150' r='45' fill='rgb(76,83,146)'/%3E%3Ccircle cx='150' cy='150' r='45' fill='rgb(91,101,155)'/%3E%3Ccircle cx='250' cy='150' r='45' fill='rgb(89,94,151)'/%3E%3Ccircle cx='350' cy='150' r='45' fill='rgb(69,73,142)'/%3E%3Ccircle cx='450' cy='150' r='45' fill='rgb(74,60,78)'/%3E%3Ccircle cx='550' cy='150' r='45' fill='rgb(65,67,135)'/%3E%3Ccircle cx='650' cy='150' r='45' fill='rgb(72,76,153)'/%3E%3Ccircle cx='750' cy='150' r='45' fill='rgb(79,85,161)'/%3E%3Ccircle cx='850' cy='150' r='45' fill='rgb(75,85,166)'/%3E%3Ccircle cx='950' cy='150' r='45' fill='rgb(68,75,157)'/%3E%3Ccircle cx='1050' cy='150' r='45' fill='rgb(86,92,141)'/%3E%3Ccircle cx='1150' cy='150' r='45' fill='rgb(67,75,138)'/%3E%3Ccircle cx='1250' cy='150' r='45' fill='rgb(75,86,161)'/%3E%3Ccircle cx='1350' cy='150' r='45' fill='rgb(71,79,155)'/%3E%3Ccircle cx='1450' cy='150' r='45' fill='rgb(77,82,141)'/%3E%3Ccircle cx='1550' cy='150' r='45' fill='rgb(148,156,158)'/%3E%3Ccircle cx='1650' cy='150' r='45' fill='rgb(185,173,89)'/%3E%3Ccircle cx='1750' cy='150' r='45' fill='rgb(141,139,116)'/%3E%3Ccircle cx='1850' cy='150' r='45' fill='rgb(70,73,127)'/%3E%3Ccircle cx='1950' cy='150' r='45' fill='rgb(65,65,115)'/%3E%3Ccircle cx='2050' cy='150' r='45' fill='rgb(71,73,130)'/%3E%3Ccircle cx='2150' cy='150' r='45' fill='rgb(85,93,151)'/%3E%3Ccircle cx='2250' cy='150' r='45' fill='rgb(127,141,119)'/%3E%3Ccircle cx='2350' cy='150' r='45' fill='rgb(180,181,94)'/%3E%3Ccircle cx='2450' cy='150' r='45' fill='rgb(227,203,77)'/%3E%3Ccircle cx='2550' cy='150' r='45' fill='rgb(226,203,78)'/%3E%3Ccircle cx='2650' cy='150' r='45' fill='rgb(185,182,101)'/%3E%3Ccircle cx='50' cy='250' r='45' fill='rgb(69,83,151)'/%3E%3Ccircle cx='150' cy='250' r='45' fill='rgb(63,83,170)'/%3E%3Ccircle cx='250' cy='250' r='45' fill='rgb(65,77,151)'/%3E%3Ccircle cx='350' cy='250' r='45' fill='rgb(69,74,128)'/%3E%3Ccircle cx='450' cy='250' r='45' fill='rgb(98,84,78)'/%3E%3Ccircle cx='550' cy='250' r='45' fill='rgb(164,150,94)'/%3E%3Ccircle cx='650' cy='250' r='45' fill='rgb(98,98,127)'/%3E%3Ccircle cx='750' cy='250' r='45' fill='rgb(64,77,152)'/%3E%3Ccircle cx='850' cy='250' r='45' fill='rgb(73,80,141)'/%3E%3Ccircle cx='950' cy='250' r='45' fill='rgb(84,90,137)'/%3E%3Ccircle cx='1050' cy='250' r='45' fill='rgb(82,95,147)'/%3E%3Ccircle cx='1150' cy='250' r='45' fill='rgb(93,95,118)'/%3E%3Ccircle cx='1250' cy='250' r='45' fill='rgb(99,102,126)'/%3E%3Ccircle cx='1350' cy='250' r='45' fill='rgb(83,87,130)'/%3E%3Ccircle cx='1450' cy='250' r='45' fill='rgb(72,81,140)'/%3E%3Ccircle cx='1550' cy='250' r='45' fill='rgb(86,92,139)'/%3E%3Ccircle cx='1650' cy='250' r='45' fill='rgb(108,116,141)'/%3E%3Ccircle cx='1750' cy='250' r='45' fill='rgb(81,90,135)'/%3E%3Ccircle cx='1850' cy='250' r='45' fill='rgb(63,66,115)'/%3E%3Ccircle cx='1950' cy='250' r='45' fill='rgb(63,67,125)'/%3E%3Ccircle cx='2050' cy='250' r='45' fill='rgb(69,76,143)'/%3E%3Ccircle cx='2150' cy='250' r='45' fill='rgb(98,113,158)'/%3E%3Ccircle cx='2250' cy='250' r='45' fill='rgb(167,176,110)'/%3E%3Ccircle cx='2350' cy='250' r='45' fill='rgb(223,202,79)'/%3E%3Ccircle cx='2450' cy='250' r='45' fill='rgb(237,183,56)'/%3E%3Ccircle cx='2550' cy='250' r='45' fill='rgb(235,208,81)'/%3E%3Ccircle cx='2650' cy='250' r='45' fill='rgb(198,190,103)'/%3E%3Ccircle cx='50' cy='350' r='45' fill='rgb(74,93,161)'/%3E%3Ccircle cx='150' cy='350' r='45' fill='rgb(66,83,148)'/%3E%3Ccircle cx='250' cy='350' r='45' fill='rgb(67,81,146)'/%3E%3Ccircle cx='350' cy='350' r='45' fill='rgb(66,75,130)'/%3E%3Ccircle cx='450' cy='350' r='45' fill='rgb(109,102,93)'/%3E%3Ccircle cx='550' cy='350' r='45' fill='rgb(198,169,86)'/%3E%3Ccircle cx='650' cy='350' r='45' fill='rgb(117,118,136)'/%3E%3Ccircle cx='750' cy='350' r='45' fill='rgb(77,92,152)'/%3E%3Ccircle cx='850' cy='350' r='45' fill='rgb(91,103,152)'/%3E%3Ccircle cx='950' cy='350' r='45' fill='rgb(110,123,156)'/%3E%3Ccircle cx='1050' cy='350' r='45' fill='rgb(164,158,149)'/%3E%3Ccircle cx='1150' cy='350' r='45' fill='rgb(163,153,142)'/%3E%3Ccircle cx='1250' cy='350' r='45' fill='rgb(171,161,165)'/%3E%3Ccircle cx='1350' cy='350' r='45' fill='rgb(140,139,158)'/%3E%3Ccircle cx='1450' cy='350' r='45' fill='rgb(124,128,158)'/%3E%3Ccircle cx='1550' cy='350' r='45' fill='rgb(123,125,165)'/%3E%3Ccircle cx='1650' cy='350' r='45' fill='rgb(83,90,134)'/%3E%3Ccircle cx='1750' cy='350' r='45' fill='rgb(75,84,120)'/%3E%3Ccircle cx='1850' cy='350' r='45' fill='rgb(112,123,134)'/%3E%3Ccircle cx='1950' cy='350' r='45' fill='rgb(116,123,139)'/%3E%3Ccircle cx='2050' cy='350' r='45' fill='rgb(83,100,155)'/%3E%3Ccircle cx='2150' cy='350' r='45' fill='rgb(96,114,154)'/%3E%3Ccircle cx='2250' cy='350' r='45' fill='rgb(193,194,116)'/%3E%3Ccircle cx='2350' cy='350' r='45' fill='rgb(235,199,76)'/%3E%3Ccircle cx='2450' cy='350' r='45' fill='rgb(242,184,57)'/%3E%3Ccircle cx='2550' cy='350' r='45' fill='rgb(237,209,79)'/%3E%3Ccircle cx='2650' cy='350' r='45' fill='rgb(209,191,89)'/%3E%3Ccircle cx='50' cy='450' r='45' fill='rgb(112,119,157)'/%3E%3Ccircle cx='150' cy='450' r='45' fill='rgb(76,86,131)'/%3E%3Ccircle cx='250' cy='450' r='45' fill='rgb(63,79,146)'/%3E%3Ccircle cx='350' cy='450' r='45' fill='rgb(63,75,130)'/%3E%3Ccircle cx='450' cy='450' r='45' fill='rgb(74,78,113)'/%3E%3Ccircle cx='550' cy='450' r='45' fill='rgb(97,107,157)'/%3E%3Ccircle cx='650' cy='450' r='45' fill='rgb(99,113,167)'/%3E%3Ccircle cx='750' cy='450' r='45' fill='rgb(117,132,164)'/%3E%3Ccircle cx='850' cy='450' r='45' fill='rgb(123,133,159)'/%3E%3Ccircle cx='950' cy='450' r='45' fill='rgb(144,144,146)'/%3E%3Ccircle cx='1050' cy='450' r='45' fill='rgb(135,137,139)'/%3E%3Ccircle cx='1150' cy='450' r='45' fill='rgb(100,116,145)'/%3E%3Ccircle cx='1250' cy='450' r='45' fill='rgb(111,119,142)'/%3E%3Ccircle cx='1350' cy='450' r='45' fill='rgb(126,134,157)'/%3E%3Ccircle cx='1450' cy='450' r='45' fill='rgb(114,127,165)'/%3E%3Ccircle cx='1550' cy='450' r='45' fill='rgb(116,128,166)'/%3E%3Ccircle cx='1650' cy='450' r='45' fill='rgb(125,129,163)'/%3E%3Ccircle cx='1750' cy='450' r='45' fill='rgb(74,87,128)'/%3E%3Ccircle cx='1850' cy='450' r='45' fill='rgb(176,165,122)'/%3E%3Ccircle cx='1950' cy='450' r='45' fill='rgb(189,173,133)'/%3E%3Ccircle cx='2050' cy='450' r='45' fill='rgb(107,126,152)'/%3E%3Ccircle cx='2150' cy='450' r='45' fill='rgb(81,101,156)'/%3E%3Ccircle cx='2250' cy='450' r='45' fill='rgb(145,157,118)'/%3E%3Ccircle cx='2350' cy='450' r='45' fill='rgb(218,203,92)'/%3E%3Ccircle cx='2450' cy='450' r='45' fill='rgb(235,180,61)'/%3E%3Ccircle cx='2550' cy='450' r='45' fill='rgb(233,175,60)'/%3E%3Ccircle cx='2650' cy='450' r='45' fill='rgb(202,176,90)'/%3E%3Ccircle cx='50' cy='550' r='45' fill='rgb(142,148,169)'/%3E%3Ccircle cx='150' cy='550' r='45' fill='rgb(142,146,172)'/%3E%3Ccircle cx='250' cy='550' r='45' fill='rgb(124,133,161)'/%3E%3Ccircle cx='350' cy='550' r='45' fill='rgb(114,126,164)'/%3E%3Ccircle cx='450' cy='550' r='45' fill='rgb(85,79,81)'/%3E%3Ccircle cx='550' cy='550' r='45' fill='rgb(138,146,176)'/%3E%3Ccircle cx='650' cy='550' r='45' fill='rgb(143,152,176)'/%3E%3Ccircle cx='750' cy='550' r='45' fill='rgb(145,150,169)'/%3E%3Ccircle cx='850' cy='550' r='45' fill='rgb(134,146,172)'/%3E%3Ccircle cx='950' cy='550' r='45' fill='rgb(94,100,125)'/%3E%3Ccircle cx='1050' cy='550' r='45' fill='rgb(82,93,127)'/%3E%3Ccircle cx='1150' cy='550' r='45' fill='rgb(105,117,140)'/%3E%3Ccircle cx='1250' cy='550' r='45' fill='rgb(98,119,162)'/%3E%3Ccircle cx='1350' cy='550' r='45' fill='rgb(97,118,159)'/%3E%3Ccircle cx='1450' cy='550' r='45' fill='rgb(126,138,162)'/%3E%3Ccircle cx='1550' cy='550' r='45' fill='rgb(115,126,159)'/%3E%3Ccircle cx='1650' cy='550' r='45' fill='rgb(99,111,152)'/%3E%3Ccircle cx='1750' cy='550' r='45' fill='rgb(73,95,149)'/%3E%3Ccircle cx='1850' cy='550' r='45' fill='rgb(99,122,140)'/%3E%3Ccircle cx='1950' cy='550' r='45' fill='rgb(121,137,153)'/%3E%3Ccircle cx='2050' cy='550' r='45' fill='rgb(99,120,159)'/%3E%3Ccircle cx='2150' cy='550' r='45' fill='rgb(76,97,163)'/%3E%3Ccircle cx='2250' cy='550' r='45' fill='rgb(92,108,126)'/%3E%3Ccircle cx='2350' cy='550' r='45' fill='rgb(156,161,112)'/%3E%3Ccircle cx='2450' cy='550' r='45' fill='rgb(201,192,101)'/%3E%3Ccircle cx='2550' cy='550' r='45' fill='rgb(196,189,96)'/%3E%3Ccircle cx='2650' cy='550' r='45' fill='rgb(149,160,112)'/%3E%3Ccircle cx='50' cy='650' r='45' fill='rgb(109,132,160)'/%3E%3Ccircle cx='150' cy='650' r='45' fill='rgb(96,120,164)'/%3E%3Ccircle cx='250' cy='650' r='45' fill='rgb(130,140,162)'/%3E%3Ccircle cx='350' cy='650' r='45' fill='rgb(117,126,149)'/%3E%3Ccircle cx='450' cy='650' r='45' fill='rgb(59,57,59)'/%3E%3Ccircle cx='550' cy='650' r='45' fill='rgb(126,135,162)'/%3E%3Ccircle cx='650' cy='650' r='45' fill='rgb(137,145,173)'/%3E%3Ccircle cx='750' cy='650' r='45' fill='rgb(141,151,141)'/%3E%3Ccircle cx='850' cy='650' r='45' fill='rgb(168,176,133)'/%3E%3Ccircle cx='950' cy='650' r='45' fill='rgb(96,111,139)'/%3E%3Ccircle cx='1050' cy='650' r='45' fill='rgb(126,135,159)'/%3E%3Ccircle cx='1150' cy='650' r='45' fill='rgb(136,146,162)'/%3E%3Ccircle cx='1250' cy='650' r='45' fill='rgb(125,142,173)'/%3E%3Ccircle cx='1350' cy='650' r='45' fill='rgb(116,135,178)'/%3E%3Ccircle cx='1450' cy='650' r='45' fill='rgb(111,131,169)'/%3E%3Ccircle cx='1550' cy='650' r='45' fill='rgb(143,156,186)'/%3E%3Ccircle cx='1650' cy='650' r='45' fill='rgb(112,124,163)'/%3E%3Ccircle cx='1750' cy='650' r='45' fill='rgb(69,88,133)'/%3E%3Ccircle cx='1850' cy='650' r='45' fill='rgb(66,90,139)'/%3E%3Ccircle cx='1950' cy='650' r='45' fill='rgb(69,95,155)'/%3E%3Ccircle cx='2050' cy='650' r='45' fill='rgb(79,101,145)'/%3E%3Ccircle cx='2150' cy='650' r='45' fill='rgb(71,94,139)'/%3E%3Ccircle cx='2250' cy='650' r='45' fill='rgb(77,100,147)'/%3E%3Ccircle cx='2350' cy='650' r='45' fill='rgb(82,104,137)'/%3E%3Ccircle cx='2450' cy='650' r='45' fill='rgb(86,114,140)'/%3E%3Ccircle cx='2550' cy='650' r='45' fill='rgb(84,106,125)'/%3E%3Ccircle cx='2650' cy='650' r='45' fill='rgb(78,103,127)'/%3E%3Ccircle cx='50' cy='750' r='45' fill='rgb(151,168,195)'/%3E%3Ccircle cx='150' cy='750' r='45' fill='rgb(128,153,186)'/%3E%3Ccircle cx='250' cy='750' r='45' fill='rgb(134,150,181)'/%3E%3Ccircle cx='350' cy='750' r='45' fill='rgb(93,96,106)'/%3E%3Ccircle cx='450' cy='750' r='45' fill='rgb(56,57,58)'/%3E%3Ccircle cx='550' cy='750' r='45' fill='rgb(98,114,147)'/%3E%3Ccircle cx='650' cy='750' r='45' fill='rgb(78,91,119)'/%3E%3Ccircle cx='750' cy='750' r='45' fill='rgb(83,104,130)'/%3E%3Ccircle cx='850' cy='750' r='45' fill='rgb(96,117,133)'/%3E%3Ccircle cx='950' cy='750' r='45' fill='rgb(114,131,164)'/%3E%3Ccircle cx='1050' cy='750' r='45' fill='rgb(124,139,179)'/%3E%3Ccircle cx='1150' cy='750' r='45' fill='rgb(101,121,158)'/%3E%3Ccircle cx='1250' cy='750' r='45' fill='rgb(105,130,161)'/%3E%3Ccircle cx='1350' cy='750' r='45' fill='rgb(96,123,165)'/%3E%3Ccircle cx='1450' cy='750' r='45' fill='rgb(120,139,174)'/%3E%3Ccircle cx='1550' cy='750' r='45' fill='rgb(130,147,181)'/%3E%3Ccircle cx='1650' cy='750' r='45' fill='rgb(96,115,155)'/%3E%3Ccircle cx='1750' cy='750' r='45' fill='rgb(90,110,147)'/%3E%3Ccircle cx='1850' cy='750' r='45' fill='rgb(102,107,119)'/%3E%3Ccircle cx='1950' cy='750' r='45' fill='rgb(84,103,133)'/%3E%3Ccircle cx='2050' cy='750' r='45' fill='rgb(75,101,136)'/%3E%3Ccircle cx='2150' cy='750' r='45' fill='rgb(75,99,128)'/%3E%3Ccircle cx='2250' cy='750' r='45' fill='rgb(72,102,143)'/%3E%3Ccircle cx='2350' cy='750' r='45' fill='rgb(70,97,149)'/%3E%3Ccircle cx='2450' cy='750' r='45' fill='rgb(69,95,144)'/%3E%3Ccircle cx='2550' cy='750' r='45' fill='rgb(69,90,122)'/%3E%3Ccircle cx='2650' cy='750' r='45' fill='rgb(74,93,116)'/%3E%3Ccircle cx='50' cy='850' r='45' fill='rgb(120,139,165)'/%3E%3Ccircle cx='150' cy='850' r='45' fill='rgb(109,132,166)'/%3E%3Ccircle cx='250' cy='850' r='45' fill='rgb(107,129,155)'/%3E%3Ccircle cx='350' cy='850' r='45' fill='rgb(60,62,64)'/%3E%3Ccircle cx='450' cy='850' r='45' fill='rgb(48,53,54)'/%3E%3Ccircle cx='550' cy='850' r='45' fill='rgb(71,86,105)'/%3E%3Ccircle cx='650' cy='850' r='45' fill='rgb(68,83,113)'/%3E%3Ccircle cx='750' cy='850' r='45' fill='rgb(64,83,114)'/%3E%3Ccircle cx='850' cy='850' r='45' fill='rgb(66,96,143)'/%3E%3Ccircle cx='950' cy='850' r='45' fill='rgb(116,138,180)'/%3E%3Ccircle cx='1050' cy='850' r='45' fill='rgb(134,149,188)'/%3E%3Ccircle cx='1150' cy='850' r='45' fill='rgb(114,137,162)'/%3E%3Ccircle cx='1250' cy='850' r='45' fill='rgb(88,116,151)'/%3E%3Ccircle cx='1350' cy='850' r='45' fill='rgb(80,108,145)'/%3E%3Ccircle cx='1450' cy='850' r='45' fill='rgb(94,116,156)'/%3E%3Ccircle cx='1550' cy='850' r='45' fill='rgb(94,115,148)'/%3E%3Ccircle cx='1650' cy='850' r='45' fill='rgb(107,128,150)'/%3E%3Ccircle cx='1750' cy='850' r='45' fill='rgb(123,136,153)'/%3E%3Ccircle cx='1850' cy='850' r='45' fill='rgb(111,125,152)'/%3E%3Ccircle cx='1950' cy='850' r='45' fill='rgb(118,132,161)'/%3E%3Ccircle cx='2050' cy='850' r='45' fill='rgb(96,119,155)'/%3E%3Ccircle cx='2150' cy='850' r='45' fill='rgb(68,98,135)'/%3E%3Ccircle cx='2250' cy='850' r='45' fill='rgb(78,110,149)'/%3E%3Ccircle cx='2350' cy='850' r='45' fill='rgb(81,110,150)'/%3E%3Ccircle cx='2450' cy='850' r='45' fill='rgb(103,125,159)'/%3E%3Ccircle cx='2550' cy='850' r='45' fill='rgb(131,142,131)'/%3E%3Ccircle cx='2650' cy='850' r='45' fill='rgb(175,171,128)'/%3E%3Ccircle cx='50' cy='950' r='45' fill='rgb(121,141,156)'/%3E%3Ccircle cx='150' cy='950' r='45' fill='rgb(89,114,138)'/%3E%3Ccircle cx='250' cy='950' r='45' fill='rgb(168,175,110)'/%3E%3Ccircle cx='350' cy='950' r='45' fill='rgb(70,71,62)'/%3E%3Ccircle cx='450' cy='950' r='45' fill='rgb(48,48,51)'/%3E%3Ccircle cx='550' cy='950' r='45' fill='rgb(64,73,83)'/%3E%3Ccircle cx='650' cy='950' r='45' fill='rgb(78,104,138)'/%3E%3Ccircle cx='750' cy='950' r='45' fill='rgb(102,129,159)'/%3E%3Ccircle cx='850' cy='950' r='45' fill='rgb(148,161,168)'/%3E%3Ccircle cx='950' cy='950' r='45' fill='rgb(139,161,183)'/%3E%3Ccircle cx='1050' cy='950' r='45' fill='rgb(117,139,179)'/%3E%3Ccircle cx='1150' cy='950' r='45' fill='rgb(107,132,165)'/%3E%3Ccircle cx='1250' cy='950' r='45' fill='rgb(102,133,163)'/%3E%3Ccircle cx='1350' cy='950' r='45' fill='rgb(93,124,157)'/%3E%3Ccircle cx='1450' cy='950' r='45' fill='rgb(103,123,147)'/%3E%3Ccircle cx='1550' cy='950' r='45' fill='rgb(93,119,146)'/%3E%3Ccircle cx='1650' cy='950' r='45' fill='rgb(86,114,156)'/%3E%3Ccircle cx='1750' cy='950' r='45' fill='rgb(99,121,159)'/%3E%3Ccircle cx='1850' cy='950' r='45' fill='rgb(90,115,160)'/%3E%3Ccircle cx='1950' cy='950' r='45' fill='rgb(97,116,150)'/%3E%3Ccircle cx='2050' cy='950' r='45' fill='rgb(96,118,159)'/%3E%3Ccircle cx='2150' cy='950' r='45' fill='rgb(64,97,132)'/%3E%3Ccircle cx='2250' cy='950' r='45' fill='rgb(99,121,144)'/%3E%3Ccircle cx='2350' cy='950' r='45' fill='rgb(175,174,143)'/%3E%3Ccircle cx='2450' cy='950' r='45' fill='rgb(184,182,148)'/%3E%3Ccircle cx='2550' cy='950' r='45' fill='rgb(209,199,148)'/%3E%3Ccircle cx='2650' cy='950' r='45' fill='rgb(190,186,145)'/%3E%3Ccircle cx='50' cy='1050' r='45' fill='rgb(68,100,149)'/%3E%3Ccircle cx='150' cy='1050' r='45' fill='rgb(83,117,138)'/%3E%3Ccircle cx='250' cy='1050' r='45' fill='rgb(156,167,108)'/%3E%3Ccircle cx='350' cy='1050' r='45' fill='rgb(69,70,64)'/%3E%3Ccircle cx='450' cy='1050' r='45' fill='rgb(47,48,53)'/%3E%3Ccircle cx='550' cy='1050' r='45' fill='rgb(59,69,82)'/%3E%3Ccircle cx='650' cy='1050' r='45' fill='rgb(92,125,150)'/%3E%3Ccircle cx='750' cy='1050' r='45' fill='rgb(180,187,163)'/%3E%3Ccircle cx='850' cy='1050' r='45' fill='rgb(226,221,172)'/%3E%3Ccircle cx='950' cy='1050' r='45' fill='rgb(224,220,186)'/%3E%3Ccircle cx='1050' cy='1050' r='45' fill='rgb(145,161,186)'/%3E%3Ccircle cx='1150' cy='1050' r='45' fill='rgb(63,92,142)'/%3E%3Ccircle cx='1250' cy='1050' r='45' fill='rgb(99,126,163)'/%3E%3Ccircle cx='1350' cy='1050' r='45' fill='rgb(72,100,138)'/%3E%3Ccircle cx='1450' cy='1050' r='45' fill='rgb(67,96,144)'/%3E%3Ccircle cx='1550' cy='1050' r='45' fill='rgb(74,102,138)'/%3E%3Ccircle cx='1650' cy='1050' r='45' fill='rgb(74,109,139)'/%3E%3Ccircle cx='1750' cy='1050' r='45' fill='rgb(113,133,173)'/%3E%3Ccircle cx='1850' cy='1050' r='45' fill='rgb(88,117,164)'/%3E%3Ccircle cx='1950' cy='1050' r='45' fill='rgb(102,123,148)'/%3E%3Ccircle cx='2050' cy='1050' r='45' fill='rgb(90,106,140)'/%3E%3Ccircle cx='2150' cy='1050' r='45' fill='rgb(89,112,126)'/%3E%3Ccircle cx='2250' cy='1050' r='45' fill='rgb(187,185,147)'/%3E%3Ccircle cx='2350' cy='1050' r='45' fill='rgb(158,169,139)'/%3E%3Ccircle cx='2450' cy='1050' r='45' fill='rgb(154,162,143)'/%3E%3Ccircle cx='2550' cy='1050' r='45' fill='rgb(148,164,139)'/%3E%3Ccircle cx='2650' cy='1050' r='45' fill='rgb(138,147,125)'/%3E%3Ccircle cx='50' cy='1150' r='45' fill='rgb(86,110,128)'/%3E%3Ccircle cx='150' cy='1150' r='45' fill='rgb(60,87,133)'/%3E%3Ccircle cx='250' cy='1150' r='45' fill='rgb(66,90,124)'/%3E%3Ccircle cx='350' cy='1150' r='45' fill='rgb(48,48,53)'/%3E%3Ccircle cx='450' cy='1150' r='45' fill='rgb(38,43,52)'/%3E%3Ccircle cx='550' cy='1150' r='45' fill='rgb(56,63,75)'/%3E%3Ccircle cx='650' cy='1150' r='45' fill='rgb(78,104,128)'/%3E%3Ccircle cx='750' cy='1150' r='45' fill='rgb(179,182,169)'/%3E%3Ccircle cx='850' cy='1150' r='45' fill='rgb(220,216,169)'/%3E%3Ccircle cx='950' cy='1150' r='45' fill='rgb(226,218,181)'/%3E%3Ccircle cx='1050' cy='1150' r='45' fill='rgb(155,163,166)'/%3E%3Ccircle cx='1150' cy='1150' r='45' fill='rgb(84,109,148)'/%3E%3Ccircle cx='1250' cy='1150' r='45' fill='rgb(83,108,142)'/%3E%3Ccircle cx='1350' cy='1150' r='45' fill='rgb(77,112,152)'/%3E%3Ccircle cx='1450' cy='1150' r='45' fill='rgb(67,102,137)'/%3E%3Ccircle cx='1550' cy='1150' r='45' fill='rgb(76,105,124)'/%3E%3Ccircle cx='1650' cy='1150' r='45' fill='rgb(78,110,127)'/%3E%3Ccircle cx='1750' cy='1150' r='45' fill='rgb(116,142,144)'/%3E%3Ccircle cx='1850' cy='1150' r='45' fill='rgb(122,136,155)'/%3E%3Ccircle cx='1950' cy='1150' r='45' fill='rgb(104,126,137)'/%3E%3Ccircle cx='2050' cy='1150' r='45' fill='rgb(116,137,133)'/%3E%3Ccircle cx='2150' cy='1150' r='45' fill='rgb(161,173,134)'/%3E%3Ccircle cx='2250' cy='1150' r='45' fill='rgb(167,176,134)'/%3E%3Ccircle cx='2350' cy='1150' r='45' fill='rgb(120,142,129)'/%3E%3Ccircle cx='2450' cy='1150' r='45' fill='rgb(86,108,108)'/%3E%3Ccircle cx='2550' cy='1150' r='45' fill='rgb(57,63,69)'/%3E%3Ccircle cx='2650' cy='1150' r='45' fill='rgb(39,43,62)'/%3E%3Ccircle cx='50' cy='1250' r='45' fill='rgb(141,158,135)'/%3E%3Ccircle cx='150' cy='1250' r='45' fill='rgb(105,134,145)'/%3E%3Ccircle cx='250' cy='1250' r='45' fill='rgb(66,88,119)'/%3E%3Ccircle cx='350' cy='1250' r='45' fill='rgb(44,45,51)'/%3E%3Ccircle cx='450' cy='1250' r='45' fill='rgb(41,42,52)'/%3E%3Ccircle cx='550' cy='1250' r='45' fill='rgb(51,55,61)'/%3E%3Ccircle cx='650' cy='1250' r='45' fill='rgb(71,87,107)'/%3E%3Ccircle cx='750' cy='1250' r='45' fill='rgb(123,133,142)'/%3E%3Ccircle cx='850' cy='1250' r='45' fill='rgb(185,192,191)'/%3E%3Ccircle cx='950' cy='1250' r='45' fill='rgb(174,181,178)'/%3E%3Ccircle cx='1050' cy='1250' r='45' fill='rgb(147,154,135)'/%3E%3Ccircle cx='1150' cy='1250' r='45' fill='rgb(122,136,137)'/%3E%3Ccircle cx='1250' cy='1250' r='45' fill='rgb(131,145,136)'/%3E%3Ccircle cx='1350' cy='1250' r='45' fill='rgb(135,147,125)'/%3E%3Ccircle cx='1450' cy='1250' r='45' fill='rgb(115,138,133)'/%3E%3Ccircle cx='1550' cy='1250' r='45' fill='rgb(144,163,135)'/%3E%3Ccircle cx='1650' cy='1250' r='45' fill='rgb(136,159,145)'/%3E%3Ccircle cx='1750' cy='1250' r='45' fill='rgb(138,164,151)'/%3E%3Ccircle cx='1850' cy='1250' r='45' fill='rgb(150,172,162)'/%3E%3Ccircle cx='1950' cy='1250' r='45' fill='rgb(132,156,146)'/%3E%3Ccircle cx='2050' cy='1250' r='45' fill='rgb(122,147,133)'/%3E%3Ccircle cx='2150' cy='1250' r='45' fill='rgb(111,139,126)'/%3E%3Ccircle cx='2250' cy='1250' r='45' fill='rgb(100,122,116)'/%3E%3Ccircle cx='2350' cy='1250' r='45' fill='rgb(84,101,105)'/%3E%3Ccircle cx='2450' cy='1250' r='45' fill='rgb(40,47,74)'/%3E%3Ccircle cx='2550' cy='1250' r='45' fill='rgb(33,37,59)'/%3E%3Ccircle cx='2650' cy='1250' r='45' fill='rgb(35,42,66)'/%3E%3Ccircle cx='50' cy='1350' r='45' fill='rgb(113,143,150)'/%3E%3Ccircle cx='150' cy='1350' r='45' fill='rgb(147,171,143)'/%3E%3Ccircle cx='250' cy='1350' r='45' fill='rgb(101,119,116)'/%3E%3Ccircle cx='350' cy='1350' r='45' fill='rgb(36,41,50)'/%3E%3Ccircle cx='450' cy='1350' r='45' fill='rgb(38,40,49)'/%3E%3Ccircle cx='550' cy='1350' r='45' fill='rgb(51,51,54)'/%3E%3Ccircle cx='650' cy='1350' r='45' fill='rgb(52,62,78)'/%3E%3Ccircle cx='750' cy='1350' r='45' fill='rgb(86,95,103)'/%3E%3Ccircle cx='850' cy='1350' r='45' fill='rgb(129,147,143)'/%3E%3Ccircle cx='950' cy='1350' r='45' fill='rgb(153,167,137)'/%3E%3Ccircle cx='1050' cy='1350' r='45' fill='rgb(143,151,130)'/%3E%3Ccircle cx='1150' cy='1350' r='45' fill='rgb(126,141,131)'/%3E%3Ccircle cx='1250' cy='1350' r='45' fill='rgb(113,132,133)'/%3E%3Ccircle cx='1350' cy='1350' r='45' fill='rgb(123,142,127)'/%3E%3Ccircle cx='1450' cy='1350' r='45' fill='rgb(120,138,133)'/%3E%3Ccircle cx='1550' cy='1350' r='45' fill='rgb(80,104,120)'/%3E%3Ccircle cx='1650' cy='1350' r='45' fill='rgb(67,93,118)'/%3E%3Ccircle cx='1750' cy='1350' r='45' fill='rgb(72,88,109)'/%3E%3Ccircle cx='1850' cy='1350' r='45' fill='rgb(67,81,97)'/%3E%3Ccircle cx='1950' cy='1350' r='45' fill='rgb(77,95,115)'/%3E%3Ccircle cx='2050' cy='1350' r='45' fill='rgb(62,80,106)'/%3E%3Ccircle cx='2150' cy='1350' r='45' fill='rgb(51,60,85)'/%3E%3Ccircle cx='2250' cy='1350' r='45' fill='rgb(37,43,75)'/%3E%3Ccircle cx='2350' cy='1350' r='45' fill='rgb(36,48,85)'/%3E%3Ccircle cx='2450' cy='1350' r='45' fill='rgb(46,68,112)'/%3E%3Ccircle cx='2550' cy='1350' r='45' fill='rgb(54,76,113)'/%3E%3Ccircle cx='2650' cy='1350' r='45' fill='rgb(54,75,110)'/%3E%3Ccircle cx='50' cy='1450' r='45' fill='rgb(82,115,136)'/%3E%3Ccircle cx='150' cy='1450' r='45' fill='rgb(90,121,134)'/%3E%3Ccircle cx='250' cy='1450' r='45' fill='rgb(89,114,130)'/%3E%3Ccircle cx='350' cy='1450' r='45' fill='rgb(39,45,54)'/%3E%3Ccircle cx='450' cy='1450' r='45' fill='rgb(38,39,48)'/%3E%3Ccircle cx='550' cy='1450' r='45' fill='rgb(49,47,51)'/%3E%3Ccircle cx='650' cy='1450' r='45' fill='rgb(44,52,65)'/%3E%3Ccircle cx='750' cy='1450' r='45' fill='rgb(53,51,56)'/%3E%3Ccircle cx='850' cy='1450' r='45' fill='rgb(99,111,112)'/%3E%3Ccircle cx='950' cy='1450' r='45' fill='rgb(81,112,131)'/%3E%3Ccircle cx='1050' cy='1450' r='45' fill='rgb(68,101,122)'/%3E%3Ccircle cx='1150' cy='1450' r='45' fill='rgb(68,96,118)'/%3E%3Ccircle cx='1250' cy='1450' r='45' fill='rgb(85,109,130)'/%3E%3Ccircle cx='1350' cy='1450' r='45' fill='rgb(75,108,124)'/%3E%3Ccircle cx='1450' cy='1450' r='45' fill='rgb(65,90,116)'/%3E%3Ccircle cx='1550' cy='1450' r='45' fill='rgb(49,70,113)'/%3E%3Ccircle cx='1650' cy='1450' r='45' fill='rgb(50,71,110)'/%3E%3Ccircle cx='1750' cy='1450' r='45' fill='rgb(49,65,104)'/%3E%3Ccircle cx='1850' cy='1450' r='45' fill='rgb(37,49,80)'/%3E%3Ccircle cx='1950' cy='1450' r='45' fill='rgb(39,54,97)'/%3E%3Ccircle cx='2050' cy='1450' r='45' fill='rgb(43,63,106)'/%3E%3Ccircle cx='2150' cy='1450' r='45' fill='rgb(44,66,114)'/%3E%3Ccircle cx='2250' cy='1450' r='45' fill='rgb(44,69,130)'/%3E%3Ccircle cx='2350' cy='1450' r='45' fill='rgb(48,75,129)'/%3E%3Ccircle cx='2450' cy='1450' r='45' fill='rgb(58,84,134)'/%3E%3Ccircle cx='2550' cy='1450' r='45' fill='rgb(66,88,130)'/%3E%3Ccircle cx='2650' cy='1450' r='45' fill='rgb(54,80,126)'/%3E%3Ccircle cx='50' cy='1550' r='45' fill='rgb(62,88,125)'/%3E%3Ccircle cx='150' cy='1550' r='45' fill='rgb(66,95,130)'/%3E%3Ccircle cx='250' cy='1550' r='45' fill='rgb(60,85,117)'/%3E%3Ccircle cx='350' cy='1550' r='45' fill='rgb(44,49,58)'/%3E%3Ccircle cx='450' cy='1550' r='45' fill='rgb(35,37,47)'/%3E%3Ccircle cx='550' cy='1550' r='45' fill='rgb(40,41,50)'/%3E%3Ccircle cx='650' cy='1550' r='45' fill='rgb(39,42,54)'/%3E%3Ccircle cx='750' cy='1550' r='45' fill='rgb(41,43,51)'/%3E%3Ccircle cx='850' cy='1550' r='45' fill='rgb(44,45,53)'/%3E%3Ccircle cx='950' cy='1550' r='45' fill='rgb(47,62,93)'/%3E%3Ccircle cx='1050' cy='1550' r='45' fill='rgb(41,60,105)'/%3E%3Ccircle cx='1150' cy='1550' r='45' fill='rgb(40,59,99)'/%3E%3Ccircle cx='1250' cy='1550' r='45' fill='rgb(49,70,106)'/%3E%3Ccircle cx='1350' cy='1550' r='45' fill='rgb(50,70,107)'/%3E%3Ccircle cx='1450' cy='1550' r='45' fill='rgb(55,78,121)'/%3E%3Ccircle cx='1550' cy='1550' r='45' fill='rgb(51,73,113)'/%3E%3Ccircle cx='1650' cy='1550' r='45' fill='rgb(43,61,99)'/%3E%3Ccircle cx='1750' cy='1550' r='45' fill='rgb(45,61,99)'/%3E%3Ccircle cx='1850' cy='1550' r='45' fill='rgb(50,68,120)'/%3E%3Ccircle cx='1950' cy='1550' r='45' fill='rgb(49,68,101)'/%3E%3Ccircle cx='2050' cy='1550' r='45' fill='rgb(53,72,100)'/%3E%3Ccircle cx='2150' cy='1550' r='45' fill='rgb(52,71,94)'/%3E%3Ccircle cx='2250' cy='1550' r='45' fill='rgb(50,68,95)'/%3E%3Ccircle cx='2350' cy='1550' r='45' fill='rgb(55,71,94)'/%3E%3Ccircle cx='2450' cy='1550' r='45' fill='rgb(64,84,107)'/%3E%3Ccircle cx='2550' cy='1550' r='45' fill='rgb(66,79,101)'/%3E%3Ccircle cx='2650' cy='1550' r='45' fill='rgb(64,69,79)'/%3E%3Ccircle cx='50' cy='1650' r='45' fill='rgb(36,53,80)'/%3E%3Ccircle cx='150' cy='1650' r='45' fill='rgb(40,51,74)'/%3E%3Ccircle cx='250' cy='1650' r='45' fill='rgb(39,46,59)'/%3E%3Ccircle cx='350' cy='1650' r='45' fill='rgb(39,44,52)'/%3E%3Ccircle cx='450' cy='1650' r='45' fill='rgb(35,38,47)'/%3E%3Ccircle cx='550' cy='1650' r='45' fill='rgb(40,38,48)'/%3E%3Ccircle cx='650' cy='1650' r='45' fill='rgb(39,38,49)'/%3E%3Ccircle cx='750' cy='1650' r='45' fill='rgb(36,40,49)'/%3E%3Ccircle cx='850' cy='1650' r='45' fill='rgb(35,39,48)'/%3E%3Ccircle cx='950' cy='1650' r='45' fill='rgb(41,47,59)'/%3E%3Ccircle cx='1050' cy='1650' r='45' fill='rgb(39,50,68)'/%3E%3Ccircle cx='1150' cy='1650' r='45' fill='rgb(48,64,85)'/%3E%3Ccircle cx='1250' cy='1650' r='45' fill='rgb(55,77,96)'/%3E%3Ccircle cx='1350' cy='1650' r='45' fill='rgb(50,71,86)'/%3E%3Ccircle cx='1450' cy='1650' r='45' fill='rgb(48,73,100)'/%3E%3Ccircle cx='1550' cy='1650' r='45' fill='rgb(60,89,111)'/%3E%3Ccircle cx='1650' cy='1650' r='45' fill='rgb(50,83,112)'/%3E%3Ccircle cx='1750' cy='1650' r='45' fill='rgb(49,75,101)'/%3E%3Ccircle cx='1850' cy='1650' r='45' fill='rgb(47,65,90)'/%3E%3Ccircle cx='1950' cy='1650' r='45' fill='rgb(41,59,76)'/%3E%3Ccircle cx='2050' cy='1650' r='45' fill='rgb(52,71,79)'/%3E%3Ccircle cx='2150' cy='1650' r='45' fill='rgb(60,71,86)'/%3E%3Ccircle cx='2250' cy='1650' r='45' fill='rgb(54,66,82)'/%3E%3Ccircle cx='2350' cy='1650' r='45' fill='rgb(52,64,80)'/%3E%3Ccircle cx='2450' cy='1650' r='45' fill='rgb(70,83,86)'/%3E%3Ccircle cx='2550' cy='1650' r='45' fill='rgb(85,83,76)'/%3E%3Ccircle cx='2650' cy='1650' r='45' fill='rgb(65,70,72)'/%3E%3Ccircle cx='50' cy='1750' r='45' fill='rgb(44,58,78)'/%3E%3Ccircle cx='150' cy='1750' r='45' fill='rgb(45,59,81)'/%3E%3Ccircle cx='250' cy='1750' r='45' fill='rgb(38,43,53)'/%3E%3Ccircle cx='350' cy='1750' r='45' fill='rgb(37,41,50)'/%3E%3Ccircle cx='450' cy='1750' r='45' fill='rgb(41,43,49)'/%3E%3Ccircle cx='550' cy='1750' r='45' fill='rgb(40,41,49)'/%3E%3Ccircle cx='650' cy='1750' r='45' fill='rgb(45,42,48)'/%3E%3Ccircle cx='750' cy='1750' r='45' fill='rgb(38,40,49)'/%3E%3Ccircle cx='850' cy='1750' r='45' fill='rgb(38,40,48)'/%3E%3Ccircle cx='950' cy='1750' r='45' fill='rgb(43,45,53)'/%3E%3Ccircle cx='1050' cy='1750' r='45' fill='rgb(43,50,69)'/%3E%3Ccircle cx='1150' cy='1750' r='45' fill='rgb(56,65,88)'/%3E%3Ccircle cx='1250' cy='1750' r='45' fill='rgb(49,61,81)'/%3E%3Ccircle cx='1350' cy='1750' r='45' fill='rgb(63,72,82)'/%3E%3Ccircle cx='1450' cy='1750' r='45' fill='rgb(49,70,88)'/%3E%3Ccircle cx='1550' cy='1750' r='45' fill='rgb(46,58,76)'/%3E%3Ccircle cx='1650' cy='1750' r='45' fill='rgb(37,59,88)'/%3E%3Ccircle cx='1750' cy='1750' r='45' fill='rgb(41,67,96)'/%3E%3Ccircle cx='1850' cy='1750' r='45' fill='rgb(41,59,87)'/%3E%3Ccircle cx='1950' cy='1750' r='45' fill='rgb(38,52,75)'/%3E%3Ccircle cx='2050' cy='1750' r='45' fill='rgb(35,46,70)'/%3E%3Ccircle cx='2150' cy='1750' r='45' fill='rgb(31,46,71)'/%3E%3Ccircle cx='2250' cy='1750' r='45' fill='rgb(37,52,79)'/%3E%3Ccircle cx='2350' cy='1750' r='45' fill='rgb(43,63,81)'/%3E%3Ccircle cx='2450' cy='1750' r='45' fill='rgb(49,75,92)'/%3E%3Ccircle cx='2550' cy='1750' r='45' fill='rgb(42,58,74)'/%3E%3Ccircle cx='2650' cy='1750' r='45' fill='rgb(46,68,82)'/%3E%3Ccircle cx='50' cy='1850' r='45' fill='rgb(48,58,77)'/%3E%3Ccircle cx='150' cy='1850' r='45' fill='rgb(50,63,81)'/%3E%3Ccircle cx='250' cy='1850' r='45' fill='rgb(40,43,51)'/%3E%3Ccircle cx='350' cy='1850' r='45' fill='rgb(29,35,46)'/%3E%3Ccircle cx='450' cy='1850' r='45' fill='rgb(34,38,47)'/%3E%3Ccircle cx='550' cy='1850' r='45' fill='rgb(37,39,49)'/%3E%3Ccircle cx='650' cy='1850' r='45' fill='rgb(36,37,48)'/%3E%3Ccircle cx='750' cy='1850' r='45' fill='rgb(39,41,47)'/%3E%3Ccircle cx='850' cy='1850' r='45' fill='rgb(38,40,47)'/%3E%3Ccircle cx='950' cy='1850' r='45' fill='rgb(38,40,49)'/%3E%3Ccircle cx='1050' cy='1850' r='45' fill='rgb(36,41,57)'/%3E%3Ccircle cx='1150' cy='1850' r='45' fill='rgb(41,43,60)'/%3E%3Ccircle cx='1250' cy='1850' r='45' fill='rgb(63,62,56)'/%3E%3Ccircle cx='1350' cy='1850' r='45' fill='rgb(60,64,68)'/%3E%3Ccircle cx='1450' cy='1850' r='45' fill='rgb(58,72,84)'/%3E%3Ccircle cx='1550' cy='1850' r='45' fill='rgb(45,57,79)'/%3E%3Ccircle cx='1650' cy='1850' r='45' fill='rgb(36,46,73)'/%3E%3Ccircle cx='1750' cy='1850' r='45' fill='rgb(29,37,58)'/%3E%3Ccircle cx='1850' cy='1850' r='45' fill='rgb(60,58,59)'/%3E%3Ccircle cx='1950' cy='1850' r='45' fill='rgb(37,51,73)'/%3E%3Ccircle cx='2050' cy='1850' r='45' fill='rgb(45,65,94)'/%3E%3Ccircle cx='2150' cy='1850' r='45' fill='rgb(36,45,67)'/%3E%3Ccircle cx='2250' cy='1850' r='45' fill='rgb(30,35,58)'/%3E%3Ccircle cx='2350' cy='1850' r='45' fill='rgb(37,50,70)'/%3E%3Ccircle cx='2450' cy='1850' r='45' fill='rgb(32,43,65)'/%3E%3Ccircle cx='2550' cy='1850' r='45' fill='rgb(28,37,59)'/%3E%3Ccircle cx='2650' cy='1850' r='45' fill='rgb(28,40,61)'/%3E%3Ccircle cx='50' cy='1950' r='45' fill='rgb(48,59,64)'/%3E%3Ccircle cx='150' cy='1950' r='45' fill='rgb(49,62,60)'/%3E%3Ccircle cx='250' cy='1950' r='45' fill='rgb(40,44,48)'/%3E%3Ccircle cx='350' cy='1950' r='45' fill='rgb(32,36,45)'/%3E%3Ccircle cx='450' cy='1950' r='45' fill='rgb(29,35,46)'/%3E%3Ccircle cx='550' cy='1950' r='45' fill='rgb(32,37,48)'/%3E%3Ccircle cx='650' cy='1950' r='45' fill='rgb(32,37,47)'/%3E%3Ccircle cx='750' cy='1950' r='45' fill='rgb(34,42,45)'/%3E%3Ccircle cx='850' cy='1950' r='45' fill='rgb(44,42,48)'/%3E%3Ccircle cx='950' cy='1950' r='45' fill='rgb(31,40,49)'/%3E%3Ccircle cx='1050' cy='1950' r='45' fill='rgb(24,33,45)'/%3E%3Ccircle cx='1150' cy='1950' r='45' fill='rgb(33,40,50)'/%3E%3Ccircle cx='1250' cy='1950' r='45' fill='rgb(35,48,55)'/%3E%3Ccircle cx='1350' cy='1950' r='45' fill='rgb(46,58,64)'/%3E%3Ccircle cx='1450' cy='1950' r='45' fill='rgb(58,67,71)'/%3E%3Ccircle cx='1550' cy='1950' r='45' fill='rgb(48,49,58)'/%3E%3Ccircle cx='1650' cy='1950' r='45' fill='rgb(40,47,61)'/%3E%3Ccircle cx='1750' cy='1950' r='45' fill='rgb(27,35,55)'/%3E%3Ccircle cx='1850' cy='1950' r='45' fill='rgb(29,34,52)'/%3E%3Ccircle cx='1950' cy='1950' r='45' fill='rgb(30,41,62)'/%3E%3Ccircle cx='2050' cy='1950' r='45' fill='rgb(36,55,69)'/%3E%3Ccircle cx='2150' cy='1950' r='45' fill='rgb(36,47,67)'/%3E%3Ccircle cx='2250' cy='1950' r='45' fill='rgb(70,73,83)'/%3E%3Ccircle cx='2350' cy='1950' r='45' fill='rgb(37,51,72)'/%3E%3Ccircle cx='2450' cy='1950' r='45' fill='rgb(43,59,76)'/%3E%3Ccircle cx='2550' cy='1950' r='45' fill='rgb(42,57,69)'/%3E%3Ccircle cx='2650' cy='1950' r='45' fill='rgb(36,44,70)'/%3E%3Ccircle cx='50' cy='2050' r='45' fill='rgb(50,62,50)'/%3E%3Ccircle cx='150' cy='2050' r='45' fill='rgb(54,65,51)'/%3E%3Ccircle cx='250' cy='2050' r='45' fill='rgb(45,50,48)'/%3E%3Ccircle cx='350' cy='2050' r='45' fill='rgb(32,40,45)'/%3E%3Ccircle cx='450' cy='2050' r='45' fill='rgb(29,35,44)'/%3E%3Ccircle cx='550' cy='2050' r='45' fill='rgb(29,35,45)'/%3E%3Ccircle cx='650' cy='2050' r='45' fill='rgb(25,33,43)'/%3E%3Ccircle cx='750' cy='2050' r='45' fill='rgb(26,33,42)'/%3E%3Ccircle cx='850' cy='2050' r='45' fill='rgb(31,31,43)'/%3E%3Ccircle cx='950' cy='2050' r='45' fill='rgb(28,33,44)'/%3E%3Ccircle cx='1050' cy='2050' r='45' fill='rgb(31,33,43)'/%3E%3Ccircle cx='1150' cy='2050' r='45' fill='rgb(26,34,44)'/%3E%3Ccircle cx='1250' cy='2050' r='45' fill='rgb(39,54,64)'/%3E%3Ccircle cx='1350' cy='2050' r='45' fill='rgb(36,51,61)'/%3E%3Ccircle cx='1450' cy='2050' r='45' fill='rgb(37,49,62)'/%3E%3Ccircle cx='1550' cy='2050' r='45' fill='rgb(53,48,54)'/%3E%3Ccircle cx='1650' cy='2050' r='45' fill='rgb(51,58,62)'/%3E%3Ccircle cx='1750' cy='2050' r='45' fill='rgb(46,58,72)'/%3E%3Ccircle cx='1850' cy='2050' r='45' fill='rgb(45,51,65)'/%3E%3Ccircle cx='1950' cy='2050' r='45' fill='rgb(50,56,69)'/%3E%3Ccircle cx='2050' cy='2050' r='45' fill='rgb(37,48,66)'/%3E%3Ccircle cx='2150' cy='2050' r='45' fill='rgb(27,43,66)'/%3E%3Ccircle cx='2250' cy='2050' r='45' fill='rgb(32,40,64)'/%3E%3Ccircle cx='2350' cy='2050' r='45' fill='rgb(32,47,73)'/%3E%3Ccircle cx='2450' cy='2050' r='45' fill='rgb(39,51,62)'/%3E%3Ccircle cx='2550' cy='2050' r='45' fill='rgb(28,37,48)'/%3E%3Ccircle cx='2650' cy='2050' r='45' fill='rgb(29,39,50)'/%3E%3C/svg%3E\") no-repeat center";

        // Datepicker
        $ctrl.datepickerData = {
            model: ""
        }

        // Dropdown
        $ctrl.dropdownData = {
            model: "",
            items: [],
            bordered: true
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
