(function (){
  var app = angular.module("scoreBoard");
  app.service("TeamSvc", TeamDetails);

  function TeamDetails(){
    // console.log('TeamSvc.TeamDetails');

    this.myTeamA = [ {name: 'S Tendulkar', available : true},
                    {name: 'V Sehwag', available : true},
                    {name: 'V Kohli', available : true},
                    {name: 'G Gambhir', available : true},
                    {name: 'Y Sing', available : true},
                    {name: 'M Dhoni', available : true},
                    {name: 'K Dev', available : true},
                    {name: 'A Kumble', available : true},
                    {name: 'H Sing', available : true},
                    {name: 'J Srinath', available : true},
                    {name: 'Z Khan', available : true}
                  ];
    this.myTeamB = [ {name: 'M Hayden', available : true},
                    {name: 'G Christ', available : true},
                    {name: 'R Ponting', available : true},
                    {name: 'M Clark', available : true},
                    {name: 'M Hussey', available : true},
                    {name: 'M Bevan', available : true},
                    {name: 'S Warne', available : true},
                    {name: 'B Lee', available : true},
                    {name: 'M Grath', available : true},
                    {name: 'M Jonhson', available : true},
                    {name: 'M Stark', available : true}
                  ];
    }



})();
