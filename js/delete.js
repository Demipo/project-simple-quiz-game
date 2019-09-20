$(document).ready(function() {
    //Registration Function
    $(".deleteQuestionButton").click(function(event) {
      event.preventDefault();
      const id = $('.numberToDelete').val();
      //Check if fields are empty
      if (!id) {
        $('.deleteReport').html('Kindly fill id field');
        return;
      }
            //Delete the user data if the user does  exist
            $.ajax({
              method: 'DELETE',
              url: `http://localhost:3000/questions/${id}`,
              data: {
                id
              },
              beforeSend: function() {
                $('.deleteReport').html('Loading....');
              },
              success: function() {
                $('.deleteReport').html('Question deleted');
              },
            });
      });
    });
  