var supplyListTemplate = require(__dirname + '/supplies.html');
var supplyListController = require(__dirname + '/supplies.controller.js');

var SupplyListComponent = {
  template: supplyListTemplate,
  controller: supplyListController
};

angular.module('backpackApp').component('supplies', SupplyListComponent);
