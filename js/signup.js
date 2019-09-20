$(document).ready(function() {
    //Registration Function
    $(".signupButton").click(function(event) {
      event.preventDefault();
      const username = $('#username').val();
      const email = $('#email').val();
      const password = $('#password').val();
      const repeatPassword = $('#repeatPassword').val();
      //Check if password and repeat password are same
      if (password != repeatPassword){
        $('.report').html('Passwords must be same');
      }
      //Check if user input is empty
      if (!username || !email || !password || !repeatPassword) {
        $('.report').html('Kindly fill in all fields');
        return;
      }
      //Make get request to check if the user already exist
      $.ajax({
        method: 'GET',
        url: `http://localhost:3000/users?email=${email}`,
        data: {
          email,
        },
        beforeSend: function() {
          $('.report').html('Loading....');
        },
        success: function(response) {
          if (response.length) {
            $('.report').html('User already exist');
          } else {
            //Submit the user data if the user does not exist
            $.ajax({
              method: 'POST',
              url: 'http://localhost:3000/users',
              data: {
                username,
                email,
                password,
                isAdmin: false,
              },
              beforeSend: function() {
                $('.report').html('Loading....');
              },
              success: function() {
                $('.report').html('Registration Successful. You can now sign in to have fun');
              },
            });
          }
        },
      });
    });
    
  });
  