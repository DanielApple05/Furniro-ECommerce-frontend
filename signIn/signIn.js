const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");

// Function to Handle Login Button Click
function handleLogin(event) {
  event.preventDefault(); // Prevent Form Submission
  const email = signInEmail?.value;
    alert (`Login Successful! Welcome back ${email} to our E-commerce Platform.`);
  window.location.href = "../homePage/index.html";
}

