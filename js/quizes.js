$(document).ready(function() { 
    //Populates the quizes.html page with the available questions in db.json, on clicking the play btn 
    $(".playButton").click(function(event){ 
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
            $(".form1").append(display)
       })
       const buttonSubmit = `<button type="button" value="submit">Submit</button> `
       $(".center-div").append(buttonSubmit);   
        })

        $("#header").text("Have fun!!").css("font-size","30px"); //changes and boldens the header text
        $(this).hide();                                          //hides the play now button
        $(".crossLine").css("width", "20px");
    })    
  });