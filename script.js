// Typed.js text animation for the 'text' class
var typed = new Typed(".text", {
    strings: ["Frontend Developer . . .", "フロントエンド開発者 .", ],
    typeSpeed: 70, // Speed of typing each character
    backSpeed: 50, // Speed of deleting each character
    backDelay: 1000, // Delay before deleting text
    loop: true // Infinite loop of the animation
});

document.addEventListener("DOMContentLoaded", () => {
    const dynamicText = document.getElementById("dynamic-text");

    const textPairs = [
        { jp: "                             木希望の光永遠の平和漏れ日侘寂花鳥風静け温も木漏れ日りさ月物の哀れ期一会 ", en: "                                                                Seeking to leverage skills and expertise in a dynamic and challenging environment.Currently looking for a job and open to new opportunies!" },
    ];

    let pairIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isJapanese = true;

    function typeEffect() {
        let currentPair = textPairs[pairIndex];
        let currentText = isJapanese ? currentPair.jp : currentPair.en;

        dynamicText.textContent = currentText.substring(0, charIndex + 1);

        let speed = isDeleting ? 20 : (isJapanese ? 40 : 20); // Set English typing speed to 20 for faster display

        if (!isDeleting && charIndex === currentText.length) {
            speed = 1000; // Pause before ending
            if (isJapanese) {
                isJapanese = false; // Switch to English after Japanese finishes typing
            }
        } else if (charIndex === currentText.length) {
            speed = 500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            pairIndex = (pairIndex + 1) % textPairs.length; // Cycle through text pairs
            speed = 500;
        }

        charIndex += isDeleting ? -1 : 1;

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutText = document.querySelector(".about-text p");
    const gradientText = document.createElement("span");
    gradientText.classList.add("gradient-text");
    gradientText.innerHTML = aboutText.innerHTML;
    aboutText.innerHTML = "";
    aboutText.appendChild(gradientText);
});

document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "education.html";
});

// Initialize EmailJS once
emailjs.init('Bkt176zABl88HfXwh');  // Replace 'your_public_key_here' with your actual public key
// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Log the form data to verify
    console.log('Form Data:', {
        name: name,
        email: email,
        subject: subject,
        message: message
    });

    // Send email via EmailJS
    emailjs.send('service_pjd3kgo', 'template_p6nh2bt', {
        to_name: 'Arkar Nay Naing',  // Static recipient name
        from_name: name,
        from_email: email,           // Ensure the email field is being passed
        subject: subject,
        message: message
    }).then(function(response) {
        console.log('Email sent successfully:', response);
        alert('Message Sent Successfully!');
        document.getElementById('contact-form').reset(); // Optionally, clear the form
    }, function(error) {
        console.log('Error sending email:', error);
        alert('Message Failed to Send. Please try again later.');
    });
});
