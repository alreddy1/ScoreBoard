(function (){
  var app = angular.module("scoreBoard");
  app.service("TeamBSvc", TeamBDetails);

  function TeamBDetails(){
    console.log('TeamASvc.TeamADetails');
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
