app.controller("MainController",function($scope, $http){
	$scope.HostsList = [];
	$http.get('files/addresses.json')
       .then(function(res){
          $scope.HostsList = res.data;                
    });
})
