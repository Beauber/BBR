/* global $, axios */

$(document).ready(function() {

  var categoryId = null;

  // $('.category-search-btn').on('click', function() {
  $('#selected-category').on('change', function() {
    categoryId = $('#selected-category').val();
    if (categoryId) {
      
      axios.get('/v1/categories/' + categoryId).then(function(response) {
        let subCategories = response.data.sub_categories;
        console.log("Sub-categories: ", subCategories);
        let services = response.data.services;
        console.log("Services: ", services);

        if (subCategories.length > 1) {
          $('.sub-category-select').css("display", "block");
          $('.service-select').css("display", "none");

          // POPULATE SUB-CATEGORIES IN SELECT DROPDOWN
          subCategories.forEach(function(sc) {
            $('#sub-category-select')
              .append("<option value='" + sc + "'>" + sc + "</option>");
            $('.sub-category-select')
              .find('ul')
              .append('<li class><span>' + sc + '</span></li>');
          });
          $('.sub-category-select').find('li').on("click", function() {
            $(this).attr("class", "active selected");
          });

        } else {
          // FOR CATEGORIES LIKE NAILS WITH ONE (basically no) SUBCATEGORIES
          // SHOW SERVICES AND HIDE SUBCATEGORIES
          $('.service-select').css("display", "block");
          $('.sub-category-select').css("display", "none");
        }

        // SHOW SERVICES WHEN SUBCATEGORY IS SELECTED
        $('#selected-sub-category').on('change', function() {
          $('.service-select').css("display", "block");
        });





        // ------LOCATION CODE--------
        // let location;
        // navigator.geolocation.getCurrentPosition(function(locationData) {
        //   location = locationData;
        //   let lat = location.coords.latitude;
        //   let lon = location.coords.longitude;
        //   let key = ENV["GOOGLE-API-KEY"];
        //   console.log("Lat: ", lat);
        //   console.log("Lon: ", lon);
        //   axios.get(
        //     'http://maps.googleapis.com/maps/api/distancematrix/json' +
        //     '?origin=' + lat + ',' + lon +
        //     '&destination=' + '90210' +
        //     '&key=' + key
        //   ).then(function(response) {
        //     console.log(response);
        //   });
        // });
        // ----------------------------
      }).catch(
        function(error) {
          console.log("Error: ", error);
          // // Add errors in red to modal and display modal
          // var errorMessage = error.response.data.errors;
          // var errorList = [];
          // errorMessage.forEach(function(msg) {
          //   $('.error-list').append("<li>" + msg + "</li>");
          // });
          // $('.error-modal').css("display", "block");

          // // Close modal when user clicks anywhere on page and empty error list until next submit
          // $('body').on("click", function() {
          //   $('.error-modal').css("display", "none");
          //   $('.error-list').html("");
        } 
      );
    }
  });

});