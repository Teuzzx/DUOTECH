// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const nav = document.querySelector('.nav');

menuMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Scroll Suave para Links do Header e Footer
const links = document.querySelectorAll('.nav ul li a, .footer-section.links ul li a'); // Inclui links do header e footer

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href === "https://w.app/DUOTECH") {
            // Evita comportamento padrão e redireciona apenas para o WhatsApp
            e.preventDefault();
            window.open(href, '_blank');
        } else {
            e.preventDefault();
            const targetId = href.substring(1);

            if (targetId === "hero") {
                // Redireciona para o topo do site (primeira página)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Ajuste para compensar o header fixo
                        behavior: 'smooth'
                    });
                }
            }
        }

        // Fecha o menu mobile após clicar (em dispositivos móveis)
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Animação ao Rolagem
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.card, .plano, .projeto, .feedback');

hiddenElements.forEach(el => observer.observe(el));

// Detalhes dos Projetos (Hover)
const projetos = document.querySelectorAll('.projeto');
const projetoInfo = document.getElementById('projeto-info');
const projetoImg = document.getElementById('projeto-img');
const projetoDesc = document.getElementById('projeto-desc');

projetos.forEach(projeto => {
    projeto.addEventListener('mouseover', () => {
        const imgSrc = projeto.getAttribute('data-img');
        const descText = projeto.getAttribute('data-desc');
        
        projetoImg.src = imgSrc;
        projetoDesc.textContent = descText;
        projetoInfo.style.display = 'flex';
    });

    projeto.addEventListener('mouseout', () => {
        projetoInfo.style.display = 'none';
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    // Define o tema inicial com base na preferência armazenada
    document.body.classList.add(`${currentTheme}-theme`);
    themeToggle.textContent = currentTheme === "dark" ? "🌞" : "🌙";

    // Alterna o tema ao clicar no botão
    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-theme");
        document.body.classList.toggle("dark-theme", !isDark);
        document.body.classList.toggle("light-theme", isDark);
        localStorage.setItem("theme", isDark ? "light" : "dark");
        themeToggle.textContent = isDark ? "🌙" : "🌞";
    });
});
