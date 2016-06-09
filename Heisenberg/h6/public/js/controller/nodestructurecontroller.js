/**
 * Created by lenovo on 25-04-2016.
 */
angular.module("app")
    .controller("nodestructurecontroller", function ($location, $scope, $rootScope, $timeout, $q, $http) {

        $rootScope.go = function (path) {
            $location.path(path);
        }

        //Ajax Request for json Template
        $http.get("public/data/travelplan.json").success(function (response) {

            $rootScope.travelPlanJSON = response;

        });

        $rootScope.currentIndex = 1;


        $rootScope.addNode = function (index) {
            var nodeIdNumber = index + 2;
            var edgeIdNumber = index + 1;

            var nodeId = "node" + nodeIdNumber;
            var edgeId = "edge" + edgeIdNumber;
            var newNode = {
                "cityName": "",
                "status": "",
                "childServices": {
                    "nodeS1": {
                        "type": "",
                        "status": "",
                        "request": {
                            "area": "",
                            "rating": "",
                            "roomType": "",
                            "checkinDate": "",
                            "checkoutDate": ""
                        },
                        "final": {
                            "image": "",
                            "name": "",
                            "rating": "",
                            "location": "",
                            "roomType": "",
                            "checkinDate": "",
                            "checkinTime": "",
                            "checkoutDate": "",
                            "checkoutTime": "",
                            "price": "",
                            "comments": ""
                        }
                    },
                    "nodeT1": {
                        "type": "",
                        "status": "",
                        "request": {
                            "source": "",
                            "destination": "",
                            "type": "",
                            "pickupDate": "",
                            "pickupTime": ""
                        },
                        "final": {
                            "source": "",
                            "destination": "",
                            "type": "",
                            "pickupDate": "",
                            "pickupTime": "",
                            "dropDate": "",
                            "dropTime": "",
                            "cab": {
                                "image": "",
                                "companyName": "",
                                "cabNumber": "",
                                "driverDetails": {
                                    "name": ""
                                },
                                "estimatedPrice": "",
                                "cabType": ""
                            },
                            "bus": {
                                "image": "",
                                "companyName": "",
                                "busNumber": "",
                                "busType": "",
                                "seatsType": "",
                                "price": ""
                            }
                        }
                    }
                }
            };
            var newEdge = {
                "status": "",
                "childServices": {
                    "edgeMode1": {
                        "status": "",
                        "request": {
                            "travelStartDate": "",
                            "mode": "Flight",
                            "flight": {
                                "state": "",
                                "class": "",
                                "Nonstop": ""
                            },
                            "bus": {
                                "state": "",
                                "class": "",
                                "seatType": ""
                            },
                            "train": {
                                "state": "",
                                "class": ""
                            }
                        },
                        "final": {
                            "travelStartDate": "",
                            "mode": "",
                            "flight": {
                                "companyName": "",
                                "flightID": "",
                                "seatNumber": "",
                                "price": "",
                                "preferences": {
                                    "class": "",
                                    "Nonstop": "",
                                    "meals": "",
                                    "extra Baggage": ""
                                }
                            },
                            "bus": {
                                "companyName": "",
                                "busNumber": "",
                                "seatNumber": "",
                                "price": "",
                                "preferences": {
                                    "class": "",
                                    "seatType": ""
                                }
                            },
                            "train": {
                                "companyName": "",
                                "trainNumber": "",
                                "seatNumber": "",
                                "coachNumber": "",
                                "price": "",
                                "preferences": {
                                    "class": ""
                                }
                            },
                            "travelStartTime": "",
                            "travelEndDate": "",
                            "travelEndTime": ""
                        }
                    }
                }
            };

            $rootScope.travelPlanJSON.nodes[nodeId] = newNode;
            $rootScope.travelPlanJSON.edges[edgeId] = newEdge;


            $rootScope.currentIndex++;
            ;


        }

        $rootScope.subNode = function (index) {

            var deleteNodeIDnumber = index + 1;
            var deleteEdgeIDnumber = index;

            var nodeId = "node" + deleteNodeIDnumber;
            var edgeId = "edge" + deleteEdgeIDnumber;

            delete $rootScope.travelPlanJSON.nodes[nodeId];
            delete $rootScope.travelPlanJSON.edges[edgeId];

            console.log($rootScope.travelPlanJSON)
        };
        $rootScope.travel_mode = "flight";
        $rootScope.change_travel_mode = function (count, index, icon) {
            index.edgeMode1.request.mode = icon;
            console.log(count);

            $rootScope.currentIndex = count;

            //$rootScope.edges[index].mode = icon;
            // console.log($rootScope.travelPlanJSON);
        };

        $rootScope.node_md_action_default_show = function () {
            if ($rootScope.node_0_show == false) {
                $rootScope.node_0_show = true;
                $rootScope.node_0_hide = false;
            } else {
                $rootScope.node_0_show = false;
                $rootScope.node_0_hide = true;
            }

        };

        $rootScope.node_0_show = false;
        $rootScope.node_md_action_show = function (x) {
            if (x.show == false) {
                x.show = true;
            } else {
                x.show = false;
            }

        };

        $rootScope.closeThis= function(x){
           x.show = false;
         }


        $rootScope.Flight_buttion_Action = function (x) {
            if (x.flightShow == false) {
                x.flightShow = true;
            } else {
                x.flightShow = false;
            }
        }

        //Auto Complete Start
        var self = this;

        self.states = loadAll();
        self.searchText = [];
        self.querySearch = querySearch;
        // self.defau = "Alabama"
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */

        function querySearch(query) {
            console.log("Entered querySearch");
            var results = query ? self.states.filter(createFilterFor(
                query)) : self.states;
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        }

        /**
         * Build `states` list of key/value pairs
         */

        function loadAll() {
            console.log("Entered loadAll");
            var allStates =
                'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
      Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
      Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
      Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
      North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
      South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
      Wisconsin, Wyoming';
            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }


        /**
         * Create filter function for a query string
         */

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        //Auto Complete End
    }).filter('keylength', function () {
    return function (input) {
        if (!angular.isObject(input)) {
            throw Error("Usage of non-objects with keylength filter!!")
        }
        return Object.keys(input).length;
    }
});
