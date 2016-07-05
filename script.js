(function () {
   
   angular
      .module("APP", ["checkbox-select"])
      .controller("demoCtrl", ["$scope", function ($scope) {
         var dc = this
         dc.list = [
            "selection1",
            "selection2",
            "selection3"
         ]
         
         // Define the selections containers here
         dc.multipleSelections = []
         dc.individualSelections = []
      }])
   
})()