angular.module('starter.controllers', [])

.controller('projectsCtrl', function($scope, $ionicModal, $timeout) {
  var vm = this;
  vm.projects = [{
    name: 'project 1'
  }]
})
.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    }
})
.controller('todosCtrl', function() {
  var vm = this;
  vm.todos = [
  ];

  vm.addTask=function(obj){
    vm.todos.push(obj);
    vm.text='';
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {});
