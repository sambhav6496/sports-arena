const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
consloe.log([email.value, password.value]);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch("/api/login", {
    // Adding method type
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },

    // Adding body or contents to send
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
});