(function () {
   
   angular
      .module("checkbox-select", [])
      .directive("checkboxModel", ["$compile", function ($compile) {
         return {
            restrict: "A",
            link: function (scope, ele, attrs) {
               // Defining updateSelection function on the parent scope
               if (!scope.$parent.updateSelections) {
                  // Using splice and push methods to make use of 
                  // the same "selections" object passed by reference to the 
                  // addOrRemove function as using "selections = []" 
                  // creates a new object within the scope of the 
                  // function which doesn't help in two way binding.
                  scope.$parent.updateSelections = function (selectedItems, item, isMultiple) {
                     var itemIndex = selectedItems.indexOf(item)
                     var isPresent = (itemIndex > -1)
                     if (isMultiple) {
                        if (isPresent) {
                           selectedItems.splice(itemIndex, 1)
                        } else {
                           selectedItems.push(item)
                        }
                     } else {
                        if (isPresent) {
                           selectedItems.splice(0, 1)
                        } else {
                           selectedItems.splice(0, 1, item)
                        }
                     }
                  }   
               }
               
               // Adding or removing attributes
               ele.attr("ng-checked", attrs.checkboxModel + ".indexOf(" + attrs.checkboxValue + ") > -1")
               var multiple = attrs.multiple ? "true" : "false"
               ele.attr("ng-click", "updateSelections(" + [attrs.checkboxModel, attrs.checkboxValue, multiple].join(",") + ")")
               
               // Removing the checkbox-model attribute, 
               // it will avoid recompiling the element infinitly
               ele.removeAttr("checkbox-model")
               ele.removeAttr("checkbox-value")
               ele.removeAttr("multiple")
               
               $compile(ele)(scope)
            }
         }
      }])
   
})()