app.controller("MainController",function($scope, $http, $state, $stateParams){

    $scope.History = [];
	$scope.HostsList = [];
	$scope.online = 0;
	$scope.offline = 0;
	
  $scope.ReloadState=function()
  {
    $state.go($state.current, {}, {reload: true});
  }
    $scope.GetStatus=function(_status){
    	if(_status == 1){
    		return "Online";
   		}
    	else if(_status == 0){
    		return "Offline";
    	}
    }
    $scope.GetHistory = function(address){
       	$http.get('files/' + address)
       		.then(function(res){
          		$scope.History = res.data;                
	    	});
    }
    $scope.LoadStatuses = function(){
    	$http.get('files/addresses.json')
    	    .then(function(res){
          		$scope.HostsList = res.data;                
          		for(var i=0;i<$scope.HostsList.length;i++){
          		if($scope.HostsList[i].Status == 1){
          			$scope.online++;
          		}
          		else{
	          		$scope.offline++;	
          		}
          	}
    	});
    }
    $scope.init = function () {
    if ($stateParams != null && $stateParams.host !=null) {
        	$scope.selectedHost = $stateParams.host;
			$scope.GetHistory($scope.selectedHost.LogPath);
    } 
    $scope.LoadStatuses();
	}
	$scope.init();
})
