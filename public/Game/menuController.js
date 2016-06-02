'use strict';

angular
    .module('gameApp')
    .controller('MenuController', MenuController);

MenuController.$injector = [
    '$scope',
];

function MenuController($scope) {
    var mc = this;
    mc.startActive = '';
    mc.usersActive = '';
    mc.joinActive = '';
    mc.chatActive = '';
    
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if (angular.isDefined(toState.data) && angular.isDefined(toState.data.menuClass)) {
            mc.startActive = '';
            mc.usersActive = '';
            mc.joinActive = '';
            mc.chatActive = '';
            mc[toState.data.menuClass+'Active'] = 'active';
            return;
        }
        mc.startActive = '';
        mc.usersActive = '';
        mc.joinActive = '';
        mc.chatActive = '';
       
    });
};


