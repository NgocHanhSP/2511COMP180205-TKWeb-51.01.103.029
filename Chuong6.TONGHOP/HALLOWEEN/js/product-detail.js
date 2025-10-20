// Lấy ID sản phẩm từ URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const products = [
  {
    id: 1,
    name: "Áo thun HALLOWEEN",
    price: "299,000 đ",
    img: "../images/aothun.jpg",
    category: "Trang phục",
    desc: "Áo thun HALLOWEEN chất vải cotton co giãn, in họa tiết bí ngô vui nhộn — phù hợp cho lễ hội hoặc cosplay.",
    specs: [
      "Chất liệu: Cotton 100%",
      "Màu sắc: Cam - Đen",
      "Size: S, M, L, XL",
      "Phù hợp: Nam/Nữ",
      "Giặt tay hoặc máy, không phai màu"
    ]
  },
  {
    id: 2,
    name: "Mặt nạ bí ngô",
    price: "159,000 đ",
    img: "../images/mask-halloween.jpg",
    category: "Phụ kiện",
    desc: "Mặt nạ bí ngô dạ quang rực rỡ, chất liệu nhựa ABS an toàn, dây co giãn dễ đeo.",
    specs: [
      "Chất liệu: Nhựa ABS",
      "Màu: Cam, Đen",
      "Phát sáng ban đêm",
      "Dây đeo co giãn"
    ]
  },
  {
    id: 3,
    name: "Đèn lồng ma quái",
    price: "99,000 đ",
    img: "../images/lantern-halloween.jpg",
    category: "Trang trí",
    desc: "Đèn lồng ma quái Halloween ánh sáng cam ấm áp, dùng pin, trang trí sân vườn hoặc cửa hàng.",
    specs: [
      "Kích thước: 20cm",
      "Nguồn: 2 pin AA",
      "Chất liệu: Nhựa + LED",
      "Ánh sáng: Cam vàng"
    ]
  }
];

const product = products.find(p => p.id == id);

if (product) {
  document.getElementById("productDetail").innerHTML = `
    <div class="row">
      <div class="col-md-5 text-center">
        <img src="${product.img}" alt="${product.name}" class="img-fluid rounded shadow-sm" />
      </div>
      <div class="col-md-7">
        <h5 class="text-muted">${product.category}</h5>
        <h3 class="fw-bold">${product.name}</h3>
        <hr>
        <h4 class="text-danger">${product.price}</h4>

        <div class="my-3">
          <input type="number" id="sl" value="1" min="1" class="me-2">
          <button class="btn btn-primary me-2"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
          <button class="btn btn-outline-danger"><i class="fas fa-heart"></i> Yêu thích</button>
        </div>

        <hr>
        <h5 class="mt-4">Thông tin sản phẩm</h5>
        <ul>${product.specs.map(s => `<li>${s}</li>`).join("")}</ul>

        <p class="mt-3">${product.desc}</p>

        <h6 class="mt-4">Chia sẻ sản phẩm:</h6>
        <div>
          <a href="#" class="text-dark me-3"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" class="text-dark me-3"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="#" class="text-dark"><i class="fab fa-instagram fa-lg"></i></a>
        </div>
      </div>
    </div>
  `;
} else {
  document.getElementById("productDetail").innerHTML = `
    <h2 class="text-center text-danger my-5">Không tìm thấy sản phẩm!</h2>
  `;
}
