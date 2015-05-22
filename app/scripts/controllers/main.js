'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval=5000;
    
    $scope.slides = [
    	{
    		title:'Mantente en forma',
    		image:baseURL+'sports/',
    		text:'Practica un deporte'
    	},
    	{
    		title:'Buena alimentacion',
    		image:baseURL+'food/',
    		text:'Come frutas y verduras'
    	},
    	{
    		title:'Sal un poco',
    		image:baseURL+'nature',
    		text:'Sal de tu casa'
    	}
    ];
    // Modelo para los tres bloques de contenidos
	var baseURL2='http://lorempixel.com/200/200/';
	$scope.contenido=[
	{
  	 img:baseURL2+'people',
  	 title:'Sobre Nosotros',
  	 sumario:'Somos una empresa comprometida con la vida sana'
	},
	{
  	 img:baseURL2+'business',
  	 title:'Nuestros Servicios',
  	 sumario:'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación, cuales son los mejores ejercicios para tí, etc.'
	},
	{

   	img:baseURL2+'transport',
   	title:'Contáctanos',
   	sumario:'#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
	}
	];
  });
