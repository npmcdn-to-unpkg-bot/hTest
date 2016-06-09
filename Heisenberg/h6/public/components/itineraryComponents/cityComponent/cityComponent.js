/**
 * Created by user on 12-05-2016.
 */

angular.module('app')
    .component('cityComponent',{
        templateUrl:'public/components/itineraryComponents/cityComponent/cityComponent.html',
        controllerAs:'cityComponentCtrl',
        bindings:{
            value:'<'
        },
        controller: cityController
    });

function cityController(){
    var cityComponentCtrl=this;
    cityComponentCtrl.data='hello';
}
