let progressSpans = document.querySelectorAll(".progress-bar span");
let section = document.querySelector(".skills-bar");

window.onload = (event) => {
    if (window.onload) {
        progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
}