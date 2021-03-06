const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch("/api/register", {
    // Adding method type
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },

    // Adding body or contents to send
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    }),
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
});
