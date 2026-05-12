(function () {
  const i18n = {
    es: {
      skipLink: "Saltar al contenido principal",
      navMenu: "Menu",
      navOrders: "Pedidos",
      navPoints: "Brasaland points",
      navAbout: "Sobre nosotros",
      navContact: "Contacto",
      register: "Registrarse",
      myPurchases: "Mis compras",
      heroTag: "Restaurante especializado en cocina a la brasa",
      heroTitle: "Brasaland: fuego, sabor artesanal y experiencia memorable.",
      heroText:
        "Disfruta carnes a la brasa, hamburguesas artesanales y acompanamientos preparados al momento. Ahora puedes armar Mis compras, guardar favoritos y sumar puntos con Brasaland points.",
      viewMenu: "Ver menu",
      makeOrder: "Hacer pedido",
      menuTitle: "Menu Brasaland",
      menuSubtitle: "Selecciona tus favoritos y agregalos a Mis compras.",
      regionLabel: "Pais / Moneda",
      regionCo: "Colombia (COP)",
      regionUs: "Estados Unidos - Florida (USD)",
      ordersTitle: "Pedidos online (simulado)",
      ordersText:
        "Agrega productos desde el menu, revisa Mis compras y simula tu compra. No se conecta con backend: es una experiencia frontend para validar el flujo.",
      checkout: "Finalizar compra simulada",
      clearPurchases: "Vaciar Mis compras",
      pointsTitle: "Brasaland points",
      pointsTopTag: "Beneficios exclusivos",
      pointsLead:
        "Por cada compra acumulas puntos. Puedes canjear recompensas para mejorar tu experiencia en Brasaland.",
      pointsCta: "Quiero mi cuenta Brasa Points",
      pointsBenefitOneTitle: "Compra y suma",
      pointsBenefitOneText: "Acumula 1 punto por cada 1.000 COP en pedidos simulados.",
      pointsBenefitTwoTitle: "Canjea rapido",
      pointsBenefitTwoText: "Desde 80 puntos desbloqueas premios inmediatos en tu mesa.",
      pointsBenefitThreeTitle: "Sube de nivel",
      pointsBenefitThreeText: "Mientras mas compras, mejores recompensas consigues.",
      pointsWeeklyPromoTitle: "Martes Brasa x2",
      pointsWeeklyPromoInactive: "Activa cada martes: puntos dobles en cada compra.",
      pointsWeeklyPromoActive: "Hoy esta activo Martes Brasa: tus compras suman puntos dobles.",
      pointsPromo: "Registrate y participa",
      yourPoints: "Tus puntos",
      pointsProgressTitle: "Progreso al siguiente premio",
      pointsNextReward: "Te faltan {n} pts para tu proximo premio.",
      pointsAllRewards: "Ya puedes canjear cualquier recompensa disponible.",
      rewardsAvailable: "Recompensas disponibles",
      rewardDrink: "Canjear bebida gratis (80 pts)",
      rewardSide: "Canjear acompanamiento (150 pts)",
      rewardBurger: "Canjear burger clasica (280 pts)",
      pointsEmpty: "Aun no tienes puntos acumulados.",
      contactTitle: "Contacto",
      contactText: "Hablemos sobre reservas, eventos o alianzas comerciales.",
      aboutTitle: "Sobre nosotros",
      aboutText:
        "Somos una empresa de restaurant a la brasa, ubicados en Colombia y Estados Unidos..",
      footerSubtitle: "Cocina a la brasa · Colombia y Florida",
      backHome: "Volver al inicio",
      registerTitle: "Registro de usuario",
      registerSubtitle:
        "Crea tu perfil para gestionar tus compras y acumular puntos en Brasaland points.",
      registerHint: "Los campos con * son obligatorios.",
      personalData: "Datos personales",
      firstName: "Nombre *",
      firstNamePh: "Ej: Camila",
      lastName: "Apellido *",
      lastNamePh: "Ej: Rojas",
      emailLabel: "Email *",
      emailPh: "Ej: camila@email.com",
      phoneText: "Telefono *",
      phonePh: "Ej: +57 300 123 4567",
      preferences: "Preferencias",
      country: "Pais *",
      selectOption: "Selecciona una opcion",
      countryCo: "Colombia",
      countryUs: "Estados Unidos (Florida)",
      favoriteCategory: "Categoria favorita *",
      catMeat: "Carnes a la brasa",
      catBurgers: "Hamburguesas artesanales",
      catSides: "Acompanamientos",
      catDrinks: "Bebidas",
      consent: "Acepto terminos, privacidad y comunicacion de beneficios Brasaland. *",
      createAccount: "Crear cuenta",
      clearForm: "Limpiar formulario",
      footerRegister: "Registro de usuarios y beneficios Brasaland points",
      required: "Este campo es obligatorio.",
      invalidEmail: "Ingresa un email valido.",
      invalidPhone: "Ingresa un telefono valido.",
      fixErrors: "Corrige los errores antes de continuar.",
      registerSuccess: "Registro completado. Bienvenido a Brasaland.",
      contactSuccess: "Mensaje enviado correctamente. Te responderemos pronto.",
      purchasesEmpty: "Tu lista de Mis compras esta vacia.",
      purchasesCleared: "Mis compras se vacio correctamente.",
      addBeforeCheckout: "Agrega productos a Mis compras antes de finalizar compra.",
      orderSent: "Pedido simulado enviado correctamente.",
      purchaseCompleted: "Compra simulada completada. Ganaste {n} puntos.",
      purchaseCompletedPromo: "Compra simulada completada. Ganaste {n} puntos con promo x2.",
      notEnoughPoints: "No tienes puntos suficientes para este canje ({n} pts).",
      redeemed: "Canje realizado con exito. Usaste {n} puntos.",
    },
    en: {
      skipLink: "Skip to main content",
      navMenu: "Menu",
      navOrders: "Orders",
      navPoints: "Brasaland points",
      navAbout: "About us",
      navContact: "Contact",
      register: "Sign up",
      myPurchases: "My purchases",
      heroTag: "Restaurant specialized in charcoal-grilled cuisine",
      heroTitle: "Brasaland: fire, handcrafted flavor, and a memorable dining experience.",
      heroText:
        "Enjoy grilled meats, handcrafted burgers, and fresh sides. You can now build My purchases, save favorites, and earn points with Brasaland points.",
      viewMenu: "View menu",
      makeOrder: "Place order",
      menuTitle: "Brasaland Menu",
      menuSubtitle: "Choose your favorites and add them to My purchases.",
      regionLabel: "Country / Currency",
      regionCo: "Colombia (COP)",
      regionUs: "United States - Florida (USD)",
      ordersTitle: "Online orders (simulated)",
      ordersText:
        "Add products from the menu, review My purchases, and simulate checkout. No backend connection: this is a frontend flow simulation.",
      checkout: "Complete simulated checkout",
      clearPurchases: "Clear My purchases",
      pointsTitle: "Brasaland points",
      pointsTopTag: "Exclusive benefits",
      pointsLead:
        "For every purchase you earn points. Redeem rewards to improve your Brasaland experience.",
      pointsCta: "I want my Brasa Points account",
      pointsBenefitOneTitle: "Buy and earn",
      pointsBenefitOneText: "Collect 1 point for every 1,000 COP in simulated orders.",
      pointsBenefitTwoTitle: "Redeem fast",
      pointsBenefitTwoText: "From 80 points you unlock instant rewards at your table.",
      pointsBenefitThreeTitle: "Level up",
      pointsBenefitThreeText: "The more you buy, the better your rewards become.",
      pointsWeeklyPromoTitle: "Brasa Tuesday x2",
      pointsWeeklyPromoInactive: "Active every Tuesday: double points on every purchase.",
      pointsWeeklyPromoActive: "Brasa Tuesday is active today: your purchases earn double points.",
      pointsPromo: "Sign up and participate",
      yourPoints: "Your points",
      pointsProgressTitle: "Progress to next reward",
      pointsNextReward: "You need {n} pts for your next reward.",
      pointsAllRewards: "You can now redeem any available reward.",
      rewardsAvailable: "Available rewards",
      rewardDrink: "Redeem free drink (80 pts)",
      rewardSide: "Redeem side dish (150 pts)",
      rewardBurger: "Redeem classic burger (280 pts)",
      pointsEmpty: "You do not have points yet.",
      contactTitle: "Contact",
      contactText: "Let us talk about reservations, events, or partnerships.",
      aboutTitle: "About us",
      aboutText:
        "We are a charcoal-grill restaurant company located in Colombia and the United States.",
      footerSubtitle: "Charcoal-grilled cuisine · Colombia and Florida",
      backHome: "Back to home",
      registerTitle: "User registration",
      registerSubtitle:
        "Create your profile to manage your purchases and collect points in Brasaland points.",
      registerHint: "Fields marked with * are required.",
      personalData: "Personal information",
      firstName: "First name *",
      firstNamePh: "Ex: Camila",
      lastName: "Last name *",
      lastNamePh: "Ex: Rojas",
      emailLabel: "Email *",
      emailPh: "Ex: camila@email.com",
      phoneText: "Phone *",
      phonePh: "Ex: +1 305 555 0101",
      preferences: "Preferences",
      country: "Country *",
      selectOption: "Select an option",
      countryCo: "Colombia",
      countryUs: "United States (Florida)",
      favoriteCategory: "Favorite category *",
      catMeat: "Grilled meats",
      catBurgers: "Craft burgers",
      catSides: "Sides",
      catDrinks: "Drinks",
      consent: "I accept terms, privacy policy, and Brasaland benefit communications. *",
      createAccount: "Create account",
      clearForm: "Clear form",
      footerRegister: "User registration and Brasaland points benefits",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      invalidPhone: "Enter a valid phone number.",
      fixErrors: "Fix validation errors before continuing.",
      registerSuccess: "Registration completed. Welcome to Brasaland.",
      contactSuccess: "Message sent successfully. We will get back to you soon.",
      purchasesEmpty: "Your My purchases list is empty.",
      purchasesCleared: "My purchases cleared successfully.",
      addBeforeCheckout: "Add products to My purchases before checkout.",
      orderSent: "Simulated order sent successfully.",
      purchaseCompleted: "Simulated purchase completed. You earned {n} points.",
      purchaseCompletedPromo: "Simulated purchase completed. You earned {n} points with x2 promo.",
      notEnoughPoints: "You do not have enough points for this reward ({n} pts).",
      redeemed: "Reward redeemed successfully. You used {n} points.",
    },
  };

  const getLang = () => (localStorage.getItem("siteLang") === "en" ? "en" : "es");
  const t = (key, vars) => {
    let message = (i18n[getLang()] && i18n[getLang()][key]) || i18n.es[key] || "";
    if (vars) {
      Object.keys(vars).forEach((k) => {
        message = message.replace(`{${k}}`, String(vars[k]));
      });
    }
    return message;
  };

  const applyTranslations = () => {
    document.documentElement.lang = getLang();

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      const value = t(key);
      if (value) {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      const value = t(key);
      if (value) {
        node.setAttribute("placeholder", value);
      }
    });

    const heroImg = document.querySelector("img[data-alt-es][data-alt-en]");
    if (heroImg) {
      heroImg.alt = getLang() === "en" ? heroImg.dataset.altEn : heroImg.dataset.altEs;
    }

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      const active = btn.dataset.setLang === getLang();
      btn.classList.toggle("bg-amber-300", active);
      btn.classList.toggle("text-zinc-950", active);
      btn.classList.toggle("text-brand-neutral", !active);
    });
  };

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem("siteLang", btn.dataset.setLang);
      applyTranslations();
      window.dispatchEvent(new CustomEvent("site-language-changed"));
    });
  });

  const isEmailValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  const isPhoneValid = (value) => /^[+]?[(]?[0-9\s\-()]{7,20}$/.test(value);
  const isNumberValid = (value) => value !== "" && !Number.isNaN(Number(value));

  const parseRules = (field) => {
    const raw = field.dataset.validate || "";
    return raw
      .split("|")
      .map((rule) => rule.trim())
      .filter(Boolean);
  };

  const getErrorNode = (form, field) => {
    const id = field.id || field.name;
    return form.querySelector(`[data-error-for="${id}"]`);
  };

  const setError = (form, field, message) => {
    const errorNode = getErrorNode(form, field);
    if (errorNode) {
      errorNode.textContent = message;
    }
    field.setAttribute("aria-invalid", "true");
    field.classList.add("border-rose-400");
  };

  const clearError = (form, field) => {
    const errorNode = getErrorNode(form, field);
    if (errorNode) {
      errorNode.textContent = "";
    }
    field.removeAttribute("aria-invalid");
    field.classList.remove("border-rose-400");
  };

  const validateByRule = (field, rule) => {
    const value = field.type === "checkbox" ? String(field.checked) : field.value.trim();
    const isEmpty = field.type === "checkbox" ? !field.checked : value === "";

    if (rule === "required" && isEmpty) {
      return t("required");
    }

    if (isEmpty && rule !== "required") {
      return "";
    }

    if (rule === "email" && !isEmailValid(value)) {
      return t("invalidEmail");
    }

    if (rule === "phone" && !isPhoneValid(value)) {
      return t("invalidPhone");
    }

    if (rule.startsWith("min:")) {
      const min = Number(rule.split(":")[1]);
      if (!Number.isNaN(min) && value.length < min) {
        return `Debe tener al menos ${min} caracteres.`;
      }
    }

    if (rule.startsWith("max:")) {
      const max = Number(rule.split(":")[1]);
      if (!Number.isNaN(max) && value.length > max) {
        return `Debe tener como maximo ${max} caracteres.`;
      }
    }

    if (rule.startsWith("minnum:")) {
      const min = Number(rule.split(":")[1]);
      const current = Number(value);
      if (!isNumberValid(value) || (!Number.isNaN(min) && current < min)) {
        return `Ingresa un numero mayor o igual a ${min}.`;
      }
    }

    if (rule.startsWith("maxnum:")) {
      const max = Number(rule.split(":")[1]);
      const current = Number(value);
      if (!isNumberValid(value) || (!Number.isNaN(max) && current > max)) {
        return `Ingresa un numero menor o igual a ${max}.`;
      }
    }

    if (rule === "future-date") {
      const selectedDate = new Date(`${value}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
        return "Selecciona una fecha valida desde hoy en adelante.";
      }
    }

    return "";
  };

  const wireFormValidation = (formId, statusId, successMessageKey) => {
    const form = document.getElementById(formId);
    if (!form) {
      return;
    }

    const statusNode = statusId ? document.getElementById(statusId) : null;
    const fields = Array.from(form.querySelectorAll("input, select, textarea")).filter((f) => f.name);

    const showStatus = (message) => {
      if (!statusNode) {
        return;
      }
      statusNode.textContent = message;
      statusNode.classList.remove("hidden");
    };

    const clearStatus = () => {
      if (!statusNode) {
        return;
      }
      statusNode.textContent = "";
      statusNode.classList.add("hidden");
    };

    const validateField = (field) => {
      const rules = parseRules(field);
      for (const rule of rules) {
        const message = validateByRule(field, rule);
        if (message) {
          setError(form, field, message);
          return false;
        }
      }
      clearError(form, field);
      return true;
    };

    const validateForm = () => {
      let valid = true;
      fields.forEach((field) => {
        if (!validateField(field)) {
          valid = false;
        }
      });
      return valid;
    };

    fields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      if (field.tagName === "SELECT" || field.type === "checkbox" || field.type === "date") {
        field.addEventListener("change", () => validateField(field));
      } else {
        field.addEventListener("input", () => validateField(field));
      }
    });

    const resetBtn = form.querySelector("#resetFormButton");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        fields.forEach((field) => clearError(form, field));
        clearStatus();
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const valid = validateForm();

      if (!valid) {
        showStatus(t("fixErrors"));
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      showStatus(t(successMessageKey));
      form.reset();
      fields.forEach((field) => clearError(form, field));
    });
  };

  const setupCartAndLoyalty = () => {
    const addButtons = document.querySelectorAll(".add-to-cart");
    if (addButtons.length === 0) {
      return;
    }

    const cartToggle = document.getElementById("cartToggle");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const cartPanel = document.getElementById("cartPanel");
    const cartItemsNode = document.getElementById("cartItems");
    const cartTotalNode = document.getElementById("cartTotal");
    const cartCountNode = document.getElementById("cartCount");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const clearCartBtn = document.getElementById("clearCartBtn");
    const cartStatusNode = document.getElementById("cartStatus");
    const pointsNode = document.getElementById("pointsValue");
    const pointsStatusNode = document.getElementById("pointsStatus");
    const pointsProgressNode = document.getElementById("pointsProgress");
    const nextRewardHintNode = document.getElementById("nextRewardHint");
    const weeklyPromoCardNode = document.getElementById("weeklyPromoCard");
    const weeklyPromoMessageNode = document.getElementById("weeklyPromoMessage");
    const redeemButtons = document.querySelectorAll(".redeem-btn");
    const regionSelect = document.getElementById("regionSelect");
    const menuPriceNodes = document.querySelectorAll(".menu-price");
    const filterButtons = document.querySelectorAll(".menu-filter");
    const menuPanelNode = document.getElementById("menuCategoryPanel");
    const menuPanelTitleNode = document.getElementById("menuPanelTitle");
    const menuPanelListNode = document.getElementById("menuPanelList");
    const closeMenuPanelBtn = document.getElementById("closeMenuPanelBtn");

    let cart = [];
    let points = 0;
    const rewards = [80, 150, 280];
    const promoDay = 2;
    const usdRate = 4000;
    let activeRegion = "co";
    let activeMenuCategory = "all";

    const categoryMenuData = {
      carnes: {
        title: "Carta de carnes",
        items: [
          { name: "Punta de anca 300g", price: 49000 },
          { name: "Costilla BBQ brasaland", price: 42000 },
          { name: "Churrasco a la brasa 250g", price: 45000 },
        ],
      },
      hamburguesas: {
        title: "Carta de hamburguesas",
        items: [
          { name: "Brasa Burger Doble", price: 34000 },
          { name: "Chicken Grill Burger", price: 29000 },
          { name: "Burger Clasica Brasa", price: 26000 },
        ],
      },
      acompanamientos: {
        title: "Carta de acompanamientos y bebidas",
        items: [
          { name: "Papas rusticas brasa", price: 12000 },
          { name: "Limonada de panela", price: 9000 },
          { name: "Refresco cola 400ml", price: 7000 },
          { name: "Refresco limon 400ml", price: 7000 },
          { name: "Cerveza lager nacional", price: 11000 },
          { name: "Cerveza artesanal IPA", price: 15000 },
        ],
      },
      combos: {
        title: "Carta de combos",
        items: [
          { name: "Combo Parrillero Clasico", price: 52000 },
          { name: "Combo Burger Doble", price: 46000 },
          { name: "Combo Familiar Brasa", price: 58000 },
        ],
      },
    };

    const isPromoDay = () => new Date().getDay() === promoDay;
    const getPointsMultiplier = () => (isPromoDay() ? 2 : 1);

    const formatMoney = (valueInCop) => {
      if (activeRegion === "us") {
        return `$${(valueInCop / usdRate).toFixed(2)} USD`;
      }
      return `$${valueInCop.toLocaleString("es-CO")} COP`;
    };

    const updateMenuPrices = () => {
      menuPriceNodes.forEach((node) => {
        const basePrice = Number(node.dataset.price || "0");
        node.textContent = formatMoney(basePrice);
      });
    };

    const setActiveFilter = (selectedFilter) => {
      filterButtons.forEach((btn) => {
        const isActive = (btn.dataset.filter || "all") === selectedFilter;
        btn.classList.toggle("bg-amber-300", isActive);
        btn.classList.toggle("border-amber-300", isActive);
        btn.classList.toggle("text-zinc-950", isActive);
        btn.classList.toggle("border-white/25", !isActive);
        btn.classList.toggle("text-zinc-100", !isActive);
      });
    };

    const setMenuPanelOpen = (open) => {
      if (!menuPanelNode) {
        return;
      }
      menuPanelNode.classList.toggle("hidden", !open);
      menuPanelNode.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.classList.toggle("overflow-hidden", open);
    };

    const renderCategoryPanel = (category) => {
      const categoryData = categoryMenuData[category];
      if (!categoryData || !menuPanelTitleNode || !menuPanelListNode) {
        return;
      }

      menuPanelTitleNode.textContent = categoryData.title;
      menuPanelListNode.innerHTML = categoryData.items
        .map(
          (item) =>
            `<li class="flex items-center justify-between rounded-xl border border-white/10 bg-black/25 px-4 py-3">` +
            `<div class="min-w-0">` +
            `<p class="text-sm text-zinc-100">${item.name}</p>` +
            `<p class="text-sm font-bold text-amber-300">${formatMoney(item.price)}</p>` +
            `</div>` +
            `<button type="button" class="panel-add-to-cart shrink-0 rounded-full bg-gradient-to-r from-amber-300 to-brand-secondary px-3 py-1.5 text-xs font-extrabold text-zinc-950 shadow-md shadow-amber-700/30 transition hover:from-amber-200 hover:to-orange-400" data-name="${item.name}" data-price="${item.price}" aria-label="Agregar ${item.name}">+</button>` +
            `</li>`
        )
        .join("");
    };

    const closeCategoryPanel = () => {
      activeMenuCategory = "all";
      setMenuPanelOpen(false);
      setActiveFilter("all");
    };

    const showCartStatus = (message) => {
      if (!cartStatusNode) {
        return;
      }
      cartStatusNode.textContent = message;
      cartStatusNode.classList.remove("hidden");
    };

    const updateWeeklyPromo = () => {
      const promoActive = isPromoDay();

      if (weeklyPromoMessageNode) {
        weeklyPromoMessageNode.textContent = promoActive
          ? t("pointsWeeklyPromoActive")
          : t("pointsWeeklyPromoInactive");
      }

      if (weeklyPromoCardNode) {
        weeklyPromoCardNode.classList.toggle("border-emerald-200/30", !promoActive);
        weeklyPromoCardNode.classList.toggle("ring-emerald-200/25", !promoActive);
        weeklyPromoCardNode.classList.toggle("border-amber-200/50", promoActive);
        weeklyPromoCardNode.classList.toggle("ring-amber-200/40", promoActive);
      }
    };

    const updateLoyaltyProgress = () => {
      const nextReward = rewards.find((cost) => points < cost);

      if (pointsProgressNode) {
        if (nextReward) {
          const previousReward = Math.max(0, ...rewards.filter((cost) => cost <= points));
          const segmentTotal = nextReward - previousReward;
          const segmentDone = points - previousReward;
          const percent = Math.min(100, Math.round((segmentDone / segmentTotal) * 100));
          pointsProgressNode.style.width = `${percent}%`;
        } else {
          pointsProgressNode.style.width = "100%";
        }
      }

      if (nextRewardHintNode) {
        if (nextReward) {
          nextRewardHintNode.textContent = t("pointsNextReward", { n: nextReward - points });
        } else {
          nextRewardHintNode.textContent = t("pointsAllRewards");
        }
      }
    };

    const renderCart = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      const count = cart.reduce((acc, item) => acc + item.qty, 0);

      if (cartCountNode) {
        cartCountNode.textContent = String(count);
      }

      if (cartTotalNode) {
        cartTotalNode.textContent = formatMoney(total);
      }

      if (!cartItemsNode) {
        return;
      }

      if (cart.length === 0) {
        cartItemsNode.innerHTML =
          `<li class="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">${t("purchasesEmpty")}</li>`;
        return;
      }

      cartItemsNode.innerHTML = cart
        .map(
          (item) =>
            `<li class="rounded-xl border border-white/10 bg-black/20 p-4">` +
            `<div class="flex items-start justify-between gap-3">` +
            `<div><p class="font-semibold text-white">${item.name}</p><p class="text-sm text-zinc-300">${item.qty} x ${formatMoney(
              item.price
            )}</p></div>` +
            `<button type="button" class="remove-cart-item rounded-full border border-white/20 px-3 py-1 text-xs" data-name="${item.name}" aria-label="Quitar una unidad de ${item.name}">−</button>` +
            `</div></li>`
        )
        .join("");

      cartItemsNode.querySelectorAll(".remove-cart-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          const name = btn.dataset.name;
          cart = cart
            .map((item) => {
              if (item.name !== name) {
                return item;
              }
              return { ...item, qty: item.qty - 1 };
            })
            .filter((item) => item.qty > 0);
          renderCart();
        });
      });
    };

    const setCartOpen = (open) => {
      if (!cartPanel || !cartToggle) {
        return;
      }
      cartPanel.classList.toggle("translate-x-full", !open);
      cartToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    addButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = Number(btn.dataset.price);

        const existing = cart.find((item) => item.name === name);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({ name, price, qty: 1 });
        }

        renderCart();
        setCartOpen(true);
      });
    });

    if (cartToggle) {
      cartToggle.addEventListener("click", () => {
        const expanded = cartToggle.getAttribute("aria-expanded") === "true";
        setCartOpen(!expanded);
      });
    }

    if (closeCartBtn) {
      closeCartBtn.addEventListener("click", () => setCartOpen(false));
    }

    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        cart = [];
        renderCart();
        showCartStatus(t("purchasesCleared"));
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
          showCartStatus(t("addBeforeCheckout"));
          return;
        }

        const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
        const earned = Math.floor(total / 1000) * getPointsMultiplier();
        points += earned;

        if (pointsNode) {
          pointsNode.textContent = String(points);
        }
        updateLoyaltyProgress();

        if (pointsStatusNode) {
          pointsStatusNode.textContent = isPromoDay()
            ? t("purchaseCompletedPromo", { n: earned })
            : t("purchaseCompleted", { n: earned });
        }

        cart = [];
        renderCart();
        showCartStatus(t("orderSent"));
      });
    }

    redeemButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cost = Number(btn.dataset.cost || "0");

        if (points < cost) {
          if (pointsStatusNode) {
            pointsStatusNode.textContent = t("notEnoughPoints", { n: cost });
          }
          return;
        }

        points -= cost;
        if (pointsNode) {
          pointsNode.textContent = String(points);
        }
        updateLoyaltyProgress();
        if (pointsStatusNode) {
          pointsStatusNode.textContent = t("redeemed", { n: cost });
        }
      });
    });

    if (regionSelect) {
      regionSelect.addEventListener("change", () => {
        activeRegion = regionSelect.value === "us" ? "us" : "co";
        renderCart();
        updateMenuPrices();
        if (activeMenuCategory !== "all") {
          renderCategoryPanel(activeMenuCategory);
        }
      });
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter || "all";
        setActiveFilter(selectedFilter);

        if (selectedFilter === "all") {
          closeCategoryPanel();
          return;
        }

        activeMenuCategory = selectedFilter;
        renderCategoryPanel(selectedFilter);
        setMenuPanelOpen(true);
      });
    });

    if (closeMenuPanelBtn) {
      closeMenuPanelBtn.addEventListener("click", closeCategoryPanel);
    }

    if (menuPanelNode) {
      menuPanelNode.addEventListener("click", (event) => {
        if (event.target === menuPanelNode) {
          closeCategoryPanel();
        }
      });
    }

    if (menuPanelListNode) {
      menuPanelListNode.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const button = target.closest(".panel-add-to-cart");
        if (!(button instanceof HTMLButtonElement)) {
          return;
        }

        const name = button.dataset.name;
        const price = Number(button.dataset.price || "0");
        if (!name || Number.isNaN(price) || price <= 0) {
          return;
        }

        const existing = cart.find((item) => item.name === name);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({ name, price, qty: 1 });
        }

        renderCart();
        setCartOpen(true);
        showCartStatus(`Agregado al carrito: ${name}`);
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && activeMenuCategory !== "all") {
        closeCategoryPanel();
      }
    });

    window.addEventListener("site-language-changed", () => {
      updateMenuPrices();
      renderCart();
      if (pointsStatusNode && points === 0) {
        pointsStatusNode.textContent = t("pointsEmpty");
      }
      updateWeeklyPromo();
      updateLoyaltyProgress();
    });

    updateMenuPrices();
    renderCart();
    updateWeeklyPromo();
    updateLoyaltyProgress();
  };

  wireFormValidation("applicationForm", "formStatus", "registerSuccess");
  wireFormValidation("contactForm", "contactStatus", "contactSuccess");
  setupCartAndLoyalty();
  applyTranslations();
})();
