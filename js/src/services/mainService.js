app.service("mainService",function($http, $state, $stateParams){
	this.HostHistory = [];
	this.HostsList = [];
	this.online = 0;
	this.offline = 0;
	var that = this;
    this.GetHistory = function(address){
       	$http.get('files/' + address)
       		.then(function(res){
          		that.HostHistory = res.data;                
	    	});
    }
    this.LoadStatuses = function(){
    	that.online = 0;
    	that.offline = 0;
    	$http.get('files/addresses.json')
    	    .then(function(res){
          		that.HostsList = res.data;                
          		for(var i=0;i<that.HostsList.length;i++){
          		if(that.HostsList[i].Status == 1){
          			that.online++;

          		}
          		else{
	          		that.offline++;	
          		}
          	}
    	});
    }
})
