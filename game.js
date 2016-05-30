'use strict';

angular
.module('gameApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'Game/index.html',
            controller: 'GameController as game'
        })
        .state('gameplay', {
            url: '/',
            templateUrl: 'Game/Play/playView.html'
        })
        .state('home.start', {
            url: '/start',
            templateUrl: 'Game/Start/startView.html', 
            // controller: 'StartController as start'
        })
        .state('home.join', {
            url: '/join',
            templateUrl: 'Game/Join/joinView.html', 
            // controller: 'JoinController as join'
        })
        .state('home.users', {
            url: '/users',
            templateUrl: 'Game/Users/usersView.html', 
            // controller: 'UsersController as users'
        })
        .state('home.chat', {
            url: '/chat',
            templateUrl: 'Game/Chat/chatView.html', 
            // controller: 'ChatController as chat'
        })
        ;
});
