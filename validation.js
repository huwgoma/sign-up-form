/* Validate Name Fields on Blur */

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