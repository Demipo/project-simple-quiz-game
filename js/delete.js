$(document).ready(function() {
    //Registration Function
    $(".deleteQuestionButton").click(function(event) {
      event.preventDefault();
      const id = $('.numberToDelete').val();
      //Check if fields are empty
      if (!id) {
        $('.report').html('Kindly efill id field');
        return;
      }
            //Submit the user data if the user does  exist
            $.ajax({
              method: 'DELETE',
              url: 'http://localhost:3000/questions/id',
              data: {
                id
              },
              beforeSend: function() {
                $('.report').html('Loading....');
              },
              success: function() {
                $('.report').html('Question deleted');
              },
            });
      });
    });
  