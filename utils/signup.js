// Create a function that validates user inputs for sign up.
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
// Select all values from login
const signupFormHandler = async (event) => {
  event.preventDefault();

  const last_name = document.querySelector("#lastname-signup").value.trim();
  const first_name = document.querySelector("#firstname-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  // Send a post route to api
  if (first_name && last_name && email && password) {
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // redirect to profilePage if successful
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
