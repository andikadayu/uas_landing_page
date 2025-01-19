document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
      showErrorMessage("All fields are required!");
      return;
    }

    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    const apiToken = form.getAttribute("data-sb-form-api-token");
    const csrfToken = getCSRFToken(); // Ambil CSRF token

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/contact/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", `Bearer ${apiToken}`);
    xhr.setRequestHeader("X-CSRFToken", csrfToken); // Tambahkan header CSRF

    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 201) {
        showSuccessMessage("Form submission successful!");
      } else {
        showErrorMessage("Error sending message! " + xhr.statusText);
      }
    };

    xhr.onerror = function () {
      showErrorMessage("A network error occurred.");
    };

    xhr.send(JSON.stringify(data));
  });

  function getCSRFToken() {
    const name = "csrftoken";
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return value;
      }
    }
    return "";
  }

  function showSuccessMessage(message) {
    const successMessage = document.getElementById("submitSuccessMessage");
    const errorMessage = document.getElementById("submitErrorMessage");
    successMessage.classList.remove("d-none");
    errorMessage.classList.add("d-none");
    successMessage.querySelector(".fw-bolder").textContent = message;
  }

  function showErrorMessage(message) {
    const successMessage = document.getElementById("submitSuccessMessage");
    const errorMessage = document.getElementById("submitErrorMessage");
    successMessage.classList.add("d-none");
    errorMessage.classList.remove("d-none");
    errorMessage.textContent = message;
  }
});
