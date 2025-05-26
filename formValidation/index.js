

const form = document.querySelector('form');


function clearError() {
    let errorsList = document.querySelectorAll('.error');
    errorsList.forEach(item => item.innerHTML = "")
}

function setError(id, message){
    document.getElementById(id).innerHTML = message
}


form.addEventListener('submit', (event) => {

    event.preventDefault();
    clearError();
    let a = true;
    let fname = document.querySelector("#fname");
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(fname.value == ""){
        setError("fnameErr",  'Firstname is Require!');
        fname.style.border = "1px solid red"
        fname.setAttribute('placeholder', 'Fname is required')
        a = false
    }
    if(lname == ""){
        setError("lnameErr",  'Lastname is Require!');

        a = false
    }else if(lname.length < 5 ){
        setError("lnameErr",  'Lastname is minimum length is 5');
        a = false
    }

    if(email == ""){
        setError("emailErr",  'Email is Require!');
        a = false
    }

    if(password == ""){
        setError("passErr",  'Password is Require!');
        a = false
    }else if(password.length < 5 ){
        setError("passErr",  'Password is minimum length is 5');
        a = false
    }

    if(a){
        console.log("Submited");
        form.reset();
    }

    });