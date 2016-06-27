var app = angular.module('App', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  	$stateProvider
    .state('/', {
    		url:"/",
      		templateUrl: "sites/home.html",
      		controller: 'MainController'
    })
    .state('List', {
		templateUrl: "sites/list.html",
	   	controller: 'MainController'
	})
	.state('Details', {
		templateUrl: "sites/details.html",
	   	controller: 'MainController',
	   	params : { host: null }
	});
})