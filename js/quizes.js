$(document).ready(function() { 

               

    $(".playButton").click(function(event){ 

        $.getJSON('http://localhost:3000/questions', function(quest) { 

            $('.form1').html('<p> Name: ' + quest.[1]["question"] + '</p>'); 



        }); 

    }); 

}); 