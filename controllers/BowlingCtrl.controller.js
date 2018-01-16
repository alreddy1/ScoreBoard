(function (){
  var app = angular.module("scoreBoard");
  app.controller("BowlingCtrl", BowlingCtrl);

  function BowlingCtrl(TeamBSvc) {
      // console.log("Please select a Bowler...!");
      this.bowler ="";
      this.totalScore = 0;
      this.wicketsFallen = 0;
      this.ballCount = 0;
      this.oversCount = 0;
      this.oversCompletted = 0.0;
      this.runsScoredInThisOver = [];
      this.showOver = false;
      this.myTeamB = TeamBSvc.myTeam;

      this.overDetails = function(runs, extras){
        this.runsScored = parseInt(runs);
        // console.log("bowl runsScored: "+ typeof(this.runsScored)) ;
        this.extraRun = extras;
        if (this.extraRun === 'NB') {
            this.runConcededOnNoBall =this.runsScored + 1;
            this.runsScoredInThisOver.push(this.runConcededOnNoBall);
            // console.log("Runs scored with No-Ball!--> runs : " +this.runConcededOnNoBall);
            this.totalScore += this.runConcededOnNoBall;
            // console.log("total score :" +this.totalScore);

            // console.log('Ball Count : ' +this.ballCount );
        } else if (this.extraRun === 'Wd') {
          this.runConcededOnWideBall =this.runsScored + 1;
          this.runsScoredInThisOver.push(this.runConcededOnWideBall);
            // console.log("Runs scored on Wide delivery! --> extras :" +this.runConcededOnWideBall);
            this.totalScore += this.runConcededOnWideBall;
            // console.log("total score :" +this.totalScore);

            // console.log('Ball Count : ' +this.ballCount );
        } else if (this.extraRun === 'LB') {
            this.runConcededWithLegByes =this.runsScored;
            this.runsScoredInThisOver.push(this.runConcededWithLegByes);
            // console.log("Runs scored runConcededWithLegByes()! --> extras :" +this.runConcededWithLegByes);
            this.totalScore += this.runConcededWithLegByes;
            // console.log("total score :" +this.totalScore);
            this.ballCount += 0.1;
            // console.log('Ball Count : ' +this.ballCount );
        }else if (this.extraRun === 'B') {
          this.runConcededWithByes =this.runsScored;
          this.runsScoredInThisOver.push(this.runConcededWithByes);
          // console.log("Runs scored runConcededWithByes()! --> extras :" +this.runConcededWithByes);
          this.totalScore += this.runConcededWithByes;
          // console.log("total score :" +this.totalScore);
          this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );
        }else if (this.extraRun === 'Out') {
          this.runConceded = this.runsScored;
          this.runsScoredInThisOver.push(this.runConceded);
          // console.log("Runs scored runConcededOnWicketDelivery()! --> extras :" +this.runConceded);
          this.totalScore += this.runConceded;
          // console.log("total score :" +this.totalScore);
          this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );
          this.wicketsFallen += 1;
          // console.log('Please select another batsman..!');
          this.selectBatsman();
        }else {
          this.totalScore += this.runsScored;
          this.runsScoredInThisOver.push(this.runsScored);
          // console.log("Runs scored --> Runs :" +this.totalScore);
          this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );
        }

        this.overStas(this.runsScored, this.extraRun);
        this.extraRun = "";
        this.runsScored = 0;

        if (this.ballCount === 0.6) {
          this.showOver = true;
          this.oversCount += 1.0;
          this.ballCount = 0.0;
          // this.selectBowler();
        }

        this.oversCompletted = this.oversCount + this.ballCount;
        this.oversCompletted = this.oversCompletted.toFixed(1);

      }

      this.selectBatsman = function () {
        alert('Selecting a new batsman');
      }

      this.selectBowler = function () {
        console.log('Selecting a new bowler');
      }

      this.currentOverDetails = true;
      this.overCompleted = function (){
          console.log('Please select another bowler..!');
          this.bowler=!this.bowler;
          // this.bowler=this.newBowler;
          this.ballCount = 0;
          this.showOver = false;
          this.showBowler = true;
          this.currentOverDetails = false;
      }

      this.totalScoreInThisOver = 0;
      this.overStas = function(runs, extraRun){
        this.runsScoredOnThisDelivery = parseInt(runs);
        this.extrasGivenOnThisDelivery = extraRun;

        if (this.extrasGivenOnThisDelivery === 'NB') {
            this.runGivenOnNoBall = this.runsScoredOnThisDelivery + 1;
            // this.runsScoredInThisOver.push(this.runConcededOnNoBall);
            // console.log("Runs scored with No-Ball!--> runs : " +this.runGivenOnNoBall);
            this.totalScoreInThisOver += this.runGivenOnNoBall;
            // console.log("total score :" +this.totalScoreInThisOver);
            // console.log('Ball Count : ' +this.ballCount );

        } else if (this.extrasGivenOnThisDelivery === 'Wd') {
          this.runGivenOnWideBall =this.runsScoredOnThisDelivery + 1;
          // this.runsScoredInThisOver.push(this.runConcededOnWideBall);
            // console.log("Runs scored on Wide delivery! --> extras :" +this.runGivenOnWideBall);
            this.totalScoreInThisOver += this.runGivenOnWideBall;
            // console.log("total score :" +this.totalScoreInThisOver);
            // console.log('Ball Count : ' +this.ballCount );

        } else if (this.extrasGivenOnThisDelivery === 'LB') {
            this.runGivenWithLegByes =this.runsScoredOnThisDelivery;
            // this.runsScoredInThisOver.push(this.runConcededWithLegByes);
            // console.log("Runs scored runConcededWithLegByes()! --> extras :" +this.runConcededWithLegByes);
            this.totalScoreInThisOver += this.runConcededWithLegByes;
            // console.log("total score :" +this.totalScoreInThisOver);
            // this.ballCount += 0.1;
            // console.log('Ball Count : ' +this.ballCount );
        }else if (this.extrasGivenOnThisDelivery === 'B') {
          this.runConcededWithByes =this.runsScoredOnThisDelivery;
          // this.runsScoredInThisOver.push(this.runConcededWithByes);
          // console.log("Runs scored runConcededWithByes()! --> extras :" +this.runConcededWithByes);
          this.totalScoreInThisOver += this.runConcededWithByes;
          // console.log("total score :" +this.totalScoreInThisOver);
          // this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );

        }else if (this.extrasGivenOnThisDelivery === 'Out') {
          this.runGivenOnThisDelivery = this.runsScoredOnThisDelivery;
          // this.runsScoredInThisOver.push(this.runConceded);
          // console.log("Runs scored runGivenOnThisDelivery()! --> extras :" +this.runGivenOnThisDelivery);
          this.totalScoreInThisOver += this.runGivenOnThisDelivery;
          // console.log("total score :" +this.totalScoreInThisOver);
          // this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );
          // this.wicketsFallen += 1;
          // console.log('Please select another batsman..!');
          // this.selectBatsman();
        }else {
          // console.log('runsScoredOnThisDelivery '+this.runsScoredOnThisDelivery);
          // console.log('totalScoreInThisOver '+this.totalScoreInThisOver);
          this.totalScoreInThisOver += this.runsScoredOnThisDelivery;
          // console.log('totalScoreInThisOver '+this.totalScoreInThisOver);
          // this.runsScoredInThisOver.push(this.runsScored);
          // console.log("Runs scored --> Runs :" +this.totalScoreInThisOver);
          // this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );
        }

        this.average(this.totalScoreInThisOver, this.oversCompletted);
      }

      this.average = function(runs, overs){
        this.avg = runs/overs;
        this.avg = this.avg.toFixed(2);
      }

      this.changeBowler = function (bowler){
        this.bowler = bowler;
        console.log('New Bowler : '+this.bowler);
        this.currentBowler = this.bowler;
        this.showBowler = false;
        this.currentOverDetails = true;

      }
      // this.dropDown = "";
      this.reset = function (){
        // console.log('reset logged');
        this.dropDown = document.getElementById("selectBowler");
        this.dropDown.selectedIndex = 0;

      }
    }

})();
