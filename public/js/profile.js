/* global $, axios, ENV */

$(document).ready(function() {

  axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("jwt");

  var id = localStorage.getItem("id");
  var firstName;
  var lastName;
  var email;
  var zip;
  var city;
  var state;
  var phoneNumber;
  var providerType;
  var services;
  var memberSince;
  // var apiKey = ENV["ZIP_API_KEY"]; // needs configuration for HEROKU

  function udpatePageData() {
    $('.name').html(firstName + " " + lastName);
    $('.contact-provider').html("Contact " + firstName);
    $('.location').html("Zip: " + zip);
    $('.email').html(email);
    $('.phoneNumber').html(phoneNumber);
    $('.date').html(memberSince);
  }

  axios.get("v1/providers/" + id).then(function(response) {
    console.log(response.data);
    id = response.data.id;
    firstName = response.data.first_name;
    lastName = response.data.last_name;
    email = response.data.email;
    zip = response.data.zip;
    phoneNumber = response.data.phone_number;
    providerType = response.data.provider_type;
    services = response.data.servies;
    memberSince = response.data.member_since;
    udpatePageData();

    // axios.get("https://www.zipcodeapi.com/rest/" + apiKey + "/info.json/" + zip + "/degrees")
    //   .then(function(response) {
    //     city = response.data.city;
    //     state = response.data.state;
    //     console.log(city, state);
    //     udpatePageData();
    //   });

  });

});