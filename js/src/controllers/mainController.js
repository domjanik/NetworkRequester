app.controller("MainController",function($scope, $state, $stateParams, mainService){

    $scope.History = function(){
      return mainService.HostHistory;
    };
    $scope.HostsList = function(){
      return mainService.HostsList;
    };
    $scope.online = function(){
      return mainService.online;
    };
    $scope.offline = function(){
      return mainService.offline;
    };
	
	
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
       	mainService.GetHistory(address)
    }
    $scope.LoadStatuses = function(){
    	mainService.LoadStatuses()
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
