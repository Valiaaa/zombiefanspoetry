$(document).ready(function(){

  $. getJSON("poem.json")
    .done(function(data) {
      console.log(data);

      for(let i=0; i<data.length; i++){
        let CID = data[i].CNID;
        let TIME = data[i].Time;
        let CContent = data[i].CNContent;
        $('.CNID').append(CID + '<br>');
        $('.Time').append(TIME);
        $('.content').append(CContent);
      }
    });
});