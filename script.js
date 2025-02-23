// Select all product cards with ratings
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  const stars = card.querySelectorAll(".rating .star");
  let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => {
        s.textContent = i <= index ? "star" : "star_outline";
      });
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((s, i) => {
        s.textContent = i < selectedRating ? "star" : "star_outline";
      });
    });

    star.addEventListener("click", () => {
      selectedRating = index + 1;
      stars.forEach((s, i) => {
        s.textContent = i < selectedRating ? "star" : "star_outline";
      });
      console.log(
        `Product: ${
          card.querySelector("h3").innerText
        }, Rating: ${selectedRating}`
      );
    });
  });
});

// checkout page
function openTab(event, tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const tabLinks = document.querySelectorAll(".tab-link");

  tabs.forEach((tab) => tab.classList.remove("active"));
  tabLinks.forEach((link) => link.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}

// Show or hide the "Go to Top" button on scroll
window.onscroll = function () {
  const goToTopButton = document.getElementById("goToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goToTopButton.style.display = "flex";
  } else {
    goToTopButton.style.display = "none";
  }
};

// Smoothly scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   const contactForm = document.getElementById("contactForm");
//   if (contactForm) {
//     contactForm.addEventListener("submit", function (e) {
//       // e.preventDefault();

//       const formData = new FormData(contactForm);
//       const data = Object.fromEntries(formData);

//       console.log("Form submitted:", data);

//       alert("Thank you for your message! We will get back to you soon.");
//       contactForm.reset();
//     });
//   }
// });

// Contact page form validation
// document.addEventListener("DOMContentLoaded", function () {
//   const contactPageForm = document.getElementById("contactPageForm");

//   if (contactPageForm) {
//     contactPageForm.addEventListener("submit", function (e) {
//       // e.preventDefault();
//       console.log("Form submitted");

//       const firstName = document
//         .getElementById("contact_firstName")
//         .value.trim();
//       const lastName = document.getElementById("contact_lastName").value.trim();
//       const email = document.getElementById("contact_email").value.trim();
//       const subject = document.getElementById("contact_subject").value.trim();
//       const message = document.getElementById("contact_message").value.trim();

//       if (!firstName || !lastName || !email || !subject || !message) {
//         alert("Please fill in all fields");
//         return;
//       }

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address");
//         return;
//       }
//       const formData = {
//         firstName,
//         lastName,
//         email,
//         subject,
//         message,
//       };

//       console.log("Form data:", formData);
//       alert("Thank you for your message! We will get back to you soon.");
//       contactPageForm.reset();
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const contactPageForm = document.getElementById("contactPageForm");

  if (contactPageForm) {
    contactPageForm.addEventListener("submit", function (e) {
      // Remove or comment out this line to allow redirection
      // e.preventDefault();
      console.log("Form submitted");

      const firstName = document
        .getElementById("contact_firstName")
        .value.trim();
      const lastName = document.getElementById("contact_lastName").value.trim();
      const email = document.getElementById("contact_email").value.trim();
      const subject = document.getElementById("contact_subject").value.trim();
      const message = document.getElementById("contact_message").value.trim();

      if (!firstName || !lastName || !email || !subject || !message) {
        alert("Please fill in all fields");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      console.log("Form data:", {
        firstName,
        lastName,
        email,
        subject,
        message,
      });
      // alert("Thank you for your message! We will get back to you soon.");
      // contactPageForm.reset(); // Optional: Reset form after submission
    });
  }
});
