(function (){
  var app = angular.module("scoreBoard");
  app.service("TeamASvc", TeamADetails);

  function TeamADetails(){
    // console.log('TeamASvc.TeamADetails');
    this.myTeam = [ {'name': "S Tendulkar"},
                    {'name': "V Sehwag"},
                    {'name': "V Kohli"},
                    {'name': "G Gambhir"},
                    {'name': "Y Sing"},
                    {'name': "M Dhoni (C & Wk)"},
                    {'name': "K Dev"},
                    {'name': "A Kumble"},
                    {'name': "H Sing"},
                    {'name': "J Srinath"},
                    {'name': "Z Khan"}];
  }

})();
