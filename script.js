const placeholderImage =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='420' viewBox='0 0 640 420'><rect width='640' height='420' fill='%23f1ede4'/><circle cx='480' cy='110' r='60' fill='%23f6b042' opacity='0.6'/><path d='M0 300 Q160 240 320 300 T640 300 V420 H0 Z' fill='%232f6d43' opacity='0.25'/><text x='40' y='80' font-family='Manrope, sans-serif' font-size='44' fill='%232f6d43'>Crop Guide</text></svg>";

const baseCrops = [
  {
    id: "tomato",
    name: "Tomato",
    season: "Warm season (spring to early summer)",
    water: "Consistent moisture, avoid soggy soil",
    sun: "Full sun (6-8 hours)",
    harvest: "60-85 days after transplanting",
    guide: "Stake plants early and prune lower leaves for airflow.",
    image: placeholderImage,
    featured: true,
    tags: ["vegetable", "fruiting", "warm", "summer"],
  },
  {
    id: "carrot",
    name: "Carrot",
    season: "Cool season (late winter to early spring)",
    water: "Light, frequent watering",
    sun: "Full sun to partial shade",
    harvest: "70-80 days after sowing",
    guide: "Loose soil helps roots grow straight and long.",
    image: placeholderImage,
    featured: true,
    tags: ["vegetable", "root", "cool", "spring"],
  },
  {
    id: "corn",
    name: "Corn",
    season: "Warm season (spring to early summer)",
    water: "Deep watering once or twice a week",
    sun: "Full sun",
    harvest: "70-100 days after planting",
    guide: "Plant in blocks for better pollination.",
    image: placeholderImage,
    featured: true,
    tags: ["grain", "vegetable", "warm", "summer"],
  },
  {
    id: "lettuce",
    name: "Lettuce",
    season: "Cool season (early spring or fall)",
    water: "Even moisture, do not let soil dry",
    sun: "Full sun to partial shade",
    harvest: "45-60 days after sowing",
    guide: "Harvest outer leaves for continuous growth.",
    image: placeholderImage,
    featured: true,
    tags: ["vegetable", "leafy", "cool", "spring", "fall"],
  },
  {
    id: "spinach",
    name: "Spinach",
    season: "Cool season (early spring or fall)",
    water: "Consistent moisture",
    sun: "Full sun to partial shade",
    harvest: "40-50 days after sowing",
    guide: "Shade plants in warmer weather to slow bolting.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "leafy", "cool", "spring", "fall"],
  },
  {
    id: "cucumber",
    name: "Cucumber",
    season: "Warm season (after last frost)",
    water: "Regular deep watering",
    sun: "Full sun",
    harvest: "50-70 days after planting",
    guide: "Provide a trellis to keep vines tidy.",
    image: placeholderImage,
    featured: true,
    tags: ["vegetable", "vine", "warm", "summer"],
  },
  {
    id: "bell-pepper",
    name: "Bell Pepper",
    season: "Warm season (after last frost)",
    water: "Even moisture, avoid water stress",
    sun: "Full sun",
    harvest: "70-90 days after transplanting",
    guide: "Pinch early blossoms for stronger plants.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "fruiting", "warm", "summer"],
  },
  {
    id: "eggplant",
    name: "Eggplant",
    season: "Warm season (after last frost)",
    water: "Consistent moisture",
    sun: "Full sun",
    harvest: "70-85 days after transplanting",
    guide: "Harvest when skins are glossy and firm.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "fruiting", "warm", "summer"],
  },
  {
    id: "okra",
    name: "Okra",
    season: "Warm season (late spring)",
    water: "Moderate, more during flowering",
    sun: "Full sun",
    harvest: "50-60 days after planting",
    guide: "Pick pods when they are 2-4 inches long.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "warm", "summer"],
  },
  {
    id: "cabbage",
    name: "Cabbage",
    season: "Cool season (spring or fall)",
    water: "Even moisture",
    sun: "Full sun",
    harvest: "70-100 days after transplanting",
    guide: "Keep heads firm by watering evenly.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "leafy", "cool", "fall"],
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    season: "Cool season (spring or fall)",
    water: "Consistent moisture",
    sun: "Full sun",
    harvest: "60-90 days after transplanting",
    guide: "Tie leaves over heads to blanch if needed.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "cool", "fall"],
  },
  {
    id: "broccoli",
    name: "Broccoli",
    season: "Cool season (spring or fall)",
    water: "Regular moisture",
    sun: "Full sun",
    harvest: "60-75 days after transplanting",
    guide: "Cut the main head to encourage side shoots.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "cool", "spring", "fall"],
  },
  {
    id: "kale",
    name: "Kale",
    season: "Cool season (spring or fall)",
    water: "Even moisture",
    sun: "Full sun to partial shade",
    harvest: "50-70 days after sowing",
    guide: "Harvest outer leaves to keep plants producing.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "leafy", "cool"],
  },
  {
    id: "onion",
    name: "Onion",
    season: "Cool season (early spring)",
    water: "Moderate, reduce as bulbs mature",
    sun: "Full sun",
    harvest: "90-120 days after planting",
    guide: "Stop watering when tops begin to fall.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "bulb", "cool"],
  },
  {
    id: "garlic",
    name: "Garlic",
    season: "Cool season (plant in fall)",
    water: "Light to moderate",
    sun: "Full sun",
    harvest: "8-9 months after planting",
    guide: "Plant cloves pointed end up, 2 inches deep.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "bulb", "cool", "fall"],
  },
  {
    id: "potato",
    name: "Potato",
    season: "Cool season (spring)",
    water: "Even moisture",
    sun: "Full sun",
    harvest: "90-120 days after planting",
    guide: "Hill soil around stems as plants grow.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "tuber", "cool", "spring"],
  },
  {
    id: "sweet-potato",
    name: "Sweet Potato",
    season: "Warm season (late spring)",
    water: "Moderate, avoid overwatering",
    sun: "Full sun",
    harvest: "90-120 days after planting",
    guide: "Use slips and keep soil warm.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "tuber", "warm", "summer"],
  },
  {
    id: "radish",
    name: "Radish",
    season: "Cool season (early spring or fall)",
    water: "Light, consistent moisture",
    sun: "Full sun",
    harvest: "25-35 days after sowing",
    guide: "Harvest promptly for crisp roots.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "root", "cool", "spring"],
  },
  {
    id: "beet",
    name: "Beet",
    season: "Cool season (spring or fall)",
    water: "Regular moisture",
    sun: "Full sun",
    harvest: "50-70 days after sowing",
    guide: "Thin seedlings to allow roots to size up.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "root", "cool", "spring"],
  },
  {
    id: "green-bean",
    name: "Green Bean",
    season: "Warm season (after last frost)",
    water: "Moderate, more during flowering",
    sun: "Full sun",
    harvest: "50-60 days after sowing",
    guide: "Pick pods often to keep plants producing.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "legume", "warm", "summer"],
  },
  {
    id: "pea",
    name: "Pea",
    season: "Cool season (early spring)",
    water: "Even moisture",
    sun: "Full sun to partial shade",
    harvest: "55-70 days after sowing",
    guide: "Provide a trellis for climbing types.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "legume", "cool", "spring"],
  },
  {
    id: "zucchini",
    name: "Zucchini",
    season: "Warm season (after last frost)",
    water: "Deep watering 1-2 times a week",
    sun: "Full sun",
    harvest: "45-60 days after planting",
    guide: "Harvest small fruits for best flavor.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "vine", "warm", "summer"],
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    season: "Warm season (late spring)",
    water: "Deep watering, especially during fruit set",
    sun: "Full sun",
    harvest: "90-120 days after planting",
    guide: "Leave a few strong vines per plant.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "vine", "warm", "fall"],
  },
  {
    id: "butternut-squash",
    name: "Butternut Squash",
    season: "Warm season (late spring)",
    water: "Consistent moisture",
    sun: "Full sun",
    harvest: "95-120 days after planting",
    guide: "Cure fruits in a dry, warm spot before storage.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "vine", "warm", "fall"],
  },
  {
    id: "celery",
    name: "Celery",
    season: "Cool season (spring)",
    water: "High moisture, keep soil damp",
    sun: "Full sun to partial shade",
    harvest: "100-130 days after transplanting",
    guide: "Blanch stalks by mounding soil if desired.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "cool"],
  },
  {
    id: "swiss-chard",
    name: "Swiss Chard",
    season: "Cool season (spring or fall)",
    water: "Regular moisture",
    sun: "Full sun to partial shade",
    harvest: "50-60 days after sowing",
    guide: "Cut outer leaves to keep plants growing.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "leafy", "cool", "fall"],
  },
  {
    id: "turnip",
    name: "Turnip",
    season: "Cool season (spring or fall)",
    water: "Even moisture",
    sun: "Full sun",
    harvest: "40-60 days after sowing",
    guide: "Harvest young roots for mild flavor.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "root", "cool", "fall"],
  },
  {
    id: "leek",
    name: "Leek",
    season: "Cool season (spring)",
    water: "Regular moisture",
    sun: "Full sun",
    harvest: "100-120 days after transplanting",
    guide: "Hill soil around stems to blanch.",
    image: placeholderImage,
    featured: false,
    tags: ["vegetable", "bulb", "cool"],
  },
  {
    id: "basil",
    name: "Basil",
    season: "Warm season (after last frost)",
    water: "Moderate, keep soil slightly moist",
    sun: "Full sun",
    harvest: "30-60 days after sowing",
    guide: "Pinch tips to encourage bushy growth.",
    image: placeholderImage,
    featured: false,
    tags: ["herb", "warm", "summer"],
  },
  {
    id: "parsley",
    name: "Parsley",
    season: "Cool to mild season (spring)",
    water: "Even moisture",
    sun: "Full sun to partial shade",
    harvest: "70-90 days after sowing",
    guide: "Cut outer stems to keep plants producing.",
    image: placeholderImage,
    featured: false,
    tags: ["herb", "cool", "spring"],
  },
  {
    id: "strawberry",
    name: "Strawberry",
    season: "Cool season (spring planting)",
    water: "Consistent moisture",
    sun: "Full sun",
    harvest: "60-90 days after transplanting",
    guide: "Mulch to keep berries clean and moist.",
    image: placeholderImage,
    featured: true,
    tags: ["fruit", "berry", "spring"],
  },
  {
    id: "watermelon",
    name: "Watermelon",
    season: "Warm season (after last frost)",
    water: "Deep watering, reduce near harvest",
    sun: "Full sun",
    harvest: "80-95 days after planting",
    guide: "Provide space for vines to spread.",
    image: placeholderImage,
    featured: false,
    tags: ["fruit", "vine", "warm", "summer"],
  },
  {
    id: "cantaloupe",
    name: "Cantaloupe",
    season: "Warm season (after last frost)",
    water: "Consistent moisture",
    sun: "Full sun",
    harvest: "75-90 days after planting",
    guide: "Harvest when rind turns tan and slips easily.",
    image: placeholderImage,
    featured: false,
    tags: ["fruit", "vine", "warm", "summer"],
  },
  {
    id: "pineapple",
    name: "Pineapple",
    season: "Warm season (tropical)",
    water: "Light to moderate, avoid waterlogging",
    sun: "Full sun",
    harvest: "18-24 months after planting",
    guide: "Plant the crown in well-drained soil.",
    image: placeholderImage,
    featured: false,
    tags: ["fruit", "tropical", "warm"],
  },
  {
    id: "banana",
    name: "Banana",
    season: "Warm season (tropical)",
    water: "Regular moisture",
    sun: "Full sun",
    harvest: "9-15 months after planting",
    guide: "Keep plants sheltered from strong winds.",
    image: placeholderImage,
    featured: false,
    tags: ["fruit", "tropical", "warm"],
  },
  {
    id: "grape",
    name: "Grape",
    season: "Temperate season (spring planting)",
    water: "Moderate, avoid wet foliage",
    sun: "Full sun",
    harvest: "1-3 years after planting",
    guide: "Train vines on a trellis for airflow.",
    image: placeholderImage,
    featured: false,
    tags: ["fruit", "vine", "temperate"],
  },
];

const remindersKey = "agriPlantReminders";
const themeKey = "agriPlantTheme";
const customCropsKey = "agriPlantCustomCrops";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));

const formatDate = (value) => {
  if (!value) return "";
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const updateCropCount = (count) => {
  const counter = $("#cropCount");
  if (counter) {
    counter.textContent = count;
  }
};

const imageOverrides = {
  Tomato: "tomato.jpg",
  Carrot: "carrot.jpg",
  Corn: "corn.jpg",
};

const resolveImagePath = (crop) => {
  if (crop.image && crop.image !== placeholderImage) {
    return crop.image;
  }
  return imageOverrides[crop.name] || `${crop.name}.jpg`;
};

const instructionLibrary = {
  base: [
    "Prepare soil with compost and make sure it drains well.",
    "Plant at the recommended depth and label your rows.",
  ],
  warm: [
    "Plant after the last frost when soil is warm.",
    "Water early in the day to prevent heat stress.",
  ],
  cool: [
    "Plant in cool weather or light shade to reduce bolting.",
    "Use row cover to protect young seedlings from cold nights.",
  ],
  leafy: [
    "Harvest outer leaves to keep plants producing.",
    "Thin seedlings early for good airflow.",
  ],
  root: [
    "Loosen soil 8-10 inches and remove stones.",
    "Keep moisture steady to prevent splitting.",
  ],
  vine: [
    "Provide space or a trellis for vines to spread.",
    "Water at the base to reduce mildew.",
  ],
  fruiting: [
    "Feed with compost or balanced fertilizer at flowering.",
    "Support heavy fruit with stakes or cages.",
  ],
  grain: [
    "Plant in blocks for better pollination.",
    "Let ears or heads dry before harvest.",
  ],
  bulb: [
    "Stop watering when tops yellow and fall.",
    "Cure bulbs in a dry, airy place before storage.",
  ],
  tuber: [
    "Hill soil around stems as plants grow.",
    "Harvest after foliage dies back.",
  ],
  herb: [
    "Pinch tips to encourage bushy growth.",
    "Harvest regularly to prevent flowering.",
  ],
  berry: [
    "Mulch to keep fruit clean and moist.",
    "Remove runners to focus on fruiting.",
  ],
  tropical: [
    "Protect plants from cold winds and frost.",
    "Keep soil warm and evenly moist.",
  ],
  temperate: [
    "Train vines or branches for airflow and sunlight.",
    "Prune annually to keep plants productive.",
  ],
};

const buildInstructions = (crop) => {
  if (Array.isArray(crop.instructions) && crop.instructions.length) {
    return crop.instructions;
  }

  const tips = [...instructionLibrary.base];
  const tags = Array.isArray(crop.tags) ? crop.tags : [];
  tags.forEach((tag) => {
    const extra = instructionLibrary[tag];
    if (extra) {
      tips.push(...extra);
    }
  });

  return tips.slice(0, 6);
};

const initViews = () => {
  const sections = $$("[data-view]");
  const navLinks = $$(".site-nav a");

  const showView = (view) => {
    let target = view;
    const isKnown = sections.some((section) => section.dataset.view === target);
    if (!target || !isKnown) {
      target = "home";
    }

    sections.forEach((section) => {
      const isActive = section.dataset.view === target;
      section.classList.toggle("is-hidden", !isActive);
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isActive = href === `#${target}`;
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const handleHashChange = () => {
    const view = window.location.hash.replace("#", "");
    showView(view);
  };

  window.addEventListener("hashchange", handleHashChange);
  handleHashChange();
};

const loadCustomCrops = () => {
  const raw = localStorage.getItem(customCropsKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const saveCustomCrops = (customCrops) => {
  localStorage.setItem(customCropsKey, JSON.stringify(customCrops));
};

const setTheme = (theme) => {
  document.body.dataset.theme = theme;
  localStorage.setItem(themeKey, theme);
  const label = theme === "dark" ? "Dark mode" : "Light mode";
  $$("[data-theme-label]").forEach((node) => {
    node.textContent = label;
  });
};

const initThemeToggle = () => {
  const stored = localStorage.getItem(themeKey);
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const initial = stored || (prefersDark ? "dark" : "light");
  setTheme(initial);

  $$("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const current = document.body.dataset.theme === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  });
};

const createCropCard = (crop, index) => {
  const card = document.createElement("article");
  card.className = "crop-card";
  card.style.setProperty("--i", index);
  card.dataset.cropId = crop.id;
  card.classList.add("is-clickable");
  card.tabIndex = 0;
  const image = document.createElement("img");
  const resolvedImage = resolveImagePath(crop);
  const imageSrc =
    resolvedImage &&
    (resolvedImage.startsWith("data:") || resolvedImage.startsWith("blob:")
      ? resolvedImage
      : encodeURI(resolvedImage));
  image.src = imageSrc || placeholderImage;
  image.alt = crop.name;
  image.loading = "lazy";
  image.onerror = () => {
    image.onerror = null;
    image.src = placeholderImage;
  };

  const pill = document.createElement("div");
  pill.className = "pill";
  pill.textContent = crop.season;

  const title = document.createElement("h3");
  title.textContent = crop.name;

  const guide = document.createElement("p");
  guide.textContent = crop.guide;

  const meta = document.createElement("div");
  meta.className = "crop-meta";

  const water = document.createElement("span");
  const waterLabel = document.createElement("strong");
  waterLabel.textContent = "Water:";
  water.append(waterLabel, ` ${crop.water}`);

  const sun = document.createElement("span");
  const sunLabel = document.createElement("strong");
  sunLabel.textContent = "Sunlight:";
  sun.append(sunLabel, ` ${crop.sun}`);

  const harvest = document.createElement("span");
  const harvestLabel = document.createElement("strong");
  harvestLabel.textContent = "Harvest:";
  harvest.append(harvestLabel, ` ${crop.harvest}`);

  meta.append(water, sun, harvest);
  card.append(image, pill, title, guide, meta);
  return card;
};

const renderCrops = (container, items) => {
  if (!container) return;
  container.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No crops match your search yet.";
    container.appendChild(empty);
    return;
  }

  items.forEach((crop, index) => {
    container.appendChild(createCropCard(crop, index));
  });
};

const initCropGuide = () => {
  const guideGrid = $("#cropGrid");
  const featuredGrid = $("#featuredGrid");
  const searchInput = $("#cropSearch");
  const clearButton = $("#clearSearch");
  const cropForm = $("#cropForm");
  const cropFormMessage = $("#cropFormMessage");
  const cropImageInput = $("#cropImage");
  const cropImageUrlInput = $("#cropImageUrl");

  let customCrops = loadCustomCrops();
  let allCrops = [...baseCrops, ...customCrops];
  const cropById = new Map(allCrops.map((crop) => [crop.id, crop]));
  updateCropCount(allCrops.length);

  if (featuredGrid) {
    renderCrops(
      featuredGrid,
      baseCrops.filter((crop) => crop.featured)
    );
  }

  if (!guideGrid) return;
  renderCrops(guideGrid, allCrops);

  const modal = $("#cropModal");
  const modalBody = $("#cropModalBody");

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add("is-hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  };

  const openModal = (crop) => {
    if (!modal || !modalBody) return;
    const instructions = buildInstructions(crop);

    const hero = document.createElement("div");
    hero.className = "modal-hero";

    const image = document.createElement("img");
    const modalImage = resolveImagePath(crop);
    image.src = modalImage ? encodeURI(modalImage) : placeholderImage;
    image.alt = crop.name;
    image.onerror = () => {
      image.onerror = null;
      image.src = placeholderImage;
    };

    const info = document.createElement("div");
    const title = document.createElement("h2");
    title.id = "modalTitle";
    title.textContent = crop.name;
    const summary = document.createElement("p");
    summary.textContent = crop.guide;
    const pill = document.createElement("div");
    pill.className = "pill";
    pill.textContent = crop.season;
    info.append(pill, title, summary);

    hero.append(image, info);

    const meta = document.createElement("div");
    meta.className = "modal-meta";

    const water = document.createElement("div");
    const waterLabel = document.createElement("strong");
    waterLabel.textContent = "Water:";
    water.append(waterLabel, ` ${crop.water}`);

    const sun = document.createElement("div");
    const sunLabel = document.createElement("strong");
    sunLabel.textContent = "Sunlight:";
    sun.append(sunLabel, ` ${crop.sun}`);

    const harvest = document.createElement("div");
    const harvestLabel = document.createElement("strong");
    harvestLabel.textContent = "Harvest:";
    harvest.append(harvestLabel, ` ${crop.harvest}`);

    meta.append(water, sun, harvest);

    const list = document.createElement("ul");
    list.className = "modal-list";
    instructions.forEach((tip) => {
      const item = document.createElement("li");
      item.textContent = tip;
      list.appendChild(item);
    });

    modalBody.innerHTML = "";
    modalBody.append(hero, meta, list);
    modal.classList.remove("is-hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  };

  if (modal) {
    modal.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.hasAttribute("data-modal-close")) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  const attachCardHandlers = (container) => {
    if (!container) return;
    container.addEventListener("click", (event) => {
      const card = event.target.closest(".crop-card");
      if (!card) return;
      const crop = cropById.get(card.dataset.cropId);
      if (crop) {
        openModal(crop);
      }
    });

    container.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const card = event.target.closest(".crop-card");
      if (!card) return;
      event.preventDefault();
      const crop = cropById.get(card.dataset.cropId);
      if (crop) {
        openModal(crop);
      }
    });
  };

  attachCardHandlers(guideGrid);
  attachCardHandlers(featuredGrid);

  const setCropMessage = (message, isError = false) => {
    if (!cropFormMessage) return;
    cropFormMessage.textContent = message;
    cropFormMessage.classList.toggle("is-error", isError);
  };

  if (searchInput) {
    const handleSearch = () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        renderCrops(guideGrid, allCrops);
        return;
      }
      const filtered = allCrops.filter((crop) => {
        const combined = `${crop.name} ${crop.tags.join(" ")} ${crop.season}`;
        return combined.toLowerCase().includes(query);
      });
      renderCrops(guideGrid, filtered);
    };

    searchInput.addEventListener("input", handleSearch);
    if (clearButton) {
      clearButton.addEventListener("click", () => {
        searchInput.value = "";
        renderCrops(guideGrid, allCrops);
        searchInput.focus();
      });
    }
  }

  if (cropForm) {
    cropForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = $("#cropName").value.trim();
      const season = $("#cropSeason").value.trim();
      const water = $("#cropWater").value.trim();
      const sun = $("#cropSun").value.trim();
      const harvest = $("#cropHarvest").value.trim();
      const guide = $("#cropGuide").value.trim();
      const tagsRaw = $("#cropTags").value.trim();
      const imageUrl = cropImageUrlInput
        ? cropImageUrlInput.value.trim()
        : "";
      const file =
        cropImageInput && cropImageInput.files
          ? cropImageInput.files[0]
          : null;

      if (!name || !season || !water || !sun || !harvest || !guide) {
        setCropMessage("Please complete all required fields.", true);
        return;
      }

      let image = imageUrl;
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          setCropMessage("Image file is too large (max 2MB).", true);
          return;
        }
        try {
          const result = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error("Image read failed."));
            reader.readAsDataURL(file);
          });
          if (typeof result === "string") {
            image = result;
          }
        } catch (error) {
          setCropMessage("Unable to read the image file.", true);
          return;
        }
      }

      if (!image) {
        setCropMessage("Please upload an image or provide an image URL.", true);
        return;
      }

      const newCrop = {
        id: `custom-${Date.now()}`,
        name,
        season,
        water,
        sun,
        harvest,
        guide,
        image,
        featured: false,
        tags: tagsRaw
          ? tagsRaw.split(",").map((tag) => tag.trim()).filter(Boolean)
          : ["custom"],
      };

      customCrops = [newCrop, ...customCrops];
      saveCustomCrops(customCrops);
      allCrops = [...baseCrops, ...customCrops];
      cropById.clear();
      allCrops.forEach((crop) => cropById.set(crop.id, crop));
      renderCrops(guideGrid, allCrops);
      updateCropCount(allCrops.length);
      cropForm.reset();
      setCropMessage("Crop guide added!");
    });
  }
};

const loadReminders = () => {
  const raw = localStorage.getItem(remindersKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const saveReminders = (reminders) => {
  localStorage.setItem(remindersKey, JSON.stringify(reminders));
};

const renderReminders = (reminders, list, emptyState) => {
  list.innerHTML = "";
  if (!reminders.length) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  reminders.forEach((reminder) => {
    const item = document.createElement("li");
    item.className = "reminder-item";
    item.innerHTML = `
      <div>
        <strong>${reminder.crop}</strong>
        <span>${formatDate(reminder.date)}</span>
      </div>
      <button class="btn outline" type="button" data-id="${reminder.id}">
        Delete
      </button>
    `;
    list.appendChild(item);
  });
};

const initReminders = () => {
  const form = $("#reminderForm");
  const list = $("#reminderList");
  const emptyState = $("#reminderEmpty");

  if (!form || !list || !emptyState) return;

  let reminders = loadReminders();
  renderReminders(reminders, list, emptyState);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const cropInput = $("#reminderCrop");
    const dateInput = $("#reminderDate");
    const crop = cropInput.value.trim();
    const date = dateInput.value;

    if (!crop || !date) return;

    reminders = [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        crop,
        date,
      },
      ...reminders,
    ];

    saveReminders(reminders);
    renderReminders(reminders, list, emptyState);
    form.reset();
    cropInput.focus();
  });

  list.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const id = target.dataset.id;
    if (!id) return;
    reminders = reminders.filter((reminder) => reminder.id !== id);
    saveReminders(reminders);
    renderReminders(reminders, list, emptyState);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initViews();
  initCropGuide();
  initReminders();
});
