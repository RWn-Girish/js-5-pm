
function clearError() {
  $('.error').html("");
}

function setError(id, message) {
  $(`#${id}`).html(message);
}

function validationForm(e) {
  e.preventDefault(); 
  clearError(); 

  let fname = $("#fname");
  let lname = $("#lname");
  let email = $("#email");
  let password = $("#password");

  let isValid = true;

  if (fname.val().trim() === "") {
    setError("fnameErr", "First name is required!");
    
    isValid = false;
  }

  if (lname.val().trim() === "") {
    setError("lnameErr", "Last name is required!");
    
    isValid = false;
  } else if (lname.val().length < 5) {
    setError("lnameErr", "Last name must be at least 5 characters!");
    
    isValid = false;
  }

  if (email.val().trim() === "") {
    setError("emailErr", "Email is required!");
    
    isValid = false;
  }

  if (password.val().trim() === "") {
    setError("passErr", "Password is required!");
    
    isValid = false;
  } else if (password.val().length < 5) {
    setError("passErr", "Password must be at least 5 characters!");
    
    isValid = false;
  }

  if (isValid) {
    console.log("Form Submitted!");
    $('#myForm')[0].reset(); // Reset form if valid
  }

  return isValid;
}


// $(document).ready(function () {
//   $("form").on("submit", validationForm);
// });