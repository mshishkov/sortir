'use strict';

// define global API root path
var PATH_API = '/api/';

angular
.module('gameApp', ['ui.router', 'ui.slider'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'Game/index.html',
//            controller: 'GameController as game'
        })
        .state('gameplay', {
            url: '/',
            templateUrl: 'Game/Play/playView.html'
        })
        .state('home.start', {
            url: '/start',
            templateUrl: 'Game/Start/startView.html', 
            // controller: 'StartController as start',
            data: {
                menuClass: 'start'
            }
        })
        .state('home.join', {
            url: '/join',
            templateUrl: 'Game/Join/joinView.html', 
            // controller: 'JoinController as join',
            data: {
                menuClass: 'join'
            }
        })
        .state('home.users', {
            url: '/users',
            templateUrl: 'Game/Users/usersView.html', 
            // controller: 'UsersController as users',
            data: {
                menuClass: 'users'
            }
        })
        .state('home.chat', {
            url: '/chat',
            templateUrl: 'Game/Chat/chatView.html', 
            // controller: 'ChatController as chat',
            data: {
                menuClass: 'chat'
            }
        })
        ;
});
