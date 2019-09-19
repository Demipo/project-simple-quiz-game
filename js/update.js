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
    });
  