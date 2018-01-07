console.log("here I am");
var myApp = angular.module('myApp', ['ngRoute']);
console.log("and again I am");

myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    // console.log('myApp -- config')
    $routeProvider
      .when('/schedule', {
        templateUrl: '/views/templates/schedule.html',
        controller: 'EventController as ec',
        
      }) .when('/', {
        templateUrl: '/views/templates/event.html',
        controller: 'ScheduleController as sc'
      })
   
    });