angular.module("app").component("loginComponent", {
   templateUrl: "public/components/loginComponent/loginComponent.html",
   controllerAs: "login",
   controller: loginController,
   $canActivate: function (TokenService) {
      var token = TokenService.getToken('token');
      console.log(token);
      return true;
   }

});

function loginController(loginService, $location) {

   var login = this;


   login.loginSubmit = function () {
      loginService.authenticate(login.username, login.password).then(function (response) {
         console.log(response);
      }).catch(function (err) {
         console.log("catch");

      })
   };

}


