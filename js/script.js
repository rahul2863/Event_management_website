// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times'); // Toggles the "X" icon
//     navbar.classList.toggle('active'); // Toggles the visibility of the navbar
// };

// window.onscroll = () => {
//     menu.classList.remove('fa-times'); // Removes "X" icon when scrolling
//     navbar.classList.remove('active'); // Hides the navbar when scrolling
// };



// Select menu icon and navbar
const menuBars = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
menuBars.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
        delay: 2500, // Auto-rotate delay (3 seconds)
        disableOnInteraction: false, // Keeps autoplay active after user interactions
    },

  });

 

  
//   // Add an event listener to the menu icon
//   menuIcon.addEventListener('click', () => {
//       // Toggle the navbar
//       if (navbar.style.opacity === '0' || navbar.style.opacity === '') {
//           navbar.style.opacity = '1'; // Fade in the navbar
//           navbar.style.transform = 'translateY(0)'; // Slide the navbar into view
//       } else {
//           navbar.style.opacity = '0'; // Fade out the navbar
//           navbar.style.transform = 'translateY(-100%)'; // Slide the navbar out of view
//       }
//   });


document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    // alert("Inside");
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // // Convert data to CSV format
    // const csvContent = `Name,Email,Phone,Message\n${name},${email},${phone},${message}`;

    // Send email via EmailJS
    try {
        const response = await emailjs.send("service_m2e5vso", "template_n3nklrc", {
            name,
            email,
            phone,
            message,
            // csv_attachment: btoa(csvContent), // Encode CSV content as base64
        });
        alert('Message sent successfully!');
    } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => observer.observe(element));
});



document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".gallery .box");

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.2 // Trigger when 20% of the box is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, observerOptions);

    boxes.forEach(box => observer.observe(box));
});

document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".background-video");
    video.playbackRate = 0.7; // Adjust playback speed (0.5 is half the normal speed)
});
