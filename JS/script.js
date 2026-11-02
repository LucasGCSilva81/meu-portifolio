const botaoNav = document.querySelector(".botao-nav");
const navLinks = document.querySelector("#nav-links");
if (botaoNav && navLinks) {
    botaoNav.addEventListener("click", () => {
        const menuAberto = navLinks.classList.toggle("open");
        botaoNav.setAttribute("aria-expanded", menuAberto);
        botaoNav.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

        botaoNav.textContent = menuAberto ? "✕" : "☰";

    });

navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            botaoNav.setAttribute("aria-expanded", "false");
            botaoNav.setAttribute("aria-label", "Abrir menu");
            botaoNav.textContent = "☰";
        });
    });
}

const altTema = document.querySelector(".alt-tema");
if (altTema) {
    altTema.addEventListener("click", () => {
        const temaClaro = document.body.classList.toggle("light-theme");
        altTema.textContent = temaClaro ? "🌙" : "☀️";
        altTema.setAttribute(
            "aria-label",
            temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
        );
    });
}

const elementosClassedivs = document.querySelectorAll(".classedivs");
if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
        (entradas, observer) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observer.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );
    elementosClassedivs.forEach((elemento) => {
        observador.observe(elemento);
    });
} else {

    
    elementosClassedivs.forEach((elemento) => {
        elemento.classList.add("visible");
    });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


const secoes = document.querySelectorAll("main section[id]");
const linksInternos = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);
if ("IntersectionObserver" in window && secoes.length > 0) {
    const observadorSecoes = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    linksInternos.forEach((link) => {
                        const linkAtivo =
                            link.getAttribute("href") ===
                            `#${entrada.target.id}`;
                        if (linkAtivo) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        },
        {
            rootMargin: "-25% 0px -60% 0px"
        }
    );
    secoes.forEach((secao) => {
        observadorSecoes.observe(secao);
    });
}              


const ratingInputs = document.querySelectorAll(
    'input[name="nota"]'
);
const ratingDescription = document.querySelector(
    "#avaliacao-descricao"
);
const ratingMessages = {
    1: "⭐ Vamos trabalhar para melhorar!",
    2: "⭐⭐ Obrigado! Vou continuar evoluindo.",
    3: "⭐⭐⭐ Que bom! Ainda posso melhorar.",
    4: "⭐⭐⭐⭐ Fico feliz que tenha gostado!",
    5: "⭐⭐⭐⭐⭐ Muito obrigado! Que avaliação incrível!"
};
ratingInputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (ratingDescription) {
            ratingDescription.textContent =
                ratingMessages[input.value];
        }
    });
});


