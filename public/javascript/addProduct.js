const form = document.querySelector("form");
const name = document.querySelector("#name");
const category = document.querySelector("#category");
const material = document.querySelector("#material");
const typeOfSport = document.querySelector("#typeOfSport");
const color = document.querySelector("#color");
const url = document.querySelector("#url");
const alternateText = document.querySelector("#alternateText");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch("/admin/product", {
    // Adding method type
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },

    // Adding body or contents to send
    body: JSON.stringify({
      name: name.value,
      color: color.value,
      category: category.value,
      material: material.value,
      typeOfSport: typeOfSport.value,
      url: url.value,
      alternateText: alternateText.value,
    }),
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
});
