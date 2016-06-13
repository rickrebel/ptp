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

	//SACAR PROMOTORES PARA ELEGIR DE Lists.allUsers

}]);

