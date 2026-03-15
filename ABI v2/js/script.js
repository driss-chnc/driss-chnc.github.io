// Sélection des éléments de la popup
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const closeBtn = document.querySelector(".close-modal");

// Clic sur un produit
document.querySelectorAll(".shoes-box").forEach(product => {
    product.addEventListener("click", () => {

        // Récupération des infos du produit
        const name = product.querySelector(".shoes-name").textContent;
        const price = product.querySelector(".shoes-price").textContent;

        // Injection dans la popup
        modalTitle.textContent = name;
        modalPrice.textContent = price;
        modalDesc.textContent = "Produit tendance, qualité premium, livraison rapide.";

        // Affichage de la popup
        modal.classList.add("active");
    });
});

// Fermeture avec la croix
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Fermeture en cliquant en dehors de la popup
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
