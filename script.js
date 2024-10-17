let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block"; // Show the modal
    modalImage.src = imageSrc; // Set the image source
    caption.innerHTML = imageSrc.split('/').pop(); // Set the caption (just the file name)
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}

// Close modal when clicking anywhere outside of the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};