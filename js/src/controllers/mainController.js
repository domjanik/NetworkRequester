app.controller("MainController",function($scope, $http){
	$scope.HostsList = [];
	$http.get('files/addresses.json')
       .then(function(res){
          $scope.HostsList = res.data;                
    });
       $scope.GetStatus=function(_status){
       		if(_status == 1){
       			return "Online";
       		}
       		else if(_status == 0){
       			return "Offline";
       		}
       }
       $scope.GoToDetails=function(host.IP){
       		
       }
})
