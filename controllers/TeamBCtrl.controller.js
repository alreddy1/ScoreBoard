(function (){
  var app = angular.module("scoreBoard");
  app.controller("TeamBCtrl", TeamBCtrl);

  function TeamBCtrl(){
      this.limitValue = 2 ;
      this.myTeam = [ {'name': "M Hayden"},
                      {'name': "G Christ (Wk)"},
                      {'name': "R Ponting (C)"},
                      {'name': "M Clark"},
                      {'name': "M Hussey"},
                      {'name': "M Bevan"},
                      {'name': "S Warne"},
                      {'name': "B Lee"},
                      {'name': "M Grath"},
                      {'name': "M Jonhson"},
                      {'name': "M Stark"}];
  }

})();
