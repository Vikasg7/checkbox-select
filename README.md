<h2>checkbox-select angular plugin</h2>
<h3>Create checkbox lists with multiple or individual selections</h3>
<h4>Demo</h4>
<p>
   Check out this plnkr:- <a href="https://run.plnkr.co/AuAEs0K61CcbG2jw/">https://run.plnkr.co/AuAEs0K61CcbG2jw/</a>
</p>

<h4>How to use / install</h4>
- Download `checkbox-select.js` file in your project folder.

- Add it to your `index.html` using script tags.

- Add a reference to `checkbox-select` module while initiating the angular-app like below
   ````javascript
   angular.module("APP", ["checkbox-select"])         

   ````

- Now in the controller, define a list to iterate over using ng-repeat and a variable on scope to hold the selections, like below:-
   ````javascript
   angular
      .module("APP", ["checkbox-select"])
      .controller("demoCtrl", ["$scope", function ($scope) {
         var dc = this
         // Defining list to iterate over
         dc.list = [
            "selection1",
            "selection2",
            "selection3"
         ]
         // Defining variable to hold the selections
         dc.multipleSelection = []
      }])
   ````

- Now you can add the following attributes to the input element like below
   ````javascript
   <label ng-repeat="thing in dc.list">
      <input type="checkbox" checkbox-model="dc.individualSelections" checkbox-value="thing" multiple>
      {{thing}}
   </label>
   ````

- <strong>Directive Attributes:-</strong><br>
   <table>
      <thead>
         <tr>
            <th>Attribute</th>
            <th>Value</th>
            <th>Optional/not</th>                  
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>checkbox-model</td>
            <td>An Array variable on the scope to hold the selections. for eg. dc.multipleSelections</td>
            <td>Mandatory</td>
         </tr>
         <tr>
            <td>checkbox-value</td>
            <td>Iterator variable in ng-repeat</td>
            <td>Mandatory</td>
         </tr>
         <tr>
            <td>multiple</td>
            <td>No value. Using it, will allow multiple selections. Remove it, if you want to select on checkbox at a time</td>
            <td>Optional</td>
         </tr>
      </tbody>
   </table>

<h4>Donate</h4>
<p>If this repository helps you anyhow, please don't mind coming back and 
   <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F3QQCWFPWHBYE" target="_blank">Buy Me Coffee</a>
OR you can use 
   <a href="https://gratipay.com/~xcelancer/" target="_blank">Gratipay</a>
to show your appreciation and gratitude.
</p>