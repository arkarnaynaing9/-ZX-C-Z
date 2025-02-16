document.getElementById("show-education").addEventListener("click", function() {
    const panel = document.getElementById("education-panel");
    panel.style.display = "flex";
    setTimeout(() => {
        panel.querySelector(".panel-content").style.animation = "slideInUp 0.5s ease-out forwards";
    }, 100); // Delay the content animation
});

document.getElementById("close-panel").addEventListener("click", function() {
    const panel = document.getElementById("education-panel");
    panel.style.display = "none";
    panel.querySelector(".panel-content").style.animation = "none"; // Reset animation on close
});
