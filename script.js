$(document).ready(function(){

  $. getJSON("poem.json")
    .done(function(data) {
      console.log(data);

      for(let i=0; i<data.length; i++){
        let CID = data[i].CNID;
        let TIME = data[i].Time;
        let CContent = data[i].CNContent;
        $('.CNinfo').append("<div class='CNID'>" + CID + '</div>' + "<div class='Time'>" + TIME + '</div>');
        $('.content').append(CContent);
      }
    });
});