const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");

// Function to Handle Create Account Button Click
function handleAccountCreation(event) {
  event.preventDefault(); // Prevent Form Submission
  const email = signUpEmail.value;
  alert(
    `Hello ${email}, your Account creation was Successful! Welcome to our E-commerce Platform.`
  );
  window.location.href = "../homePage/index.html";
}
