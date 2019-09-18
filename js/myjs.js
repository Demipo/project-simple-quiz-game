$(document).ready(function() {
  $('.submitButton').click(function(event) {
      event.preventDefault();
      const question = $('#question').val();
      const optionOne = $('#optionOne').val();
      const optionTwo = $('#optionTwo').val();
      const optionThree = $('#optionThree').val();
      const optionFour = $('#optionFour').val();
      const answer = $('#answer').val();
      //Check if user input is empty
      if (!question || !optionOne || !optionTwo || !optionThree || !optionFour || !answer) {
        $('.uploadMessage').html('Kindly fill in all fields');
        return;
      }
  $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/questions',
      data: {
        question,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        answer,
      },
      beforeSend: function() {
        $('.uploadMessage').html('Loading....');
      },
      success: function() {
        $('.uploadMessage').html('Question loaded successfully');
      },
});
  })
})