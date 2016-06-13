'use strict';


angular.module('myApp.filters', ['ngRoute'])


.service('Filters', ['$parse', '$rootScope' , function($parse, $rootScope) {

	this.getIds  = function(arrayIds,originalArray,iden){
		if (!iden)
			iden = "id"
		for (var i = originalArray.length - 1; i >= 0; i--) {
			arrayIds.push(originalArray[i][iden])
		};

	}

	this.multiple = function	(originalArray) {
		for (var i = this.comp.length - 1; i >= 0; i--) {
			if (originalArray[this.param] == this.comp[i])
				return originalArray[this.param] == this.comp[i];
		};
	}



	this.getUniquesIds =function(value, index, self) {
	    return self.indexOf(value) === index;
	}


}]);