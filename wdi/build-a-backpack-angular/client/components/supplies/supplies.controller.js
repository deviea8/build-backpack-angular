function supplyListController (SupplyService) {
    var vm = this;
    vm.supplyList = [];
    vm.message = SupplyService.message;

    activate();

    function activate () {
      SupplyService.getSupplies()
        .then(function(response){
          console.log(response);
          vm.supplyList = response.data.supplies;
          console.log(vm.supplyList);
      });
    };
};

supplyListController.$inject = ['SupplyService'];

module.exports = supplyListController;
