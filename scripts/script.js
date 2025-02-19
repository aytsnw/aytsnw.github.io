document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded");
  
    // Toggle Dark Mode Functionality
    const darkModeBtn = document.getElementById("darkModeBtn");
  
    const toggleDarkMode = () => {
      document.body.classList.toggle("dark-mode");
    };
  
    if (darkModeBtn) {
      darkModeBtn.addEventListener("click", toggleDarkMode);
    }
  });
  