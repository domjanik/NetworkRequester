var app = angular.module('App', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/Home");
  //
  // Now set up the states
  	$stateProvider
    	.state('Home', {
      	url: "/Home",
      	templateUrl: "sites/home.html"
    })
    .state('List', {
      url: "/List",
      templateUrl: "sites/list.html",
      controller: 'MainController'
});})