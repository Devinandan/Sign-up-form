document.addEventListener("DOMContentLoaded", function(){
    let passwordField = document.querySelector("#password");
    let confirmPasswordField = document.querySelector("#confirm_password");

    let error = document.querySelector("#error");

    console.log(passwordField);
    console.log(confirmPasswordField);


   function validatePasswords(){
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if(password !== confirmPassword){
        error.textContent = "*passwords do not match";
    } else {
        error.textContent = "";
    }
   }

   passwordField.addEventListener("input", validatePasswords);
   confirmPasswordField.addEventListener("input", validatePasswords);   
    
});