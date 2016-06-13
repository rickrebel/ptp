'use strict';

angular.module('myApp.record', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/record/:slug', {
	templateUrl: 'record/record.html',
	controller: 'RecordCtrl'
  });
}])

.controller('RecordCtrl', [ '$sessionStorage', '$scope', '$routeParams', '$mdDialog', '$mdMedia', 'Lists', 'Filters',
	function( $sessionStorage, $scope, $routeParams, $mdDialog, $mdMedia, Lists, Filters) {


	$scope.currentUser = Lists.allUsers.filter(filterGeneral,{"comp":1,"param":"id"})[0];

	var locationsIds = [];

	$scope.currentRecord = $sessionStorage.allRecords.filter(filterGeneral,{"comp":$routeParams.slug,"param":"slug"})[0];
	$scope.currentComponent = Lists.allComponents.filter(filterGeneral,{"comp":$scope.currentRecord.component,"param":"id"})[0];
	$scope.currentProject = Lists.allProjects.filter(filterGeneral,{"comp":$scope.currentComponent.project,"param":"id"})[0];
	$scope.currentRegion = Lists.allRegions.filter(filterGeneral,{"comp":$scope.currentProject.region,"param":"id"})[0];
	$scope.currentState = Lists.allStates.filter(filterGeneral,{"comp":$scope.currentRegion.state,"param":"id"})[0];
	
	$scope.currentLocation = Lists.allLocations.filter(filterGeneral,{"comp":$scope.currentRecord.location,"param":"id"})[0];
	$scope.currentProgram = Lists.allPrograms.filter(filterGeneral,{"comp":$scope.currentRecord.program,"param":"id"})[0];

	function filterGeneral(x){
		return x[this.param] === this.comp;
	}

	var originatorEv;

	$scope.openMenu = function($mdOpenMenu, ev) {
		originatorEv = ev;
		$mdOpenMenu(ev);
	};

	$scope.checkVoicemail = function() {
	  // This never happens.
	};

	function get_last_stage(){

	};

	var last_status,
		last_stage;



	var allStatus=[
		'status_2',
		'status_3',
		'status_4'
	]

	get_last_status();

	function get_last_status(){
		for (var i = 0; i < allStatus.length; i++) {
			last_stage = allStatus[i];
			if ($scope.currentRecord[allStatus[i]] == 'APROVED'){
				last_stage = allStatus[i+1];
				$scope.nextStatus = 'INPROCESS';
			}
			else if ($scope.currentRecord[allStatus[i]]){
				if ($scope.currentRecord[allStatus[i]] == 'INPROCESS')
					$scope.nextStatus = 'APROVED';
				break;
			}
			else{
				$scope.currentRecord[allStatus[i]] = 'PENDING';
				$scope.nextStatus = 'INPROCESS';
				break;	
			}
		};
		getClosedRecord();
	};	

	$scope.getStageName= function(){
		switch(last_stage){
			case allStatus[0]:
				return "Ventanilla";
				break;
			case allStatus[1]:
				return "Recursos";
				break;
			case allStatus[2]:
				return "Operación";
				break;
		}
	}

	var allMessages= [];

	$scope.closedRecord = "";

	function getClosedRecord(){
		var statusLastStage = $scope.currentRecord[last_stage];
		if (statusLastStage && !(statusLastStage == 'INPROCESS' || statusLastStage == 'PENDING')){
			$scope.closedRecord = true;
		}
		$scope.loader = true ;
	}	

	$scope.changeStatus = function(newStatus){
		$scope.previousStatus = $scope.currentRecord[last_stage]
		$scope.currentRecord[last_stage] = newStatus;
		get_last_status(); 
		//SHOW MODAL (DIALOG) DONDE DEBES PEDIR EN UN TEXTAREA EL MENSAJE
	}

	// DIEGO
	// <<Diego>>FUNCION PARA EL DIALOG (SE ACTIVA CUANDO LE PONES SAVE)
	// <<Diego>> GUARDAR EN $sessionStorage.allComments CON UNSHIFT DE LO SIGUIENTE
	// <<falta modificar>> {"record":$scope.currentRecord.id,"type":"status_changed","author":$scope.currentUser.id,"previous_status": $scope.previousStatus,"stage": last_stage,"new_status": last_status,"date":Date.Now,"text": <<LO QUE JALÓ DEL MODAL, NO?>>,"responses":[]}
	// <<Ya está, no medificar>> $scope.currentComments = $sessionStorage.allComments.filter(filterGeneral,{"comp":$scope.currentRecord.id,"param":"record"})




  $scope.showAdvanced = function(ev) {
  	console.log("hola mundo")
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });



    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

  };








	$scope.currentBenefs = $sessionStorage.allBenefs.filter(filterGeneral,{"comp":$scope.currentRecord.id,"param":"record"})

	$scope.newBenef = function(benef){
		benef['record'] = $scope.currentRecord.id;
		$sessionStorage.allBenefs.push(benef)
		$scope.currentBenefs = $sessionStorage.allBenefs.filter(filterGeneral,{"comp":$scope.currentRecord.id,"param":"record"})
		$scope.newB = angular.copy({text:"",rol:""});
	}

	$scope.currentComments = $sessionStorage.allComments.filter(filterGeneral,{"comp":$scope.currentRecord.id,"param":"record"})
	console.log($scope.currentRecord)
	console.log($scope.currentComments)

	$scope.getName = function(id){
		var user = Lists.allUsers.filter(filterGeneral,{"comp":id,"param":"id"})[0];
		return user.text
	}

	$scope.saveComment = function (content, level, idx){
		content['date'] = new Date();
		content['author'] = $scope.currentUser.id;
		content['record'] = $scope.currentRecord.id;
		content['responses'] = [];
		if (level == 'comment')
			$scope.currentComments.unshift(content),
			$sessionStorage.allComments.unshift(content),
			$scope.newComment = angular.copy({text:""});
		else if (level == 'response')
			$scope.currentComments[idx].responses.push(content),
			$scope.newResp = angular.copy({text:""});
	}

}]);

