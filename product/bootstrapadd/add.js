$(document).ready(function(){
    setTypeEvent();
    form.addSubmitEvent($('#addProductFormSubmit'));
    toggleFormFields(document.getElementById('type').value);
});

function setTypeEvent(){
    $('#type').change(function(){
        toggleFormFields(this.value);
    });
}

function toggleFormFields(fieldValue){
    $('.dynamic-group').addClass('hidden');
    $('.' + fieldValue + '-group').removeClass('hidden');
}

function isSkuValid(value){
    return /^([a-zA-Z]{8})$/.test(value);
}

function isNumber(value){
    return /^\d\$/.test(value);
}

function isTextValid(value){
    return /^([a-zA-Z])$/.test(value);
}

var form = {
    config : {
        aaa : "bbb"
    },
    addSubmitEvent(submitButton){
        submitButton.click(function(event) {
            form.submit();
        });
    },
    submit() {
        var formIsValid = this.isValid();
        console.log('Form is valid: ' + formIsValid);
    
        // if(formIsValid){
        //     alert("Form is valid");
        // }

          //Add form data to JSON object
          console.log($('#addProductForm').serializeArray());
        let formData = JSON.stringify( $('#addProductForm').serializeArray() );
        console.log( formData );
        console.log(JSON.parse(formData));
        return false;
    },
    isValid() {
        var result = true;
        $("#addProductForm .form-control").each(function() {
            if (typeof($(this).data("validator")) != "undefined" 
                && !form.isFieldValid($(this).data("validator"), $(this).val())) {
                $(this).addClass('error');
                result = false;
            }
        });
    
        return result;
    },
    isFieldValid(validator, value){
        return window[validator](value);
    }
}