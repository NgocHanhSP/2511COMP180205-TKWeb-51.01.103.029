// Khi trang load xong
document.addEventListener("DOMContentLoaded", function() {
  const products = document.querySelectorAll(".hh-product");

  products.forEach(product => {
    product.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      // Chuyển hướng sang trang chi tiết, kèm ID sản phẩm
      window.location.href = `product-detail.html?id=${id}`;
    });
  });
});
