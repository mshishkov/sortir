'use strict';

angular
    .module('gameApp')
    .controller('StartController', StartController);

StartController.$injector = [
    '$scope',
    'ui.slider'
];

function StartController($scope) {
    var sc = this;
    sc.betRange = 50;
    sc.autostartCount = 4;
    sc.maxCoins = 1250;
};


