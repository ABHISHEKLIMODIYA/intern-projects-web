function toggleForm() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const title = document.getElementById('formTitle');
  const msg = document.getElementById('formMessage');

  msg.textContent = "";
  msg.style.color = "";

  if (loginForm.classList.contains('active')) {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    title.textContent = "Register at FitX";
  } else {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
    title.textContent = "Login to FitX";
  }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const msg = document.getElementById('formMessage');

  msg.style.color = "green";
  msg.textContent = `Welcome back, ${email.split("@")[0]}! 💪`;
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('confirmPassword').value;
  const msg = document.getElementById('formMessage');

  if (pass !== confirm) {
    msg.style.color = "red";
    msg.textContent = "❌ Passwords do not match!";
  } else {
    msg.style.color = "green";
    msg.textContent = "✅ Registration successful!";
    this.reset();
  }
});
