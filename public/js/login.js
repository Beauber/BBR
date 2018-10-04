/* global $, axios */

$(document).ready(function() {

  var params;
  var formIsReady;

  function validateEmail(email) {
    if (email) {
      params.auth.email = email;
      $('#emailErrorMessage')[0].innerHTML = null;
    } else {
      var emailErrorMessage = "Please enter a valid email address.";
      $('#emailErrorMessage')[0].innerHTML = emailErrorMessage;
      formIsReady = false;
    }
  }

  function validatePassword(password) {
    if (password.length >= 6) {
      params.auth.password = password;
      $('#passwordErrorMessage')[0].innerHTML = null;
    } else {
      var passwordErrorMessage = "Password should be at least 6 characters.";
      $('#passwordErrorMessage')[0].innerHTML = passwordErrorMessage;
      formIsReady = false;
    }
  }

  function validateForm() {
    formIsReady = true;
    validateEmail($('#email').val());
    validatePassword($('#password').val());
  }

  $('.log-in-btn').on('click', function() {
    params = {
      auth: {
        email: null,
        password: null
      }
    };
    validateForm();
    console.log(params);

    if (formIsReady) {      
      axios.post("/provider_token", params).then(function(response) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        // localStorage.setItem("id", response.data.provider.id);
        // localStorage.setItem("first_name", response.data.provider.first_name);
        // localStorage.setItem("email", response.data.provider.email);
        window.location("/profile");
      })
        .catch(
          function(error) {
            console.log(error);
            var errorMessage = error.response.data.errors;
            var errorList = [];
            errorMessage.forEach(function(msg) {
              $('.error-list').append("<li>" + msg + "</li>");
            });
            $('.modal').css("display", "block");

            // Close modal when user clicks anywhere on page and empty error list until next submit
            $('body').on("click", function() {
              $('.modal').css("display", "none");
              $('.error-list').html("");
            }
            );
          }
        );
    }
  });

});