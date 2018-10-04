/* global $, axios */

$(document).ready(function() {

  /* ---------------------------------------------------------------

    This section governs the display of the Welcome Modal and which
    registration form to display - the form for providers or users

  BOTH REQUIRE: 

        FIRST NAME, LAST NAME, EMAIL, PASSWORD, PW CONFIRMATION

  PROVIDERS ALSO REQUIRES:

                    ZIP, PHONE NUMBER, PROVIDER TYPE
  
   --------------------------------------------------------------- */

  var provider = false;
  var url;
  var params;
  var formIsReady;

  $('.welcome-modal').css("display", "block");

  // IF REGISTERING USER:
  $('.user-btn').click(function() {
    url = "/v1/users";
    $('.welcome-modal').fadeOut();
    $('#zip-code').hide();
    $('#provider-type').hide();
    $('#phone-number').hide();
    params = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmation: null
    };
  });

  // IF REGISTERING PROVIDER
  $('.provider-btn').click(function() {
    provider = true;
    url = "/v1/providers";
    $('.welcome-modal').fadeOut();
    params = {
      first_name: null,
      last_name: null,
      phone_number: null,
      zip: null,
      provider_type_id: null,
      email: null,
      password: null,
      password_confirmation: null
    };
    function validateForm() {
      formIsReady = true;
      validateFirstName($('#firstName').val());
      validateLastName($('#lastName').val());
      validatePhoneNumber($('#phoneNumber').val());
      validateZip($('#zip').val());
      validateProviderType($('#providerType').val());
      validateEmail($('#email').val());
      validatePassword($('#password').val());
      validatePasswordConfirmation($('#passwordConfirmation').val(), $('#password').val());
    }
  });


  /*  ------------------------------------------------------------

      This section governs the PROVIDERS registration form

  ------------------------------------------------------------ */ 

  function validateFirstName(firstName) {
    if (firstName) {
      params.first_name = firstName;
      $('#firstNameErrorMessage')[0].innerHTML = null;
    } else {
      var firstNameErrorMessage = "Please enter a first name.";
      $('#firstNameErrorMessage')[0].innerHTML = firstNameErrorMessage;
      formIsReady = false;
    }
  }

  function validateLastName(lastName) {
    if (lastName) {
      params.last_name = lastName;
      $('#lastNameErrorMessage')[0].innerHTML = null;
    } else {
      var lastNameErrorMessage = "Please enter a last name.";
      formIsReady = false;
      $('#lastNameErrorMessage')[0].innerHTML = lastNameErrorMessage;
    }
  }

  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length === 10 && !isNaN(phoneNumber)) {
      params.phone_number = phoneNumber;
      $('#phoneNumberErrorMessage')[0].innerHTML = null;
    } else {
      var phoneNumberErrorMessage = "Please enter a valid phone number, numbers only (ex. 2223334444).";
      $('#phoneNumberErrorMessage')[0].innerHTML = phoneNumberErrorMessage;
      formIsReady = false;
    }
  }

  function validateZip(zip) {
    if (zip.length === 5 && !isNaN(zip)) {
      params.zip = zip;
      $('#zipErrorMessage')[0].innerHTML = null;
    } else {
      var zipErrorMessage = "Please enter a valid zip code made up of five digits (ex. 60657).";
      $('#zipErrorMessage')[0].innerHTML = zipErrorMessage;
      formIsReady = false;
    }
  }

  function validateProviderType(providerType) {
    if (providerType) {
      params.provider_type_id = providerType;
      $('#providerTypeErrorMessage')[0].innerHTML = null;
    } else {
      var providerTypeErrorMessage = "Please select a provider type - 'Salon' or 'Independent'";
      $('#providerTypeErrorMessage')[0].innerHTML = providerTypeErrorMessage;
      formIsReady = false;
    }
  }

  function validateEmail(email) {
    if (email) {
      params.email = email;
      $('#emailErrorMessage')[0].innerHTML = null;
    } else {
      var emailErrorMessage = "Please enter a valid email address.";
      $('#emailErrorMessage')[0].innerHTML = emailErrorMessage;
      formIsReady = false;
    }
  }

  function validatePassword(password) {
    if (password.length >= 6) {
      params.password = password;
      $('#passwordErrorMessage')[0].innerHTML = null;
    } else {
      var passwordErrorMessage = "Password should be at least 6 characters.";
      $('#passwordErrorMessage')[0].innerHTML = passwordErrorMessage;
      formIsReady = false;
    }
  }

  function validatePasswordConfirmation(passwordConfirmation, password) {
    if (passwordConfirmation === password) {
      params.password_confirmation = passwordConfirmation;
      $('#passwordConfirmationErrorMessage')[0].innerHTML = null;
    } else {
      var passwordConfirmationErrorMessage = "Passwords do not match.";
      $('#passwordConfirmationErrorMessage')[0].innerHTML = passwordConfirmationErrorMessage;
      formIsReady = false;
    }
  }

  
  function validateForm() {
    formIsReady = true;
    validateFirstName($('#firstName').val());
    validateLastName($('#lastName').val());
    validateEmail($('#email').val());
    validatePassword($('#password').val());
    validatePasswordConfirmation($('#passwordConfirmation').val(), $('#password').val());
    
    if (provider) {
      validatePhoneNumber($('#phoneNumber').val());
      validateZip($('#zip').val());
      validateProviderType($('#providerType').val());
    }
  }

  $('.reg-button').on('click', function() {
    console.log("clicked");
    params;
    validateForm();
    console.log("formIsReady:", formIsReady);
    console.log("params:", params);
    console.log("url:", url);
    if (formIsReady) {
      axios.post(url, params).then(function(response) {
        console.log("web request");

        // Change center element from reg form to confirmation message
        $('.log-in-pop-right').fadeOut(1500);
        setTimeout(function() {
          $('.log-in-pop-right').html("");
          $('.log-in-pop-right').css("text-align", "center");
          $('.tz-register').css(
            {
              "padding-top": "200px", 
              "padding-bottom": "200px"
            });
          $('.log-in-pop-right').html(
            "<h4>Congratulations!</h4><p>Your Beauber account is confirmed!</p><p>We will reach out soon once more features are made available!</p>"
          );
          $('.log-in-pop-right').fadeIn(1500);
        }, 1500);
      }
      ).catch(
        function(error) {
          console.log("errors");

          // Add errors in red to modal and display modal
          var errorMessage = error.response.data.errors;
          var errorList = [];
          errorMessage.forEach(function(msg) {
            $('.error-list').append("<li>" + msg + "</li>");
          });
          $('.error-modal').css("display", "block");

          // Close modal when user clicks anywhere on page and empty error list until next submit
          $('body').on("click", function() {
            $('.error-modal').css("display", "none");
            $('.error-list').html("");
          });
        }
      );
    }
  });

});