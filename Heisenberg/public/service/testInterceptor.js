/**
 * Created by lenovo on 08-06-2016.
 */
function testInterceptor() {
    return {
        request: function (config) {
            return config;
        },

        requestError: function (config) {
            return config;
        },

        response: function (res) {
            return res;
        },

        responseError: function (res) {
            return res;
        }
    }
}

angular.module('app')
    .factory('testInterceptor', testInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('testInterceptor');
    });