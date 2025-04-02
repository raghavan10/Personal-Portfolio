// Initialize EmailJS with your API Key
emailjs.init("-InEsxRv9pbxnW0LF"); // Replace with your actual EmailJS API key

// Handle form submission
function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Define the template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    to_name: "Ronit",
    message: message,
  };

  // Disable the submit button and show feedback
  const submitButton = event.target.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Send the email
  emailjs
    .send("service_ts128w3", "template_o3v9l0n", templateParams)
    .then(
      (response) => {
        console.log("Success:", response);
        alert("Email sent successfully!");
        resetForm();
      },
      (error) => {
        console.error("Error:", error);
        alert("Failed to send email. Please try again later.");
      }
    )
    .finally(() => {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    });
}

// Reset form fields
function resetForm() {
  document.getElementById("contact-form").reset();
  console.log("Form reset successfully.");
}
