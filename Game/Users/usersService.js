'use strict';

angular
.module('gameApp')
.service('UsersModel', function ($resource, PATH_API) {
    return $resource(PATH_API + 'users/:param1/:param2', {}, {
        index  : { method: 'GET', isArray: true },
        // create : { method: 'GET', params: {param1: 'create'} },
        // store  : { method: 'POST' },
        show   : { method: 'GET', params: {param1: '@id'} },
        edit   : { method: 'GET', params: {param1: '@id', params: 'edit'} },
        update : { method: 'PUT', params: {param1: '@id'} },
        // destroy: { method: 'DELETE', params: {param1: '@id'} }
    });

});