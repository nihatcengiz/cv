/**
 * Nihat Cengiz Pamuk - Interactive CV & Portfolio Engine
 * Features:
 * - Full bilingual support (TR / EN) with instant in-memory translation
 * - Theme switcher (Dark / Light mode) with localStorage persistence
 * - Interactive PCB lightbox inspection modal
 * - 1-Click contact info copy to clipboard with toast notification
 * - Responsive mobile navigation & dropdowns
 * - Smooth scroll highlighting
 */

// -----------------------------------------------------------------------------
// Translation Dictionary (Turkish & English)
// -----------------------------------------------------------------------------
const i18nData = {
  tr: {
    page_title: "Nihat Cengiz Pamuk | Elektrik-Elektronik & Biyomedikal Mühendisi",
    nav_about: "Hakkımda",
    nav_projects: "Donanım & Projeler",
    nav_experience: "Deneyim",
    nav_skills: "Yetenekler",
    nav_education: "Eğitim",
    nav_contact: "İletişim",
    btn_download_cv: "CV İndir",
    hero_status: "İş Birlikleri ve Yeni Fırsatlara Açık",
    hero_greeting: "Merhaba, Ben",
    role_ee: "Elektrik-Elektronik Mühendisi",
    role_bme: "Biyomedikal Mühendisi",
    hero_bio: "Elektrik-Elektronik ve Biyomedikal Mühendisiyim. Güç elektroniği, gömülü sistemler ve devre tasarımı alanlarında AR-GE, prototipleme ve üretim süreçlerinde görev aldım. Endüstriyel güç kaynakları ve medikal cihaz projelerinde elektronik kart tasarımı, test/doğrulama ve operasyonel süreç yönetimi deneyimlerine sahibim.",
    btn_explore_projects: "Kart & Proje Galerisi",
    btn_contact_me: "İletişime Geç",
    btn_print: "Yazdır",
    metric_ups: "Endüstriyel UPS Tasarımı",
    metric_pcb: "Anakart, SMPS, IGBT & SCR",
    hero_card_badge: "Öne Çıkan Kart Tasarımı",
    click_to_zoom: "Yakınlaştırmak İçin Tıklayın",
    examine_btn: "İncele →",
    tag_about: "PROFİL",
    title_about: "Mühendislik Yaklaşımım & Özet",
    about_card1_title: "Ar-Ge'den Üretime Uçtan Uca Süreç",
    about_card1_desc: "Konsept tasarımdan şematik çizimine, PSIM simülasyonlarından KiCad/Altium ile 2 katmanlı PCB layout'una, prototipleme, lehimleme, osiloskop ile donanım doğrulamasına ve seri üretim BOM yönetimine kadar tüm adımlarda bizzat görev aldım.",
    about_card2_title: "Güç Elektroniği & Sürücüler",
    about_card2_desc: "40 kVA kesintisiz güç kaynakları (UPS) mimarisinde flyback SMPS, yüksek hızlı ve galvanik izoleli IGBT sürücü devreleri, tristör (SCR) faz kontrol tetikleme modülleri ve EMI/EMC standartlarına uyumlu donanım katları geliştirdim.",
    about_card3_title: "Medikal & Gömülü Sistem Bütünlüğü",
    about_card3_desc: "Biyomedikal mühendisliği altyapımla TÜBİTAK ve KOSGEB destekli “Otonom Odyometri Cihazı” projesinde kurucu ortak olarak yer aldım; STM32 tabanlı kontrol, HMI dokunmatik arayüz tasarımı, RS485/UART haberleşme ve medikal sertifikasyon aşamalarını yürüttüm.",
    tag_hardware: "DONANIM GALERİSİ",
    title_hardware: "Tasarlanan Elektronik Kartlar & 3D Modeller",
    subtitle_hardware: "Bizzat tasarladığım, üretime aktarılan ve testleri tamamlanan güç elektroniği kartlarının 3D renderları.",
    zoom_hint: "Büyüt & İncele",
    view_details: "Teknik Detayları Gör",
    hw_motherboard_title: "UPS Ana Kontrol Kartı",
    hw_motherboard_desc: "40 kVA endüstriyel UPS mimarisi için tasarlanmış merkezi kontrol ve sinyal işleme anakartı. STM32 mikrokontrolcü, izole analog/sayısal besleme katları, 3-faz AC ve DC bara örnekleme şebekesi, HMI dokunmatik panel ve RS485 haberleşme arayüzleri.",
    hw_smps_title: "Flyback SMPS Güç Katı Tasarımı",
    hw_smps_desc: "UPS ve endüstriyel sistemlerin yardımcı besleme katları için tasarlanmış izole flyback SMPS kartı. Yüksek gerilim ayrımı, filtreleme bobinleri, koruma devreleri ve termal soğutucu dizaynı içerir.",
    hw_igbt_title: "İzole IGBT Sürücü Kartı (Gate Driver)",
    hw_igbt_desc: "40 kVA UPS evirici modüllerinde kullanılan, yüksek anahtarlama hızına ve parazit bağışıklığına sahip izole DC/DC ve optik izolasyonlu IGBT kapı sürücü devresi.",
    hw_scr_title: "Tristör (SCR) Tetikleme ve Sürücü Kartı",
    hw_scr_desc: "Statik bypass ve doğrultucu katlar için darbe transformatörlü (EE25/13/7), yüksek gerilim izoleli 3 kanallı tristör kapı tetikleme kartı tasarımı.",
    lb_motherboard_desc: "40 kVA UPS sistemi için STM32 tabanlı ana kontrol anakartı (KiCad 3D render).",
    lb_smps_desc: "2 katmanlı, yüksek gerilim izolasyonlu yardımcı güç kaynağı kartı (KiCad 3D render).",
    lb_igbt_desc: "Çok kanallı, galvanik izolasyonlu IGBT kapı sürücü kartı (KiCad 3D render).",
    lb_scr_desc: "Darbe trafolu 3 kanallı tristör tetikleme kartı (KiCad 3D render).",
    sys_ups_title: "40 kVA UPS Tasarım & Üretim Entegrasyonu",
    sys_ups_desc: "BetaUPS bünyesinde 40 kVA Kesintisiz Güç Kaynağı projesinde tasarım aşamasından saha üretimine kadar tüm teknik süreçler: Güç katları, HMI dokunmatik operatör paneli arayüzü, RS485/UART haberleşme, test prosedürleri ve malzeme tedarik (BOM) yönetimi.",
    sys_med_title: "Otonom Odyometri Medikal Cihazı",
    sys_med_desc: "AiHear Teknoloji A.Ş. kurucu ortaklığıyla TÜBİTAK ve KOSGEB destekli otonom işitme test cihazı geliştirilmesi. Medikal donanım tasarımı, akustik testler, biyouyumluluk ve regülatif sertifikasyon hazırlık süreçlerinin yönetimi.",
    tag_exp: "KARİYER",
    title_exp: "İş & Staj Deneyimleri",
    exp1_role: "Elektrik-Elektronik Mühendisi",
    exp1_b1: "<strong>40 kVA UPS Projesi:</strong> Tasarım aşamasından seri üretime kadar tüm teknik ve operasyonel aşamalarda aktif sorumluluk.",
    exp1_b2: "<strong>PCB Tasarımı:</strong> Flyback SMPS, IGBT sürücü ve tristör sürücü kartları dahil olmak üzere 2 katmanlı PCB tasarımlarını ve geliştirme çalışmalarını yürüttüm.",
    exp1_b3: "<strong>Test & Doğrulama:</strong> Elektronik prototiplerin üretimini, donanım getirme (bring-up), osiloskop testlerini ve doğrulama süreçlerini tamamladım.",
    exp1_b4: "<strong>HMI & Protokol Entegrasyonu:</strong> Dokunmatik ekran operatör arayüzlerini tasarladım; RS485, I2C ve UART haberleşme entegrasyonlarını kurdum.",
    exp1_b5: "<strong>Operasyonel Yönetim:</strong> BOM (Malzeme Listesi) yönetimi, kritik komponent tedariği ve sipariş takibi süreçlerini yönettim.",
    exp2_role: "Kurucu Ortak",
    exp2_b1: "TÜBİTAK ve KOSGEB destekli <strong>“Otonom Odyometri Cihazı Geliştirilmesi”</strong> projesinde kurucu ortak olarak yer aldım.",
    exp2_b2: "Medikal cihaz donanım geliştirme, doğrulama testleri ve medikal cihaz sertifikasyon süreçlerinde aktif rol üstlendim.",
    exp3_role: "Stajyer Mühendis",
    exp3_desc: "Tekstil sektöründe kullanılan yüksek kapasiteli endüstriyel makinaların üretim, montaj, kurulum ve saha test aşamalarında görev aldım.",
    exp4_role: "Stajyer Mühendis",
    exp4_desc: "Endoskopi ve medikal görüntüleme cihazlarının teknik destek, kurulum ve klinik servis süreçlerinde deneyim edindim; servise gelen cihazlarda ilk arıza tespit adımlarını yürüttüm.",
    exp5_role: "Biyomedikal Stajyeri",
    exp5_desc: "Kapsamlı medikal cihaz envanteri oluşturulması, ameliyathane ve yoğun bakım cihazlarının periyodik bakım, kalibrasyon ve arıza giderme operasyonlarında görev aldım.",
    tag_skills: "YETKİNLİKLER",
    title_skills: "Teknik Yetenekler & Araçlar",
    skill_cat1: "Tasarım & Simülasyon Araçları",
    level_advanced: "İleri Düzey",
    level_proficient: "Yetkin",
    level_sim: "Güç Simülasyonu",
    skill_cat2: "Güç Elektroniği",
    level_core: "Uzmanlık Alanı",
    skill_cat3: "Gömülü Sistemler & Haberleşme",
    level_ui: "Arayüz Tasarımı",
    skill_cat4: "Elektronik Donanım & Üretim",
    level_pcb: "Yerleşim & Routing",
    level_shield: "İzolasyon & Filtre",
    level_lab: "Osiloskop / Bring-up",
    level_prod: "Üretim & Lojistik",
    info_lang_title: "Diller:",
    info_lang_desc: "Türkçe (Anadil) • İngilizce (Orta / Intermediate)",
    info_extra_title: "Ek Bilgiler:",
    info_extra_desc: "Askerlik Yapıldı • B Sınıfı Ehliyet • İstanbul / Maltepe",
    tag_edu: "AKADEMİK",
    title_edu: "Eğitim Bilgileri",
    edu1_degree: "Lisans, Elektrik-Elektronik Mühendisliği",
    edu1_desc: "Güç elektroniği, elektrik makineleri, devre teorisi, kontrol sistemleri ve gömülü donanım alanlarında teorik ve pratik mühendislik formasyonu.",
    edu2_degree: "Lisans, Biyomedikal Mühendisliği",
    edu2_desc: "Biyomedikal enstrümantasyon, medikal elektronik, sinyal işleme, fizyolojik modelleme ve tıbbi cihaz tasarım süreçleri.",
    tag_contact: "İLETİŞİM",
    title_contact: "Benimle İletişime Geçin",
    subtitle_contact: "Mühendislik projeleri, danışmanlık veya kariyer fırsatları için doğrudan bana ulaşabilirsiniz.",
    contact_email_title: "E-Posta",
    contact_phone_title: "Telefon",
    contact_loc_title: "Konum",
    btn_send_email: "E-posta Gönder",
    btn_call: "Hemen Ara",
    btn_copy: "Kopyala",
    loc_active: "İstanbul İçi & Hibrit/Uzaktan",
    dl_box_title: "Özgeçmişimi PDF Formatında İndirin",
    dl_box_desc: "Ayrıntılı teknik özgeçmişimin Türkçe ve İngilizce PDF kopyalarına doğrudan erişebilirsiniz.",
    btn_dl_tr: "Türkçe PDF İndir",
    btn_dl_en: "Download English PDF",
    back_to_top: "Yukarı Çık",
    copied_toast: "Panoya kopyalandı!"
  },
  en: {
    page_title: "Nihat Cengiz Pamuk | Electrical & Biomedical Engineer",
    nav_about: "About Me",
    nav_projects: "Hardware & Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_contact: "Contact",
    btn_download_cv: "Download CV",
    hero_status: "Available for New Opportunities & Collaborations",
    hero_greeting: "Hello, I am",
    role_ee: "Electrical & Electronics Engineer",
    role_bme: "Biomedical Engineer",
    hero_bio: "I am an Electrical-Electronics and Biomedical Engineer. I have worked in R&D, prototyping, and production in the fields of power electronics, embedded systems, and circuit design. My experience covers electronic board design, testing/validation, and operational process management in industrial power supply and medical device projects.",
    btn_explore_projects: "Hardware Showcase",
    btn_contact_me: "Get in Touch",
    btn_print: "Print / PDF",
    metric_ups: "Industrial UPS Engineering",
    metric_pcb: "Motherboard, SMPS, IGBT & SCR",
    hero_card_badge: "Featured Hardware Design",
    click_to_zoom: "Click to Zoom & Inspect",
    examine_btn: "Inspect →",
    tag_about: "PROFILE",
    title_about: "Engineering Philosophy & Summary",
    about_card1_title: "End-to-End R&D to Production",
    about_card1_desc: "Direct responsibility from concept design, PSIM simulations, 2-layer PCB layout with KiCad/Altium, prototyping and soldering, to oscilloscope hardware bring-up and mass production BOM management.",
    about_card2_title: "Power Electronics & Gate Drivers",
    about_card2_desc: "Engineered auxiliary flyback SMPS, high-speed galvanically isolated IGBT gate drive modules, SCR phase-control firing circuitry, and EMI/EMC compliance stages for a 40 kVA UPS architecture.",
    about_card3_title: "Medical & Embedded Systems Integration",
    about_card3_desc: "Leveraging my biomedical background as Co-Founder in the TÜBİTAK/KOSGEB-funded 'Autonomous Audiometer' project; directed STM32 control, touchscreen HMI interface design, RS485/UART communications, and medical certification readiness.",
    tag_hardware: "HARDWARE SHOWCASE",
    title_hardware: "Custom Designed Electronic Boards & 3D Models",
    subtitle_hardware: "3D renders of power electronic boards designed, fabricated, brought up, and verified in real systems.",
    zoom_hint: "Zoom & Inspect",
    view_details: "View Board Specs",
    hw_motherboard_title: "UPS Main Control Board",
    hw_motherboard_desc: "Central control and signal processing motherboard designed for 40 kVA industrial UPS systems. Features STM32 MCU, isolated analog/digital power domains, 3-phase AC & DC bus sensing circuitry, touchscreen HMI, and RS485 communication interfaces.",
    hw_smps_title: "Flyback SMPS Power Stage Design",
    hw_smps_desc: "Isolated flyback switch-mode power supply designed for auxiliary power stages in UPS and industrial systems. Features high-voltage separation, filter chokes, comprehensive protection, and optimized heatsink placement.",
    hw_igbt_title: "Isolated IGBT Gate Driver Board",
    hw_igbt_desc: "Multi-channel gate driver module with isolated DC/DC supplies, high noise immunity, and fast optical isolation designed for 40 kVA UPS inverter and rectifier stages.",
    hw_scr_title: "Thyristor (SCR) Pulse Firing Driver",
    hw_scr_desc: "3-channel gate trigger driver board featuring pulse transformers (EE25/13/7) and high-voltage isolation for static transfer switches and phase-controlled rectifiers.",
    lb_motherboard_desc: "STM32-based main control motherboard for 40 kVA UPS systems (KiCad 3D render).",
    lb_smps_desc: "2-layer auxiliary power supply board with high-voltage isolation (KiCad 3D render).",
    lb_igbt_desc: "Multi-channel, galvanically isolated IGBT gate driver board (KiCad 3D render).",
    lb_scr_desc: "3-channel thyristor firing board with pulse transformers (KiCad 3D render).",
    sys_ups_title: "40 kVA UPS Design & Production Integration",
    sys_ups_desc: "Full hardware and operational involvement at BetaUPS for 40 kVA UPS: Power stages, HMI touchscreen operator interface, RS485/UART protocol integration, validation testing, and procurement/BOM workflows.",
    sys_med_title: "Autonomous Audiometer Medical Device",
    sys_med_desc: "Co-founded AiHear Teknoloji A.Ş. for TÜBİTAK & KOSGEB-supported autonomous audiometric testing device. Managed hardware engineering, acoustic testing, biocompatibility, and regulatory certification pipelines.",
    tag_exp: "CAREER",
    title_exp: "Professional Experience & Internships",
    exp1_role: "Electrical & Electronics Engineer",
    exp1_b1: "<strong>40 kVA UPS Project:</strong> Contributed to technical and operational processes from design to mass production.",
    exp1_b2: "<strong>PCB Design:</strong> Carried out 2-layer PCB design and development for power electronic boards, including Flyback SMPS, IGBT gate drivers, and thyristor drivers.",
    exp1_b3: "<strong>Test & Verification:</strong> Executed electronic prototype assembly, hardware bring-up, oscilloscope testing, and validation processes.",
    exp1_b4: "<strong>HMI & Protocols:</strong> Designed touchscreen (HMI) interfaces and integrated RS485, I2C, and UART communication protocols.",
    exp1_b5: "<strong>Operational Management:</strong> Managed Bill of Materials (BOM), component procurement, and order fulfillment workflows.",
    exp2_role: "Co-Founder",
    exp2_b1: "Co-founded and contributed to the <strong>'Development of an Autonomous Audiometer Device'</strong> project funded by TÜBİTAK and KOSGEB.",
    exp2_b2: "Played an active role in hardware development, validation testing, and regulatory certification processes for the medical device.",
    exp3_role: "Engineering Intern",
    exp3_desc: "Contributed to the manufacturing, installation, and field testing phases of high-capacity industrial machinery for the textile sector.",
    exp4_role: "Engineering Intern",
    exp4_desc: "Gained hands-on experience in technical support, installation, and marketing operations for endoscopy equipment; performed initial fault diagnosis on incoming service devices.",
    exp5_role: "Biomedical Engineering Intern",
    exp5_desc: "Assisted in building comprehensive medical device inventory systems; participated in equipment troubleshooting, preventive maintenance, and calibration across surgical and ICU wards.",
    tag_skills: "SKILLS",
    title_skills: "Technical Skills & Competencies",
    skill_cat1: "Design & Simulation Tools",
    level_advanced: "Advanced",
    level_proficient: "Proficient",
    level_sim: "Power Simulation",
    skill_cat2: "Power Electronics",
    level_core: "Core Expertise",
    skill_cat3: "Embedded Systems & Communication",
    level_ui: "UI/UX Design",
    skill_cat4: "Hardware Engineering & Production",
    level_pcb: "Layout & Routing",
    level_shield: "Isolation & Filters",
    level_lab: "Oscilloscope / Bring-up",
    level_prod: "Production & Supply Chain",
    info_lang_title: "Languages:",
    info_lang_desc: "Turkish (Native) • English (Intermediate)",
    info_extra_title: "Additional Info:",
    info_extra_desc: "Military Service Completed • Driving License: Class B • Istanbul / Maltepe",
    tag_edu: "EDUCATION",
    title_edu: "Education History",
    edu1_degree: "B.Sc. in Electrical & Electronics Engineering",
    edu1_desc: "Solid theoretical and practical foundation in power electronics, electrical machinery, circuit theory, control systems, and embedded hardware.",
    edu2_degree: "B.Sc. in Biomedical Engineering",
    edu2_desc: "Biomedical instrumentation, medical electronics, physiological modeling, signal processing, and medical device design methodologies.",
    tag_contact: "CONTACT",
    title_contact: "Get in Touch",
    subtitle_contact: "Feel free to reach out for engineering projects, technical inquiries, or career opportunities.",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_loc_title: "Location",
    btn_send_email: "Send Email",
    btn_call: "Call Now",
    btn_copy: "Copy",
    loc_active: "Istanbul & Hybrid / Remote",
    dl_box_title: "Download Resume in PDF Format",
    dl_box_desc: "Access updated and detailed PDF versions of my curriculum vitae in Turkish and English.",
    btn_dl_tr: "Download Turkish PDF",
    btn_dl_en: "Download English PDF",
    back_to_top: "Back to Top",
    copied_toast: "Copied to clipboard!"
  }
};

// State variables
let currentLanguage = localStorage.getItem('ncp_lang') || 'tr';
let currentTheme = localStorage.getItem('ncp_theme') || 'dark';

// -----------------------------------------------------------------------------
// Initialize App
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initDropdown();
  initYear();
});

// -----------------------------------------------------------------------------
// Theme Toggle Functionality
// -----------------------------------------------------------------------------
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('ncp_theme', currentTheme);
    });
  }
}

// -----------------------------------------------------------------------------
// Language Toggle Functionality
// -----------------------------------------------------------------------------
function initLanguage() {
  applyLanguage(currentLanguage);

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
      localStorage.setItem('ncp_lang', currentLanguage);
      applyLanguage(currentLanguage);
    });
  }
}

function applyLanguage(lang) {
  const dictionary = i18nData[lang] || i18nData.tr;

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) {
      // If it contains HTML markup like <strong>, use innerHTML
      if (dictionary[key].includes('<')) {
        el.innerHTML = dictionary[key];
      } else {
        el.textContent = dictionary[key];
      }
    }
  });

  // Update page title
  document.title = dictionary.page_title;

  // Inline translations: elements carry their English text in data-en;
  // the original Turkish markup is cached in data-tr on first use.
  document.querySelectorAll('[data-en]').forEach((el) => {
    if (el.dataset.tr === undefined) {
      el.dataset.tr = el.innerHTML;
    }
    el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.tr;
  });

  // Update language button display
  const flagEl = document.getElementById('current-flag');
  const textEl = document.getElementById('current-lang-text');
  if (flagEl && textEl) {
    if (lang === 'tr') {
      flagEl.textContent = '🇹🇷';
      textEl.textContent = 'TR';
    } else {
      flagEl.textContent = '🇬🇧';
      textEl.textContent = 'EN';
    }
  }

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);
}

// -----------------------------------------------------------------------------
// Navigation & Mobile Menu
// -----------------------------------------------------------------------------
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        mainNav.classList.remove('open');
      });
    });
  }

  // Active section link highlighting
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.main-nav a[href*="${sectionId}"]`);

      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });
}

// -----------------------------------------------------------------------------
// Dropdown Menu for CV Download
// -----------------------------------------------------------------------------
function initDropdown() {
  const trigger = document.getElementById('cv-dropdown-btn');
  const wrapper = trigger ? trigger.closest('.dropdown-wrapper') : null;

  if (trigger && wrapper) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      wrapper.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
      }
    });
  }
}

// -----------------------------------------------------------------------------
// Lightbox Modal for PCB High-Resolution Inspection
// -----------------------------------------------------------------------------
function openLightbox(imageSrc, titleKey, descKey) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const dict = i18nData[currentLanguage] || i18nData.tr;

  if (modal && img && titleEl && descEl) {
    const title = dict[titleKey] || titleKey;
    img.src = imageSrc;
    img.alt = title;
    titleEl.textContent = title;
    descEl.textContent = dict[descKey] || descKey;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox(e) {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// -----------------------------------------------------------------------------
// Copy to Clipboard & Toast
// -----------------------------------------------------------------------------
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(i18nData[currentLanguage].copied_toast || 'Kopyalandı!');
    if (btnElement) {
      const originalText = btnElement.innerHTML;
      btnElement.innerHTML = '<span>✓</span>';
      setTimeout(() => {
        btnElement.innerHTML = originalText;
      }, 1500);
    }
  }).catch((err) => {
    console.error('Copy failed', err);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
}

// -----------------------------------------------------------------------------
// Update Current Year
// -----------------------------------------------------------------------------
function initYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
