const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const userAge = document.getElementById('user_age');
  const userZip = document.getElementById('user_zip');
  const emailAddress = document.getElementById('email_address');

  if (firstName.value === "") {
    document.getElementById("first-name").innerHTML="Please enter your first name."
    firstName.focus();
    return false;
  }

  if (lastName.value === "") {
      document.getElementById("last-name").innerHTML="Please enter you last name."
      lastName.focus();
      return false;
  }
    
  if ( userAge.value < 18 || userAge.value > 100  || userAge.value === "" ) {
    document.getElementById("user-age").innerHTML="Please enter age. Must be 18."
      userAge.focus();
      return false;
  }

  if (userZip.value === "") {
     document.getElementById("user-zip").innerHTML="Please enter your zip code."
      userZip.focus();
      return false;
  }

  if (!validateZipCode(userZip.value)) {
    document.getElementById("user__zip").innerHTML="Please enter a valid zip code."
      userZip.focus();
      return false;
  }

  if (emailAddress.value === "") {
    document.getElementById("user-email").innerHTML="Please enter your email address."
    emailAddress.focus();
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    document.getElementById("user__email").innerHTML="Please enter a valid email address."
    emailAddress.focus();
    return false;
  }

  if(!this.form.checkbox.checked)
  {
      checkBox();
      return false;
  }
  
  return handleSubmit(); // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validateZipCode = (elementValue) => {
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
     return zipCodePattern.test(elementValue);
}

const checkBox = () => {
    document.getElementById("check_box").required = true;
    document.getElementById("demo").innerHTML = "The required property was set. The checkbox must now be checked before submitting the form.";
  }

// const checkForm = () => {
//     if (document.getElementById('first_name').value === "") {
//         alert("Missing First Name");
//         return false;
//     } else if (document.getElementById('last_name').value === ""){
//         alert("Missing Last Name");
//         return false;
//     } else if (document.getElementById('user_age').value === ""){
//         alert("Missing Age");
//         return false;
//     } else if (document.getElementById('user_zip').value === ""){
//         alert("Missing Zip Code");
//         return false;  
//     } else if (document.getElementById('email_address').value === ""){
//         alert("Missing Email Address");
//         return false;
//     } else {
//         return handleSubmit();
//     }    
// }

const removeValidationError = () => {
    document.getElementById("first-name").remove();
    document.getElementById("last-name").remove();
    document.getElementById("user-age").remove();
    document.getElementById("user-zip").remove();
    document.getElementById("user__zip").remove();
    document.getElementById("user-email").remove();
    document.getElementById("user__email").remove();
    document.getElementById("demo").remove();
}
const handleSubmit = () => {
    document.getElementById("log").innerHTML = "Form was submitted!"
    document.getElementById("form").reset()
    removeValidationError();
  }


submitBtn.addEventListener('click', validate);