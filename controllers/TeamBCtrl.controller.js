(function (){
  var app = angular.module("scoreBoard");
  app.controller("TeamBCtrl", TeamBCtrl);

  function TeamBCtrl(TeamBSvc){
      this.limitValue = 2 ;
      this.myTeam = TeamBSvc.myTeam;
      // console.log('TeamB : '+this.myTeam[0].name);
  }

})();
