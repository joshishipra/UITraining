// Below Function Executes On Form Submit
function validateForm() {
    // Storing Field Values In Variables
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    // Regular Expression For Email
    var emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var nameReg = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var phoneReg = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    // Conditions

    var validEmail = false;
    var validName=false;
    var validContact=false;
    var response=false;
    
        if (name.match(nameReg)) {
            document.getElementById("name").classList.remove("invalid");
            document.getElementById("name").classList.add("valid");
            document.getElementById("nameError").style.display="none";
            validName=true;
        } else {
            document.getElementById("name").classList.remove("valid");
            document.getElementById("name").classList.add("invalid");
            document.getElementById("nameError").style.display="inline";
            validName=false;
        }
        if (email.match(emailReg)) {
            document.getElementById("email").classList.remove("invalid");
            document.getElementById("email").classList.add("valid");
            document.getElementById("emailError").style.display="none";
            validEmail=true;
        } else {
            document.getElementById("email").classList.remove("valid");
            document.getElementById("email").classList.add("invalid");
            document.getElementById("emailError").style.display="inline";
            validEmail=false;
        }

        if (contact.length == 10) {
            document.getElementById("contact").classList.remove("invalid");
            document.getElementById("contact").classList.add("valid");
            document.getElementById("contactError").style.display="none";
            validContact=true;
        } else {
            document.getElementById("contact").classList.remove("valid");
            document.getElementById("contact").classList.add("invalid")
            document.getElementById("contactError").style.display="inline";
            validContact=false;
        }

if(!validEmail|| !validContact || !validName ){
    return false;
}
    
return true;
}
