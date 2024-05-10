function saveData() {
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let userRecord = new Array();
  userRecord = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    userRecord.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Email already exists!!");
  } else {
    userRecord.push({
      name: name,
      email: email,
      password: password,
    });
    alert("Registeration successfull !!");
    window.location.href = "login.html";
  }
  localStorage.setItem("users", JSON.stringify(userRecord));
}
