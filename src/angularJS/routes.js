import angular from 'angular';
import './app/root/root.component.js';
import notes from './app/notes/notes.component.js';
//import './gifs.component.js';

angular
.module('angularJS-app')
.config(($stateProvider, $locationProvider) => {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $stateProvider
  .state('root', {
    url: '/angularJS',
    template: '<root />',
  })

  .state('root.notes', {
    url: '/notes',
    template: '<notes />',
  })

  .state('root.notes.meeting', {
    url: '/meeting',
    template: '<meeting/>',
  })
});