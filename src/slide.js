const slideHeaders = document.querySelectorAll(".slide-header");
const slideContents = document.querySelectorAll(".slide-content");

slideHeaders.forEach((header, index) => {
    header.addEventListener("click", () => {
        if (slideContents[index].style.display === "block") {
            slideContents[index].style.display = "none";
        } else {
            closeAllSlides();
            slideContents[index].style.display = "block";
        }
    });
});

function closeAllSlides() {
    slideContents.forEach((content) => {
        content.style.display = "none";
    });
}