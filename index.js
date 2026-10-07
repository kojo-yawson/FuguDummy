// Data Array
const experiences = [
  {
    id: 1,
    title: "Meet the Masters: Daboya Cotton Weaving",
    location: "Tamale",
    price: "GH₵ 550 / person",
    image: "../images/redclay.webp",
    description:
      "Journey to the historic weaving hubs surrounding Tamale. Work directly alongside master artisans to spin raw cotton yarn and dip textiles into natural indigo fermentation vats.",
  },
  {
    id: 2,
    title: "Meet the Masters: Daboya Cotton Weaving",
    location: "Tamale",
    price: "GH₵ 650 / person",
    image: "../images/dance.jpeg",
    description:
      "Journey to the historic weaving hubs surrounding Tamale. Work directly alongside master artisans to spin raw cotton yarn and dip textiles into natural indigo fermentation vats.",
  },
  {
    id: 3,
    title: "Wear the Culture: Royal Fugu Strip-Loom Stitching",
    location: "Tamale",
    price: "GH₵ 700 / person",
    image: "../images/redclay.webp",
    description:
      "Discover the heritage of Northern Ghana’s royal smocks. Learn the symbolic meanings behind intricate woven patterns and hand-sew your own authentic keepsake with local elders.",
  },
];

// Set Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu
const menuBtn = document.getElementById("menu-toggle-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuBtn.textContent = mobileMenu.classList.contains("active")
    ? "Close"
    : "Menu";
});

// Render Cards
const cardsContainer = document.getElementById("cards-container");

function renderCards(filter = "all") {
  cardsContainer.innerHTML = "";
  const filteredData =
    filter === "all"
      ? experiences
      : experiences.filter(
          (exp) => exp.location.toLowerCase() === filter.toLowerCase()
        );

  filteredData.forEach((exp) => {
    const cardEl = document.createElement("article");
    cardEl.className = "tour-card";
    cardEl.onclick = () => openModal(exp);

    cardEl.innerHTML = `
            <div>
                <div class="card-img-wrap">
                    <img src="${exp.image}" alt="${exp.title}" loading="lazy">
                </div>
                <div class="card-location">📍 ${exp.location}</div>
                <h3 class="card-title">${exp.title}</h3>
                <p class="card-desc">${exp.description}</p>
            </div>
            <div>
                <div class="price">${exp.price}</div>
                <button class="btn">Explore Experience ➔</button>
            </div>
        `;
    cardsContainer.appendChild(cardEl);
  });
}

renderCards();

// Filters
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.getAttribute("data-filter"));
  });
});

// Modal
const modal = document.getElementById("experience-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalLocation = document.getElementById("modal-location");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");

function openModal(item) {
  modalImg.src = item.image;
  modalTitle.textContent = item.title;
  modalLocation.textContent = ` ${item.location}`;
  modalDesc.textContent = item.description;
  modalPrice.textContent = item.price;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

document
  .getElementById("modal-close-btn")
  .addEventListener("click", closeModal);
document
  .getElementById("modal-close-secondary")
  .addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
