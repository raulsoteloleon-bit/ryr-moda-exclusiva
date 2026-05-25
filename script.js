document.addEventListener("DOMContentLoaded", () => {
    const cartCountEl = document.querySelector(".cart span");
    let cartCount = 0;

    // Lógica mejorada para botones de agregar al carrito
    document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // IMPORTANTE: evita que la página salte al hacer clic
            
            cartCount++;
            cartCountEl.textContent = cartCount;
            
            // Feedback visual
            const originalText = btn.textContent;
            btn.textContent = "¡Agregado!";
            btn.style.background = "#22c55e"; // Verde éxito
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = ""; // Al dejarlo vacío, retoma el color definido en tu CSS
            }, 1500);
        });
    });

    // Wishlist (favoritos)
    document.querySelectorAll(".wishlist-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // Previene comportamiento del enlace
            btn.classList.toggle("active");
            btn.textContent = btn.classList.contains("active") ? "♥" : "♡";
        });
    });
});