// Layering: a flat design peels into its editable layers.
// Data + interaction for the Layering item in #model-releases. Respects reduced motion.
(function () {
  const LAYERING = [
  {
    "key": "tableware_5e799684",
    "title": "Tableware — flat lay",
    "w": 432,
    "h": 640,
    "composite": "images/layering/tableware_5e799684/composite.png",
    "layers": [
      {
        "src": "images/layering/tableware_5e799684/layer_00_A_stainless_steel_fork_a.png",
        "label": "A stainless steel fork…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_01_A_round_white_ceramic_pl.png",
        "label": "A round white ceramic…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_02_A_round_white_ceramic_bo.png",
        "label": "A round white ceramic…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_03_A_small_square_white_cer.png",
        "label": "A small square white…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_04_A_round_white_ceramic_pl.png",
        "label": "A round white ceramic…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_05_A_small_round_white_cera.png",
        "label": "A small round white…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_06_Several_sprigs_of_fresh.png",
        "label": "Several sprigs of fresh"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_07_A_round_white_ceramic_pl.png",
        "label": "A round white ceramic…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_08_A_large_white_ceramic_co.png",
        "label": "A large white ceramic…"
      },
      {
        "src": "images/layering/tableware_5e799684/layer_09_Background_bg.png",
        "label": "Background"
      }
    ]
  },
  {
    "key": "run_43b747c1",
    "title": "Manga — anime panel",
    "w": 432,
    "h": 640,
    "composite": "images/layering/run_43b747c1/composite.png",
    "layers": [
      { "src": "images/layering/run_43b747c1/layer_00_A_neatly_tied_bow_ribbon.png", "label": "A neatly tied bow…" },
      { "src": "images/layering/run_43b747c1/layer_01_A_cheerful_teenage_girl.png", "label": "A cheerful teenage girl" },
      { "src": "images/layering/run_43b747c1/layer_02_A_clean_white_oval-shape.png", "label": "Speech bubble" },
      { "src": "images/layering/run_43b747c1/layer_03_A_teenage_anime_girl_wit.png", "label": "A teenage anime girl…" },
      { "src": "images/layering/run_43b747c1/layer_04_Background_bg.png", "label": "Background" }
    ]
  },
  {
    "key": "run_e8f07d60",
    "title": "Interior — cat reading",
    "w": 528,
    "h": 640,
    "composite": "images/layering/run_e8f07d60/composite.png",
    "layers": [
      { "src": "images/layering/run_e8f07d60/layer_00_A_plump_fluffy_gray_Brit.png", "label": "A plump fluffy gray cat" },
      { "src": "images/layering/run_e8f07d60/layer_01_A_classic_brown_leather.png", "label": "A classic brown leather chair" },
      { "src": "images/layering/run_e8f07d60/layer_02_A_large_plush_beige_sofa.png", "label": "A large plush beige sofa" },
      { "src": "images/layering/run_e8f07d60/layer_03_A_compact_wooden_side_ta.png", "label": "A compact wooden side table" },
      { "src": "images/layering/run_e8f07d60/layer_04_A_warm-toned_table_lamp.png", "label": "A warm-toned table lamp" },
      { "src": "images/layering/run_e8f07d60/layer_05_A_standard-sized_ceramic.png", "label": "A ceramic mug" },
      { "src": "images/layering/run_e8f07d60/layer_06_A_small_potted_plant_sit.png", "label": "A small potted plant" },
      { "src": "images/layering/run_e8f07d60/layer_07_A_tall_built-in_or_frees.png", "label": "A tall bookshelf" },
      { "src": "images/layering/run_e8f07d60/layer_08_Background_bg.png", "label": "Background" }
    ]
  },
  {
    "key": "greenfigure_e002c9b4",
    "title": "Sci-fi — atmospheric scene",
    "w": 640,
    "h": 352,
    "composite": "images/layering/greenfigure_e002c9b4/composite.png",
    "layers": [
      {
        "src": "images/layering/greenfigure_e002c9b4/layer_00_Green_atmospheric_lighti.png",
        "label": "Green atmospheric lighting"
      },
      {
        "src": "images/layering/greenfigure_e002c9b4/layer_01_Hooded_figure_standing_c.png",
        "label": "Hooded figure"
      },
      {
        "src": "images/layering/greenfigure_e002c9b4/layer_02_Shadowy_robed_figure_sta.png",
        "label": "Shadowy robed figure"
      },
      {
        "src": "images/layering/greenfigure_e002c9b4/layer_03_Background_bg.png",
        "label": "Background"
      }
    ]
  },
  {
    "key": "run_9ac53c0b",
    "title": "Nocturne — fashion editorial",
    "w": 480,
    "h": 640,
    "composite": "images/layering/run_9ac53c0b/composite.png",
    "layers": [
      {
        "src": "images/layering/run_9ac53c0b/layer_00_A_large_dragonfly_insect.png",
        "label": "A large dragonfly…"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_01_Billowing_sheer_tulle_fa.png",
        "label": "Billowing sheer tulle…"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_02_A_cluster_of_dark_dried.png",
        "label": "A cluster of dark dried"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_03_A_tall_slender_woman_wit.png",
        "label": "A tall slender woman…"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_04_A_cluster_of_dark_jagged.png",
        "label": "A cluster of dark…"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_05_Several_slender_dragonfl.png",
        "label": "Several slender…"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_06_A_typographic_overlay_co.png",
        "label": "A typographic overlay…"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_07_A_dramatic_coastal_lands.png",
        "label": "A dramatic coastal…"
      },
      {
        "src": "images/layering/run_9ac53c0b/layer_08_Background_bg.png",
        "label": "Background"
      }
    ]
  },
  {
    "key": "run_a2a492a3",
    "title": "Dining — place setting",
    "w": 640,
    "h": 640,
    "composite": "images/layering/run_a2a492a3/composite.png",
    "layers": [
      { "src": "images/layering/run_a2a492a3/layer_00_A_soft_gray_linen_napkin.png", "label": "A soft gray linen napkin" },
      { "src": "images/layering/run_a2a492a3/layer_01_A_small_round_shallow_wh.png", "label": "A small shallow bowl" },
      { "src": "images/layering/run_a2a492a3/layer_02_A_medium-sized_round_whi.png", "label": "A medium plate" },
      { "src": "images/layering/run_a2a492a3/layer_03_A_large_round_white_cera.png", "label": "A large ceramic plate" },
      { "src": "images/layering/run_a2a492a3/layer_04_A_large_rustic_charger_p.png", "label": "A rustic charger plate" },
      { "src": "images/layering/run_a2a492a3/layer_05_A_light_blue_ceramic_bow.png", "label": "A light blue bowl" },
      { "src": "images/layering/run_a2a492a3/layer_06_A_white_ceramic_tea_cup.png", "label": "A white tea cup" },
      { "src": "images/layering/run_a2a492a3/layer_07_A_small_potted_green_pla.png", "label": "A small potted plant" },
      { "src": "images/layering/run_a2a492a3/layer_08_An_open_book_or_menu_car.png", "label": "An open menu card" },
      { "src": "images/layering/run_a2a492a3/layer_09_Background_bg.png", "label": "Background" }
    ]
  },
  {
    "key": "run_b715db3d",
    "title": "Senses — fashion editorial",
    "w": 432,
    "h": 640,
    "composite": "images/layering/run_b715db3d/composite.png",
    "layers": [
      { "src": "images/layering/run_b715db3d/layer_00_A_tall_vertical_typograp.png", "label": "Title typography" },
      { "src": "images/layering/run_b715db3d/layer_01_A_clean_minimalist_descr.png", "label": "Body text" },
      { "src": "images/layering/run_b715db3d/layer_02_A_woman_standing_in_a_po.png", "label": "A woman posing" },
      { "src": "images/layering/run_b715db3d/layer_03_A_large_jagged_volcanic.png", "label": "A volcanic rock" },
      { "src": "images/layering/run_b715db3d/layer_04_Background_bg.png", "label": "Background" }
    ]
  },
  {
    "key": "run_9203c3de",
    "title": "Luma — product poster",
    "w": 256,
    "h": 640,
    "composite": "images/layering/run_9203c3de/composite.png",
    "layers": [
      {
        "src": "images/layering/run_9203c3de/layer_00_The_Luma_logo_positioned.png",
        "label": "The Luma logo…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_01_A_small_square_QR_code_p.png",
        "label": "A small square QR code…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_02_Bold_headline_text_readi.png",
        "label": "Bold headline text…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_03_A_short_block_of_subtitl.png",
        "label": "A short block of…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_04_Three_software_applicati.png",
        "label": "Three software…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_05_A_curved_dashed_line_arc.png",
        "label": "A curved dashed line…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_06_White_sans-serif_text_re.png",
        "label": "White sans-serif text…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_07_A_Luma_app_UI_card_panel.png",
        "label": "A Luma app UI card…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_08_A_Luma_app_UI_card_panel.png",
        "label": "A Luma app UI card…"
      },
      {
        "src": "images/layering/run_9203c3de/layer_09_Background_bg.png",
        "label": "Background"
      }
    ]
  }
];

  const deck = document.getElementById('lyr-deck');
  if (!deck) return;
  const countEl = document.getElementById('lyr-count');
  const titleEl = document.getElementById('lyr-title');
  const thumbsEl = document.getElementById('lyr-thumbs');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const MAXW = 240, MAXH = 172;
  const N = LAYERING.length;
  let cur = 0;

  function build(i) {
    cur = ((i % N) + N) % N;
    const ex = LAYERING[cur];
    const s = Math.min(MAXW / ex.w, MAXH / ex.h);
    const dw = Math.round(ex.w * s), dh = Math.round(ex.h * s);
    deck.style.width = dw + 'px';
    deck.style.height = dh + 'px';

    const ordered = ex.layers.slice().reverse(); // background first (back)
    const n = ordered.length;
    // fan strongly to the LEFT (empty space) so it never covers the text on the right.
    const stepZ = Math.max(dw, dh) * 0.085;
    const spreadX = dw * 0.095;
    const spreadY = dh * 0.02;

    deck.innerHTML = '';
    ordered.forEach((L, rank) => {
      const el = document.createElement('div');
      el.className = 'lyr-layer';
      const img = document.createElement('img');
      img.src = L.src; img.alt = ''; img.loading = 'lazy';
      el.appendChild(img);
      const lab = document.createElement('span');
      lab.className = 'lyr-lab'; lab.textContent = L.label;
      el.appendChild(lab);
      el.dataset.z = 'translateZ(' + (rank * stepZ) + 'px) translateX(' + (-rank * spreadX) + 'px) translateY(' + (rank * spreadY) + 'px)';
      deck.appendChild(el);
    });

    countEl.textContent = n + ' layers';
    titleEl.textContent = ex.title;
    if (thumbsEl) {
      [].forEach.call(thumbsEl.children, (b, j) => b.classList.toggle('active', j === cur));
    }
    applyExplode(false);
  }

  function applyExplode(on) {
    deck.classList.toggle('explode', on);
    [].forEach.call(deck.querySelectorAll('.lyr-layer'), (el) => {
      el.style.transform = on ? el.dataset.z : 'translateZ(0)';
    });
  }

  // --- auto-showcase: cycle through designs, peeling each open in turn ---
  let paused = false;
  let started = false;
  let autoTimer = null;
  let peelTimer = null;
  let resumeTimer = null;

  function clearTimers() {
    clearTimeout(autoTimer); clearTimeout(peelTimer);
  }

  function autoStep() {
    if (paused || reduce) return;
    clearTimers();
    applyExplode(true);                                   // peel current open
    peelTimer = setTimeout(() => {
      if (paused) return;
      applyExplode(false);                                // collapse
      autoTimer = setTimeout(() => {
        if (paused) return;
        build(cur + 1);                                   // advance to next design
        autoStep();
      }, 750);
    }, 2600);
  }

  function pauseAuto(resumeMs) {
    paused = true;
    clearTimers();
    clearTimeout(resumeTimer);
    if (resumeMs) resumeTimer = setTimeout(() => { paused = false; autoStep(); }, resumeMs);
  }

  // hover to explore — pauses the cycle and holds it open
  deck.addEventListener('mouseenter', () => { pauseAuto(0); applyExplode(true); });
  deck.addEventListener('mouseleave', () => { applyExplode(false); pauseAuto(1800); });
  deck.addEventListener('click', () => { pauseAuto(6000); applyExplode(!deck.classList.contains('explode')); });

  const prev = document.getElementById('lyr-prev');
  const next = document.getElementById('lyr-next');
  if (prev) prev.addEventListener('click', () => { build(cur - 1); pauseAuto(9000); });
  if (next) next.addEventListener('click', () => { build(cur + 1); pauseAuto(9000); });

  // small thumbnails of the other designs
  if (thumbsEl) {
    LAYERING.forEach((ex, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'lyr-thumb';
      b.setAttribute('aria-label', ex.title);
      b.innerHTML = '<img src="' + ex.composite + '" alt="" loading="lazy">';
      b.addEventListener('click', () => { build(i); pauseAuto(9000); });
      thumbsEl.appendChild(b);
    });
  }

  // swipe left/right on the preview to switch designs (touch)
  let touchX = null;
  deck.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  deck.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { build(cur + (dx < 0 ? 1 : -1)); pauseAuto(9000); }
    touchX = null;
  }, { passive: true });

  build(0);

  // start the auto-showcase once it first scrolls into view
  function start() {
    if (started || reduce) return;
    started = true;
    autoTimer = setTimeout(autoStep, 1400);
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { start(); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(deck);
  } else {
    start();
  }
})();
