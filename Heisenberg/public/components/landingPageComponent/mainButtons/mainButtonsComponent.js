var app=angular.module("app");
app.component("mainButtons",{

  templateUrl:"public/components/landingPageComponent/mainButtons/mainButtons.html",
  controllerAs:"button",
  controller: mainButtonsController
});

app.component("bookButton",{

  templateUrl:"public/components/landingPageComponent/mainButtons/BookButton.html",
  controllerAs:"bookButton",
  controller: bookButtonController
});

app.component("expenseButton",{

  templateUrl:"public/components/landingPageComponent/mainButtons/ExpenseButton.html",
  controllerAs:"expenseButton",
  controller: expenseButtonController
});


app.component("configureButton",{

  templateUrl:"public/components/landingPageComponent/mainButtons/ConfigureButton.html",
  controllerAs:"configureButton",
  controller: configureButtonController
});
function mainButtonsController(){
  var button=this;
}
function bookButtonController($mdDialog, $mdMedia){
  var bookButton=this;

  bookButton.showBookOptions=function(ev){
    $mdDialog.show({
          clickOutsideToClose: true,

          preserveScope: true,
          templateUrl:'public/components/landingPageComponent/mainButtons/Book_travelpreference.html',
          // templateUrl: 'public/components/landingPageComponent/mainButtons/dialog.html',


       });
  };
}
function expenseButtonController(){
  var expense=this;
}

function configureButtonController(){
  var Configure=this;

}
