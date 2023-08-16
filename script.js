//your JS code here. If required.
//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const existingUserButton = document.getElementById("existing");

  // Add event listener to the form submission
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (rememberMeCheckbox.checked) {
      saveUserDetails(username, password);
    } else {
      clearUserDetails();
    }

    alert("Logged in as " + username);
  });

  // Check if there are saved user details
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    const existingUserButton = document.createElement("button");
    existingUserButton.id = "existing";
    existingUserButton.textContent = "Login as existing user";
    document.body.appendChild(existingUserButton);

    existingUserButton.addEventListener("click", function() {
      alert("Logged in as " + savedUsername);
    });
  }

  // Utility functions
  function saveUserDetails(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }

  function clearUserDetails() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});