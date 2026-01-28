function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

function showSignup() {
  document.getElementById("signin").classList.add("hidden");
  document.getElementById("signup").classList.remove("hidden");
}

function showSignin() {
  document.getElementById("signup").classList.add("hidden");
  document.getElementById("signin").classList.remove("hidden");
}

function validateSignup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const error = document.getElementById("error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  error.textContent = "";

  if (!emailPattern.test(email)) {
    error.textContent = "Invalid email format";
    return;
  }

  if (!passwordPattern.test(password)) {
    error.textContent =
      "Password must be 8+ chars with upper, lower, number & special char";
    return;
  }

  if (password !== confirm) {
    error.textContent = "Password is not same";
    return;
  }

  alert("Sign Up Successful!");
}
