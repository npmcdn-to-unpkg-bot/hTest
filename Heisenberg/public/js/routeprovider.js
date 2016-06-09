/**
 * Created by lenovo on 29-04-2016.
 */
 var module=angular.module("app", ["ui.router", "rzModule", "ngMaterial", "materialCalendar", "ngSanitize", "ngRoute", "ngMdIcons", "ngMessages", "mdPickers", "angular-click-outside","ngComponentRouter", "tmh.dynamicLocale"]);
 module.factory('_', function() {
     return window._;
 });
 module.run(function ($rootScope, $location, tmhDynamicLocale) {
     $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
         if ($location.path().indexOf('landingPage') > 0) {
           console.log("Hello");
             $rootScope.landingPage = true;
             console.log($rootScope.landingPage);
         }
         else {
             console.log("Hello2 ");
             $rootScope.landingPage = false;
             console.log($rootScope.landingPage);
         }

         tmhDynamicLocale.set('en-in');

     });

 });

 module.config(function(tmhDynamicLocaleProvider, $stateProvider, $urlRouterProvider,$mdThemingProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('node_modules/angular/i18n/angular-locale_{{locale}}.js');
    // $mdThemingProvider.theme('default').();
});

module.value("$routerRootComponent","mainComponent");


//     .config(function ($routeProvider) {
//
//         $routeProvider.when("/landing", {
//
//             templateUrl: "views/HTML/landing.html",
//             controller: "con"
//
//         }).when("/Travelbooking", {
//
//             templateUrl: "views/HTML/Travelbooking.html",
//             controller: "travelModeController"
//
//         }).when("/staybooking", {
//
//             templateUrl: "views/HTML/Hotelbooking.html",
//             controller: "hotelSearchController",
//             controllerAs: "ctrl2"
//
//         }).when("/flightsearchresults", {
//
//             templateUrl: "views/HTML/flightSearchResults.html",
//             controller: "flightSearchResultController"
//
//         }).when("/trainsearchresult", {
//
//                 templateUrl: "views/HTML/trainsearchresult.html",
//                 controller: "trainSearchResultsController"
//             })
//             .when("/hotelsearchresult",
//                 {
//                     templateUrl: "views/HTML/hotelSearchResults.html",
//                     controller: "hotelSearchResultsController"
//                 })
//             .when("/itinerary", {
//
//                 templateUrl: "views/HTML/ItineraryPage.html",
//                 controller: "itineraryController"
//
//             }).otherwise({
//
//             redirectTo: "/landing"
//
//         });
//
//
//     }).controller('indexController', function ($rootScope) {
//
// })

//;
