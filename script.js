$(document).ready(function(){

  $. getJSON("poem.json")
    .done(function(data) {
      console.log(data);
      let CID = data[0].poem;

      $('.CNID').text(CID);
    });
});