(function (){
  var app = angular.module("scoreBoard");
  app.controller("BattingCtrl", BattingCtrl);

  function BattingCtrl(TeamSvc) {
      // console.log("Please select a Striker...!");
      // this.striker="";
      // console.log("Please select a Non-Striker...!");
      // this.nonStriker="";
      this.myTeamA = TeamSvc.myTeamA;
      // this.myTeamA = TeamASvc.myTeam;
      this.availableBatsman = TeamSvc.myTeamA;
      // this.availableBatsman = TeamASvc.myTeam;

      this.striker = function (batsman){
        this.batsman1 = batsman;
        console.log('Striker : '+this.batsman1);
        this.notAvailableBatsman.push({name: this.batsman1, disabled: true});
        console.log('Outed: '+this.notAvailableBatsman[2].name +" " +this.notAvailableBatsman[2].disabled);
        // this.disableStriker = true ;


      }
      this.nonStriker = function (batsman){
        this.batsman2 = batsman;
        console.log('Non Striker : '+this.batsman2);
        this.notAvailableBatsman.push(this.batsman2);
        console.log('Outed: '+this.notAvailableBatsman );
      }

      this.indexOfBatsman = 0;
      this.isAvailableBatsman = function (batsman){
        this.indexOfBatsman = this.notAvailableBatsman.indexOf(batsman);
        // console.log('In isAvailableBatsman()');
          if (this.indexOfBatsman === -1)
            return false;
          else
            return true;
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
