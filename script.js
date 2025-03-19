const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const signInForm = document.getElementById("signin");
const signUpForm = document.getElementById("signup");

signInButton.addEventListener("click", () => {
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
});

signUpButton.addEventListener("click", () => {
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
});
