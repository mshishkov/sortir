(function() {
    'use strict';

    angular
        .module('game')
        .controller('GameController', GameController);

    function GameController() {

        var gm = this;

        gm.Users = [];
        gm.Games = [];
        gm.Chats = [];
        gm.Settings = {
            "gameStatuses": {0: "waiting",1: "started",2:"finished"},
        };

    };
})();