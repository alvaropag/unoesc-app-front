(function() {
  'use strict';
  
  angular
  .module('receita')
  .config(Config);
  
  function Config($routeProvider) {
    $routeProvider
    .when('/receitas', {
      templateUrl: '/receita/receita.html',
      controller: 'ReceitaController',
      controllerAs: 'vm'
    });
  }
})(); 
