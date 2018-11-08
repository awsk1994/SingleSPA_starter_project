import angular from 'angular';

import template from './template.html';
import controller from './controller.js';

import meetingTemplate from './meeting/template.html'
import meetingControler from './meeting/controller.js';

angular.module('notes', []);

angular
.module('notes')
.component('notes', {
  template,
  controller
})
.component('meeting', {
    template: meetingTemplate,
    controller: meetingControler
});

//todo: meeting controller