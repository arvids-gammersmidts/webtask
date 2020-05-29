window.addEventListener("load", function(){
    setTypeEvent();
    form.addSubmitEvent(document.getElementById('addProductFormSubmit'));
    toggleFormFields(document.getElementById('type').value);
});

function setTypeEvent(){
    var typeSelect = document.getElementById('type');
    typeSelect.addEventListener("change", function() {
        toggleFormFields(this.value);
    });
}

function toggleFormFields(fieldValue){
    // let allDynamicGroupElements = document.getElementsByClassName('dynamic-group')
    // let targetDynamicGroupElements = document.getElementsByClassName(fieldValue + '-group');
    // for (var i = 0; i < allDynamicGroupElements.length; i++) {
    //     allDynamicGroupElements[i].classList.add('hidden');
    // }
    // for (var i = 0; i < targetDynamicGroupElements.length; i++) {
    //     targetDynamicGroupElements[i].classList.remove('hidden');
    // }
    $('.dynamic-group').addClass('hidden');
    $('.' + fieldValue + '-group').removeClass('hidden');
}

function isSkuValid(value){
    return /^([a-zA-Z]{8})$/.test(value);
}

function isTextValid(value){
    return true;
}

// function submitForm(){
//     var formIsValid = isFormValid();
//     console.log('Form is valid: ' + formIsValid);

//     if(formIsValid){
//         console.log('Form is valid: ' + formIsValid);
//         alert("Form is valid");
//     }
// }

var form = {
    fieldValidationConfig : {
        sku : isSkuValid,
        name : isTextValid,
    },
    addSubmitEvent(submitButton){
        submitButton.addEventListener("click", function() {
            form.submit();
        });
    },
    submit() {
        var formIsValid = this.isValid();
        console.log('Form is valid: ' + formIsValid);
    
        if(formIsValid){
            alert("Form is valid");
        }
    },
    isValid() {
        var result = true;
        this.fieldValidationConfig.forEach(config => { // todo fix
            if (! isFieldValid(config.value, document.forms["addProductForm"][config].value)) {
                console.log("Field is not valid");
                result = false;
            }
        });
    
        return result;
    },
    isFieldValid(validator, value){
        return validator(value);
    }
}