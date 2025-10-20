document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");
  const modal = new bootstrap.Modal(document.getElementById("productModal"));

  productCards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const price = card.dataset.price;
      const image = card.dataset.image;
      const desc = card.dataset.desc;

      document.getElementById("modalProductName").textContent = name;
      document.getElementById("modalProductPrice").textContent = price;
      document.getElementById("modalProductImage").src = image;
      document.getElementById("modalProductDesc").textContent = desc;

      modal.show();
    });
  });
});

