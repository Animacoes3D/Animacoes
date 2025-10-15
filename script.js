// Script para funcionalidades gerais do site

document.addEventListener("DOMContentLoaded", function () {
  // Adicionar classe active ao link de navegação atual
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Adicionar efeito de hover nos cards de opção
  const optionCards = document.querySelectorAll(".option-card");
  optionCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Adicionar animação de entrada para os elementos
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".about-card, .video-section, .team-member, .option-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Inicializar elementos com estilos de animação
  const initAnimationStyles = function () {
    const elements = document.querySelectorAll(
      ".about-card, .video-section, .team-member, .option-card"
    );

    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    // Disparar a animação inicial
    setTimeout(() => {
      animateOnScroll();
    }, 100);
  };

  // Inicializar estilos de animação
  initAnimationStyles();

  // Adicionar evento de scroll para animação
  window.addEventListener("scroll", animateOnScroll);

  // Adicionar funcionalidade de busca (se implementada no futuro)
  const setupSearch = function () {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const videos = document.querySelectorAll(".video-section");

        videos.forEach((video) => {
          const title = video.querySelector("h2").textContent.toLowerCase();
          const description = video
            .querySelector(".video-description")
            .textContent.toLowerCase();

          if (title.includes(searchTerm) || description.includes(searchTerm)) {
            video.style.display = "block";
          } else {
            video.style.display = "none";
          }
        });
      });
    }
  };

  // Inicializar funcionalidade de busca
  setupSearch();

  // Adicionar funcionalidade de filtro por categoria (se implementada no futuro)
  const setupCategoryFilter = function () {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        const videos = document.querySelectorAll(".video-section");

        // Remover classe active de todos os botões
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        // Adicionar classe active ao botão clicado
        this.classList.add("active");

        // Filtrar vídeos
        videos.forEach((video) => {
          if (
            category === "all" ||
            video.getAttribute("data-category") === category
          ) {
            video.style.display = "block";
          } else {
            video.style.display = "none";
          }
        });
      });
    });
  };

  // Inicializar funcionalidade de filtro
  setupCategoryFilter();
});
