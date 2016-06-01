'use strict';

angular
    .module('gameApp')
    .controller('UsersController', UsersController);

UsersController.$injector = [
    '$scope', 'UsersModel'
];

function UsersController($scope, UsersModel) {
    var gm = this;

    // definitions
    gm.Users = [];
    // UsersModel.index();


};