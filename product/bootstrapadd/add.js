jQuery(document).ready(function ($) {
  setTypeEvent();
  //form.addSubmitEvent(document.getElementById('addProductFormSubmit'));
  toggleFormFields(document.getElementById('type').value);


function setTypeEvent(){
  var typeSelect = document.getElementById('type');
  typeSelect.addEventListener("change", function() {
      toggleFormFields(this.value);
  });
}

function toggleFormFields(fieldValue){
  $('.dynamic-group').addClass('hidden');
  $('.' + fieldValue + '-group').removeClass('hidden');
}

  $('#addProductFormSubmit').click(function(){
    console.log('clicked');
    let sku = $('#sku').val();
    let name = $('#name').val();
    let price = $('#price').val();
    let size = $('#size').val();
    let height = $('#height').val();
    let width = $('#width').val();
    let length = $('#length').val();
    let weight = $('#weight').val();
  
    let regexName = /^[a-zA-Z]+$/;
    let regexNumber = /^\d+$/;

    let errorMsg = $('.alert');

    if(sku=="") {
      $(errorMsg).show();
      $(errorMsg).text("Please enter sku number");
      return false;
    } else if(!regexNumber.test(sku)) {
      $(errorMsg).text("Please enter a valid sku number");
      return false;
    } else {
      $(errorMsg).hide();
    }
  
    if(name=="") {
      $(errorMsg).show();
      $(errorMsg).text("Please enter name");
      return false;
    } else if(!regexName.test(name)) {
      $(errorMsg).text("Please enter a valid name");
      return false;
    } else {
      $(errorMsg).hide();
    }

    if(price=="") {
      $(errorMsg).show();
      $(errorMsg).text("Please enter price");
      return false;
    } else if(!regexNumber.test(price)) {
      $(errorMsg).text("Please enter a valid price number");
      return false;
    } else {
      $(errorMsg).hide();
    }
  });

});