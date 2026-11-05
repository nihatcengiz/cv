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
    title_about: "Mühendislik Yaklaşımım & Özet",
    about_card1_title: "Ar-Ge'den Üretime Uçtan Uca Süreç",
    about_card1_desc: "Konsept tasarımdan şematik çizimine, PSIM simülasyonlarından KiCad/Altium ile 2 katmanlı PCB layout'una, prototipleme, lehimleme, osiloskop ile donanım doğrulamasına ve seri üretim BOM yönetimine kadar tüm adımlarda bizzat görev aldım.",
    about_card2_title: "Güç Elektroniği & Sürücüler",
    about_card2_desc: "40 kVA kesintisiz güç kaynakları (UPS) mimarisinde flyback SMPS, yüksek hızlı ve galvanik izoleli IGBT sürücü devreleri, tristör (SCR) faz kontrol tetikleme modülleri ve EMI/EMC standartlarına uyumlu donanım katları geliştirdim.",
    about_card3_title: "Medikal & Gömülü Sistem Bütünlüğü",
    about_card3_desc: "Biyomedikal mühendisliği altyapımla TÜBİTAK ve KOSGEB destekli “Otonom Odyometri Cihazı” projesinde kurucu ortak olarak yer aldım; STM32 tabanlı kontrol, HMI dokunmatik arayüz tasarımı, RS485/UART haberleşme ve medikal sertifikasyon aşamalarını yürüttüm.",
    title_hardware: "Tasarlanan Elektronik Kartlar & 3D Modeller",
    subtitle_hardware: "Bizzat tasarladığım, üretime aktarılan ve testleri tamamlanan güç elektroniği kartlarının 3D renderları.",
    zoom_hint: "Büyüt & İncele",
    hw_motherboard_title: "UPS Ana Kontrol Kartı",
    hw_motherboard_desc: "40 kVA endüstriyel UPS mimarisi için tasarlanmış merkezi kontrol ve sinyal işleme anakartı. STM32 G serisi mikrokontrolcü, izole analog/sayısal besleme katları, 3-faz AC ve DC bara örnekleme şebekesi, HMI dokunmatik panel ve RS485 haberleşme arayüzleri.",
    spec_mcu: "İşlemci",
    spec_mcu_v: "STM32 G serisi",
    spec_comm: "Haberleşme",
    spec_comm_v: "İzoleli RS485, izoleli UART",
    spec_mem: "Hafıza / Zaman",
    spec_mem_v: "2 × EEPROM, 1 × RTC",
    spec_pwr: "Besleme",
    spec_pwr_v: "+5 V ve +3.3 V raylar",
    spec_acv: "AC gerilim okuma",
    spec_acv_v: "6 kanal şebeke gerilimi",
    spec_dcv: "DC gerilim okuma",
    spec_dcv_v: "4 kanal",
    spec_aci: "AC akım örnekleme",
    spec_aci_v: "6 kanal",
    spec_ntc: "Sıcaklık",
    spec_ntc_v: "3 kanal NTC",
    spec_dac: "Analog çıkış",
    spec_dac_v: "2 kanal DAC",
    spec_pwm: "Sürücü çıkışları",
    spec_pwm_v: "IGBT ve SCR PWM",
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
    ups_gallery_count: "5 Cihaz Fotoğrafı",
    ups_gallery_cta: "Cihaz Fotoğraflarını İncele",
    ups_img_cabinet_title: "Kabin, Soğutma ve Şebeke Koruması",
    ups_img_cabinet_desc: "40 kVA UPS metal kabini; zorlamalı havalandırma fanları, bara bağlantıları, giriş/çıkış şalterleri ve şebeke koruma elemanları ile saha montajı.",
    ups_img_power_title: "Güç Kartları, LED Tanı ve Kablaj",
    ups_img_power_desc: "Çalışır durumdaki UPS kabininde güç/sürücü kartları, modül durum LED'leri ve çok damarlı kontrol kablajı.",
    ups_img_smps_title: "SMPS ve Kontrol Kartı Katmanı",
    ups_img_smps_desc: "SMPS kartı ve ana kontrol (PFC-Inverter) kontrol kartlarının yerleşimi.",
    ups_img_hmi_settings_title: "HMI Ayarlar Ekranı",
    ups_img_hmi_settings_desc: "Dokunmatik HMI panel ayarlar menüsü: nominal çıkış gerilimi, çıkış frekansı, otomatik akü test süresi, bypass limitleri ve kalibrasyon ayarları.",
    ups_img_hmi_measure_title: "HMI Ölçüm Ekranı (RS485)",
    ups_img_hmi_measure_desc: "R/S/T fazları için giriş, bypass, çıkış, DC bara ve akü ölçümleri; gerilim, akım ve frekans değerlerinin gerçek zamanlı izlenmesi.",
    sys_med_title: "Otonom Odyometri Medikal Cihazı",
    sys_med_desc: "AiHear Teknoloji A.Ş. kurucu ortaklığıyla TÜBİTAK ve KOSGEB destekli otonom işitme test cihazı geliştirilmesi. Medikal donanım tasarımı, akustik testler, biyouyumluluk ve regülatif sertifikasyon hazırlık süreçlerinin yönetimi.",
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
    title_skills: "Teknik Yetenekler & Araçlar",
    skill_cat1: "Tasarım & Simülasyon Araçları",
    level_advanced: "Yüksek",
    level_proficient: "İyi",
    level_sim: "Güç Simülasyonu",
    skill_cat2: "Güç Elektroniği",
    level_core: "Sık Çalıştığım Alan",
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
    title_edu: "Eğitim Bilgileri",
    edu1_degree: "Lisans, Elektrik-Elektronik Mühendisliği",
    edu1_desc: "Güç elektroniği, elektrik makineleri, devre teorisi, kontrol sistemleri ve gömülü donanım alanlarında teorik ve pratik mühendislik formasyonu.",
    edu2_degree: "Lisans, Biyomedikal Mühendisliği",
    edu2_desc: "Biyomedikal enstrümantasyon, medikal elektronik, sinyal işleme, fizyolojik modelleme ve tıbbi cihaz tasarım süreçleri.",
    title_contact: "Benimle İletişime Geçin",
    subtitle_contact: "Mühendislik projeleri, danışmanlık veya kariyer fırsatları için doğrudan bana ulaşabilirsiniz.",
    contact_email_title: "E-Posta",
    contact_loc_title: "Konum",
    btn_send_email: "E-posta Gönder",
    btn_copy: "Kopyala",
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
    title_about: "Engineering Philosophy & Summary",
    about_card1_title: "End-to-End R&D to Production",
    about_card1_desc: "Direct responsibility from concept design, PSIM simulations, 2-layer PCB layout with KiCad/Altium, prototyping and soldering, to oscilloscope hardware bring-up and mass production BOM management.",
    about_card2_title: "Power Electronics & Gate Drivers",
    about_card2_desc: "Engineered auxiliary flyback SMPS, high-speed galvanically isolated IGBT gate drive modules, SCR phase-control firing circuitry, and EMI/EMC compliance stages for a 40 kVA UPS architecture.",
    about_card3_title: "Medical & Embedded Systems Integration",
    about_card3_desc: "Leveraging my biomedical background as Co-Founder in the TÜBİTAK/KOSGEB-funded 'Autonomous Audiometer' project; directed STM32 control, touchscreen HMI interface design, RS485/UART communications, and medical certification readiness.",
    title_hardware: "Custom Designed Electronic Boards & 3D Models",
    subtitle_hardware: "3D renders of power electronic boards designed, fabricated, brought up, and verified in real systems.",
    zoom_hint: "Zoom & Inspect",
    hw_motherboard_title: "UPS Main Control Board",
    hw_motherboard_desc: "Central control and signal processing motherboard designed for 40 kVA industrial UPS systems. Features STM32 G-series MCU, isolated analog/digital power domains, 3-phase AC & DC bus sensing circuitry, touchscreen HMI, and RS485 communication interfaces.",
    spec_mcu: "Processor",
    spec_mcu_v: "STM32 G series",
    spec_comm: "Communication",
    spec_comm_v: "Isolated RS485, isolated UART",
    spec_mem: "Memory / Timekeeping",
    spec_mem_v: "2 × EEPROM, 1 × RTC",
    spec_pwr: "Supply rails",
    spec_pwr_v: "+5 V and +3.3 V",
    spec_acv: "AC voltage sensing",
    spec_acv_v: "6 mains channels",
    spec_dcv: "DC voltage sensing",
    spec_dcv_v: "4 channels",
    spec_aci: "AC current sampling",
    spec_aci_v: "6 channels",
    spec_ntc: "Temperature",
    spec_ntc_v: "3 NTC channels",
    spec_dac: "Analog output",
    spec_dac_v: "2 DAC channels",
    spec_pwm: "Drive outputs",
    spec_pwm_v: "IGBT and SCR PWM",
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
    ups_gallery_count: "5 Device Photos",
    ups_gallery_cta: "Inspect Device Photos",
    ups_img_cabinet_title: "Cabinet, Cooling & Mains Protection",
    ups_img_cabinet_desc: "40 kVA UPS metal cabinet in field assembly, with forced-air cooling fans, busbar connections, input/output breakers and mains protection devices.",
    ups_img_power_title: "Power Boards, LED Diagnostics & Wiring",
    ups_img_power_desc: "Powered-up UPS cabinet showing power/driver boards, module status LEDs and multi-core control harnesses.",
    ups_img_smps_title: "SMPS & Control Board Layer",
    ups_img_smps_desc: "Layout of the SMPS board and the main control (PFC-Inverter) control boards.",
    ups_img_hmi_settings_title: "HMI Settings Screen",
    ups_img_hmi_settings_desc: "Touchscreen HMI settings menu: nominal output voltage, output frequency, automatic battery test duration, bypass limits and calibration settings.",
    ups_img_hmi_measure_title: "HMI Measurement Screen (RS485)",
    ups_img_hmi_measure_desc: "Input, bypass, output, DC bus and battery measurements for R/S/T phases, with real-time voltage, current and frequency monitoring.",
    sys_med_title: "Autonomous Audiometer Medical Device",
    sys_med_desc: "Co-founded AiHear Teknoloji A.Ş. for TÜBİTAK & KOSGEB-supported autonomous audiometric testing device. Managed hardware engineering, acoustic testing, biocompatibility, and regulatory certification pipelines.",
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
    title_skills: "Technical Skills & Competencies",
    skill_cat1: "Design & Simulation Tools",
    level_advanced: "High",
    level_proficient: "Good",
    level_sim: "Power Simulation",
    skill_cat2: "Power Electronics",
    level_core: "Frequent Focus",
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
    title_edu: "Education History",
    edu1_degree: "B.Sc. in Electrical & Electronics Engineering",
    edu1_desc: "Solid theoretical and practical foundation in power electronics, electrical machinery, circuit theory, control systems, and embedded hardware.",
    edu2_degree: "B.Sc. in Biomedical Engineering",
    edu2_desc: "Biomedical instrumentation, medical electronics, physiological modeling, signal processing, and medical device design methodologies.",
    title_contact: "Get in Touch",
    subtitle_contact: "Feel free to reach out for engineering projects, technical inquiries, or career opportunities.",
    contact_email_title: "Email",
    contact_loc_title: "Location",
    btn_send_email: "Send Email",
    btn_copy: "Copy",
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
  initUpsGallery();
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
// UPS Device Photo Mini-Gallery (preview strip inside the project card)
// -----------------------------------------------------------------------------
// When the lightbox is opened from a gallery, the slide set is remembered so
// the user can move between photos with the arrows, keyboard or a swipe.
let activeGallery = null;
let lightboxSlides = [];
let lightboxIndex = 0;

function initUpsGallery() {
  const gallery = document.getElementById('ups-gallery');
  const ctaBtn = document.getElementById('ups-gallery-btn');
  if (!gallery) return;

  const thumbs = Array.from(gallery.querySelectorAll('.ups-shot'));
  if (!thumbs.length) return;

  const slides = thumbs.map((thumb) => ({
    src: thumb.dataset.src,
    titleKey: thumb.dataset.title,
    descKey: thumb.dataset.desc,
  }));

  const setActive = (index) => {
    thumbs.forEach((t, i) => t.classList.toggle('is-active', i === index));
  };

  const openShot = (index) => {
    setActive(index);
    openLightbox(slides, index);
  };

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => openShot(i));
  });

  // The CTA button opens the currently highlighted photo
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      const activeIndex = thumbs.findIndex((t) => t.classList.contains('is-active'));
      openShot(activeIndex >= 0 ? activeIndex : 0);
    });
  }

  // Keep the thumbnail strip in sync while navigating inside the lightbox
  activeGallery = {
    onChange: (index) => setActive(index),
  };
}

// -----------------------------------------------------------------------------
// Lightbox Modal for PCB High-Resolution Inspection
// -----------------------------------------------------------------------------
function renderLightboxSlide() {
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const counterEl = document.getElementById('lightbox-counter');
  const dict = i18nData[currentLanguage] || i18nData.tr;
  const slide = lightboxSlides[lightboxIndex];
  if (!img || !titleEl || !descEl || !slide) return;

  const title = dict[slide.titleKey] || slide.titleKey;
  img.classList.remove('is-landscape');
  img.src = slide.src;
  img.alt = title;
  titleEl.textContent = title;
  descEl.textContent = dict[slide.descKey] || slide.descKey;

  if (counterEl) {
    if (lightboxSlides.length > 1) {
      counterEl.textContent = `${lightboxIndex + 1} / ${lightboxSlides.length}`;
      counterEl.hidden = false;
    } else {
      counterEl.hidden = true;
    }
  }

  // Landscape device photos look better filling the dialog width
  const tagPhoto = () => {
    const isLandscape = img.naturalWidth > img.naturalHeight;
    img.classList.toggle('is-landscape', isLandscape);
  };
  if (img.complete && img.naturalWidth) {
    tagPhoto();
  } else {
    img.onload = tagPhoto;
  }
}

function showLightboxSlide(index) {
  if (!lightboxSlides.length) return;
  const total = lightboxSlides.length;
  lightboxIndex = ((index % total) + total) % total;
  renderLightboxSlide();
  if (activeGallery) activeGallery.onChange(lightboxIndex);
}

function stepLightbox(direction) {
  if (lightboxSlides.length < 2) return;
  showLightboxSlide(lightboxIndex + direction);
}

function openLightbox(slides, startIndex = 0) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  lightboxSlides = Array.isArray(slides) ? slides : [{ src: slides }];
  lightboxIndex = startIndex;
  renderLightboxSlide();

  modal.classList.toggle('has-nav', lightboxSlides.length > 1);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close lightbox on Escape key, navigate with arrow keys
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox-modal');
  const isOpen = modal && modal.classList.contains('active');

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (isOpen && e.key === 'ArrowRight') {
    stepLightbox(1);
  } else if (isOpen && e.key === 'ArrowLeft') {
    stepLightbox(-1);
  }
});

// Swipe left / right on touch devices to change photos
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  if (prevBtn) prevBtn.addEventListener('click', () => stepLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => stepLightbox(1));

  const wrapper = document.querySelector('.lightbox-img-wrapper');
  if (!wrapper) return;

  let touchStartX = null;
  let touchStartY = null;

  wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    touchStartX = null;
    touchStartY = null;

    // Ignore mostly-vertical gestures (scroll) and short taps
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    stepLightbox(dx < 0 ? 1 : -1);
  }, { passive: true });
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
