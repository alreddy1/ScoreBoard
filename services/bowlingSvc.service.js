(function (){
  var app = angular.module("scoreBoard");
  app.service("BowlingSvc", BowlingCalc);

  function BowlingCalc(){
    // console.log('BowlingSvc.BowlingCalc');
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

    this.bowlerDetails = function(){
      this.bowlerName = document.getElementById('bowlerInfo').rows[1].cells[1].innerHTML;
      this.bowlerOvers = document.getElementById('bowlerInfo').rows[1].cells[2].innerHTML;
      this.bowlerMaidens = document.getElementById('bowlerInfo').rows[1].cells[3].innerHTML;
      this.bowlerWickets = document.getElementById('bowlerInfo').rows[1].cells[4].innerHTML;
      // console.log('bowlerInfo: '+this.bowlerName);
      // console.log('bowlerInfo: '+this.bowlerOvers);
      // console.log('bowlerInfo: '+this.bowlerWickets);

      // const items = document.querySelectorAll('ul.collection li.collection-item');
      //
      // items.forEach(function(item, index){
      // item.textContent = `${index}: Hello`;

    }
}

})();
