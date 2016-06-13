'use strict';

angular.module('myApp.MenuCtrl', [])

.controller('MenuCtrl', ['$scope', 'Lists', 'Filters', '$mdDialog',
	function ($scope, Lists, Filters, $mdDialog) {

	var USER = {}
	USER.rol = "COMUNITARIO";
	USER.id = 1;
	if (USER.rol = "COMUNITARIO"){
		$scope.foo= "SOY UN MENU";
		$scope.titleUbications="Mis Localidades:";

		$scope.myLocations = Lists.allLocations.filter(filterGeneral,{"comp":USER.id,"param":"promotor"});
		var myProjects = Lists.allProjects.filter(filterGeneral,{"comp":$scope.myLocations[0].region,"param":"region"});
		for (var i = myProjects.length - 1; i >= 0; i--) {
			myProjects[i]["urlName"]= 'project';
			var in_component = Lists.allComponents.filter(filterGeneral,{"comp":myProjects[i].id,"param":"project"});
			myProjects[i]["components"]= in_component;
		};
		$scope.myProjects = myProjects;
	}


	function filterGeneral(x){
		return x[this.param] === this.comp;
	}

	$scope.treeOptions = {
	    nodeChildren: "components",
	    dirSelectable: true,
	    injectClasses: {
	        ul: "a1",
	        li: "a2",
	        liSelected: "a7",
	        iExpanded: "a3",
	        iCollapsed: "a4",
	        iLeaf: "a5",
	        label: "a6",
	        labelSelected: "a8"
	    }
	}
	
	$scope.dataForTheTree = myProjects


	$scope.loader = true ;


	var originatorEv;

	$scope.openOtionsCreate = function($mdOpenMenu, ev){
		console.log("me abro")
		originatorEv = ev;
		$mdOpenMenu(ev);
	}

}]);

	
