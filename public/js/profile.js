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

  axios.get("v1/services/").then(function(response) {
    var serviceList = response.data;
    $.each(serviceList, function(key, value) {
      $('.serviceList').append($("<option></option>")
        .attr("value", value.service_type)
        .text(value.service_type)); 
    });
    console.log(serviceList);
  });
  // var apiKey = ENV["ZIP_API_KEY"]; // needs configuration for HEROKU

  function listServices() {
    $(".services").append(
      services.map(service => 
        $("<li>").text(service.service_type))
    );
  }

  function udpatePageData() {
    $('.name').html(firstName + " " + lastName);
    $('.contact-provider').html("Contact " + firstName);
    $('.location').html("Zip: " + zip);
    $('.email').html(email);
    $('.phoneNumber').html(phoneNumber);
    $('.date').html(memberSince);
    listServices();
  }



  /*----------------------------
          ADD SERVICES
  ----------------------------*/ 

  $('#edit-pencil').hide();
  $('.services-header').hover(function() {
    $('#edit-pencil').toggle();
  });

  $('#edit-pencil').click(function() {
    $('.services-modal').show();
  });

  $('.submit-btn').click(function() {
    // logic here
    $('.services-modal').hide();
  });
  /*----------------------------
  ----------------------------*/ 




  /*----------------------------
        CONTACT PROVIDER
  ----------------------------*/ 

  $('.contact-provider').click(function() {
    $('.contact-provider').attr("href", function() {
      return "mailto:" + email;
    });
  });

  /*----------------------------
  ----------------------------*/




  axios.get("v1/providers/" + id).then(function(response) {
    id = response.data.id;
    firstName = response.data.first_name;
    lastName = response.data.last_name;
    email = response.data.email;
    zip = response.data.zip;
    phoneNumber = response.data.phone_number;
    providerType = response.data.provider_type;
    services = response.data.services;
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