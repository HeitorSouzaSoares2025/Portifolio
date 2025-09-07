// Função para revelar elementos ao rolar a página
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal, .card"); // Seleciona todos elementos com classe "reveal" ou cards
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // ponto de ativação
    for (let i = 0; i < reveals.length; i++) {
        const top = reveals[i].getBoundingClientRect().top;
        if (top < windowHeight - revealPoint) {
            reveals[i].classList.add("active"); // adiciona classe "active" para animação
        }
    }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Inicializa ao carregar

// Efeito de digitação em loop
const text = "Olá, eu sou Heitor";
const typingElement = document.getElementById("typing");
let index = 0;
let isDeleting = false;

function type() {
    if (!isDeleting) {
        typingElement.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) { isDeleting = true; setTimeout(type, 1500); return; }
    } else {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        if (index === 0) { isDeleting = false; setTimeout(type, 500); return; }
    }
    setTimeout(type, 150);
}
type();
