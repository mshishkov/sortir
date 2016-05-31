'use strict';

angular
    .module('gameApp')
    .controller('StartController', StartController);

StartController.$injector = [
    '$scope',
];

function StartController($scope) {
    var sc = this;
    sc.betRange = 50;
    sc.autostartCount = 4;
    sc.maxCoins = 1250;
};


