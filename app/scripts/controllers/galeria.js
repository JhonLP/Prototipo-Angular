'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
  	var pictures = $scope.pictures=[];
  	var baseURL='http://lorempixel.com/300/180/';

  	var titles=['Comida sana','Salud y trabajo', 'Vida en la ciudad',
  	'Mantente Activo', 'Cuida tu aspecto','Vida nocturna'];

  	var keywords=['food','business', 'city', 'sports','fashion',
  	'nightlife'];

  	var dummyText='Lorem impsum dolor sit amet';

  	$scope.addPics= function(i){
  		pictures.push({
  			url:baseURL+keywords[i],
  			title:titles[i],
  			summary:dummyText
  		});
  	};

  	for(var i=0; i<6; i++){
  		$scope.addPics(i);
  	}

    $scope.rate=0;
    $scope.max=5;
    $scope.isReadonly = false;
  });
