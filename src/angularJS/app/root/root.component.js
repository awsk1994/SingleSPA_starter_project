import angular from 'angular';
import template from './root.template.html';
import controller from './root.controller.js';

angular
.module('angularJS-app')
.component('root', {
  template,
  controller
});