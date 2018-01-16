(function (){
  var app = angular.module("scoreBoard");
  app.service("BowlingSvc", BowlingCalc);
  app.service("BowlingSvc2", BowlingCalc2);

  function BowlingCalc(){
    console.log('BowlingSvc.BowlingCalc');
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
