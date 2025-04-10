

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
        savedName.textContent = "Name: " + localStorage.getItem("userName");
        savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); // Not saving password

        if (name && email) {
            // Save user data in localStorage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Display saved data
            savedName.textContent = "Name: " + name;
            savedEmail.textContent = "Email: " + email;
            alert("Sign-up successful! Data saved.");

            // Clear input fields after saving
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    // Clear data button
    clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
    });
});



//uk page

function goToPage() {
    window.location.href ="uk.html";
  }


  //submite button

  function showAlert() {
    alert("submited!");
  }


//button change
  const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
  socialListsEl.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
});

liEls.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuTextEl.innerHTML = liEl.innerHTML;
    socialListsEl.classList.add("hide");
    menuEl.classList.toggle("rotate");
  });
});





  
    // Simple JavaScript for hover effects
    document.addEventListener('DOMContentLoaded', () => {
        // Select elements
        const images = document.querySelectorAll('.review-image');
        const text = document.querySelector('.review-text');

        // Add hover effects to images
        images.forEach(image => {
            image.addEventListener('mouseover', () => {
                image.style.transform = 'scale(1.1)';
                image.style.transition = 'transform 0.3s ease';
            });

            image.addEventListener('mouseout', () => {
                image.style.transform = 'scale(1)';
            });
        });

        // Add hover effect to text
        text.addEventListener('mouseover', () => {
            text.style.color = '#e75480';
            text.style.transition = 'color 0.3s ease';
        });

        text.addEventListener('mouseout', () => {
            text.style.color = 'inherit';
        });
    });

  