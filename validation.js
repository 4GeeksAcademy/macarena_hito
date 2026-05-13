(function () {
  const i18n = {
    es: {
      skipLink: "Saltar al contenido principal",
      navMenu: "Menú",
      navOrders: "Pedidos",
      navPoints: "Brasaland points",
      navAbout: "Sobre nosotros",
      navContact: "Contacto",
      login: "Iniciar sesión",
      register: "Registrarse",
      myFavorites: "Mis Favoritos",
      favoritesTitle: "Mis Favoritos",
      favoritesEmpty: "Aún no tienes productos favoritos.",
      myPurchases: "Mis compras",
      heroTag: "Restaurante especializado en cocina a la brasa",
      heroTitle: "Brasaland: fuego, sabor artesanal y experiencia memorable.",
      heroText:
        "Disfruta carnes a la brasa, hamburguesas artesanales y acompañamientos preparados al momento. Ahora puedes armar Mis compras, guardar favoritos y sumar puntos con Brasaland points.",
      viewMenu: "Ver menú",
      makeOrder: "Hacer pedido",
      menuTitle: "Menú Brasaland",
      menuSubtitle: "Selecciona tus favoritos y agrégalos a Mis compras.",
      menuFilterTop: "Los más pedidos",
      menuFilterMeats: "Carnes",
      menuFilterBurgers: "Hamburguesas",
      menuFilterSidesDrinks: "Acompañamientos y bebidas",
      menuFilterCombos: "Combos",
      menuTagMeats: "Carnes",
      menuTagBurgers: "Hamburguesas",
      menuTagSides: "Acompañamientos",
      menuTagCombos: "Combos",
      itemPuntaName: "Punta de anca 300g",
      itemPuntaDesc: "Corte premium con mantequilla de ajo y chimichurri.",
      itemRibsName: "Costilla BBQ brasaland",
      itemRibsDesc: "Cocción lenta, salsa de la casa y toque ahumado.",
      itemBrasaBurgerName: "Brasa Burger Doble",
      itemBrasaBurgerDesc: "Doble carne, queso cheddar, cebolla crispy y salsa brasa.",
      itemChickenBurgerName: "Chicken Grill Burger",
      itemChickenBurgerDesc: "Pechuga marinada, queso suizo y mayonesa de cilantro.",
      itemFriesName: "Papas rústicas brasa",
      itemFriesDesc: "Papas en casco con pimentón ahumado y dip casero.",
      itemLemonadeName: "Limonada de panela",
      itemLemonadeDesc: "Refrescante, natural y preparada al instante.",
      itemComboParrilleroName: "Combo Parrillero Clásico",
      itemComboParrilleroDesc: "Carne a la brasa, papas rústicas y bebida.",
      itemComboBurgerName: "Combo Burger Doble",
      itemComboBurgerDesc: "Brasa Burger Doble, papas y gaseosa.",
      itemComboFamilyName: "Combo Familiar Brasa",
      itemComboFamilyDesc: "Mix de carnes, 2 acompañamientos y 2 bebidas.",
      panelTitleMeats: "Carta de carnes",
      panelTitleBurgers: "Carta de hamburguesas",
      panelTitleSides: "Carta de acompañamientos y bebidas",
      panelTitleCombos: "Carta de combos",
      itemChurrascoName: "Churrasco a la brasa 250g",
      itemClassicBurgerName: "Burger Clásica Brasa",
      itemSodaColaName: "Refresco cola 400ml",
      itemSodaLemonName: "Refresco limón 400ml",
      itemBeerLagerName: "Cerveza lager nacional",
      itemBeerIpaName: "Cerveza artesanal IPA",
      regionLabel: "País / Moneda",
      regionCo: "Colombia (COP)",
      regionUs: "Estados Unidos - Florida (USD)",
      ordersTitle: "Pedidos online (simulado)",
      ordersText:
        "Agrega productos desde el menú, revisa Mis compras y simula tu compra. No se conecta con backend: es una experiencia frontend para validar el flujo.",
      checkout: "Finalizar compra",
      paymentTitle: "Elegir método de pago",
      paymentSubtitle: "Selecciona cómo quieres pagar tu pedido.",
      paymentTotal: "Total a pagar",
      paymentMethodCard: "Tarjeta débito/crédito",
      paymentMethodWallet: "Billetera digital",
      paymentMethodCash: "Pago en caja",
      paymentCancel: "Cancelar",
      paymentConfirm: "Pagar ahora",
      clearPurchases: "Vaciar Mis compras",
      pointsTitle: "Brasaland points",
      pointsTopTag: "Beneficios exclusivos",
      pointsLead:
        "Por cada compra acumulas puntos. Puedes canjear recompensas para mejorar tu experiencia en Brasaland.",
      pointsCta: "Quiero mi cuenta Brasa Points",
      pointsBenefitOneTitle: "Compra y suma",
      pointsBenefitOneText: "Acumula 1 punto por cada 1.000 COP en pedidos simulados.",
      pointsBenefitTwoTitle: "Canjea rápido",
      pointsBenefitTwoText: "Desde 80 puntos desbloqueas premios inmediatos en tu mesa.",
      pointsBenefitThreeTitle: "Sube de nivel",
      pointsBenefitThreeText: "Mientras más compras, mejores recompensas consigues.",
      pointsWeeklyPromoTitle: "Martes Brasa x2",
      pointsWeeklyPromoInactive: "Activa cada martes: puntos dobles en cada compra.",
      pointsWeeklyPromoActive: "Hoy está activo Martes Brasa: tus compras suman puntos dobles.",
      pointsPromo: "Regístrate y participa",
      yourPoints: "Tus puntos",
      pointsProgressTitle: "Progreso al siguiente premio",
      pointsNextReward: "Te faltan {n} pts para tu próximo premio.",
      pointsAllRewards: "Ya puedes canjear cualquier recompensa disponible.",
      rewardsAvailable: "Recompensas disponibles",
      rewardDrink: "Canjear bebida gratis (80 pts)",
      rewardSide: "Canjear acompañamiento (150 pts)",
      rewardBurger: "Canjear burger clásica (280 pts)",
      pointsEmpty: "Aún no tienes puntos acumulados.",
      contactTitle: "Contacto",
      contactText: "Por consultas comunicate con nosotros",
      aboutTitle: "Sobre nosotros",
      aboutText:
        "En Brasaland llevamos desde 2008 perfeccionando el arte de la cocina a la brasa. Nacimos en Medellín como un pequeño restaurante familiar y, con el tiempo, crecimos hasta convertirnos en una cadena con 14 locales en Colombia y Estados Unidos.\n\nNuestro compromiso es simple, pero poderoso: ofrecer siempre la misma calidad sin importar dónde nos visites. Queremos que cada plato tenga el mismo sabor, que cada experiencia sea cálida y cercana, y que cada servicio sea ágil, respetando tu tiempo.\n\nHoy, más de 100 personas forman parte de Brasaland, trabajando día a día para mantener viva esa esencia que nos hizo crecer. Seguimos evolucionando para mejorar cada detalle, sin perder lo más importante: la pasión por hacer las cosas bien.",
      footerSubtitle: "Cocina a la brasa · Colombia y Florida",
      backHome: "Volver al inicio",
      registerTitle: "Registro de usuario",
      loginTitle: "Iniciar sesión",
      loginSubtitle: "Ingresa con tu email y contraseña para continuar.",
      loginPassword: "Contraseña *",
      loginState: "Sesión iniciada: {name}",
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
      phoneText: "Teléfono *",
      phonePh: "Ej: +57 300 123 4567",
      preferences: "Preferencias",
      country: "País *",
      selectOption: "Selecciona una opción",
      countryCo: "Colombia",
      countryUs: "Estados Unidos (Florida)",
      favoriteCategory: "Categoría favorita *",
      catMeat: "Carnes a la brasa",
      catBurgers: "Hamburguesas artesanales",
      catSides: "Acompañamientos",
      catDrinks: "Bebidas",
      consent: "Acepto términos, privacidad y comunicación de beneficios Brasaland. *",
      createAccount: "Crear cuenta",
      clearForm: "Limpiar formulario",
      footerRegister: "Registro de usuarios y beneficios Brasaland points",
      required: "Este campo es obligatorio.",
      invalidEmail: "Ingresa un email válido.",
      invalidPhone: "Ingresa un teléfono válido.",
      fixErrors: "Corrige los errores antes de continuar.",
      registerSuccess: "Registro completado. Bienvenido a Brasaland.",
      loginSuccess: "Sesión iniciada correctamente.",
      contactSuccess: "Mensaje enviado correctamente. Te responderemos pronto.",
      purchasesEmpty: "Tu lista de Mis compras está vacía.",
      purchasesCleared: "Mis compras se vació correctamente.",
      addBeforeCheckout: "Agrega productos a Mis compras antes de finalizar compra.",
      orderSent: "Pedido simulado enviado correctamente.",
      purchaseCompleted: "Compra simulada completada. Ganaste {n} puntos.",
      purchaseCompletedPromo: "Compra simulada completada. Ganaste {n} puntos con promo x2.",
      notEnoughPoints: "No tienes puntos suficientes para este canje ({n} pts).",
      redeemed: "Canje realizado con éxito. Usaste {n} puntos.",
    },
    en: {
      skipLink: "Skip to main content",
      navMenu: "Menu",
      navOrders: "Orders",
      navPoints: "Brasaland points",
      navAbout: "About us",
      navContact: "Contact",
      login: "Log in",
      register: "Sign up",
      myFavorites: "My Favorites",
      favoritesTitle: "My Favorites",
      favoritesEmpty: "You do not have favorite products yet.",
      myPurchases: "My purchases",
      heroTag: "Restaurant specialized in charcoal-grilled cuisine",
      heroTitle: "Brasaland: fire, handcrafted flavor, and a memorable dining experience.",
      heroText:
        "Enjoy grilled meats, handcrafted burgers, and fresh sides. You can now build My purchases, save favorites, and earn points with Brasaland points.",
      viewMenu: "View menu",
      makeOrder: "Place order",
      menuTitle: "Brasaland Menu",
      menuSubtitle: "Choose your favorites and add them to My purchases.",
      menuFilterTop: "Most ordered",
      menuFilterMeats: "Meats",
      menuFilterBurgers: "Burgers",
      menuFilterSidesDrinks: "Sides and drinks",
      menuFilterCombos: "Combos",
      menuTagMeats: "Meats",
      menuTagBurgers: "Burgers",
      menuTagSides: "Sides",
      menuTagCombos: "Combos",
      itemPuntaName: "Sirloin steak 300g",
      itemPuntaDesc: "Premium cut with garlic butter and chimichurri.",
      itemRibsName: "Brasaland BBQ ribs",
      itemRibsDesc: "Slow-cooked ribs with house sauce and smoky finish.",
      itemBrasaBurgerName: "Double Brasa Burger",
      itemBrasaBurgerDesc: "Double beef, cheddar, crispy onion, and brasa sauce.",
      itemChickenBurgerName: "Chicken Grill Burger",
      itemChickenBurgerDesc: "Marinated chicken breast, Swiss cheese, and cilantro mayo.",
      itemFriesName: "Brasa rustic fries",
      itemFriesDesc: "Potato wedges with smoked paprika and house dip.",
      itemLemonadeName: "Panela lemonade",
      itemLemonadeDesc: "Refreshing, natural, and freshly made.",
      itemComboParrilleroName: "Classic Grill Combo",
      itemComboParrilleroDesc: "Grilled meat, rustic fries, and a drink.",
      itemComboBurgerName: "Double Burger Combo",
      itemComboBurgerDesc: "Double Brasa Burger, fries, and soda.",
      itemComboFamilyName: "Family Brasa Combo",
      itemComboFamilyDesc: "Mixed meats, 2 sides, and 2 drinks.",
      panelTitleMeats: "Meat menu",
      panelTitleBurgers: "Burger menu",
      panelTitleSides: "Sides and drinks menu",
      panelTitleCombos: "Combo menu",
      itemChurrascoName: "Grilled churrasco 250g",
      itemClassicBurgerName: "Classic Brasa Burger",
      itemSodaColaName: "Cola soda 400ml",
      itemSodaLemonName: "Lemon soda 400ml",
      itemBeerLagerName: "National lager beer",
      itemBeerIpaName: "Craft IPA beer",
      regionLabel: "Country / Currency",
      regionCo: "Colombia (COP)",
      regionUs: "United States - Florida (USD)",
      ordersTitle: "Online orders (simulated)",
      ordersText:
        "Add products from the menu, review My purchases, and simulate checkout. No backend connection: this is a frontend flow simulation.",
      checkout: "Complete purchase",
      paymentTitle: "Choose payment method",
      paymentSubtitle: "Select how you want to pay for your order.",
      paymentTotal: "Total to pay",
      paymentMethodCard: "Debit/credit card",
      paymentMethodWallet: "Digital wallet",
      paymentMethodCash: "Pay at counter",
      paymentCancel: "Cancel",
      paymentConfirm: "Pay now",
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
      loginTitle: "Log in",
      loginSubtitle: "Sign in with your email and password to continue.",
      loginPassword: "Password *",
      loginState: "Signed in: {name}",
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
      loginSuccess: "Signed in successfully.",
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
        return `Debe tener como máximo ${max} caracteres.`;
      }
    }

    if (rule.startsWith("minnum:")) {
      const min = Number(rule.split(":")[1]);
      const current = Number(value);
      if (!isNumberValid(value) || (!Number.isNaN(min) && current < min)) {
        return `Ingresa un número mayor o igual a ${min}.`;
      }
    }

    if (rule.startsWith("maxnum:")) {
      const max = Number(rule.split(":")[1]);
      const current = Number(value);
      if (!isNumberValid(value) || (!Number.isNaN(max) && current > max)) {
        return `Ingresa un número menor o igual a ${max}.`;
      }
    }

    if (rule === "future-date") {
      const selectedDate = new Date(`${value}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
        return "Selecciona una fecha válida desde hoy en adelante.";
      }
    }

    return "";
  };

  const wireFormValidation = (formId, statusId, successMessageKey, onSuccess) => {
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

      if (typeof onSuccess === "function") {
        onSuccess(form);
      }

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
    const mobileCartCountNode = document.getElementById("mobileCartCount");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const clearCartBtn = document.getElementById("clearCartBtn");
    const cartStatusNode = document.getElementById("cartStatus");
    const paymentPanelNode = document.getElementById("paymentPanel");
    const paymentTotalNode = document.getElementById("paymentTotal");
    const closePaymentBtn = document.getElementById("closePaymentBtn");
    const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
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
    const featuredMenuGrid = document.getElementById("menuDestacadosGrid");
    const menuPanelNode = document.getElementById("menuCategoryPanel");
    const menuPanelTitleNode = document.getElementById("menuPanelTitle");
    const menuPanelListNode = document.getElementById("menuPanelList");
    const closeMenuPanelBtn = document.getElementById("closeMenuPanelBtn");
    const favoritesToggle = document.getElementById("favoritesToggle");
    const favoritesCountNode = document.getElementById("favoritesCount");
    const mobileFavoritesCountNode = document.getElementById("mobileFavoritesCount");
    const favoritesPanelNode = document.getElementById("favoritesPanel");
    const closeFavoritesBtn = document.getElementById("closeFavoritesBtn");
    const favoritesGridNode = document.getElementById("favoritesGrid");
    const favoritesEmptyNode = document.getElementById("favoritesEmpty");
    const featuredDetailPanelNode = document.getElementById("featuredDetailPanel");
    const closeFeaturedDetailBtn = document.getElementById("closeFeaturedDetailBtn");
    const featuredPrevBtn = document.getElementById("featuredPrevBtn");
    const featuredNextBtn = document.getElementById("featuredNextBtn");
    const featuredDetailPositionNode = document.getElementById("featuredDetailPosition");
    const featuredDetailImageNode = document.getElementById("featuredDetailImage");
    const featuredDetailContentNode = document.getElementById("featuredDetailContent");
    const featuredDetailNameNode = document.getElementById("featuredDetailName");
    const featuredDetailDescriptionNode = document.getElementById("featuredDetailDescription");
    const featuredDetailPriceNode = document.getElementById("featuredDetailPrice");
    const featuredDetailAddBtn = document.getElementById("featuredDetailAddBtn");

    let cart = [];
    let points = 0;
    const rewards = [80, 150, 280];
    const promoDay = 2;
    const usdRate = 4000;
    let activeRegion = "co";
    let activeMenuCategory = "all";
    let selectedFeaturedItem = null;
    let selectedFeaturedIndex = -1;
    const favoritesStorageKey = "favoriteProducts";
    const favorites = new Set(JSON.parse(localStorage.getItem(favoritesStorageKey) || "[]"));

    const categoryMenuData = {
      carnes: {
        titleKey: "panelTitleMeats",
        items: [
          { nameKey: "itemPuntaName", price: 49000 },
          { nameKey: "itemRibsName", price: 42000 },
          { nameKey: "itemChurrascoName", price: 45000 },
        ],
      },
      hamburguesas: {
        titleKey: "panelTitleBurgers",
        items: [
          { nameKey: "itemBrasaBurgerName", price: 34000 },
          { nameKey: "itemChickenBurgerName", price: 29000 },
          { nameKey: "itemClassicBurgerName", price: 26000 },
        ],
      },
      acompanamientos: {
        titleKey: "panelTitleSides",
        items: [
          { nameKey: "itemFriesName", price: 12000 },
          { nameKey: "itemLemonadeName", price: 9000 },
          { nameKey: "itemSodaColaName", price: 7000 },
          { nameKey: "itemSodaLemonName", price: 7000 },
          { nameKey: "itemBeerLagerName", price: 11000 },
          { nameKey: "itemBeerIpaName", price: 15000 },
        ],
      },
      combos: {
        titleKey: "panelTitleCombos",
        items: [
          { nameKey: "itemComboParrilleroName", price: 52000 },
          { nameKey: "itemComboBurgerName", price: 46000 },
          { nameKey: "itemComboFamilyName", price: 58000 },
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

    const setFeaturedDetailOpen = (open) => {
      if (!featuredDetailPanelNode) {
        return;
      }
      featuredDetailPanelNode.classList.toggle("hidden", !open);
      featuredDetailPanelNode.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.classList.toggle("overflow-hidden", open);

      if (!open) {
        selectedFeaturedItem = null;
        selectedFeaturedIndex = -1;
      }
    };

    const setFavoritesOpen = (open) => {
      if (!favoritesPanelNode || !favoritesToggle) {
        return;
      }
      favoritesPanelNode.classList.toggle("hidden", !open);
      favoritesPanelNode.setAttribute("aria-hidden", open ? "false" : "true");
      favoritesToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("overflow-hidden", open);
    };

    const saveFavorites = () => {
      localStorage.setItem(favoritesStorageKey, JSON.stringify(Array.from(favorites)));
    };

    const getAllProductCards = () => Array.from(document.querySelectorAll("#menuDestacadosGrid .menu-item-card"));

    const ensureFavoriteStars = () => {
      getAllProductCards().forEach((card) => {
        if (!(card instanceof HTMLElement)) {
          return;
        }

        card.classList.add("relative");
        const addBtn = card.querySelector(".add-to-cart");
        if (!(addBtn instanceof HTMLButtonElement)) {
          return;
        }

        const productId = addBtn.dataset.name || "";
        if (!productId) {
          return;
        }

        if (card.querySelector(".favorite-toggle")) {
          return;
        }

        const starBtn = document.createElement("button");
        starBtn.type = "button";
        starBtn.className = "favorite-toggle absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/40 bg-black/50 text-xl leading-none text-amber-200 transition hover:border-amber-300 hover:text-amber-100";
        starBtn.setAttribute("aria-label", `Marcar favorito: ${productId}`);
        starBtn.dataset.favoriteName = productId;
        starBtn.innerHTML = "☆";
        card.appendChild(starBtn);
      });
    };

    const makeFeaturedCardsKeyboardAccessible = () => {
      getAllProductCards().forEach((card) => {
        if (!(card instanceof HTMLElement)) {
          return;
        }

        const titleNode = card.querySelector('[data-i18n$="Name"]');
        const cardTitle = titleNode?.textContent?.trim() || "producto";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Ver detalle de ${cardTitle}`);
        card.classList.add("focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-amber-300");
      });
    };

    const syncFavoriteButtons = () => {
      document.querySelectorAll(".favorite-toggle, .panel-favorite-toggle").forEach((btn) => {
        if (!(btn instanceof HTMLButtonElement)) {
          return;
        }

        const id = btn.dataset.favoriteName || "";
        const isFav = favorites.has(id);
        btn.textContent = isFav ? "★" : "☆";
        btn.classList.toggle("bg-amber-300", isFav);
        btn.classList.toggle("text-zinc-950", isFav);
        btn.classList.toggle("border-amber-100", isFav);
        btn.classList.toggle("bg-black/50", !isFav);
        btn.classList.toggle("text-amber-200", !isFav);
      });

      if (favoritesCountNode) {
        favoritesCountNode.textContent = String(favorites.size);
      }

      if (mobileFavoritesCountNode) {
        mobileFavoritesCountNode.textContent = String(favorites.size);
      }
    };

    const extractCardProduct = (card) => {
      if (!(card instanceof HTMLElement)) {
        return null;
      }

      const addBtn = card.querySelector(".add-to-cart");
      const imgNode = card.querySelector("img");
      const nameNode = card.querySelector('[data-i18n$="Name"]');
      const descNode = card.querySelector('[data-i18n$="Desc"]');

      if (!(addBtn instanceof HTMLButtonElement) || !(imgNode instanceof HTMLImageElement)) {
        return null;
      }

      const id = addBtn.dataset.name || "";
      const price = Number(addBtn.dataset.price || "0");
      if (!id || Number.isNaN(price) || price <= 0) {
        return null;
      }

      return {
        id,
        name: nameNode?.textContent?.trim() || id,
        description: descNode?.textContent?.trim() || "",
        price,
        image: imgNode.src,
        alt: imgNode.alt || id,
        category: card.dataset.category || "",
      };
    };

    const buildProductsCatalog = () => {
      const catalog = new Map();
      getAllProductCards().forEach((card) => {
        const product = extractCardProduct(card);
        if (product) {
          catalog.set(product.id, product);
        }
      });
      return catalog;
    };

    const renderFavorites = () => {
      if (!favoritesGridNode || !favoritesEmptyNode) {
        return;
      }

      const catalog = buildProductsCatalog();
      const favoriteProducts = Array.from(favorites)
        .map((id) => catalog.get(id))
        .filter(Boolean);

      favoritesGridNode.innerHTML = favoriteProducts
        .map(
          (product) =>
            `<article class="menu-item-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-zinc-900 hover:shadow-lg hover:shadow-amber-800/20" data-category="${product.category}">` +
            `<button type="button" class="favorite-toggle absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-100 bg-amber-300 text-xl leading-none text-zinc-950 transition hover:border-amber-200" data-favorite-name="${product.id}" aria-label="Marcar favorito: ${product.id}">★</button>` +
            `<img src="${product.image}" alt="${product.alt}" class="h-44 w-full rounded-2xl border border-white/20 object-cover" loading="lazy" />` +
            `<div class="mt-4 flex items-start justify-between gap-3">` +
            `<div class="min-w-0">` +
            `<p class="mt-1 font-semibold text-white">${product.name}</p>` +
            `<p class="mt-1 min-h-[2.75rem] text-sm text-zinc-300">${product.description}</p>` +
            `<p class="mt-3 text-sm font-bold text-amber-300">${formatMoney(product.price)}</p>` +
            `</div>` +
            `<button type="button" class="favorite-add-to-cart shrink-0 self-end flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-brand-secondary text-lg font-black leading-none text-zinc-950 shadow-md shadow-amber-700/30 transition hover:from-amber-200 hover:to-orange-400" data-name="${product.id}" data-price="${product.price}" aria-label="Agregar ${product.name}">+</button>` +
            `</div></article>`
        )
        .join("");

      favoritesEmptyNode.classList.toggle("hidden", favoriteProducts.length > 0);
      favoritesGridNode.classList.toggle("hidden", favoriteProducts.length === 0);
      syncFavoriteButtons();
    };

    const toggleFavorite = (productId) => {
      if (!productId) {
        return;
      }

      if (favorites.has(productId)) {
        favorites.delete(productId);
      } else {
        favorites.add(productId);
      }

      saveFavorites();
      syncFavoriteButtons();
      renderFavorites();
    };

    const getFeaturedCards = () => Array.from(document.querySelectorAll("#menuDestacadosGrid .menu-item-card"));

    const animateFeaturedDetailChange = (direction = 0) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const distance = direction === 0 ? 0 : direction > 0 ? 20 : -20;

      if (featuredDetailImageNode instanceof HTMLImageElement) {
        featuredDetailImageNode.animate(
          [
            { opacity: 0.2, transform: `translateX(${distance}px) scale(0.98)` },
            { opacity: 1, transform: "translateX(0) scale(1)" },
          ],
          { duration: 240, easing: "ease-out" }
        );
      }

      if (featuredDetailContentNode instanceof HTMLElement) {
        featuredDetailContentNode.animate(
          [
            { opacity: 0.1, transform: `translateX(${distance * -1}px)` },
            { opacity: 1, transform: "translateX(0)" },
          ],
          { duration: 240, easing: "ease-out" }
        );
      }
    };

    const renderFeaturedDetailByIndex = (index, options = {}) => {
      const { animate = false, direction = 0 } = options;
      const cards = getFeaturedCards();
      if (cards.length === 0) {
        return;
      }

      const normalizedIndex = ((index % cards.length) + cards.length) % cards.length;
      const card = cards[normalizedIndex];
      if (!(card instanceof HTMLElement)) {
        return;
      }

      const imageNode = card.querySelector("img");
      const titleNode = card.querySelector('[data-i18n$="Name"]');
      const descriptionNode = card.querySelector('[data-i18n$="Desc"]');
      const addButtonNode = card.querySelector(".add-to-cart");

      if (!(imageNode instanceof HTMLImageElement) || !(addButtonNode instanceof HTMLButtonElement)) {
        return;
      }

      const name = addButtonNode.dataset.name || titleNode?.textContent?.trim() || "";
      const price = Number(addButtonNode.dataset.price || "0");
      const description = descriptionNode?.textContent?.trim() || "";

      if (!name || Number.isNaN(price) || price <= 0) {
        return;
      }

      selectedFeaturedIndex = normalizedIndex;
      selectedFeaturedItem = {
        name,
        price,
        description,
        imageSrc: imageNode.src,
        imageAlt: imageNode.alt || name,
      };

      if (featuredDetailImageNode instanceof HTMLImageElement) {
        featuredDetailImageNode.src = selectedFeaturedItem.imageSrc;
        featuredDetailImageNode.alt = selectedFeaturedItem.imageAlt;
      }
      if (featuredDetailNameNode) {
        featuredDetailNameNode.textContent = selectedFeaturedItem.name;
      }
      if (featuredDetailDescriptionNode) {
        featuredDetailDescriptionNode.textContent = selectedFeaturedItem.description;
        featuredDetailDescriptionNode.scrollTop = 0;
      }
      if (featuredDetailPriceNode) {
        featuredDetailPriceNode.textContent = formatMoney(selectedFeaturedItem.price);
      }
      if (featuredDetailPositionNode) {
        featuredDetailPositionNode.textContent = `${normalizedIndex + 1} / ${cards.length}`;
      }

      if (animate) {
        animateFeaturedDetailChange(direction);
      }
    };

    const stepFeaturedDetail = (step) => {
      if (selectedFeaturedIndex < 0) {
        return;
      }
      renderFeaturedDetailByIndex(selectedFeaturedIndex + step, { animate: true, direction: step });
    };

    const addItemToCart = (name, price, showStatusMessage = false) => {
      const existing = cart.find((item) => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      renderCart();
      setCartOpen(true);
      if (showStatusMessage) {
        showCartStatus(`Agregado al carrito: ${name}`);
      }
    };

    const openFeaturedDetailFromCard = (card) => {
      if (!(card instanceof HTMLElement)) {
        return;
      }

      const cards = getFeaturedCards();
      const cardIndex = cards.indexOf(card);
      if (cardIndex < 0) {
        return;
      }

      renderFeaturedDetailByIndex(cardIndex, { animate: true, direction: 0 });
      setFeaturedDetailOpen(true);
    };

    const renderCategoryPanel = (category) => {
      const categoryData = categoryMenuData[category];
      if (!categoryData || !menuPanelTitleNode || !menuPanelListNode) {
        return;
      }

      menuPanelTitleNode.textContent = t(categoryData.titleKey);
      menuPanelListNode.innerHTML = categoryData.items
        .map(
          (item) => {
            const itemName = t(item.nameKey);
            const isFav = favorites.has(itemName);
            return (
            `<li class="flex items-center justify-between rounded-xl border border-white/10 bg-black/25 px-4 py-3">` +
            `<div class="min-w-0">` +
            `<p class="text-sm text-zinc-100">${itemName}</p>` +
            `<p class="text-sm font-bold text-amber-300">${formatMoney(item.price)}</p>` +
            `</div>` +
            `<div class="flex items-center gap-2">` +
            `<button type="button" class="panel-favorite-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-200/40 ${isFav ? "bg-amber-300 text-zinc-950 border-amber-100" : "bg-black/50 text-amber-200"} text-xl leading-none transition hover:border-amber-300 hover:text-amber-100" data-favorite-name="${itemName}" aria-label="Marcar favorito: ${itemName}">${isFav ? "★" : "☆"}</button>` +
            `<button type="button" class="panel-add-to-cart inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-brand-secondary text-2xl font-extrabold leading-none text-zinc-950 shadow-md shadow-amber-700/30 transition hover:from-amber-200 hover:to-orange-400" data-name="${itemName}" data-price="${item.price}" aria-label="Agregar ${itemName}">+</button>` +
            `</div>` +
            `</li>`
            );
          }
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

    const setPaymentOpen = (open) => {
      if (!paymentPanelNode) {
        return;
      }
      paymentPanelNode.classList.toggle("hidden", !open);
      paymentPanelNode.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.classList.toggle("overflow-hidden", open);
    };

    const completeCheckout = () => {
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

      if (mobileCartCountNode) {
        mobileCartCountNode.textContent = String(count);
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

        if (!name || Number.isNaN(price) || price <= 0) {
          return;
        }

        addItemToCart(name, price, false);
      });
    });

    ensureFavoriteStars();
    makeFeaturedCardsKeyboardAccessible();
    syncFavoriteButtons();
    renderFavorites();

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const favoriteBtn = target.closest(".favorite-toggle");
      if (favoriteBtn instanceof HTMLButtonElement) {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(favoriteBtn.dataset.favoriteName || "");
        return;
      }

      const favAddBtn = target.closest(".favorite-add-to-cart");
      if (favAddBtn instanceof HTMLButtonElement) {
        const name = favAddBtn.dataset.name;
        const price = Number(favAddBtn.dataset.price || "0");
        if (!name || Number.isNaN(price) || price <= 0) {
          return;
        }
        addItemToCart(name, price, true);
      }
    });

    if (cartToggle) {
      cartToggle.addEventListener("click", () => {
        const expanded = cartToggle.getAttribute("aria-expanded") === "true";
        setCartOpen(!expanded);
      });
    }

    if (favoritesToggle) {
      favoritesToggle.addEventListener("click", () => {
        const expanded = favoritesToggle.getAttribute("aria-expanded") === "true";
        setFavoritesOpen(!expanded);
      });
    }

    if (closeFavoritesBtn) {
      closeFavoritesBtn.addEventListener("click", () => setFavoritesOpen(false));
    }

    if (favoritesPanelNode) {
      favoritesPanelNode.addEventListener("click", (event) => {
        if (event.target === favoritesPanelNode) {
          setFavoritesOpen(false);
        }
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

        if (paymentTotalNode) {
          const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
          paymentTotalNode.textContent = formatMoney(total);
        }
        setPaymentOpen(true);
      });
    }

    if (closePaymentBtn) {
      closePaymentBtn.addEventListener("click", () => setPaymentOpen(false));
    }

    if (confirmPaymentBtn) {
      confirmPaymentBtn.addEventListener("click", () => {
        if (cart.length === 0) {
          setPaymentOpen(false);
          showCartStatus(t("addBeforeCheckout"));
          return;
        }
        completeCheckout();
        setPaymentOpen(false);
      });
    }

    if (paymentPanelNode) {
      paymentPanelNode.addEventListener("click", (event) => {
        if (event.target === paymentPanelNode) {
          setPaymentOpen(false);
        }
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

    if (featuredMenuGrid) {
      featuredMenuGrid.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        if (target.closest(".add-to-cart")) {
          return;
        }

        if (target.closest(".favorite-toggle")) {
          return;
        }

        const card = target.closest(".menu-item-card");
        if (card instanceof HTMLElement) {
          openFeaturedDetailFromCard(card);
        }
      });

      featuredMenuGrid.addEventListener("keydown", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        if (target.matches("button, a, input, select, textarea")) {
          return;
        }

        const card = target.closest(".menu-item-card");
        if (!(card instanceof HTMLElement)) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFeaturedDetailFromCard(card);
        }
      });
    }

    if (closeFeaturedDetailBtn) {
      closeFeaturedDetailBtn.addEventListener("click", () => setFeaturedDetailOpen(false));
    }

    if (featuredPrevBtn) {
      featuredPrevBtn.addEventListener("click", () => stepFeaturedDetail(-1));
    }

    if (featuredNextBtn) {
      featuredNextBtn.addEventListener("click", () => stepFeaturedDetail(1));
    }

    if (featuredDetailPanelNode) {
      featuredDetailPanelNode.addEventListener("click", (event) => {
        if (event.target === featuredDetailPanelNode) {
          setFeaturedDetailOpen(false);
        }
      });
    }

    if (featuredDetailAddBtn) {
      featuredDetailAddBtn.addEventListener("click", () => {
        if (!selectedFeaturedItem) {
          return;
        }

        addItemToCart(selectedFeaturedItem.name, selectedFeaturedItem.price, true);
      });
    }

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

        const favoriteButton = target.closest(".panel-favorite-toggle");
        if (favoriteButton instanceof HTMLButtonElement) {
          toggleFavorite(favoriteButton.dataset.favoriteName || "");
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

      if (event.key === "Escape") {
        setFeaturedDetailOpen(false);
        setFavoritesOpen(false);
      }

      if (!featuredDetailPanelNode || featuredDetailPanelNode.classList.contains("hidden")) {
        return;
      }

      if (event.key === "ArrowLeft") {
        stepFeaturedDetail(-1);
      }

      if (event.key === "ArrowRight") {
        stepFeaturedDetail(1);
      }
    });

    window.addEventListener("site-language-changed", () => {
      updateMenuPrices();
      renderCart();
      if (activeMenuCategory !== "all") {
        renderCategoryPanel(activeMenuCategory);
      }
      if (pointsStatusNode && points === 0) {
        pointsStatusNode.textContent = t("pointsEmpty");
      }
      if (featuredDetailPanelNode && !featuredDetailPanelNode.classList.contains("hidden") && selectedFeaturedIndex >= 0) {
        renderFeaturedDetailByIndex(selectedFeaturedIndex, { animate: false });
      }
      ensureFavoriteStars();
      makeFeaturedCardsKeyboardAccessible();
      syncFavoriteButtons();
      renderFavorites();
      updateWeeklyPromo();
      updateLoyaltyProgress();
    });

    updateMenuPrices();
    renderCart();
    updateWeeklyPromo();
    updateLoyaltyProgress();
  };

  const setupAnchorNavigation = () => {
    const headerNode = document.querySelector("header");
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    const getHeaderOffset = () => {
      if (!headerNode) {
        return 0;
      }
      return Math.ceil(headerNode.getBoundingClientRect().height) + 8;
    };

    const scrollToHash = (hash, updateHash) => {
      if (!hash || hash === "#") {
        return;
      }

      const targetNode = document.querySelector(hash);
      if (!targetNode) {
        return;
      }

      const top = window.scrollY + targetNode.getBoundingClientRect().top - getHeaderOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

      if (updateHash) {
        history.pushState(null, "", hash);
      }
    };

    anchorLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const hash = link.getAttribute("href") || "";
        if (!hash.startsWith("#") || !document.querySelector(hash)) {
          return;
        }

        event.preventDefault();
        scrollToHash(hash, true);
      });
    });

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        scrollToHash(window.location.hash, false);
      });
    }
  };

  const setupLoginModal = () => {
    const loginOpenBtn = document.getElementById("loginOpenBtn");
    const loginStateBadge = document.getElementById("loginStateBadge");
    const loginPanelNode = document.getElementById("loginPanel");
    const closeLoginBtn = document.getElementById("closeLoginBtn");
    const cancelLoginBtn = document.getElementById("cancelLoginBtn");
    const loginStorageKey = "brasalandLoggedInUser";

    if (!loginOpenBtn || !loginPanelNode || !loginStateBadge) {
      return;
    }

    const getDisplayNameFromEmail = (email) => {
      const raw = String(email || "").split("@")[0] || "Usuario";
      const base = raw.replace(/[._-]+/g, " ").trim();
      if (!base) {
        return "Usuario";
      }
      return base
        .split(" ")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(" ");
    };

    const applyLoginState = (email) => {
      const hasSession = typeof email === "string" && email.trim() !== "";
      loginOpenBtn.classList.toggle("hidden", hasSession);
      loginOpenBtn.setAttribute("aria-hidden", hasSession ? "true" : "false");
      loginStateBadge.classList.toggle("hidden", !hasSession);

      if (hasSession) {
        const displayName = getDisplayNameFromEmail(email);
        loginStateBadge.textContent = t("loginState", { name: displayName });
      } else {
        loginStateBadge.textContent = "";
      }
    };

    const setLoginOpen = (open) => {
      loginPanelNode.classList.toggle("hidden", !open);
      loginPanelNode.setAttribute("aria-hidden", open ? "false" : "true");
      loginOpenBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("overflow-hidden", open);
    };

    loginOpenBtn.addEventListener("click", () => setLoginOpen(true));

    if (closeLoginBtn) {
      closeLoginBtn.addEventListener("click", () => setLoginOpen(false));
    }

    if (cancelLoginBtn) {
      cancelLoginBtn.addEventListener("click", () => setLoginOpen(false));
    }

    loginPanelNode.addEventListener("click", (event) => {
      if (event.target === loginPanelNode) {
        setLoginOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !loginPanelNode.classList.contains("hidden")) {
        setLoginOpen(false);
      }
    });

    window.addEventListener("site-language-changed", () => {
      const storedUser = localStorage.getItem(loginStorageKey) || "";
      applyLoginState(storedUser);
    });

    const storedUser = localStorage.getItem(loginStorageKey) || "";
    applyLoginState(storedUser);

    window.addEventListener("login-success", (event) => {
      const email = event && event.detail && typeof event.detail.email === "string" ? event.detail.email : "";
      localStorage.setItem(loginStorageKey, email);
      applyLoginState(email);
      setLoginOpen(false);
    });
  };

  const setupMobileMenu = () => {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileMenuPanel = document.getElementById("mobileMenuPanel");
    const mobileMenuClose = document.getElementById("mobileMenuClose");
    const mobileLoginBtn = document.getElementById("mobileLoginBtn");
    const mobileFavoritesBtn = document.getElementById("mobileFavoritesBtn");
    const mobileCartBtn = document.getElementById("mobileCartBtn");

    if (!mobileMenuToggle || !mobileMenuPanel) {
      return;
    }

    const setMobileMenuOpen = (open) => {
      mobileMenuPanel.classList.toggle("max-h-0", !open);
      mobileMenuPanel.classList.toggle("opacity-0", !open);
      mobileMenuPanel.classList.toggle("-translate-y-2", !open);
      mobileMenuPanel.classList.toggle("pointer-events-none", !open);
      mobileMenuPanel.classList.toggle("max-h-[80vh]", open);
      mobileMenuPanel.classList.toggle("opacity-100", open);
      mobileMenuPanel.classList.toggle("translate-y-0", open);
      mobileMenuPanel.classList.toggle("pointer-events-auto", open);
      mobileMenuPanel.setAttribute("aria-hidden", open ? "false" : "true");
      mobileMenuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("overflow-hidden", open);
    };

    const closeAndClick = (targetId) => {
      setMobileMenuOpen(false);
      const target = document.getElementById(targetId);
      if (target instanceof HTMLElement) {
        target.click();
      }
    };

    mobileMenuToggle.addEventListener("click", () => {
      const expanded = mobileMenuToggle.getAttribute("aria-expanded") === "true";
      setMobileMenuOpen(!expanded);
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", () => setMobileMenuOpen(false));
    }

    mobileMenuPanel.querySelectorAll('a[href]').forEach((link) => {
      link.addEventListener("click", () => setMobileMenuOpen(false));
    });

    if (mobileLoginBtn) {
      mobileLoginBtn.addEventListener("click", () => closeAndClick("loginOpenBtn"));
    }

    if (mobileFavoritesBtn) {
      mobileFavoritesBtn.addEventListener("click", () => closeAndClick("favoritesToggle"));
    }

    if (mobileCartBtn) {
      mobileCartBtn.addEventListener("click", () => closeAndClick("cartToggle"));
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenuToggle.getAttribute("aria-expanded") === "true") {
        setMobileMenuOpen(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    });
  };

  wireFormValidation("loginForm", "loginStatus", "loginSuccess", (form) => {
    const emailInput = form.querySelector("#loginEmail");
    const email = emailInput instanceof HTMLInputElement ? emailInput.value.trim() : "";
    window.dispatchEvent(new CustomEvent("login-success", { detail: { email } }));
  });
  wireFormValidation("applicationForm", "formStatus", "registerSuccess");
  wireFormValidation("contactForm", "contactStatus", "contactSuccess");
  setupCartAndLoyalty();
  setupLoginModal();
  setupMobileMenu();
  setupAnchorNavigation();
  applyTranslations();
})();
