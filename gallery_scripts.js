document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const items = Array.from(gallery.children);

    items.sort(() => Math.random() - 0.5);

    gallery.innerHTML = "";
    items.forEach(item => gallery.appendChild(item));
});
