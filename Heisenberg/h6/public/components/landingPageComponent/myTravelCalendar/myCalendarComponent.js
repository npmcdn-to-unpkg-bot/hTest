var app=angular.module("app");
app.component("myCalendar",{

  templateUrl:"public/components/landingPageComponent/myTravelCalendar/myCalendar.html",
  controllerAs:"calendar",
  controller:myCalendarController
});

function myCalendarController($http){
  var calendar=this;

  $http.get("public/data/landing/myTravelcalendar.config.json").success(function (response) {
    calendar.calendarDisplayName = response.headerDisplayName;
    calendar.approved=response.subHeaders.approved;
    calendar.past=response.subHeaders.past;
    calendar.pending=response.subHeaders.pending;

  });



}
