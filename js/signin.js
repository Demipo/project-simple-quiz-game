$(document).ready(function() {
  $('.loginSubmitButton').click(function(event) {
      event.preventDefault();
      let checkIfAdmin ="";
      const passwordLogin = $('#passwordLogin').val();
      const emailLogin = $('#emailLogin').val();
      $.getJSON('http:localhost:3000/users', function(quest) {
          $.each(quest, function(key, value) {
           // console.log(quest);
              if(value.password === passwordLogin && value.email === emailLogin){
                  if (value.isAdmin) {
                    $('.report').html('Login sucessful');
                    $('.checkLogin').html('You are logged in');
                    localStorage.setItem('email', emailLogin);
                    window.location.assign('admin.html');
                    }
                    else{
                      $('.report').html('Login sucessful');
                      $('.checkLogin').html('You are logged in');
                      localStorage.setItem('email', emailLogin);
                      window.location.assign('quizes.html');
                    }
              }
              else {
                  $('.report').html('Username or password Incorrect');
                }

          })
      })
      // if (checkIfAdmin) {
      //     $('.report').html('Login sucessful');
      //     $('.checkLogin').html('You are logged in');
      //     localStorage.setItem('email', emailLogin);
      //     console.log(true)
      //     //window.location.assign('admin.html');
      //     }
      // else{
      //       console.log(false)
      //       // window.location.assign('index.html');
      //     }

      
  })
  
})
