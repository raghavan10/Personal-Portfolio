// Load Sidebar
document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("sidebar-container").innerHTML = data;
      })
      .catch((error) => console.error("Error loading sidebar:", error));
  
    // Initialize Typed.js
    new Typed(".typed", {
      strings: ["Web Developer", "ML Engineer", "Python developer", "Student"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });
    
  });
  