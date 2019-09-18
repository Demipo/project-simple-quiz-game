$(document).ready(function() { 

               

    $(".playButton").click(function(event){ 
        $.getJSON('http:localhost:3000/questions', function(quest) {  
           $.each(quest, function(key, value) {
                const display =
                `<h3>Q</h3><h3>${value.id}</h3><br>
                    <h4>${value.question}</h4><br>
                    <input class="dot" type="radio" name="option" value="B">${value.optionOne}
                    <input class="dot" type="radio" name="option" value="C">${value.optionTwo}
                    <input class="dot" type="radio" name="option" value="D">${value.optionThree}
                    <input class="dot" type="radio" name="option" value="D">${value.optionFour}
                    <hr>`;
            $(".form1").append(display)
       })
           
        })

        $("#header").text("Have fun!!");
    })  
        
    }); 