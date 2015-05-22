'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [
      {
      	title:'Alimentos buenos para la salud',
      	content:'Lorem ipsum'
      },
      {
      	title:'Alimentos menos buenos para la salud',
      	content:'Lorem ipsum again'
      },
      {
      	title:'Limita tu cantidad de hidratos',
      	content:'Lorem ipsum and again'
      }
    ];
  });
