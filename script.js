// Login button handler
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    // Collect data from form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const loginData = { username, password };
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
  
      const result = await response.json();
  
      // Display success or error message
      const messageElement = document.getElementById("message");
      if (response.ok) {
        messageElement.style.color = "green";
        messageElement.textContent = "Login successful!";
      } else {
        messageElement.style.color = "red";
        messageElement.textContent = result.message || "Login failed!";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("message").textContent =
        "An error occurred. Please try again later.";
    }
  });
  
  // Submit button handler
  document.getElementById("submitButton").addEventListener("click", async () => {
    // Example of handling the submit API
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const submitData = { username, password };
  
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });
  
      const result = await response.json();
  
      const messageElement = document.getElementById("message");
      if (response.ok) {
        messageElement.style.color = "green";
        messageElement.textContent = "Account submitted successfully!";
      } else {
        messageElement.style.color = "red";
        messageElement.textContent = result.message || "Submission failed!";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("message").textContent =
        "An error occurred. Please try again later.";
    }
  });
  