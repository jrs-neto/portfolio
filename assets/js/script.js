import { renderProjects } from "./renderProjects.js";

// Formulário
const form = document.querySelector("#formulario");

// Expressão Regular de validação do e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// =========================================
// Swiper
// =========================================

function initializeSwiper() {
  if (typeof Swiper === "undefined" || !document.querySelector(".projects-swiper")) {
    return;
  }

  new Swiper(".projects-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,

    breakpoints: {
      0: { slidesPerView: 1 },
      769: { slidesPerView: 2 },
      1025: { slidesPerView: 3 },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },

    grabCursor: true,
  });
}

// =========================================
// Formulário
// =========================================

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelectorAll("form span").forEach((span) => {
      span.textContent = "";
    });

    let isValid = true;

    const name = document.querySelector("#nome");
    const nameError = document.querySelector("#erro-nome");

    if (name && name.value.trim().length < 3) {
      nameError.textContent = "O nome deve ter no mínimo 3 caracteres";
      if (isValid) name.focus();
      isValid = false;
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#erro-email");

    if (email && !email.value.trim().match(emailRegex)) {
      emailError.textContent = "Digite um endereço de e-mail válido";
      if (isValid) email.focus();
      isValid = false;
    }

    const subject = document.querySelector("#assunto");
    const subjectError = document.querySelector("#erro-assunto");

    if (subject && subject.value.trim().length < 5) {
      subjectError.textContent = "O assunto deve ter no mínimo 5 caracteres";
      if (isValid) subject.focus();
      isValid = false;
    }

    const message = document.querySelector("#mensagem");
    const messageError = document.querySelector("#erro-mensagem");

    if (message && message.value.trim().length === 0) {
      messageError.textContent = "A mensagem não pode ser vazia";
      if (isValid) message.focus();
      isValid = false;
    }

    if (isValid) {
      const submitButton = form.querySelector('button[type="submit"]');

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";
      }

      form.submit();
    }
  });
}

// =========================================
// Menu Mobile
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const menuList   = document.getElementById("menu-list");

if (menuToggle && menuList) {
  // Abre/fecha o menu ao clicar no botão
  menuToggle.addEventListener("click", () => {
    const isOpen = menuList.classList.toggle("menu-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
  });

  // Fecha o menu ao clicar em qualquer link de navegação
  menuList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuList.classList.remove("menu-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    });
  });
}

// =========================================
// Inicialização
// =========================================

async function initialize() {
  await renderProjects();

  initializeSwiper();
}

initialize();
