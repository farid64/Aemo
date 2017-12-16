$(document).ready(function() {
  // Getting references to our form and input
  var signUpButton = $(".signup");
  // var usernameInput = $("input#username-input");
  var firstNameInput = $("input#firstname-input");
  var lastNameInput = $("input#lastname-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  var repeatPasswordInput = $("input#repeat-password-input");
  var repeatEmailInput = $("input#repeat-email-input");

  // first name "on-the-fly" validation
  firstNameInput.bind('input propertychange', function() {
    if (firstNameInput.val().trim().length < 1) {
      $("#firstname-form").removeClass("has-success");

      $("#firstname-form").addClass("has-error");
      $("#firstname-feedback").text("First Name must be at least 1 character long");
    } else {
      $("#firstname-form").removeClass("has-error");

      $("#firstname-form").addClass("has-success");
      $("#firstname-feedback").text("First Name valid!");
    }
  });

    // last name "on-the-fly" validation
  lastNameInput.bind('input propertychange', function() {
    if (lastNameInput.val().trim().length < 1) {
      $("#lastname-form").removeClass("has-success");

      $("#lastname-form").addClass("has-error");
      $("#lastname-feedback").text("Last Name must be at least 1 character long");
    } else {
      $("#lastname-form").removeClass("has-error");

      $("#lastname-form").addClass("has-success");
      $("#lastname-feedback").text("Last Name valid!");
    }
  });

  // Email "on-the-fly" validation
  emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  emailInput.bind('input propertychange', function() {
    if (!emailRegEx.test($(this).val()))
    {
      $("#email-form").removeClass("has-success");

      $("#email-form").addClass("has-error");
      $("#email-feedback").text("Invalid Email");
      $("#email-additional-feedback").text("Ex: someone@example.com");
    
    } else {
      $("#email-form").removeClass("has-error");

      $("#email-form").addClass("has-success");
      $("#email-feedback").text("Valid Email!");
      $("#email-additional-feedback").text("");
    }
  });

  // Check "on-the-fly" if repeated email matches email
  repeatEmailInput.bind('input propertychange', function() {
    if (emailInput.val().trim() !== repeatEmailInput.val().trim()) {
      $("#email-repeat-form").removeClass("has-success");

      $("#email-repeat-form").addClass("has-error");
      $("#email-repeat-feedback").text("Emails Don't Match");
    } else {
      $("#email-repeat-form").removeClass("has-error");

      $("#email-repeat-form").addClass("has-success");
      $("#email-repeat-feedback").text("Emails Match!");    
    }
  });
  var passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  passwordInput.bind('input propertychange', function() {
    if (!passwordRegEx.test($(this).val())) {
      $("#password-form").removeClass("has-success");

      $("#password-form").addClass("has-error");
      $("#password-feedback").text("Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.");
    } else {
      $("#password-form").removeClass("has-error");

      $("#password-form").addClass("has-success");
      $("#password-feedback").text("Password set correctly!");    
    }
  });

  repeatPasswordInput.bind('input propertychange', function() {
    if (passwordInput.val().trim() !== repeatPasswordInput.val().trim()) {
      $("#repeat-password-form").removeClass("has-success");

      $("#repeat-password-form").addClass("has-error");
      $("#repeat-password-feedback").text("Passwords Don't Match");
    } else {
      $("#repeat-password-form").removeClass("has-error");

      $("#repeat-password-form").addClass("has-success");
      $("#repeat-password-feedback").text("Passwords Match!");    
    }
  });

  // Check if emails match each other
  signUpButton.on("click", function(event) {
    // Replace all alerts with modals

    var userData = {
      userfirst_name: firstNameInput.val().trim(),
      userlast_name: lastNameInput.val().trim(),
      user_email: emailInput.val().trim(),
      user_password: passwordInput.val().trim()
    };

    if (!userData.userfirst_name || !userData.userlast_name || !userData.user_email || !userData.user_password) {
      return alert("Please don't leave fields blank");
    }

    // If we have an email and password, run the signUpUser function
    signUpUser(userData.userfirst_name, userData.userlast_name, userData.user_email,userData.user_password);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    repeatPasswordInput.val("");
    repeatEmailInput.val("");
  });

  // // Does a post to the signup route. If succesful, we are redirected to the members page
  // // Otherwise we log any errors
  function signUpUser(firstname, lastname, email, password) {
    $.post("/users/signup", {
      userfirst_name: firstname,
      userlast_name: lastname,
      user_email: email,
      user_password: password
    }).then(function(data) {
      if (data.duplicateUser) {
        // Replace with Modal
        alert("Sorry, that username has been taken");
      } else {
        // console.log("data coming back " + JSON.stringify(data)); // {"redirect":"/"}
        window.location = data.redirect;
      }
    }).catch(function(err) {
      console.log(err);
    });
  }

});

