(function (){
  var app = angular.module("scoreBoard");
  app.controller("TeamBCtrl", TeamBCtrl);

  function TeamBCtrl(TeamSvc){
      // this.myTeam = TeamBSvc.myTeam;
      this.myTeam = TeamSvc.myTeamB;
      // console.log('TeamB : '+this.myTeam[0].name);
      this.limitValue = 2 ;
      this.showMoreLink = true;
      this.showLessLink = false;

      this.showMore = function(){
        console.log('showMore()');
        this.limitValue = 11 ;
        this.showMoreLink = false;
        this.showLessLink = true;

      }
      this.showLess = function(){
        console.log('showLess()');
        this.limitValue = 2 ;
        this.showMoreLink = true;
        this.showLessLink = false;
      }
  }

})();
