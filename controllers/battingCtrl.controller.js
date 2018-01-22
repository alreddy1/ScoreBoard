(function (){
  var app = angular.module("scoreBoard");
  app.controller("BattingCtrl", BattingCtrl);

  function BattingCtrl(TeamSvc) {
      // this.striker="";
      // this.nonStriker="";
      this.myTeamA = TeamSvc.myTeamA;
      // this.myTeamA = TeamASvc.myTeam;
      this.availableBatsman = TeamSvc.myTeamA;
      // this.availableBatsman = TeamASvc.myTeam;
      
      this.striker = function (batsman){
        this.batsman = batsman;
        this.index = this.availableBatsman.indexOf(this.batsman);
        console.log('After: '+this.availableBatsman[this.index].available);
        this.availableBatsman[this.index].available = false;
        console.log(this.availableBatsman[this.index].name +' '+this.availableBatsman[this.index].available);

      }

      // if((this.runsScored === "odd" && !this.lastBall)|| (this.runsScored === "even" && this.lastBall)) {
      //     this.striker = this.nonStriker;
      // } else{
      //     this.striker = this.striker;
      // }

      this.batsmanRuns = 0;
      this.ballsFaced = 0;
      this.foursHit = 0;
      this.sixesHit = 0;
      this.strikeRate = 0;

      this.batsmanDetails = function (runs, extras) {
        // console.log('batsmanDetails clicked..!');
        this.runsScored = parseInt(runs);
        this.extraRun = parseInt(extras);
        // console.log(this.runsScored);
        if(this.runsScored === 4){
          this.foursHit += 1;
          // console.log(this.foursHit);
          this.batsmanRuns += 4;
        }else if (this.runsScored === 6) {
          this.sixesHit += 1;
          this.batsmanRuns += 6;
        }else {
          this.batsmanRuns += this.runsScored;
        }

          this.ballsFaced += 1;
          this.calculateStrikeRate(this.batsmanRuns, this.ballsFaced);
      }

      this.calculateStrikeRate = function (runs, balls){
        this.strikeRate = runs *100 / balls ;
        this.strikeRate = this.strikeRate.toFixed(2);
        // console.log('strikeRate : ' + this.strikeRate);
      };
  }

})();
