(function (){
  var app = angular.module("scoreBoard");
  app.controller("TeamACtrl", TeamACtrl);

  function TeamACtrl(TeamASvc){
      this.limitValue = 2 ;
      this.myTeam = TeamASvc.myTeam ;
  }

})();
