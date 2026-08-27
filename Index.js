function validateSignup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("exampleInputPassword").value;
    let confirmPassword = document.getElementById("cexampleInputPassword1").value
    // let error=document.getElementById("error");
    // let passwordError=document.getElementById("passwordError")
    // let confirmPasswordError=document.getElementById("confirmPasswordError")
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        // error.innerHTML="Email cannot be empty";
        alert("Email cannot be empty")
        return false;
    }
    else if (!emailPattern.test(email)) {
        // error.innerHTML="Enter a valid email address.";
        alert("Enter a valid email address.")
        return false;
    }

    if (password === "") {
        // passwordError.innerHTML="Password cannot be empty";
        alert("Password cannot be empty.")
        return false;
    }
    else if (!passwordPattern.test(password)) {
        //passwordError.innerHTML="Password must contain at least 8 characters, uppercase, lowercase, digit and special character.";
        alert("Password must contain at least 8 characters, uppercase, lowercase, digit and special character.")
        return false;
    }
    else if (password !== confirmPassword) {
        //confirmPasswordError.innerHTML="Password do not match.";
        alert("Password do not match.")
        return false;
    }
    alert("Account created succesfully.");
    return true;

}