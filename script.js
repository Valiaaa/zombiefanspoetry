$(document).ready(function(){

  $. getJSON("poem.json")
    .done(function(data) {
      console.log(data);
      let CID = data[0].CNID;

      $('.CNID').text(CID);
    });
});