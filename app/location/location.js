'use strict';

angular.module('myApp.location', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/location/:slug', {
    templateUrl: 'location/location.html',
    controller: 'LocationCtrl'
  });
}])

.controller('LocationCtrl', [ '$sessionStorage', '$scope', '$routeParams', 'Lists', 'Filters',
	function( $sessionStorage, $scope, $routeParams, Lists, Filters) {


	$scope.currentUser = Lists.allUsers.filter(filterGeneral,{"comp":1,"param":"id"})[0];
	console.log(Lists.allUsers)
	console.log($scope.currentUser)

	var locationsIds = [];

	$scope.currentComponent = Lists.allComponents.filter(filterGeneral,{"comp":$routeParams.slug,"param":"slug"})[0];
	$scope.currentProject = Lists.allProjects.filter(filterGeneral,{"comp":$scope.currentComponent.project,"param":"id"})[0];
	$scope.currentRegion = Lists.allRegions.filter(filterGeneral,{"comp":$scope.currentProject.region,"param":"id"})[0];
	$scope.currentState = Lists.allStates.filter(filterGeneral,{"comp":$scope.currentRegion.state,"param":"id"})[0];
	$scope.currentLocations = Lists.allLocations.filter(filterGeneral,{"comp":$scope.currentProject.region,"param":"region"});
	$scope.currentRecords = $sessionStorage.allRecords.filter(filterGeneral,{"comp":$scope.currentComponent.id,"param":"component"});

	$scope.filterLocations = $scope.currentLocations.filter(filterGeneral, {"comp":$scope.currentUser.id,"param":"promotor"});

	function filterGeneral(x){
		return x[this.param] === this.comp;
	}

	Filters.getIds(locationsIds,$scope.filterLocations);

	var	filterRecords = $scope.currentRecords.filter(Filters.multiple, {"comp":locationsIds,"param":"location"});
	$scope.filterRecords = filterRecords;


	$scope.uniquesRecords = filterRecords.filter( onlyUnique ); 
	function onlyUnique(value, index, self) {
		var index2 = self.map(function(e){return e.program;}).indexOf(value.program)
	    return index2 === index;
	}
	var currentPrograms = []
	currentPrograms.push(Lists.allPrograms.filter(filterByProgram, $scope.uniquesRecords));
	function filterByProgram(programs) {
		for (var i = this.length - 1; i >= 0; i--) {
			if (programs.id == this[i].program)
				return programs.id == this[i].program;
			};
	}
	$scope.currentPrograms = currentPrograms[0]
	var currentRecords = $scope.currentRecords;



	getVariousStatus("filter",filterRecords)
	getVariousStatus("current",currentRecords)
	
	function getVariousStatus(name,array){
		$scope[name+"Status1"] = array.length;
		getStatus("status_2",name+"Status2",array);
		getStatus("status_3",name+"Status3",array);
		getStatus("status_4",name+"Status4",array);
	}
	
	function getStatus(field,scope,array){
		$scope[scope] = array.filter(filterByStatus, field).length;
	}

	function filterByStatus(records) {
		return records[this] == "APROVED" | records[this] == "INPROCESS";
	}

	getNumbers("filter","filterRecords")
	getNumbers("current","currentRecords")

	function getNumbers(name,array){
		getSum("cash_2",name + "Cash2",array);
		getSum("cash_3",name + "Cash3",array);
		getSum("benef_2",name + "Benef2",array);
		getSum("benef_3",name + "Benef3",array);
	}

	function getSum(field,scope,array){
		var totalCash = 0;
		for (var i = $scope[array].length - 1; i >= 0; i--) {
			totalCash = totalCash + $scope[array][i][field];
		};
		$scope[scope] = totalCash;
	}

	var promotors = [{ id: 0, text: 'Armando' }, { id: 1, text: 'Alberto' }, { id: 2, text: 'Rodrigo' }, { id: 3, text: 'Karen' }, { id: 4, text: 'Bernardo' }];

	$(".js-promotors").select2({
	    data: promotors,
	   	multiple: true
	});

	$(".js-programs").select2({
	    data: currentPrograms[0],
	    multiple: true
	});

	$(".js-locations").select2({
	    data: $scope.filterLocations,
	    multiple: true
	});

	$scope.tabs = {
		uno: true,
		dos: false
	};
	$scope.infoDescription = " Esta es la descripción así larga y todo del resumen"

	$scope.tab = function(num){
		if (num ==2){
			$scope.tabs={
				uno: false,
				dos: true				
			};
			$scope.infoDescription = " Esta es la descripción así larga y todo del objetivo"
		}
		else if (num ==1){
			$scope.tabs = {
				uno: true,
				dos: false
			};
			$scope.infoDescription = " Esta es la descripción así larga y todo del resumen"
		}	
	}





}]);