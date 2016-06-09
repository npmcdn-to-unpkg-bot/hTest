/**
 * Created by lenovo on 08-06-2016.
 */
(function () {
   'use strict';

   angular
      .module('app')
      .factory('TokenService', Service)
      .config(function ($httpProvider) {
         $httpProvider.defaults.withCredentials = true;
      });

   function Service($q, $location, $http) {
      var service = {};

      service.setToken = setToken;
      service.getToken = getToken;
      service.verifyToken = verifyToken;

      return service;

      function setToken(response) {
         var deferred = $q.defer();
         createCookie('token', response.data);
         $location.url('/landingPage');
         deferred.resolve();

         function createCookie(name, value) {
            var date = new Date();
            date.setTime(date.getTime() + (30 * 1000));
            var expires = "; expires=" + date.toGMTString();

            document.cookie = name + "=" + value + expires + "; path=/";
         }

         return deferred.promise;

      }

      function verifyToken() {
         var deferred = $q.defer();
         $http.get("http://localhost:3031/credentials/verifytoken").then(function (response) {
            deferred.resolve(response);
         });
         return deferred.promise;
      }

      function getToken(cname) {
         var name = cname + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
               c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
            }
         }
         return "";
      }


   }


})();
