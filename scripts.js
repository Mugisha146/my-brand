document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (event) {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.focus();
      event.preventDefault();
    } else {
      emailError.textContent = "";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form");
  document.addEventListener("submit", function (event) {
    clearErrors();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (name === "") {
      showError("name-error", "Please enter your name.");
      nameInput.classList.add("error");
      event.preventDefault();
    }

    if (email === "") {
      showError("email-error", "Please enter your email.");
      emailInput.classList.add("error");
      event.preventDefault();
    } else if (!validateEmail(email)) {
      showError("email-error", "Please enter a valid email address.");
      emailInput.classList.add("error");
      event.preventDefault();
    }

    if (message === "") {
      showError("message-error", "Please enter your message.");
      messageInput.classList.add("error");
      event.preventDefault();
    }
  });

  function showError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.textContent = message;
  }

  function clearErrors() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });

    var inputElements = document.querySelectorAll("input, textarea");
    inputElements.forEach(function (element) {
      element.classList.remove("error");
    });
  }

  function validateEmail(email) {
     emailError.textContent = '';
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }
  }
});


 document
   .getElementById("login-form")
   .addEventListener("submit", function (event) {
     var usernameInput = document.getElementById("username");
     var passwordInput = document.getElementById("password");
     var usernameError = document.getElementById("username-error");
     var passwordError = document.getElementById("password-error");
     var isValid = true;

  
     if (usernameInput.value.trim() === "") {
       usernameError.textContent = "Username is required";
       isValid = false;
     } else {
       usernameError.textContent = "";
     }

  
     if (passwordInput.value.trim() === "") {
       passwordError.textContent = "Password is required";
       isValid = false;
     } else {
       passwordError.textContent = "";
     }

     if (!isValid) {
       event.preventDefault(); 
     }
   });


function toggleNav() {
  var nav = document.getElementById("navbar");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}
