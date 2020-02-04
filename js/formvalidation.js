$(document).ready(function() {
  console.log("name validation");
  $("#contactform").on("submit", function() {
    var valid = true;

    console.log("name validation");
    if ($("#name").prop("validity").valid) {
      $("#name_error").addClass("hidden");
    } else {
      $("#name_error").removeClass("hidden");
      valid = false;
    }

    if ($("#email").prop("validity").valid) {
      $("#email_error").addClass("hidden");
    } else {
      $("#email_error").removeClass("hidden");
      valid = false;
    }

    if ($("#subject").prop("validity").valid) {
      $("#subject_error").addClass("hidden");
    } else {
      $("#subject_error").removeClass("hidden");
      valid = false;
    }

    if ($("#message").prop("validity").valid) {
      $("#message_error").addClass("hidden");
    } else {
      $("#message_error").removeClass("hidden");
      valid = false;
    }

    if (valid == true) {
      alert("Message has been sent");
    }
    return valid;
  });
});
