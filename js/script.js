//Signup and login
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const rePassword = document.getElementById("signupRePassword").value;

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Sign up successful!");

    // Clear the signup form fields
    document.getElementById("signupForm").reset();
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      if (rememberMe) {
        localStorage.setItem("rememberedUser", JSON.stringify(user));
      }
      alert("Login successful!");
      // Redirect to admin page
      window.location.href = "../admin/admin.html";
    } else {
      alert("Invalid email or password!");
    }
  });

document
  .getElementById("forgotPasswordLink")
  .addEventListener("click", function () {
    document.getElementById("login-register").style.display = "none";
    document.getElementById("reset-password").style.display = "block";
  });

document
  .getElementById("resetPasswordButton")
  .addEventListener("click", function () {
    const email = document.getElementById("resetEmail").value;
    const newPassword = document.getElementById("resetNewPassword").value;
    const confirmPassword = document.getElementById(
      "resetConfirmPassword"
    ).value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email) {
      user.password = newPassword;
      localStorage.setItem("user", JSON.stringify(user));
      alert("Password reset successful!");
      document.getElementById("reset-password").style.display = "none";
      document.getElementById("login-register").style.display = "block";
    } else {
      alert("Email not found!");
    }
  });

window.addEventListener("load", function () {
  const rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"));
  if (rememberedUser) {
    document.getElementById("loginEmail").value = rememberedUser.email;
  }
});
//humberger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
//scroll functionality
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scrollToHome")
    .addEventListener("click", function () {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("scrollToAbout")
    .addEventListener("click", function () {
      document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("scrollToSkills")
    .addEventListener("click", function () {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("scrollToPortfolio")
    .addEventListener("click", function () {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("scrollToBlogs")
    .addEventListener("click", function () {
      document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("scrollToContact")
    .addEventListener("click", function () {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("scrollToLogIn")
    .addEventListener("click", function () {
      document
        .getElementById("login-register")
        .scrollIntoView({ behavior: "smooth" });
    });
  document
    .getElementById("scrollToSignUp")
    .addEventListener("click", function () {
      document
        .getElementById("login-register")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      clearErrors();

      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("message");

      var name = nameInput.value.trim();
      var email = emailInput.value.trim();
      var message = messageInput.value.trim();

      var hasError = false;

      if (name === "") {
        showError("name-error", "Please enter your name.");
        nameInput.classList.add("error");
        hasError = true;
      }

      if (email === "") {
        showError("email-error", "Please enter your email.");
        emailInput.classList.add("error");
        hasError = true;
      } else if (!validateEmail(email)) {
        showError("email-error", "Please enter a valid email address.");
        emailInput.classList.add("error");
        hasError = true;
      }

      if (message === "") {
        showError("message-error", "Please enter your message.");
        messageInput.classList.add("error");
        hasError = true;
      }

      if (!hasError) {
        this.submit();
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
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const projects = document.querySelectorAll(".projectz");
  const indicators = document.querySelectorAll(".indicator button");
  let currentProject = 0;

  function showProject(index) {
    projects.forEach((project, i) => {
      project.classList.toggle("active", i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", function () {
      currentProject = i;
      showProject(currentProject);
    });
  });

  // Initialize the first project as active
  showProject(currentProject);
});
