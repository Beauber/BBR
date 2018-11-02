/* global $, axios */

$(document).ready(function() {

  var categoryId = null;
  var subCategoryId = null;
  var serviceText;
  var serviceId;

  $('#selected-category').on('change', function() {
    categoryId = $('#selected-category').val();
    if (categoryId) {
      // console.log(categoryId);
      if (categoryId === "1") {
        $('.hair-sub-category-select').css("display", "block");
        $('.face-sub-category-select').css("display", "none");
        $('.nails-service-select').css("display", "none");
        $('.all-face-services').css("display", "none");
      } else if (categoryId === "2") {
        $('.face-sub-category-select').css("display", "block");
        $('.hair-sub-category-select').css("display", "none");
        $('.nails-service-select').css("display", "none");
        $('.all-hair-services').css("display", "none");
      } else if (categoryId === "3") {
        $('.nails-service-select').css("display", "block");
        $('.face-sub-category-select').css("display", "none");
        $('.hair-sub-category-select').css("display", "none");
        $('.all-hair-services').css("display", "none");
        $('.all-face-services').css("display", "none");
      } 
    }
  });

  $('#hair-sub-category').on('change', function() {
    subCategoryId = $('#hair-sub-category').val();
    var serviceText = null;
    if (subCategoryId) {
      $('.all-hair-services').css("display", "block");
      // console.log(subCategoryId);
      if (subCategoryId === "1") {
        $('.haircut-service-select').css("display", "block");
        $('.haircolor-service-select').css("display", "none");
        $('.hairstyling-service-select').css("display", "none");
        $('.barbers-service-select').css("display", "none");
        $('.texture-service-select').css("display", "none");
        $('.extensions-service-select').css("display", "none");
      } else if (subCategoryId === "2") {
        $('.haircolor-service-select').css("display", "block");
        $('.haircut-service-select').css("display", "none");
        $('.hairstyling-service-select').css("display", "none");
        $('.barbers-service-select').css("display", "none");
        $('.texture-service-select').css("display", "none");
        $('.extensions-service-select').css("display", "none");
      } else if (subCategoryId === "3") {
        $('.hairstyling-service-select').css("display", "block");
        $('.haircut-service-select').css("display", "none");
        $('.haircolor-service-select').css("display", "none");
        $('.barbers-service-select').css("display", "none");
        $('.texture-service-select').css("display", "none");
        $('.extensions-service-select').css("display", "none");
      } else if (subCategoryId === "4") {
        $('.barbers-service-select').css("display", "block");
        $('.haircut-service-select').css("display", "none");
        $('.haircolor-service-select').css("display", "none");
        $('.hairstyling-service-select').css("display", "none");
        $('.texture-service-select').css("display", "none");
        $('.extensions-service-select').css("display", "none");
      } else if (subCategoryId === "5") {
        $('.texture-service-select').css("display", "block");
        $('.haircut-service-select').css("display", "none");
        $('.haircolor-service-select').css("display", "none");
        $('.hairstyling-service-select').css("display", "none");
        $('.barbers-service-select').css("display", "none");
        $('.extensions-service-select').css("display", "none");
      } else if (subCategoryId === "6") {
        $('.extensions-service-select').css("display", "block");
        $('.haircut-service-select').css("display", "none");
        $('.haircolor-service-select').css("display", "none");
        $('.hairstyling-service-select').css("display", "none");
        $('.barbers-service-select').css("display", "none");
        $('.texture-service-select').css("display", "none");
      } 
    }
  });

  $('#face-sub-category').on('change', function() {
    subCategoryId = $('#face-sub-category').val();
    var serviceText = null;
    if (subCategoryId) {
      $('.all-face-services').css("display", "block");
      // console.log(subCategoryId);
      if (subCategoryId === "7") {
        $('.makeup-service-select').css("display", "block");
        $('.skin-service-select').css("display", "none");
        $('.eyebrows-service-select').css("display", "none");
        $('.lashes-service-select').css("display", "none");
      } else if (subCategoryId === "8") {
        $('.skin-service-select').css("display", "block");
        $('.makeup-service-select').css("display", "none");
        $('.eyebrows-service-select').css("display", "none");
        $('.lashes-service-select').css("display", "none");
      } else if (subCategoryId === "9") {
        $('.eyebrows-service-select').css("display", "block");
        $('.makeup-service-select').css("display", "none");
        $('.skin-service-select').css("display", "none");
        $('.lashes-service-select').css("display", "none");
      } else if (subCategoryId === "10") {
        $('.lashes-service-select').css("display", "block");
        $('.makeup-service-select').css("display", "none");
        $('.skin-service-select').css("display", "none");
        $('.eyebrows-service-select').css("display", "none");
      } 
    }
  });

  $('.all-services').on("change", function() {
    // GET ID OF SELECTED SERVICE!
    serviceText = $(this).find('.selected span').text();
    serviceId = $(this).find('option:contains(' + serviceText + ')').val();

    // GET PROVIDERS THAT OFFER SELECTED SERVICE
    axios.get("/v1/services/" + serviceId).then(function(response) {
      console.log(response.data);
      $('.results').css("display", "block");
      var providers = response.data;
      var count = providers.length;
      if (count > 0) {
        providers.forEach(function(provider) {
          $('.results').append("<p> There were " + count + " result(s) near you!</p>");
          $('.results').append("<p> Name: " 
            + provider.first_name
            + " "
            + provider.last_name
            + "<br>"
            + " Zip: "
            + provider.zip
            + "</p>");
          console.log(provider);
        });
      } else { 
        $('.results').append("<p> There were no results near you  :( </p>");
      }
    });
  });


});