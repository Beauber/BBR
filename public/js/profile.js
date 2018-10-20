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
  var serviceList;

  axios.get("v1/services/").then(function(response) {
    serviceList = response.data;
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

  // SELECT A CATEGORY
  $('.services-header').hover(function() {
    $('#edit-pencil').css("opacity", 1);
    $(this).on("mouseleave", function() {
      $('#edit-pencil').css("opacity", 0.3);
    });
  });

  $('#edit-pencil').click(function() {
    $('.services-modal').show();
  });

  // CLOSE SELECT MODAL AND OPEN/POPULATE MODAL FOR SELECTED CATEGORY
  $('.services-icon').click(function() {
    $('.services-modal').hide();
    $('.selected-category-modal').show();
    var selected = $(this).attr("id");
    $(".selected-category-heading").text(selected);
    var selectedCategoryServices = [];

    // Populate checklist for selected category
    serviceList.map(function(service) {
      if (service.category.toLowerCase() === selected.toLowerCase()) {
        selectedCategoryServices.push(service);
        $('.checkboxes')
          .append($(document.createElement('input')).attr({
            type:  'checkbox',
            id:    service.service_type,
            name:  service.service_type,
            value: service.id
          })).append($(document.createElement('label')).attr({
            for: service.service_type,
            class: "service-labels"
          }).append(service.service_type + " (" + service.sub_category + ")")
          );
      }
    });
  });

  // SELECT SERVICES
  var selectedServices = [];
  $('.submit-btn').click(function() {
    selectedServices = $('input:checked').map(function() {
      return $(this).val();
    });
    var params = selectedServices.get(); // convert to array
    axios.patch('v1/providers/' + id, params).then(function(response) {
      services = response.data.services;
    });
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



  /*----------------------------
    GET USER DATA FROM BACKEND
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
  /*----------------------------
  ----------------------------*/

});