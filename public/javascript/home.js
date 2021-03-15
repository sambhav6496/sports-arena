const logout = document.getElementById('logout')

  logout.addEventListener("click", function (e) {
    console.log(logout)
    fetch("/logout", {
      // Adding method type
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" }   
    })
  });
  