// Validate Required Fields on Blur
// Add/Toggle on class="required" if input's value is empty
function toggleRequiredClass(e){
    let input = e.target;
    input.classList.toggle('required', input.value == "");
}

const fname = document.getElementById('fname');
fname.addEventListener('blur', toggleRequiredClass);

const lname = document.getElementById('lname');
lname.addEventListener('blur', toggleRequiredClass);

const email = document.getElementById('email');
email.addEventListener('blur', toggleRequiredClass);


// Validate Password Fields 
//for Match
const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwd-confirm');

pwdConfirm.addEventListener('keyup', pwdInputMatch);

function pwdInputMatch(event) {
    let inputField = event.target;
    let compareField = inputField == pwdConfirm ? pwd : pwdConfirm;
    
    // If pwdConfirm's value matches pwd's value, set #pwd-confirm's validity to valid
    if (inputField.value == compareField.value) {
        pwdConfirm.setCustomValidity("");
    } else {
        pwdConfirm.setCustomValidity("Passwords do not match");
    }
}