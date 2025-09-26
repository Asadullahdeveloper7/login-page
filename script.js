
class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.email     = email;
    this.password  = password;
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];

/* ==== Toggle Forms ==== */
function toggleForms() {
  document.getElementById("signupForm").classList.toggle("active");
  document.getElementById("loginForm").classList.toggle("active");
}

/* ==== Sign Up ==== */
function userSignUp(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName  = document.getElementById("lastName").value;
  const email     = document.getElementById("email").value;
  const password  = document.getElementById("password").value;
  const signupMsg = document.getElementById("signupMsg");


  const exists = users.find((element) => element.email === email);
  if (exists) {
    signupMsg.style.color = "red";
    signupMsg.textContent = " Email already registered!";
    return;
  }

  const newUser = new User(firstName, lastName, email, password);
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  signupMsg.style.color = "green";
  signupMsg.textContent = "Signup successful! Please login.";
  document.getElementById("signupForm").reset();

  
  setTimeout(() => {
    toggleForms();
    signupMsg.textContent = "";
  }, 1000);
}


function userLogin(event) {
  event.preventDefault();

  const email    = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const loginMsg = document.getElementById("loginMsg");

  users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.find((element) => element.email === email && element.password === password);

  if (found) {
     loginMsg.style.color = "#000000ff";
    loginMsg.textContent = "WELCOME Back..!";
  } else {
    loginMsg.style.color = "red";
    loginMsg.textContent = "Invalid email or password!";
  }

  document.getElementById("loginForm").reset();
}
