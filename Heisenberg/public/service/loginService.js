/**
 * Created by lenovo on 08-06-2016.
 */
(function () {
   'use strict';

   angular
      .module('app')
      .factory('loginService', Service);

   function Service($http, $q, TokenService) {
      var service = {};

      service.authenticate = authenticate;

      return service;

      function authenticate(username, password) {
         var deferred = $q.defer();
         $http.post("http://localhost:3031/credentials/authenticate", {
            username: username,
            password: password
         }).then(function (response) {
            if (response.status == 400) {
               deferred.resolve({status: 400});
            }
            else {
               TokenService.setToken(response).then(function () {
                  deferred.resolve({status: 200});
               });
            }
         });
         return deferred.promise;

      }
   }
})();
