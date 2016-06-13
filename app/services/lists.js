'use strict';


angular.module('myApp.lists', ['ngRoute'])


.service('Lists', ['$parse', '$rootScope' , '$sessionStorage', function($parse, $rootScope, $sessionStorage) {

	this.allUsers = [{"id":1,"text":"Sandra Itzel","user":1,"rol":"COMUNITARIO"},
		{"id":2,"text":"Fernando Ruiz","user":1,"rol":"ESTATAL"}]


	this.allPrograms=[{"id":1,"text":"FAPPA","slug":"fappa","instance":1},
		{"id":2,"text":"Opciones Productivas","slug":"pop","instance":2},
		{"id":3,"text":"Otro programa","slug":"otro1","instance":3},
		{"id":4,"text":"Otro programa 2","slug":"otro2","instance":4},
		{"id":5,"text":"Otro programa 3","slug":"otro3","instance":4}]

	
	this.allStates=[{"id":1,"text":"Veracruz","slug":"veracruz"},
		{"id":2,"text":"Chiapas","slug":"chiapas"},
		{"id":3,"text":"Oaxaca","slug":"oaxaca"},
		{"id":4,"text":"Puebla","slug":"puebla"},
		{"id":5,"text":"Estado de México","slug":"edomex"}]

	this.allRegions=[{"id":2,"text":"Acayucan","slug":"acayucan","state":1},
		{"id":1,"text":"Altotonga-jalancingo","slug":"altotonga-jalancingo","state":1},
		{"id":3,"text":"Mecayapan","slug":"mecayapan","state":1},
		{"id":4,"text":"Otro","slug":"otro","state":2},
		{"id":5,"text":"Otro2","slug":"otro2","state":2}]

	this.allProjects=[{"id":1,"text":"Ganado Porcino para venta en Tlaxcala, Puebla y Xalapa","slug":"porcino","region":1},
		{"id":2,"text":"Viveros para la producción de frutales","slug":"viveros","region":1},
		{"id":3,"text":"Ganado Bovino de doble propósito","slug":"bovino","region":1},
		{"id":4,"text":"Otro","slug":"otro","region":2},
		{"id":5,"text":"Otro2","slug":"otro2","region":2}]

	this.allComponents=[{"id":1,"text":"Dotación de Activos","slug":"dotacion-de-activos","project":1},
		{"id":2,"text":"Producción de alimentos","slug":"produccion-de-alimentos","project":1},
		{"id":3,"text":"Venta y Transporte","slug":"venta-y-transporte","project":1},
		{"id":4,"text":"Otro","slug":"otro","project":2},
		{"id":5,"text":"Otro2","slug":"otro2","project":2}]

	this.allLocations=[{"text":"Xoampolco","id":1,"municipio":1,"promotor":3,"region":1,"habs":2200},
		{"text":"Xoampolco","id":2,"municipio":2,"promotor":1,"region":1,"habs":2200},
		{"text":"Xoampolco","id":3,"municipio":1,"promotor":4,"region":1,"habs":2200},
		{"text":"Xoampolco","id":4,"municipio":2,"promotor":2,"region":1,"habs":2200},
		{"text":"Xoampolco","id":5,"municipio":3,"promotor":3,"region":1,"habs":2200},
		{"text":"Xoampolco","id":6,"municipio":3,"promotor":2,"region":1,"habs":2200},
		{"text":"Xoampolco","id":7,"municipio":3,"promotor":3,"region":1,"habs":2200},
		{"text":"Xoampolco","id":8,"municipio":3,"promotor":2,"region":1,"habs":2200},
		{"text":"Xoampolco","id":9,"municipio":3,"promotor":2,"region":1,"habs":2200},
		{"text":"Xoampolco","id":10,"municipio":3,"promotor":4,"region":1,"habs":2200},
		{"text":"Mixquiapan","id":11,"municipio":3,"promotor":1,"region":1,"habs":452},
		{"text":"Tlaxiaco","id":12,"municipio":3,"promotor":5,"region":2,"habs":452},
		{"text":"Tlaxiaco","id":13,"municipio":3,"promotor":5,"region":2,"habs":452},
		{"text":"Tlaxiaco","id":14,"municipio":3,"promotor":5,"region":2,"habs":452},
		{"text":"Tlaxiaco","id":15,"municipio":3,"promotor":5,"region":2,"habs":452},
		{"text":"Tlaxiaco","id":16,"municipio":3,"promotor":5,"region":2,"habs":452},
		{"text":"Tlaxiaco","id":17,"municipio":3,"promotor":5,"region":2,"habs":452}]


	//if (!$sessionStorage.allRecords){
		$sessionStorage.allRecords = [{"id":1,"text":"Puerquito Feliz","slug":"Puerquito-feliz","component":1,"program":1,"location":2,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"APROVED","status_4":"INPROCESS","cash_2":5000,"cash_3":5000,"benef_2":10,"benef_3":10},
			{"id":2,"text":"Productores porcícolas Los Trabajadores","slug":"Los-trabajadores","component":1,"program":2,"location":11,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":3,"text":"La Unión","slug":"La-unión","component":1,"program":1,"location":11,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":4,"text":"Otro","slug":"otro","component":1,"program":2,"location":3,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":5,"text":"Otro","slug":"otro","component":1,"program":2,"location":3,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":6,"text":"Otro","slug":"otro","component":1,"program":2,"location":3,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":7,"text":"Otro","slug":"otro","component":1,"program":2,"location":4,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":8,"text":"Otro","slug":"otro","component":1,"program":2,"location":4,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":9,"text":"Otro","slug":"otro","component":1,"program":2,"location":5,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":10,"text":"Otro","slug":"otro","component":1,"program":2,"location":5,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":11,"text":"Otro","slug":"otro","component":1,"program":3,"location":5,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":12,"text":"Otro","slug":"otro","component":1,"program":3,"location":6,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":13,"text":"Otro","slug":"otro","component":1,"program":3,"location":6,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":14,"text":"Otro","slug":"otro","component":1,"program":3,"location":6,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":15,"text":"Otro","slug":"otro","component":1,"program":3,"location":6,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":16,"text":"Otro","slug":"otro","component":1,"program":3,"location":7,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":17,"text":"Otro","slug":"otro","component":1,"program":1,"location":7,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"APROVED","status_4":"INPROCESS","cash_2":5000,"cash_3":5000,"benef_2":10,"benef_3":10},
			{"id":18,"text":"Otro","slug":"otro","component":1,"program":1,"location":7,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"APROVED","status_4":"INPROCESS","cash_2":5000,"cash_3":5000,"benef_2":10,"benef_3":10},
			{"id":19,"text":"Productores Esperanza","slug":"productores-esperanza","component":4,"program":1,"location":21,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"","status_3":"","status_4":"","cash_2":5000,"cash_3":5000,"benef_2":10,"benef_3":10},
			{"id":20,"text":"Productores porcícolas Los Trabajadores","slug":"Los-trabajadores","component":4,"program":2,"location":21,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":21,"text":"La Unión","slug":"La-unión","component":4,"program":1,"location":22,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":22,"text":"Otro","slug":"otro","component":4,"program":2,"location":22,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":23,"text":"Otro","slug":"otro","component":4,"program":2,"location":23,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":24,"text":"Otro","slug":"otro","component":4,"program":2,"location":23,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":25,"text":"Otro","slug":"otro","component":4,"program":2,"location":24,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"NOAPROVED","status_3":"","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":26,"text":"Otro","slug":"otro","component":4,"program":2,"location":24,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":27,"text":"Otro","slug":"otro","component":4,"program":2,"location":24,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":28,"text":"Otro","slug":"otro","component":4,"program":2,"location":25,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":29,"text":"Otro","slug":"otro","component":4,"program":3,"location":25,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":30,"text":"Otro","slug":"otro","component":4,"program":3,"location":25,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":31,"text":"Otro","slug":"otro","component":4,"program":3,"location":26,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":32,"text":"Otro","slug":"otro","component":4,"program":3,"location":26,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":33,"text":"Otro","slug":"otro","component":4,"program":3,"location":26,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":34,"text":"Otro","slug":"otro","component":4,"program":3,"location":27,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"NOAPROVED","status_4":"","cash_2":5000,"cash_3":0,"benef_2":10,"benef_3":0},
			{"id":35,"text":"Otro","slug":"otro","component":4,"program":1,"location":27,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"APROVED","status_4":"INPROCESS","cash_2":5000,"cash_3":5000,"benef_2":10,"benef_3":10},
			{"id":36,"text":"Otro","slug":"otro","component":4,"program":1,"location":27,"type_org":"Grupo social","exp_tec":"https://drive.google.com/file/d/0B7YKXUPXGMxZWjd5LWhWRVNfa28/view?usp=sharing","status_2":"APROVED","status_3":"APROVED","status_4":"INPROCESS","cash_2":5000,"cash_3":5000,"benef_2":10,"benef_3":10}]
	//};

	if (!$sessionStorage.allComments){
		$sessionStorage.allComments =[
			{"id":1,"record":1,"type":"comment","author":1,"date":"14-02-2016","text":"Se terminó la dotación inicial de alimentos. Actualmente las familias están comprando el alimento y aun no tienen ingreso.No existen registros administrativos de cuánto están gastando. Hace falta desparasitantes y vacunas. @FernadoRuiz y @LilianaFernandez","responses":[
				{"id":1,"author":2,"date":"17-02-2016","text":"Se nos ha informado que está en proceso un convenio con la Universidad Autónoma Chapingo para la asistencia técnica." },
				{"id":1,"author":1,"date":"18-02-2016","text":"Tenemos fecha tentativa para avisarle a mis beneficiarios?" }
			]}
		]
	}

	$sessionStorage.allQuestions =[
	]

	if (!$sessionStorage.allBenefs){
		$sessionStorage.allBenefs=[{"id":1,"text":"Carmen Hernández Gazpar","record":1,"rol":"Presidente","others":"Las Abejas"},
			{"id":2,"text":"Agustina Ramírez Gomez","record":1,"rol":"Secretario","others":""},
			{"id":3,"text":"Carolina Salazar García","record":1,"rol":"Tesorero","others":""},
			{"id":4,"text":"Lorenza Marcial del Carmen","record":1,"rol":"Miembro","others":""},
			{"id":5,"text":"XX YY ","record":1,"rol":"Miembro","others":""},
			{"id":6,"text":"XX YY ","record":1,"rol":"Miembro","others":"Productores de miel"},
			{"id":7,"text":"XX YY ","record":1,"rol":"Miembro","others":""},
			{"id":8,"text":"XX YY ","record":1,"rol":"Miembro","others":""},
			{"id":9,"text":"XX YY ","record":1,"rol":"Miembro","others":""},
			{"id":10,"text":"XX YY ","record":1,"rol":"Miembro","others":""}]
		}

	var dictionary = {
		COMPLETED: "status_1",
		INPROCESS: "status_2",
		PENDING: "status_3",
		NOAPROVED: "status_4",
		DECLINED: "status_4",
		APROVED : "consultation_1",
		CURRENT : "consultation_2",
		WHITOUT : "consultation_3",
		PENDING : "consultation_4",
		NOAPLY : "consultation_"
	};


}]);