(function (){
  var app = angular.module("scoreBoard");
  app.controller("TeamACtrl", TeamACtrl);

  function TeamACtrl(){
      this.limitValue = 2 ;
      this.myTeam = [ {'name': "S Tendulkar"},
                      {'name': "V Sehwag"},
                      {'name': "V Kohli"},
                      {'name': "G Gambhir"},
                      {'name': "Y Sing"},
                      {'name': "M Dhoni (C & Wk)"},
                      {'name': "K Dev"},
                      {'name': "A Kumble"},
                      {'name': "H Sing"},
                      {'name': "J Srinath"},
                      {'name': "Z Khan"}];
  }

})();
