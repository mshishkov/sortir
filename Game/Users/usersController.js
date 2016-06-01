'use strict';

angular
    .module('gameApp')
    .controller('UsersController', UsersController);

// UsersController.$injector = [
//     $scope, $http, 'UsersModel'
// ];

function UsersController($scope, $http, 'UsersModel') {
    var gm = this;

    // definitions
    // gm.Users = UsersModel.index();


};