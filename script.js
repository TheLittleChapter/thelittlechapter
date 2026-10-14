const themes = [
  {
    id: 1,
    name: "Little Krishna (Peacock Throne)",
    category: "traditional",
    tag: "Signature Set",
    description: "Majestic peacock feather curtains, royal green velvet throne, cotton clouds, roses & traditional cow figure.",
    image: "images/krishna_peacock.jpg"
  },
  {
    id: 2,
    name: "Bullock Cart & Village",
    category: "traditional",
    tag: "Heritage Set",
    description: "Handcrafted wooden bullock cart, traditional village house backdrop with carved doors, earthen pots & cotton clouds.",
    image: "images/bullock_cart_village.jpg"
  },
  {
    id: 3,
    name: "Lotus Garden Princess",
    category: "traditional",
    tag: "Traditional",
    description: "Enchanted lotus pond backdrop, traditional royal attire, marigold garlands & heritage styling.",
    image: "images/lotus_pond.jpg"
  },
  {
    id: 4,
    name: "Floral Water Bowl",
    category: "newborn",
    tag: "Newborn Special",
    description: "Elegant cream tub with warm water, surrounded by colorful roses, marigolds, orchids & soft cotton clouds.",
    image: "images/floral_water_bowl.jpg"
  },
  {
    id: 5,
    name: "Teddy Bear Cake Smash",
    category: "newborn",
    tag: "Birthday Special",
    description: "Adorable teddy bears, tiered birthday cake, gold tassels, pampas grass & warm boho tones.",
    image: "images/teddy_cake_smash.jpg"
  },
  {
    id: 6,
    name: "Boss Baby",
    category: "newborn",
    tag: "1st Birthday",
    description: "Blue & white sunburst backdrop, green velvet throne, BOSS BABY briefcase, 'ONE' letter blocks & blue balloons.",
    image: "images/boss_baby_hd.jpg"
  },
  {
    id: 7,
    name: "Boho Scooter & Macrame",
    category: "studio",
    tag: "Boho Chic",
    description: "Handcrafted wooden scooter with flower trailer, macrame wall tapestry, pampas grass, roses & boho décor.",
    image: "images/boho_scooter.jpg"
  },
  {
    id: 8,
    name: "Police Station (Little Officer)",
    category: "studio",
    tag: "Studio Set",
    description: "Authentic brick wall police station, khaki uniform, wooden desk, scooter, globe, jail bars & handcuffs props.",
    image: "images/police_station_hd.jpg"
  },
  {
    id: 9,
    name: "Princess Vanity & Dressing Room",
    category: "studio",
    tag: "Princess Set",
    description: "Pink vanity table, gilded ornate mirror, boutique dresses, Gucci bags & glamorous wardrobe styling.",
    image: "images/princess_dressing_full.jpg"
  },
  {
    id: 10,
    name: "Grand Piano & Boho Musician",
    category: "studio",
    tag: "Musical Set",
    description: "Elegant miniature black grand piano, macrame wall art, pampas grass, roses, knit throw & boho styling.",
    image: "images/grand_piano_hd.jpg"
  },
  {
    id: 11,
    name: "Little Doctor Clinic",
    category: "studio",
    tag: "Creative Set",
    description: "Miniature pediatric clinic with hospital bed, white lab coat, stethoscope, red cross sign & medical props.",
    image: "images/doctor_clinic.jpg"
  },
  {
    id: 12,
    name: "Little Chef & Kitchen Setup",
    category: "studio",
    tag: "Kitchen Set",
    description: "Modern peach kitchen backdrop with shelves, pots, oven, mini chef props & colorful play vegetables.",
    image: "images/kitchen_setup.jpg"
  },
  {
    id: 13,
    name: "First Day at School",
    category: "studio",
    tag: "Studio Set",
    description: "Nostalgic wooden classroom with chalkboard, teacher's desk, globe, alarm clock, books & student desk.",
    image: "images/school_set_wide.jpg"
  },
  {
    id: 14,
    name: "Little Artist Studio",
    category: "studio",
    tag: "Creative Set",
    description: "Vibrant colorful paint backdrop with sun, paint brushes, color blocks, wooden chair & scooter prop.",
    image: "images/art_studio.jpg"
  },
  {
    id: 15,
    name: "4x4 Off-Road Truck Garage",
    category: "studio",
    tag: "Adventure Set",
    description: "Red electric mini 4x4 off-roader truck with industrial workshop tools & garage backdrop.",
    image: "images/monster_truck.jpg"
  },
  {
    id: 16,
    name: "Beach & Summer Holiday",
    category: "nature",
    tag: "Beach Set",
    description: "Sandy beach floor, sun lounger, surfboard shelf, blue ocean waves backdrop, seashells & starfish.",
    image: "images/beach_lounger.jpg"
  },
  {
    id: 17,
    name: "Beach Boat & Seashore",
    category: "nature",
    tag: "Beach Set",
    description: "Blue fishing boat with shell & starfish decorations, sandy beach backdrop with ocean waves.",
    image: "images/beach_boat.jpg"
  },
  {
    id: 18,
    name: "Boho Beach Van",
    category: "nature",
    tag: "Retro Beach",
    description: "Retro VW floral van backdrop, sandy beach, white sun lounger, wooden scooter & coastal vibes.",
    image: "images/boho_beach_van.jpg"
  },
  {
    id: 19,
    name: "Sunflower Scooter Garden",
    category: "nature",
    tag: "Garden Set",
    description: "Golden sunflower field backdrop, handcrafted wooden scooter with sunflower bouquet & warm tones.",
    image: "images/sunflower_scooter.jpg"
  },
  {
    id: 20,
    name: "Sunflower Bench Garden",
    category: "nature",
    tag: "Garden Set",
    description: "Vibrant sunflower wall backdrop with rustic dark wooden park bench & sunflower bouquet.",
    image: "images/sunflower_bench.jpg"
  },
  {
    id: 21,
    name: "Apple Orchard Cottage",
    category: "nature",
    tag: "Nature Set",
    description: "Enchanting apple arch doorway backdrop, rustic wooden bench, apple baskets & lush green plants.",
    image: "images/apple_orchard_set.jpg"
  }
];

let currentFilter = 'all';

function renderThemes() {
  const grid = document.querySelector('.themes-grid');
  if (!grid) return;
  
  const filteredThemes = currentFilter === 'all' 
    ? themes 
    : themes.filter(t => t.category === currentFilter);

  grid.innerHTML = filteredThemes.map(theme => `
    <div class="theme-card" onclick="openThemeModal(${theme.id})">
      <div class="theme-image-wrap">
        <img src="${theme.image}" alt="${theme.name}" class="theme-thumbnail" loading="lazy" />
        ${theme.tag ? `<span class="theme-badge badge-studio">${theme.tag}</span>` : ''}
      </div>
      <div class="theme-info">
        <h3>${theme.name}</h3>
        <p>${theme.description}</p>
        <div class="theme-card-footer">
          <span class="view-theme-pill">Costumes & Props Included</span>
          <span class="book-action-btn">Book Theme →</span>
        </div>
      </div>
    </div>
  `).join('');
}

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderThemes();
    });
  });
}

function openThemeModal(themeId) {
  const theme = themes.find(t => t.id === themeId);
  if (!theme) return;
  
  const existingModal = document.querySelector('.booking-modal');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.className = 'booking-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal" aria-label="Close modal">&times;</span>
      <div class="modal-image-preview">
        <img src="${theme.image}" alt="${theme.name}" />
        <span class="modal-tag">${theme.tag || 'Handcrafted Studio Set'}</span>
      </div>
      <div class="modal-body-content">
        <h2>${theme.name}</h2>
        <p>${theme.description}</p>
        <div class="modal-package-banner">
          <span>Total Studio Package:</span>
          <strong>₹5,999 (All Inclusive)</strong>
        </div>
        <div class="modal-includes-box">
          ✨ Premium Costumes, Authentic Props & 4K Studio Photography Included
        </div>
        <form id="booking-form">
          <div class="form-group">
            <label>Child's Name</label>
            <input type="text" id="modal-child-name" placeholder="e.g. Aarav" required>
          </div>
          <div class="form-group">
            <label>Child's Age / Months</label>
            <input type="text" id="modal-child-age" placeholder="e.g. 1 year or 8 months" required>
          </div>
          <div class="form-group">
            <label>Preferred Date</label>
            <input type="date" id="modal-date" required>
          </div>
          <div class="form-group">
            <label>Preferred Time Slot</label>
            <select id="modal-slot" required>
              <option value="">Select a slot</option>
              <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
              <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
              <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Your WhatsApp / Contact Number</label>
            <input type="tel" id="modal-phone" placeholder="e.g. 8374335863" required>
          </div>
          <button type="submit" class="submit-btn">Book Theme in ₹5,999 Package (WhatsApp)</button>
        </form>
        <div class="modal-location-footer">
          📍 Studio: SBI colony, Road No. 2, Beside Gangamma Temple, Madanapalle • 
          <a href="https://maps.app.goo.gl/SJ3ir6WiNq41jycS7?g_st=aw" target="_blank" rel="noopener">Open Map ↗</a>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
    }, 250);
  };

  modal.querySelector('.close-modal').onclick = closeModal;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', onKeyDown);
    }
  };
  document.addEventListener('keydown', onKeyDown);

  modal.querySelector('#booking-form').onsubmit = (e) => {
    e.preventDefault();
    const childName = modal.querySelector('#modal-child-name').value;
    const childAge = modal.querySelector('#modal-child-age').value;
    const date = modal.querySelector('#modal-date').value;
    const slot = modal.querySelector('#modal-slot').value;
    const phone = modal.querySelector('#modal-phone').value;

    const message = encodeURIComponent(
      `Hi The Little Chapter Studio! I would like to book the Total Package (₹5,999) for:\n\n` +
      `• Theme: ${theme.name}\n` +
      `• Child Name: ${childName}\n` +
      `• Child Age: ${childAge}\n` +
      `• Preferred Date: ${date}\n` +
      `• Slot: ${slot}\n` +
      `• My Contact: ${phone}\n\n` +
      `Please confirm slot availability at your Madanapalle studio!`
    );

    window.open(`https://wa.me/918374335863?text=${message}`, '_blank');
    closeModal();
    document.removeEventListener('keydown', onKeyDown);
  };

  setTimeout(() => modal.classList.add('show'), 10);
}

document.addEventListener('DOMContentLoaded', () => {
  renderThemes();
  initCategoryFilters();
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  renderThemes();
  initCategoryFilters();
}