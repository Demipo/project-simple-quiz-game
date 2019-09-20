$(document).ready(function() {
    //Registration Function
    $(".updateQuestionButton").click(function(event) {
      event.preventDefault();
      const id = $('#id').val();
      const question = $('#question').val();
      const optionOne = $('#optionOne').val();
      const optionTwo = $('#optionTwo').val();
      const optionThree = $('#optionThree').val();
      const optionFour = $('#optionFour').val();
      const answer = $('#answer').val();
      //Check if fields are empty
      if (!id || !question || !optionOne || !optionTwo || !optionThree || !optionFour || !answer ) {
        $('.report').html('Kindly fill in all fields');
        return;
      }
            //Submit the user data if the user does  exist
            $.ajax({
              method: 'PATCH',
              url: `http://localhost:3000/questions/${id}`,
              data: {
                question,
                optionOne,
                optionTwo,
                optionThree,
                optionFour,
                answer
              },
              beforeSend: function() {
                $('.report').html('Loading....');
              },
              success: function() {
                $('.report').html('Update Successful');
              },
            });
      });

      //View a particular quuestion
      $(".viewQuestion").click(function(event){ 
        event.preventDefault();
        const id = $('#id').val();
        if (!id) {
          $('.report').html('Kindly fill the id field');
        }
        $.getJSON(`http:localhost:3000/questions/${id}`, function(quest) {
          $('#question').val(quest.question)
          $('#optionOne').val(quest.optionOne)
          $('#optionTwo').val(quest.optionTwo)
          $('#optionThree').val(quest.optionThree)
          $('#optionFour').val(quest.optionFour)
          $('#answer').val(quest.answer)
        })
      })

      //Clears values after query or update has been made
      $(".clearFields").click(function(event){ 
        //event.preventDefault();
        $('#id').val("")
        $('#question').val("")
        $('#optionOne').val("")
        $('#optionTwo').val("")
        $('#optionThree').val("")
        $('#optionFour').val("")
        $('#answer').val("")
      })
      

      //Grants permission to an ordinary user
      $(".permissionButton").click(function(event){ 
        event.preventDefault();
        const id = $('.idForPermission').val();
        if (!id) {
          $('.permissionReport').html('Kindly fill the id field');
        }
        $.getJSON(`http:localhost:3000/users/${id}`, function(user) {
          user.isAdmin = "true";
        })
      })

       //Revokes an admin permission 
       $(".permissionButton").click(function(event){ 
        event.preventDefault();
        const id = $('.idForPermission').val();
        if (!id) {
          $('.permissionReport').html('Kindly fill the id field');
        }
        $.getJSON(`http:localhost:3000/users/${id}`, function(user) {
          user.isAdmin = "false";
        })
      })


    });
  