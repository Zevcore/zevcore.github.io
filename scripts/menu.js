function displayMenu() {
    const ul = document.querySelector('.header').querySelector("ul");
    ul.style.display === "flex" ? ul.style.display = "none" : ul.style.display = "flex";
}
