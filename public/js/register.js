/* global $, axios */

$(document).ready(function() {

  var params;
  var formIsReady;

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
    validatePhoneNumber($('#phoneNumber').val());
    validateZip($('#zip').val());
    validateProviderType($('#providerType').val());
    validateEmail($('#email').val());
    validatePassword($('#password').val());
    validatePasswordConfirmation($('#passwordConfirmation').val(), $('#password').val());
  }

  $('.log-in-btn').on('click', function() {
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
    validateForm();
    console.log(params);
    if (formIsReady) {
      console.log("Form is ready");

      axios.post("/v1/providers", params).then(function(response) {
        var successMessage = response.data.message;
        window.alert(successMessage);
        console.log(successMessage);
      }
      ).catch(
        function(error) {
          var errorMessage = error.response.data.errors;
          window.alert(errorMessage);
          console.log(errorMessage);
        }
      );
    }
  });

});