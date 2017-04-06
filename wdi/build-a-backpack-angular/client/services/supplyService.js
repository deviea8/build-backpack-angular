angular
  .module('backpackApp')
  .service('SupplyService', SupplyService);

// ^ Make sure to always include service on the module so that you get the benefits of services from Angular

SupplyService.$inject = ['$http'];

function SupplyService($http) {
  var self = this;
  self.message = 'Hello from the supplies service';
  self.getSupplies = function getSupplies () {
    return $http.get('/supplies')
  }
};
