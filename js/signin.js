$(document).ready(function() {
    //Login Function
    $('.loginSubmitButton').click(function(event) {
      event.preventDefault();
      const passwordLogin = $('#passwordLogin').val();
      const emailLogin = $('#emailLogin').val();
      if (!passwordLogin || !emailLogin) {
        $('.report').html('Kindly fill in all fields');
        return;
      }
      //Check if the user is in the database
      $.ajax({
        method: 'GET',
        url: `http://localhost:3000/users?email=${emailLogin}&password=${passwordLogin}`,
        data: {
          email: emailLogin,
          password: passwordLogin,
        },
        beforeSend: function() {
          $('.repoort').html('Loading....');
        },
        success: function(response) {
          if (response.length) {
            $('.report').html('Login sucessful');
            $('.checkLogin').html('You are logged in');
            localStorage.setItem('email', emailLogin);
            //redirect to home page if the login is successfull
            window.location.assign('index.html');
          } else {
            $('.report').html('Username or password Incorrect');
          }
        },
      });
    });
    //Logout Function
    $('.logoutBtn').click(function() {
      //clear the localstorage and redirect to signup page
      localStorage.clear();
      $('.checkLogin').html('Kindly login');
      window.location.assign('signup.html');
    });
  });
  