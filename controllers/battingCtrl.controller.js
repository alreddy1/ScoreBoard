(function (){
  var app = angular.module("scoreBoard");
  app.controller("BattingCtrl", BattingCtrl);

  function BattingCtrl() {
      // console.log("Please select a Striker...!");
      this.striker="";
      // console.log("Please select a Non-Striker...!");
      this.nonStriker="";

      if((this.runsScored==="odd" && !this.lastBall)|| (this.runsScored==="even" && this.lastBall)) {
          this.striker = this.nonStriker;
      } else{
          this.striker = this.striker;
      }

      this.batsmanRuns = 0;
      this.ballsFaced = 0;
      this.strikeRate = 0;
      this.foursHit = 0;
      this.sixesHit = 0;
      this.strikeRate = 0;

      this.batsmanDetails = function (runs, extras) {
        this.runsScored = parseInt(runs);
        this.extraRun = parseInt(extras);
        // console.log(this.runsScored === 4);
        // console.log(this.runsScored === 6);
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
        console.log('strikeRate : ' + this.strikeRate);
      };
  }

})();
