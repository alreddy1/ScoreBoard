(function (){
  var app = angular.module("scoreBoard");
  app.controller("BowlingCtrl", BowlingCtrl);


  function BowlingCtrl(TeamSvc, BowlingSvc) {

      this.bowler ="";
      this.totalScore = 0;
      this.wicketsFallen = 0;
      this.maiden = 0;
      this.ballCount = 0;
      this.oversCount = 0;
      this.oversCompletted = 0;
      this.runsScoredInThisOver = [];
      this.showOver = false;
      this.currentOverDetails = false;
      this.showBowler = true;
      this.showOpeningBatsman = true;
      this.showNextBatsman = false;
      // this.myTeamB = TeamBSvc.myTeam;
      this.setTheDetails = true;
      this.myTeamB = TeamSvc.myTeamB;
      this.myTeamA = TeamSvc.myTeamA;
      // this.myTeamA = TeamASvc.myTeam;
      this.availableBatsman = TeamSvc.myTeamA;
      // this.availableBatsman = TeamASvc.myTeam;
      // this.isOnStrike = false;

      this.striker_temp = "";
      this.nonStriker_temp = "";
      this.setBatsman = function (batsman, onStrike){

        this.batsman = batsman;
        this.isOnStrike = onStrike;
        this.index = this.availableBatsman.indexOf(this.batsman);
        this.availableBatsman[this.index].available = false;
        if(this.isOnStrike === true){
          this.batsman_1 = this.availableBatsman[this.index].name;
          console.log('Strike : ' +this.batsman_1);
          this.striker = this.batsman_1;
        }else{
          this.batsman_2 = this.availableBatsman[this.index].name;
          console.log('Non Strike : ' +this.batsman_2);
          this.nonStriker = this.batsman_2;
        }

        //Imported from batting control
        this.batsmanRuns = 0;
        this.ballsFaced = 0;
        this.foursHit = 0;
        this.sixesHit = 0;
        this.strikeRate = 0;
        console.log('Openers are ready..!');

      }

      this.getBatsmanScoreDetails = function(runs, extras) {

          /*this method is responsible to get the batsman score details till this delivery.
          */

          this.runsScoredByThisPlayer = 0;
          this.runsOnThisDelivery = parseInt(runs);
          // this.extraRunOnThisDelivery = extras;

          this.cols = document.getElementById('batsmanScoreDetails').getElementsByClassName('player-name'),
          this.colslen = this.cols.length;
           // i = -1;

          for(i=0; i < this.colslen ; i++){
            if(this.cols[i].innerHTML === this.striker ){

              this.runsScoredByThisPlayer = document.getElementById('batsmanScoreDetails').getElementsByClassName('player-runs')[i].innerHTML;
              this.ballsFacedByThisPlayer =  document.getElementById('batsmanScoreDetails').getElementsByClassName('player-balls')[i].innerHTML;
              this.foursHitByThisPlayer =  document.getElementById('batsmanScoreDetails').getElementsByClassName('player-fours')[i].innerHTML;
              this.sixesHitByThisPlayer =  document.getElementById('batsmanScoreDetails').getElementsByClassName('player-sixes')[i].innerHTML;

              this.batsmanDetails(this.runsScored,
                                  this.runsScoredByThisPlayer,
                                  this.ballsFacedByThisPlayer,
                                  this.foursHitByThisPlayer,
                                  this.sixesHitByThisPlayer
                                );

              this.calculateStrikeRate(this.runsScoredByThisPlayer, this.ballsFacedByThisPlayer);

              document.getElementById('batsmanScoreDetails').getElementsByClassName('player-runs')[i].innerHTML = this.runsScoredByThisPlayer;
              document.getElementById('batsmanScoreDetails').getElementsByClassName('player-balls')[i].innerHTML = this.ballsFacedByThisPlayer;
              document.getElementById('batsmanScoreDetails').getElementsByClassName('player-fours')[i].innerHTML = this.foursHitByThisPlayer;
              document.getElementById('batsmanScoreDetails').getElementsByClassName('player-sixes')[i].innerHTML = this.sixesHitByThisPlayer;
              document.getElementById('batsmanScoreDetails').getElementsByClassName('player-strikeRate')[i].innerHTML = this.strikeRateAfterThisDelivery;


            }else{
              // console.log('continue');
            }

          }

        }


      this.batsmanDetails = function (runs, prevRuns, prevBalls, prevFours, prevSixes) {
        // console.log('batsmanDetails clicked..!');
        this.runsScoredOnThisDelivery = parseInt(runs);
        this.runsScoredByThisPlayer = parseInt(prevRuns);
        this.ballsFacedByThisPlayer = parseInt(prevBalls);
        this.foursHitByThisPlayer = parseInt(prevFours);
        this.sixesHitByThisPlayer = parseInt(prevSixes);
        if(this.runsScoredOnThisDelivery === 4){
          this.foursHitByThisPlayer += 1;
          // console.log(this.foursHit);
          this.runsScoredByThisPlayer += 4;
        }else if (this.runsScoredOnThisDelivery === 6) {
          this.sixesHitByThisPlayer += 1;
          this.runsScoredByThisPlayer += 6;
        }else {
          this.runsScoredByThisPlayer += this.runsScoredOnThisDelivery;
        }

          this.ballsFacedByThisPlayer += 1;

      }



      this.calculateStrikeRate = function (runs, balls){
        this.strikeRateAfterThisDelivery = runs *100 / balls ;
        this.strikeRateAfterThisDelivery = this.strikeRateAfterThisDelivery.toFixed(2);
        // console.log('strikeRate : ' + this.strikeRate);
      };


      this.bowlerStatsDetails = BowlingSvc.bowlerDetails();

      this.showStart = true;
      this.showSetDetails = true;

      this.setDetails = function(maxOvers, hasWide, hasNoBall, hasBye, hasLegBye, defaultTeamA, defaultTeamB){
        this.maxOvers = maxOvers;
        console.log('maxOvers : '+this.maxOvers);
        this.hasWide = hasWide;
        // console.log('Wide : '+this.hasWide);
        this.hasNoBall = hasNoBall;
        // console.log('hasNoBall : '+this.hasNoBall);
        this.hasBye = hasBye;
        // console.log('hasBye : '+this.hasBye);
        this.hasLegBye = hasLegBye;
        // console.log('hasLegBye : '+this.hasLegBye);
        //set Default Team if not entered.

        this.showSetDetails = false;
      }
      this.startScoreBoard = function(){
        // console.log('Set Details clicked');
        this.showStart = false;
      }
      this.showBatsman = function(){
        this.showOpeningBatsman = false;
        // console.log('Next batsman ind: '+this.showNextBatsman);
      }

      this.setNextBatsmanInd = function (){
        this.showNextBatsman = false;
      }

      this.changeBowler = function (bowler){
        this.bowler = bowler;
        // console.log('New Bowler : '+this.bowler);
        this.currentBowler = this.bowler;
        this.showBowler = false;
        this.currentOverDetails = true;
      }


      this.overCompleted = function (){
          // console.log('Please select another bowler..!');
          this.bowler=!this.bowler;
          this.ballCount = 0;
          this.showOver = false;
          this.showBowler = true;
          this.currentOverDetails = false;
      }

      this.overDetails = function(runs, extras){

        // console.log('strikerrr'+this.striker);
        this.runsScored = parseInt(runs);
        // console.log("overDetails clicked..!: "+this.runsScored) ;
        this.extraRun = extras;

        // this.getBatsmanScoreDetails();

        this.getBatsmanScoreDetails(this.runsScored, this.extraRun);
        // this.batsmanDetails(this.runsScored, this.extraRun);


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
          this.showNextBatsman = true;

        }else {
          this.totalScore += this.runsScored;
          this.runsScoredInThisOver.push(this.runsScored);
          console.log("Runs scored :" +this.totalScore);
          this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );
        }


        this.overStas(this.runsScored, this.extraRun);


        if(localStorage.getItem('tasks') === null) {
          this.tasks = [];
          // console.log('If localStorage : '+this.tasks[0]);
        } else {
          this.tasks = JSON.parse(localStorage.getItem('tasks'));
          // console.log('else localStorage : '+this.tasks[0]);
        }
        this.tasks.push(this.runsScored);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        this.tasks.forEach(function(task){
          // console.log(task);
        });

        this.isEvenOrOdd(this.runsScored);



        if (this.ballCount === 0.6) {
          this.showOver = true;
          this.oversCount += 1.0;
          this.ballCount = 0.0;
        }

        //switching the batsman
        if((this.isEven && this.showOver === true) || (!this.isEven && this.showOver === false)){
          this.striker_temp = this.striker;
          this.nonStriker_temp = this.nonStriker;

          this.striker = this.nonStriker;
          this.nonStriker = this.striker_temp;
        }

        this.extraRun = "";
        this.runsScored = 0;

        this.oversCompletted = this.oversCount + this.ballCount;
        this.oversCompletted = this.oversCompletted.toFixed(1);

        if(localStorage.getItem('ScoreDetails') === null) {
          this.scores = [];
        } else {
          this.scores = JSON.parse(localStorage.getItem('ScoreDetails'));
        }

        this.scores.push({
                          runs: this.totalScore,
                          wickets: this.wicketsFallen,
                          overs: this.oversCompletted
                        });
        localStorage.setItem('scores', JSON.stringify(this.scores));

        this.scores.forEach(function(task){
          console.log(task);
        });

      }

      this.isEvenOrOdd = function(runs){
        if(runs % 2 === 0){
          this.isEven = true;
        }else{
          this.isEven = false;
        }
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
          console.log("total score :" +this.totalScoreInThisOver);
          // this.ballCount += 0.1;
          // console.log('Ball Count : ' +this.ballCount );
          // this.wicketsFallen += 1;
          // console.log('Please select another batsman..!');
          // this.selectBatsman();
        }else {
          // console.log('runsScoredOnThisDelivery '+this.runsScoredOnThisDelivery);
          // console.log('totalScoreInThisOver '+this.totalScoreInThisOver);
          this.totalScoreInThisOver += this.runsScoredOnThisDelivery;
          console.log('totalScoreInThisOver '+this.totalScoreInThisOver);
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

      // this.dropDown = "";
      this.reset = function (){
        // console.log('reset logged');
        this.dropDown = document.getElementById("selectBowler");
        this.dropDown.selectedIndex = 0;

      }
    }

})();
