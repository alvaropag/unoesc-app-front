 (function() {
   'use strict';
   
   angular
   .module('receita')
   .controller('ReceitaController', ReceitaController);
   
   ReceitaController.$inject = ['ReceitaService'];
   
   function ReceitaController(ReceitaService) {
     var vm = this;
     vm.empty = {};
     
     vm.findAll = function() {
       ReceitaService.findAll().then(function(response) {
         vm.receitas = response.data;
       },function(error) {
         console.error(error);
       });
     }
     vm.findAll();
     
     vm.reset = function() {
       vm.receita = angular.copy(vm.empty);
     }
     vm.populate = function(receita) {
       vm.receita = angular.copy(receita);
     }
     vm.save = function(receita) {
       if (receita._id) {
         ReceitaService.update(receita).then(function(response) {
           vm.success = response.data;
           vm.findAll();
           vm.reset();
         },function(error) {
           console.log(error);
           vm.error = error.data;
         });
       } else {
         ReceitaService.create(receita).then(function(response) {
           vm.success = response.data;
           vm.findAll();
           vm.reset();
         }, function(error) {
           console.error(error);
           vm.error = error.data;
         });
       }
     }
     vm.remove = function(receita) {
       if (confirm('Tem certeza que gostaria de remover a receita ' + receita.name + '?')) {
         ReceitaService.remove(receita._id).then(function(response) {
           vm.success = response.data;
           vm.findAll();
         }, function(error) {
           console.error(error);
           vm.error = error.data;
         });
       }
     }
   }
 })();
