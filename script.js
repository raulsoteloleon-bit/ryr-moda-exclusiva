// script.js

document.addEventListener("DOMContentLoaded", () => {

  // --- Carrito simple ---
  const cartCountEl = document.querySelector(".cart span");
  let cartCount = cartCountEl ? Number(cartCountEl.textContent) : 0;

  // --- Wishlist (corazón) ---
  document.querySelectorAll(".product-image button").forEach((heartBtn) => {

    heartBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const isSaved = heartBtn.dataset.saved === "true";

      heartBtn.dataset.saved = (!isSaved).toString();

      heartBtn.textContent = isSaved ? "♡" : "♥";

      heartBtn.style.background = isSaved
        ? "#ffffff"
        : "#ff8a00";

      heartBtn.style.color = isSaved
        ? "#111827"
        : "#ffffff";
    });

  });

  // --- Agregar al carrito ---
  document.querySelectorAll(".product-info a").forEach((addBtn) => {

    addBtn.addEventListener("click", (e) => {
      e.preventDefault();

      cartCount++;

      if (cartCountEl) {
        cartCountEl.textContent = cartCount;
      }

      const originalText = addBtn.textContent;

      addBtn.textContent = "Agregado ✓";
      addBtn.style.background = "#ff8a00";

      setTimeout(() => {
        addBtn.textContent = originalText;
        addBtn.style.background = "";
      }, 1200);

    });

  });

  // --- Newsletter ---
  const newsletterForm = document.querySelector(".newsletter-box form");

  if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

      e.preventDefault();

      const input = newsletterForm.querySelector('input[type="email"]');

      const email = input.value.trim();

      if (!email || !email.includes("@")) {
        alert("Por favor ingresa un correo válido.");
        return;
      }

      alert("¡Suscripción lista! Te contactaremos con promociones.");

      newsletterForm.reset();

    });

  }

  // --- Búsqueda simple ---
  const searchBtn = document.querySelector(".search-box button");

  const searchInput = document.querySelector(".search-box input");

  const productsGrid = document.querySelector(".products-grid");

  if (searchBtn && searchInput && productsGrid) {

    searchBtn.addEventListener("click", () => {

      const q = searchInput.value.trim().toLowerCase();

      const cards = productsGrid.querySelectorAll(".product-card");

      cards.forEach((card) => {

        const text = card.textContent.toLowerCase();

        if (text.includes(q)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });

  }

});