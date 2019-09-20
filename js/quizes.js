$(document).ready(function() { 
    let score = 0;
    //Populates the quizes.html page with the available questions in db.json, on clicking the play btn 
    $(".playButton").click(function(event){ 
        $("#submitButton").show(); 
        $.getJSON('http:localhost:3000/questions', function(quest) {  
           $.each(quest, function(key, value) {
                const display =
                `<h3>Q</h3><h3>${value.id}</h3><br>
                    <h4>${value.question}</h4><br>
                    <input class="dot" type="radio" name="option${value.id}" value="A">${value.optionOne}
                    <input class="dot" type="radio" name="option${value.id}" value="B">${value.optionTwo}
                    <input class="dot" type="radio" name="option${value.id}" value="C">${value.optionThree}
                    <input class="dot" type="radio" name="option${value.id}" value="D">${value.optionFour}
                    <hr class="crossLine">`;
            $(".generatedQuestions").append(display)
            
       })
        
        })
        $("#header").text("Have fun!!").css("font-size","30px"); //changes and boldens the header text
        $(this).hide();                                          //hides the play now button                                       
    })

        //Actions for the submit button. Click to submit answer.
        $("#submitButton").click(function(event){ 
            event.preventDefault();
            $.getJSON('http:localhost:3000/questions', function(quest) {  
                $.each(quest, function(key, value) {
                    let radioButtonSelected = $(`input[name=option${value.id}]:checked`).val();
                    console.log(radioButtonSelected);
                    if(value.answer === radioButtonSelected){
                        score++
                    }
                 })
                 $(".scoreDiv").append(`YOU'VE SCORED:${score}`).css("font-size","50px");
                 $(".scoreDiv").append(`<br><button id="playAgain" type=button>Play Again</button>`);
                 
             })
             $(this).hide(); 
        })

        //To play again
        $("#playAgain").click(function(event){ 
            event.preventDefault();
            $("#submitButton").show(); 
            $.getJSON('http:localhost:3000/questions', function(quest) {  
               $.each(quest, function(key, value) {
                    const display =
                    `<h3>Q</h3><h3>${value.id}</h3><br>
                        <h4>${value.question}</h4><br>
                        <input class="dot" type="radio" name="option${value.id}" value="A">${value.optionOne}
                        <input class="dot" type="radio" name="option${value.id}" value="B">${value.optionTwo}
                        <input class="dot" type="radio" name="option${value.id}" value="C">${value.optionThree}
                        <input class="dot" type="radio" name="option${value.id}" value="D">${value.optionFour}
                        <hr class="crossLine">`;
                $(".generatedQuestions").append(display)
                
           })
            
            })
            $("#header").text("Have fun!!").css("font-size","30px"); //changes and boldens the header text
            $(this).hide();                                          //hides the play now button                                       
        })

        
  });