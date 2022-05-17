$(document).ready(function(){

  $. getJSON("poem.json")
    .done(function(data) {
      console.log(data);

      for(let i=0; i<data.length; i++){
        let CID = data[i].CNID;
        let TIME = data[i].Time;
        let CContent = data[i].CNContent.replaceAll("\n","<br />");
        let EID = data[i].ENID;
        let ETIME = data[i].ENTime;
        let EContent = data[i].ENContent.replaceAll("\n","<br />");
        let b = i-1;
        let f = i+1;


        $('.CNinfo').append("<div class='lines' id=" + i + '>' + "<div class='CNID'>" + CID + '</div>' + "<div class='Time'>" + TIME + '</div></div>');


        $('.ENinfo').append("<div class='lines' id=" + i + '>' + "<div class='CNID'>" + EID + '</div>' + "<div class='ENTime'>" + ETIME + '</div></div>');

        
        $('#' + i).click(function() {
          $('.content').html(CContent);
          $('.ENcontent').html("<div class= 'content'>" + EContent + "</div>");
          $(".right").css({
            "display": "flex",
            "margin-top": "-94vh"
          });	
          $(".x").css({
            "display": "block"
          });	
          $(".back").css({
            "display": "block"
          });	
          $(".forward").css({
            "display": "block"
          });	


          $('.back').click(function() {
            $("#" + b).trigger( "click" );
          });

          $('.forward').click(function() {
            $("#" + f).trigger( "click" );
          });

        });

        $('.x').click(function() {
          $(".right").css({
            "display": "none"
          });	
        });
      };
    });

    
});