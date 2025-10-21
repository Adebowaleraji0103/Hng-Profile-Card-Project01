const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const name = form.querySelector("#name");
  const email = form.querySelector("#email");
  const subject = form.querySelector("#subject");
  const message = form.querySelector("#message");

  // Helper function
  const showError = (input, msgId, condition) => {
    const msg = document.getElementById(msgId);
    if (condition) {
      msg.hidden = false;
      valid = false;
    } else {
      msg.hidden = true;
    }
  };

  showError(name, "error-name", name.value.trim() === "");
  showError(
    email,
    "error-email",
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  );
  showError(subject, "error-subject", subject.value.trim() === "");
  showError(message, "error-message", message.value.trim().length < 10);

  if (valid) {
    successMsg.hidden = false;
    form.reset();
  } else {
    successMsg.hidden = true;
  }
});
