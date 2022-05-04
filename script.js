$(document).ready(function(){

  $. getJSON("poem.json")
    .done(function(data) {
      console.log(data);
      let CID = data[0].CNID;
      let TIME = data[0].Time;
      let CContent = data[0].CNContent;

      for(let i=0; i<data.length; i++){
        $('.CNID').append(CID);
        $('.Time').append(TIME);
        $('.content').append(CNContent);
      }
    });
});