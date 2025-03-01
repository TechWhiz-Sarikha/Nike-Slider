document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel .list .item");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }

    next.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    });

    prev.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); 
});
