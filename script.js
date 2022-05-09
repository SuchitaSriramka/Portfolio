const nav = document.querySelector(".navbar");

window.onscroll = () => {
    const top = window.scrollY;
    if (top >= 100) {
        nav.classList.add("backround-dark");
    }
    else {
        nav.classList.remove("backround-dark");
    }
}