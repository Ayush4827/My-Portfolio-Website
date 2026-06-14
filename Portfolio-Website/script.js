const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill in all required fields.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please enter a valid email address.";
    return;
  }

  formMsg.style.color = "green";
  formMsg.textContent = "Thanks! Your message has been sent.";
  form.reset();
});