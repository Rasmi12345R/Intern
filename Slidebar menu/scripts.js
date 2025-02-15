const body = document.body;
const menu = document.getElementById("menu");

function toggleMenu() {
    menu.classList.toggle("translate-x-1/2");
    menu.classList.toggle("translate-x-0");
}
function theme() {
    // Toggle the 'dark' class on the body element
    body.classList.toggle('dark');
    
    // Optional: Update the button text or appearance based on the theme
    const themeButton = document.getElementById('theme');
    if (body.classList.contains('dark')) {
        themeButton.innerHTML =`<i class="fa-solid fa-sun"></i>Sun`;
    } else {
        themeButton.innerHTML =`<i class="fa-solid fa-moon"></i>Moon`;
    }
}


