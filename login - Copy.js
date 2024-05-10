function login() {
  let email, password;

  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let userRecord = new Array();
  userRecord = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    userRecord.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    alert("Login successfull !");
    let currentUser = userRecord.filter((v) => {
      return v.email == email && v.password == password;
    })[0];

    localStorage.setItem("name", currentUser.name);
    localStorage.setItem("email", currentUser.email);
    window.location.href = "profile.html";
  } else {
    alert("Login failed !");
  }
}
