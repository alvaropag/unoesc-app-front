  (function() {
   'use strict';
   
   angular
   .module('receita')
   .service('ReceitaService', ReceitaService);
   
   ReceitaService.$inject = ['API','$http'];
   
   function ReceitaService(API,$http) {
     this.findAll = function() {
       return $http.get(API.url + 'receitas');
     }
     this.create = function(receita) {
       return $http.post(API.url + 'receitas', receita);
     }
     this.update = function(receita) {
       return $http.put(API.url + 'receitas/' + receita._id, receita);
     }
     this.remove = function(id) {
       return $http.delete(API.url + 'receitas/' + id);
     }
   }
 })();