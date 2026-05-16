// =============================================
//  BODY PART DATA — extend with your own content
// =============================================
const bodyPartData = {
  "left-shoulder": {
    title: "Left Shoulder",
    icon: "🦾",
    badge: "Glenohumeral Joint",
    svgX: 110, svgY: 149,
    conditions: [
      "Rotator cuff tear (partial or full-thickness)",
      "Shoulder impingement syndrome",
      "Frozen shoulder (adhesive capsulitis)",
      "Glenohumeral osteoarthritis",
      "Labral tear (SLAP lesion)",
      "Recurrent shoulder dislocation"
    ],
    diagnostics: [
      "MRI arthrogram for soft tissue evaluation",
      "X-ray for bony alignment & arthritis",
      "Ultrasound for dynamic tendon assessment",
      "CT scan for complex fractures",
      "Neer & Hawkins impingement tests"
    ],
    treatments: [
      "Arthroscopic Repair", "Rotator Cuff Surgery",
      "Cortisone Injection", "Physiotherapy",
      "Shoulder Replacement", "PRP Therapy",
      "Capsular Release", "Stabilisation Surgery"
    ]
  },
  "right-shoulder": {
    title: "Right Shoulder",
    icon: "🦾",
    badge: "Glenohumeral Joint",
    svgX: 242, svgY: 149,
    conditions: [
      "Rotator cuff tear (partial or full-thickness)",
      "Shoulder impingement syndrome",
      "Frozen shoulder (adhesive capsulitis)",
      "Glenohumeral osteoarthritis",
      "Labral tear (SLAP lesion)",
      "Recurrent shoulder dislocation"
    ],
    diagnostics: [
      "MRI arthrogram for soft tissue evaluation",
      "X-ray for bony alignment & arthritis",
      "Ultrasound for dynamic tendon assessment",
      "CT scan for complex fractures",
      "Neer & Hawkins impingement tests"
    ],
    treatments: [
      "Arthroscopic Repair", "Rotator Cuff Surgery",
      "Cortisone Injection", "Physiotherapy",
      "Shoulder Replacement", "PRP Therapy",
      "Capsular Release", "Stabilisation Surgery"
    ]
  },
  "spine": {
    title: "Spine / Lumbar",
    icon: "🦴",
    badge: "Vertebral Column",
    svgX: 173, svgY: 256,
    conditions: [
      "Lumbar disc herniation (L4-L5, L5-S1)",
      "Spinal stenosis",
      "Degenerative disc disease",
      "Spondylolisthesis",
      "Sciatica & radiculopathy",
      "Vertebral compression fracture"
    ],
    diagnostics: [
      "MRI spine (gold standard for disc pathology)",
      "CT myelogram for canal stenosis",
      "Bone density scan (DEXA) for osteoporosis",
      "Nerve conduction study (NCS / EMG)",
      "Dynamic flexion-extension X-rays"
    ],
    treatments: [
      "Microdiscectomy", "Spinal Fusion",
      "Epidural Injection", "Nerve Block",
      "TLIF / PLIF Surgery", "Kyphoplasty",
      "Laminectomy", "Physiotherapy"
    ]
  },
  "left-hip": {
    title: "Left Hip",
    icon: "🦿",
    badge: "Hip Joint",
    svgX: 135, svgY: 360,
    conditions: [
      "Hip osteoarthritis (end-stage)",
      "Femoroacetabular impingement (FAI)",
      "Avascular necrosis of the femoral head",
      "Hip labral tear",
      "Hip fracture (neck of femur)",
      "Greater trochanteric pain syndrome"
    ],
    diagnostics: [
      "Weight-bearing X-ray for joint space loss",
      "MRI arthrogram for labral pathology",
      "CT scan for cam/pincer morphology",
      "FABER & FADIR clinical tests",
      "Bone scan for stress fracture"
    ],
    treatments: [
      "Total Hip Replacement", "Hip Arthroscopy",
      "Core Decompression", "PRP Injection",
      "Osteotomy", "Hemi-Arthroplasty",
      "Labral Repair", "Physiotherapy"
    ]
  },
  "right-hip": {
    title: "Right Hip",
    icon: "🦿",
    badge: "Hip Joint",
    svgX: 210, svgY: 360,
    conditions: [
      "Hip osteoarthritis (end-stage)",
      "Femoroacetabular impingement (FAI)",
      "Avascular necrosis of the femoral head",
      "Hip labral tear",
      "Hip fracture (neck of femur)",
      "Greater trochanteric pain syndrome"
    ],
    diagnostics: [
      "Weight-bearing X-ray for joint space loss",
      "MRI arthrogram for labral pathology",
      "CT scan for cam/pincer morphology",
      "FABER & FADIR clinical tests",
      "Bone scan for stress fracture"
    ],
    treatments: [
      "Total Hip Replacement", "Hip Arthroscopy",
      "Core Decompression", "PRP Injection",
      "Osteotomy", "Hemi-Arthroplasty",
      "Labral Repair", "Physiotherapy"
    ]
  },
  "left-knee": {
    title: "Left Knee",
    icon: "🦵",
    badge: "Tibiofemoral Joint",
    svgX: 135, svgY: 530,
    conditions: [
      "ACL rupture (anterior cruciate ligament)",
      "Meniscus tear (medial / lateral)",
      "Knee osteoarthritis (Kellgren-Lawrence grading)",
      "PCL & MCL injuries",
      "Patellar dislocation & instability",
      "Baker's cyst & synovitis"
    ],
    diagnostics: [
      "MRI knee for soft tissue & cartilage",
      "Standing AP X-ray for joint space",
      "Valgus / varus stress testing",
      "Lachman & anterior drawer test (ACL)",
      "McMurray's test for meniscus"
    ],
    treatments: [
      "ACL Reconstruction", "Meniscectomy",
      "Total Knee Replacement", "Partial Replacement",
      "PRP / Viscosupplementation", "Cartilage Repair",
      "Tibial Osteotomy", "Arthroscopic Washout"
    ]
  },
  "right-knee": {
    title: "Right Knee",
    icon: "🦵",
    badge: "Tibiofemoral Joint",
    svgX: 215, svgY: 530,
    conditions: [
      "ACL rupture (anterior cruciate ligament)",
      "Meniscus tear (medial / lateral)",
      "Knee osteoarthritis (Kellgren-Lawrence grading)",
      "PCL & MCL injuries",
      "Patellar dislocation & instability",
      "Baker's cyst & synovitis"
    ],
    diagnostics: [
      "MRI knee for soft tissue & cartilage",
      "Standing AP X-ray for joint space",
      "Valgus / varus stress testing",
      "Lachman & anterior drawer test (ACL)",
      "McMurray's test for meniscus"
    ],
    treatments: [
      "ACL Reconstruction", "Meniscectomy",
      "Total Knee Replacement", "Partial Replacement",
      "PRP / Viscosupplementation", "Cartilage Repair",
      "Tibial Osteotomy", "Arthroscopic Washout"
    ]
  },
  "left-ankle": {
    title: "Left Ankle",
    icon: "🦶",
    badge: "Talocrural Joint",
    svgX: 135, svgY: 680,
    conditions: [
      "Ankle ligament sprain (ATFL, CFL)",
      "Ankle osteoarthritis",
      "Achilles tendon tear or tendinopathy",
      "Osteochondral defect (OCD) of talus",
      "Peroneal tendon tear",
      "Ankle instability (chronic)"
    ],
    diagnostics: [
      "Weight-bearing X-ray (AP & lateral)",
      "MRI for tendon and ligament detail",
      "Ultrasound for Achilles assessment",
      "Talar tilt stress X-ray",
      "CT scan for complex fractures"
    ],
    treatments: [
      "Ankle Arthroscopy", "Ligament Reconstruction",
      "Achilles Repair", "Total Ankle Replacement",
      "PRP Injection", "Brostrom Procedure",
      "Osteochondral Graft", "Physiotherapy"
    ]
  },
  "right-ankle": {
    title: "Right Ankle",
    icon: "🦶",
    badge: "Talocrural Joint",
    svgX: 215, svgY: 680,
    conditions: [
      "Ankle ligament sprain (ATFL, CFL)",
      "Ankle osteoarthritis",
      "Achilles tendon tear or tendinopathy",
      "Osteochondral defect (OCD) of talus",
      "Peroneal tendon tear",
      "Ankle instability (chronic)"
    ],
    diagnostics: [
      "Weight-bearing X-ray (AP & lateral)",
      "MRI for tendon and ligament detail",
      "Ultrasound for Achilles assessment",
      "Talar tilt stress X-ray",
      "CT scan for complex fractures"
    ],
    treatments: [
      "Ankle Arthroscopy", "Ligament Reconstruction",
      "Achilles Repair", "Total Ankle Replacement",
      "PRP Injection", "Brostrom Procedure",
      "Osteochondral Graft", "Physiotherapy"
    ]
  }
};

// =============================================
//  DOM REFERENCES
// =============================================
const heroText        = document.querySelector('.hero-text');
const heroSkeleton    = document.querySelector('.hero-skeleton');
const skeletonWrapper = document.querySelector('.skeleton-wrapper');
const skeletonHint    = document.querySelector('.skeleton-hint');
const doctorCard      = document.getElementById('doctorCard');
const infoPanel       = document.getElementById('infoPanel');
const overlay         = document.getElementById('overlay');
const closeBtn        = document.getElementById('closePanel');
const panelTitle      = document.getElementById('panelTitle');
const panelIcon       = document.getElementById('panelIcon');
const panelBadge      = document.getElementById('panelBadge');
const panelConds      = document.getElementById('panelConditions');
const panelDiag       = document.getElementById('panelDiag');
const panelTreat      = document.getElementById('panelTreatments');
const hero            = document.querySelector('.hero');

// =============================================
//  STATE
// =============================================
// State
let isZoomed = false;
let activePartKey = null;
let isAnimating = false;  // lock to prevent rapid clicks during transitions

const SVG_VB_W = 340;
const SVG_VB_H = 720;
const ZOOM_SPEED = 800; // ms, must match --zoom-speed in CSS

// =============================================
//  ZOOM INTO BODY PART
// =============================================
function zoomToBodyPart(partKey) {
  const data = bodyPartData[partKey];
  if (!data || isAnimating) return;

  isAnimating = true;
  isZoomed = true;
  activePartKey = partKey;

  // Lock page scroll so only the info panel scrolls
  document.body.style.overflow = 'hidden';

  // 1. Slide hero text out to the left, doctor card out to the right
  heroText.classList.add('slide-out-left');
  if (doctorCard) doctorCard.classList.add('slide-out-right');

  // 2. Hide the skeleton hint
  skeletonHint.classList.add('hidden');

  // 3. Calculate zoom — use transform-origin so the skeleton
  //    scales vertically from the hotspot point (to keep it in view),
  //    but horizontally from the center (so the body expands symmetrically).
  //    ON MOBILE: anchor entirely to the hotspot, otherwise it overflows off-screen!
  const originX = (data.svgX / SVG_VB_W) * 100;
  const originY = (data.svgY / SVG_VB_H) * 100;

  const isMobile = window.innerWidth <= 1100;
  if (isMobile) {
    skeletonWrapper.style.transformOrigin = `${originX}% ${originY}%`;
  } else {
    skeletonWrapper.style.transformOrigin = `50% ${originY}%`;
  }
  
  // Translate to the left (into empty text space) and scale up smoothly
  const translateX = isMobile ? '0px' : '-22vw';
  skeletonWrapper.style.transform = `translate(${translateX}, 0) scale(2.2)`;

  // 5. Highlight the active hotspot
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('selected'));
  const active = document.querySelector(`[data-part="${partKey}"]`);
  if (active) active.classList.add('selected');

  // 6. After zoom animation starts, populate and show panel
  setTimeout(() => {
    populatePanel(partKey);
    infoPanel.classList.add('active');
    if (isMobile) overlay.classList.add('active');
    isAnimating = false;
  }, ZOOM_SPEED * 0.4);
}

// =============================================
//  POPULATE PANEL
// =============================================
function populatePanel(partKey) {
  const data = bodyPartData[partKey];
  if (!data) return;

  panelIcon.textContent  = data.icon;
  panelTitle.textContent = data.title;
  panelBadge.textContent = data.badge;

  panelConds.innerHTML = data.conditions
    .map((c, i) => `<li style="animation-delay:${i * 0.05}s">${c}</li>`).join('');

  panelDiag.innerHTML = data.diagnostics
    .map((d, i) => `<li style="animation-delay:${i * 0.05}s">${d}</li>`).join('');

  panelTreat.innerHTML = data.treatments
    .map((t, i) => `<div class="treatment-tag" style="animation-delay:${i * 0.04}s">${t}</div>`).join('');
}

// =============================================
//  ZOOM OUT — smooth return to home state
// =============================================
function zoomOut() {
  if (!isZoomed || isAnimating) return;

  isAnimating = true;

  // 1. Hide the info panel first
  infoPanel.classList.remove('active');
  overlay.classList.remove('active');

  // Unlock page scroll
  document.body.style.overflow = '';

  // 2. Reset skeleton zoom (smooth via CSS transition)
  skeletonWrapper.style.transform = 'translate(0px, 0px) scale(1)';

  // 3. Bring hero text and doctor card back (smooth via CSS transition)
  heroText.classList.remove('slide-out-left');
  if (doctorCard) doctorCard.classList.remove('slide-out-right');

  // 5. Show hint again
  skeletonHint.classList.remove('hidden');

  // 6. Clear hotspot highlights
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('selected'));

  // 7. Wait for animation to finish before unlocking
  setTimeout(() => {
    isZoomed = false;
    activePartKey = null;
    skeletonWrapper.style.transformOrigin = 'center center';
    isAnimating = false;
  }, ZOOM_SPEED);
}

// =============================================
//  SWITCH PART — zoom out then into the new part
// =============================================
function switchPart(newPartKey) {
  if (isAnimating) return;

  isAnimating = true;

  // 1. Fade out the panel
  infoPanel.classList.remove('active');

  // 2. Zoom skeleton back to scale(1) first
  skeletonWrapper.style.transform = 'translate(0px, 0px) scale(1)';

  // Clear old highlight
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('selected'));

  // 3. After the zoom-out finishes, zoom into the new part
  setTimeout(() => {
    isAnimating = false;  // unlock so zoomToBodyPart can run
    isZoomed = false;
    activePartKey = null;
    zoomToBodyPart(newPartKey);
  }, ZOOM_SPEED * 0.6); // slightly faster for the intermediate step
}

// =============================================
//  EVENT LISTENERS
// =============================================

// Click on any hotspot
document.querySelectorAll('.hotspot').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent hero click-to-close from firing
    const part = el.getAttribute('data-part');

    if (isZoomed && activePartKey === part) {
      // Same part: zoom out
      zoomOut();
    } else if (isZoomed) {
      // Different part while zoomed: smooth switch
      switchPart(part);
    } else {
      // Fresh click: zoom in
      zoomToBodyPart(part);
    }
  });

  // Keyboard accessibility
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      const part = el.getAttribute('data-part');
      if (isZoomed && activePartKey === part) {
        zoomOut();
      } else if (isZoomed) {
        switchPart(part);
      } else {
        zoomToBodyPart(part);
      }
    }
  });
});

// Close button
closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  zoomOut();
});

// Click anywhere on the hero (outside hotspots & panel) to zoom out
hero.addEventListener('click', (e) => {
  if (!isZoomed) return;
  // Only zoom out if the click is NOT inside the info panel or a hotspot
  if (e.target.closest('.info-panel') || e.target.closest('.hotspot')) return;
  zoomOut();
});

// Click the overlay to close on mobile
overlay.addEventListener('click', () => {
  if (isZoomed) zoomOut();
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') zoomOut();
});

// =============================================
//  CONSOLE GREETING
// =============================================
console.log('%c🦴 Ortho Hero Section | Built for VS Code', 'color:#00c9a7;font-size:14px;font-weight:bold;');
console.log('%cAdd body parts in main.js → bodyPartData object', 'color:#8ea8cc;font-size:12px;');

// =============================================
//  HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// =============================================
//  SMOOTH SCROLL FOR NAV LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// =============================================
//  SCROLL REVEAL (Intersection Observer)
// =============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger the animation for multiple items
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// =============================================
//  TESTIMONIAL CAROUSEL
// =============================================
const track = document.getElementById('testimonialTrack');
const dots = document.querySelectorAll('#carouselDots .dot');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
let currentSlide = 0;
const totalSlides = dots.length;
let carouselInterval;

function goToSlide(index) {
  currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
  if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function startCarousel() {
  carouselInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function resetCarousel() {
  clearInterval(carouselInterval);
  startCarousel();
}

if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetCarousel(); });
if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetCarousel(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => { goToSlide(i); resetCarousel(); }));

startCarousel();

// =============================================
//  COUNTER ANIMATION
// =============================================
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// =============================================
//  BACK TO TOP BUTTON
// =============================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (backToTop) {
    backToTop.classList.toggle('visible', window.scrollY > 600);
  }
}, { passive: true });

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
