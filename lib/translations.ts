import type { Language } from "./types";

export interface DataTranslations {
  books: {
    title: string[];
    description: string[];
    genre: string[];
  };
  nasyids: {
    title: string[];
    album: string[];
  };
  projects: {
    title: string[];
    description: string[];
  };
  achievements: {
    title: string[];
    organization: string[];
    description: string[];
  };
}

export interface Translations {
  // Navigation & UI
  dashboard: string;
  about: string;
  books: string;
  nasyid: string;
  webset: string;
  penghargaan: string;
  contact: string;
  settings: string;
  language: string;
  switchLanguage: string;
  
  // Header
  welcomeBack: string;
  
  // Hero
  portfolio: string;
  welcomeToMy: string;
  exploreNow: string;
  heroDescription: string;
  
  // Stats
  bukuDiterbitkan: string;
  koleksiNasyid: string;
  proyekWeb: string;
  penghargaanDiterima: string;
  signal: string;
  
  // Books
  recentBooks: string;
  myLatestPublications: string;
  viewAll: string;
  readMore: string;
  genre: string;
  year: string;
  
  // Nasyid
  myNasyid: string;
  listen: string;
  
  // Projects
  myWebset: string;
  viewProject: string;
  
  // Achievements
  myAchievements: string;
  organization: string;
  description: string;
  
  // General
  learnMore: string;
  
  // About Section
  aboutTitle: string;
  aboutGreeting: string;
  aboutSubtitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  aboutOpenToCollab: string;
  highlightAuthor: string;
  highlightNasyidArtist: string;
  highlightWebDev: string;
  highlightAwardee: string;
  highlightAuthorDesc: string;
  highlightNasyidArtistDesc: string;
  highlightWebDevDesc: string;
  highlightAwardeeDesc: string;
  
  // Settings Section
  settingsTitle: string;
  settingsSubtitle: string;
  editProfile: string;
  appearance: string;
  notifications: string;
  privacySecurity: string;
  darkMode: string;
  darkModeDesc: string;
  settingsLanguage: string;
  settingsLanguageDesc: string;
  emailNotifications: string;
  emailNotificationsDesc: string;
  pushNotifications: string;
  pushNotificationsDesc: string;
  profileVisibility: string;
  profileVisibilityDesc: string;
  twoFactorAuth: string;
  twoFactorAuthDesc: string;
  
  // Data translations (renamed to avoid conflict)
  dataBooks: {
    title: string[];
    description: string[];
    genre: string[];
  };
  dataNasyids: {
    title: string[];
    album: string[];
  };
  dataProjects: {
    title: string[];
    description: string[];
  };
  dataAchievements: {
    title: string[];
    organization: string[];
    description: string[];
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    // Navigation & UI
    dashboard: "Dashboard",
    about: "About",
    books: "Buku",
    nasyid: "Nasyid",
    webset: "My Webset",
    penghargaan: "Penghargaan",
    contact: "Contact",
    settings: "Settings",
    language: "Bahasa",
    switchLanguage: "Ganti Bahasa",
    
    // Header
    welcomeBack: "Welcome back, Muh Hidayat Iski ✨",
    
    // Hero
    portfolio: "Portfolio 2024",
    welcomeToMy: "Welcome to My\nPortfolio ✨",
    exploreNow: "Explore Now",
    heroDescription: "Explore my books, nasyid collections, achievements, and web projects.",
    
    // Stats
    bukuDiterbitkan: "Buku Diterbitkan",
    koleksiNasyid: "Koleksi Nasyid",
    proyekWeb: "Proyek Web",
    penghargaanDiterima: "Penghargaan",
    signal: "signal",
    
    // Books
    recentBooks: "Recent Books 📚",
    myLatestPublications: "My latest publications",
    viewAll: "View all",
    readMore: "Read More",
    genre: "Genre",
    year: "Year",
    
    // Nasyid
    myNasyid: "My Nasyid 🎵",
    listen: "Listen",
    
    // Projects
    myWebset: "My Webset 🌐",
    viewProject: "View Project",
    
    // Achievements
    myAchievements: "My Achievements 🏆",
    organization: "Organization",
    description: "Description",
    
    // General
    learnMore: "Learn More",
    
    // About Section
    aboutTitle: "About Me",
    aboutGreeting: "Hi, I'm Muh Hidayat Iski! 👋",
    aboutSubtitle: "Creative & Passionate",
    aboutDescription1: "Seorang penuntut ilmu sekaligus pendidik yang senantiasa berusaha belajar, berkembang, dan menyebarkan ilmu yang bermanfaat. Memiliki semangat tinggi dalam menuntut dan mengajarkan ilmu, serta mampu menyampaikan materi dengan cara yang jelas, mudah dipahami, dan menarik. Berusaha memahami kebutuhan para pembelajar dengan berbagai tingkat kemampuan, serta mengembangkan metode pembelajaran yang inovatif untuk meningkatkan kualitas pemahaman dan pengalaman belajar. ",
    aboutDescription2: "Selain itu, memiliki kemampuan komunikasi dan kerja sama yang baik dalam lingkungan pendidikan, serta berkomitmen untuk berkontribusi dalam membangun generasi yang mencintai ilmu, berakhlak mulia, dan siap memberikan manfaat bagi agama dan masyarakat.",
    aboutOpenToCollab: "Open to Collab",
    highlightAuthor: "Author",
    highlightNasyidArtist: "Nasyid Artist",
    highlightWebDev: "Web Dev",
    highlightAwardee: "Awardee",
    highlightAuthorDesc: "12 published books",
    highlightNasyidArtistDesc: "48+ recordings",
    highlightWebDevDesc: "24 projects built",
    highlightAwardeeDesc: "9 prestigious awards",
    
    // Settings Section
    settingsTitle: "Settings ⚙️",
    settingsSubtitle: "Customize your portfolio experience",
    editProfile: "Edit Profile",
    appearance: "Appearance",
    notifications: "Notifications",
    privacySecurity: "Privacy & Security",
    darkMode: "Dark Mode",
    darkModeDesc: "Switch to dark theme",
    settingsLanguage: "Language",
    settingsLanguageDesc: "Bahasa Indonesia",
    emailNotifications: "Email Notifications",
    emailNotificationsDesc: "Receive updates via email",
    pushNotifications: "Push Notifications",
    pushNotificationsDesc: "Browser push alerts",
    profileVisibility: "Profile Visibility",
    profileVisibilityDesc: "Public profile",
    twoFactorAuth: "Two-Factor Auth",
    twoFactorAuthDesc: "Add extra security",
    
    // Data translations
    dataBooks: {
      title: ["Jejak Cahaya", "Syair-syair Abu al-Atahiyah", "Mutiara Hikmah"],
      description: [
        "Kumpulan syair tentang perjalanan spiritual seorang muslimah muda dalam menemukan makna hidupnya.",
        "Syair Abu al-Atahiyah mengajarkan kebijaksanaan hidup, sikap zuhud terhadap dunia, serta pentingnya mengingat akhirat dan memperbaiki akhlak. dengan iman.",
        "Kumpulan cerita pendek penuh inspirasi yang mengajarkan nilai-nilai kehidupan islami."
      ],
      genre: ["Bahasa Arab", "Say'ir", "Balagah"]
    },
    dataNasyids: {
      title: ["Selawat Nabi", "Ya Rasulullah", "Doa Ibu", "Cahaya Ramadan"],
      album: ["Nur di Hati", "Rindu Madinah", "Keluarga Bahagia", "Nur di Hati"]
    },
    dataProjects: {
      title: ["Taman Baca Digital", "Murotal Al-Qur'an", "Quiz Quran", "Wedding Invitation"],
      description: [
        "Platform perpustakaan digital islami untuk anak-anak dengan fitur interaktif dan animasi menarik.",
        "Murotal Al-Qur'an yang dilantunkan dengan tartil, mengikuti kaidah tajwid dan makhraj yang benar. Murotal membantu pendengar membaca, menghafal, dan memahami Al-Qur'an dengan lebih baik, sekaligus menjadi sarana untuk mendekatkan diri kepada Allah dan menumbuhkan ketenangan hati.",
        "Aplikasi kuis interaktif untuk belajar Al-Quran dengan gamifikasi dan sistem reward yang menarik.",
        "Template undangan pernikahan digital premium dengan animasi dan fitur RSVP interaktif."
      ]
    },
    dataAchievements: {
      title: ["Safinatun Najah", "Tuhfatul Athfal", "Hifzul Mutun"],
      organization: ["Sertifikat Safinatun Najah", "Sertifikat Tuhfatul Athfal", "Sertifikat Hifzul Mutun"],
      description: [
        "Sertifikat Safinatun Najah merupakan bukti resmi atas partisipasi, kelulusan, atau pencapaian seseorang dalam mempelajari ilmu fiqih, khususnya materi yang bersumber dari kitab Safinatun Najah",
        "Sertifikat Tuhfatul Athfal merupakan bukti penghargaan atau pengakuan atas keberhasilan seseorang dalam mempelajari ilmu tajwid melalui kitab Tuhfatul Athfal.",
        "Sertifikat Menghafal Matan (Mutun) Thullabul Ilmi merupakan bukti penghargaan atas keberhasilan seseorang dalam menghafal matan-matan ilmu yang menjadi dasar pembelajaran keislaman.",
      ]
    }
  },
  ar: {
    // Navigation & UI
    dashboard: "لوحة التحكم",
    about: "حول",
    books: "الكتب",
    nasyid: "الناسيد",
    webset: "مشاريعي",
    penghargaan: "الجوائز",
    contact: "اتصل",
    settings: "الإعدادات",
    language: "اللغة",
    switchLanguage: "تغيير اللغة",
    
    // Header
    welcomeBack: "مرحبًا بعودتك يا محمد هداية إسكي ✨",
    
    // Hero
    portfolio: "محفظة 2024",
    welcomeToMy: "مرحباً في محفظتي\n✨",
    exploreNow: "استكشف الآن",
    heroDescription: "استكشف كتبي ومجموعات الناسيد والإنجازات ومشاريعي الإلكترونية.",
    
    // Stats
    bukuDiterbitkan: "الكتب المنشورة",
    koleksiNasyid: "مجموعات الناسيد",
    proyekWeb: "المشاريع الإلكترونية",
    penghargaanDiterima: "الجوائز",
    signal: "إشارة",
    
    // Books
    recentBooks: "الكتب الأخيرة 📚",
    myLatestPublications: "إصداراتي الأخيرة",
    viewAll: "عرض الكل",
    readMore: "اقرأ المزيد",
    genre: "النوع",
    year: "السنة",
    
    // Nasyid
    myNasyid: "ناسيدي 🎵",
    listen: "استمع",
    
    // Projects
    myWebset: "مشاريعي 🌐",
    viewProject: "عرض المشروع",
    
    // Achievements
    myAchievements: "إنجازاتي 🏆",
    organization: "المنظمة",
    description: "الوصف",
    
    // General
    learnMore: "معرفة المزيد",
    
    // About Section
    aboutTitle: "من أنا",
    aboutGreeting: "مرحباً، أنا محمد هداية إسكي! 👋",
    aboutSubtitle: "مبدعة ومتحمسة",
    aboutDescription1: "طالبُ علمٍ ومعلِّمٌ في الوقتِ نفسِه، أسعى باستمرارٍ إلى التعلُّم والتطوير ونشر المعرفة النافعة. أتميَّز بشغفٍ كبيرٍ بطلب العلم وتعليمه، مع القدرة على تقديم المحتوى التعليمي بأسلوبٍ واضحٍ وميسَّرٍ يجمع بين الفائدة والتشويق. أحرص على فهم احتياجات المتعلمين ومستوياتهم المختلفة، وتطوير أفكارٍ وأساليبَ تعليميةٍ مبتكرةٍ تُسهم في تحسين تجربة التعلُّم وتعزيز الفهم والاستيعاب.",
    aboutDescription2: "كما أمتلك مهاراتٍ جيدةً في التواصل والعمل ضمن بيئاتٍ تعليميةٍ متنوعة، وأسعى إلى الإسهام في بناء جيلٍ محبٍّ للعلم، متحلٍّ بالأخلاق، ومؤهَّلٍ لخدمة دينه ومجتمعه.",
    aboutOpenToCollab: "مفتوحة للتعاون",
    highlightAuthor: "كاتب",
    highlightNasyidArtist: "فنان الناسيد",
    highlightWebDev: "مطور ويب",
    highlightAwardee: "حائز على جوائز",
    highlightAuthorDesc: "12 كتاب منشور",
    highlightNasyidArtistDesc: "48+ تسجيل",
    highlightWebDevDesc: "24 مشروع",
    highlightAwardeeDesc: "9 جوائز مرموقة",
    
    // Settings Section
    settingsTitle: "الإعدادات ⚙️",
    settingsSubtitle: "خصص تجربة محفظتك",
    editProfile: "تعديل الملف",
    appearance: "المظهر",
    notifications: "الإشعارات",
    privacySecurity: "الخصوصية والأمان",
    darkMode: "الوضع الداكن",
    darkModeDesc: "التحول إلى السمة الداكنة",
    settingsLanguage: "اللغة",
    settingsLanguageDesc: "العربية",
    emailNotifications: "إشعارات البريد الإلكتروني",
    emailNotificationsDesc: "تلقي التحديثات عبر البريد الإلكتروني",
    pushNotifications: "إشعارات Push",
    pushNotificationsDesc: "تنبيهات المتصفح",
    profileVisibility: "إظهار الملف",
    profileVisibilityDesc: "ملف عام",
    twoFactorAuth: "المصادقة الثنائية",
    twoFactorAuthDesc: "إضافة أمان إضافي",
    
    // Data translations
    dataBooks: {
      title: ["آثار النور", "أشعار أبي العتاهية", "حكم珍珠"],
      description: [
        "مجموعة قصائد عن الرحلة الروحية لشابة مسلمة في إيجاد معنى حياتها.",
        "تدعو أشعار أبي العتاهية إلى الحكمة والزهد في الدنيا، وتذكّر الإنسان بقِصَر الحياة وأهمية الاستعداد للآخرة وحسن الأخلاق.",
        "مجموعة قصص قصيرة ملهمة تعلم القيم الإسلامية."
      ],
      genre: ["شعر", "رواية", "قصص قصيرة"]
    },
    dataNasyids: {
      title: ["صلاة على النبي", "يا محمد", "دعاء الأم", "ضوء رمضان"],
      album: ["نور في القلب", "حنين المدينة", "أسرة سعيدة", "نور في القلب"]
    },
    dataProjects: {
      title: ["حديقة قراءة رقمية", "المرتل", "اختبار القرآن", "دعوة زفاف"],
      description: [
        "منصة مكتبة رقمية إسلامية للأطفال مع ميزات تفاعلية ورسوم متحركة جذابة.",
        "تطبيق تلاوة القرآن الكريم بتجويد وتحقيق قواعد التجويد والمخارج الصحيحة. يساعد التلاوة المستمعين على القراءة والحفظ والفهم الأفضل للقرآن، ويكون وسيلة للتقرب إلى الله وتحقيق الطمأنينة في القلب.",
        "تطبيق اختبار تفاعلي لتعلم القرآن مع نظام مكافآت.",
        "قالب دعوة زفاف رقمية متميزة مع رسوم RSVP التفاعلية."
      ]
    },
    dataAchievements: {
      title: ["سفينة النجاة", "تحفة الأطفال", "حفظ المتون لطلاب العلم"],
      organization: ["شهادة سفينة النجاة", "شهادة تحفة الأطفال", "شهادة حفظ المتون لطلاب العلم"],
      description: [
        "ُعَدُّ شهادة سفينة النجاة وثيقةً تُمنَح تقديرًا للمشاركة أو إتمام دراسة الفقه الإسلامي من خلال كتاب سفينة النجاة",
        "تُعَدُّ شهادة تحفة الأطفال وثيقةً تُمنَح تقديرًا لإتمام دراسة علم التجويد من خلال منظومة تحفة الأطفال",
        "تُعَدُّ شهادة حفظ المتون لطلاب العلم وثيقةً تُمنَح تقديرًا للنجاح في حفظ المتون العلمية التي تُعَدُّ أساسًا في طلب العلم الشرعي."
      ]
    }
  },
};

// Helper function to get translation (for simple string keys only)
export function t(key: keyof Omit<Translations, "dataBooks" | "dataNasyids" | "dataProjects" | "dataAchievements">, lang: Language): string {
  return translations[lang][key];
}