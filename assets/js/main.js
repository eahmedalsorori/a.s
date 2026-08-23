/**
 * Main Dynamic Functions for Al-Sorory Platform
 * Clean, Unified & Bug-Free JS Code 
 * Author: Ahmed AL-Sorori Whatsapp-> +967 772 223 904
 * gmail_Author: e.ahmedal.sorori@gmail.com 
 */

// ==========================================
// 1. الثوابت وقوائم الثيمات والترجمات
// ==========================================
const THEMES = [
    'theme-light', 
    'theme-light-modern', 
    'theme-dark', 
    'theme-dark-modern', 
    'theme-gold-luxury'
];

let currentLang = localStorage.getItem('app_lang') || localStorage.getItem('preferred_language') || 'ar';
let activeProjectId = null; // لتتبع المشروع المفتوح حالياً في النافذة المنبثقة

const translations = {
    ar: {
        doc_title: "أعمالنا - السروري للحلول الرقمية والتسويق",
        logo: "السروري",
        name_logo: "السروري",
        site_logo: "السروري",
        startProj: "ابدأ مشروعك",
        btn_start_project: "← ابدأ مشروعك",
        btn_lang: "EN",
        
        // القائمة الرئيسية (Navigation)
        home: "الرئيسية",
        services: "خدماتنا",
        works: "أعمالنا",
        package: "الباقات",
        about: "من نحن",
        contact: "تواصل معنا",
        nav_home: "الرئيسية",
        m_nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        m_nav_services: "خدماتنا",
        nav_works: "أعمالنا",
        m_nav_works: "أعمالنا",
        nav_packages: "الباقات",
        m_nav_packages: "الباقات",
        nav_about: "من نحن",
        m_nav_about: "من نحن",
        nav_contact: "تواصل معنا",
        m_nav_contact: "تواصل معنا",

        // القسم الرئيسي (Hero Header)
        badge: "وكالة رقمية متكاملة",
        titleGold: "حلول رقمية",
        titleMain: "لتنمية أعمالك",
        desc: "نساعد الشركات والعلامات التجارية على بناء حضور رقمي قوي من خلال التسويق الإلكتروني، تطوير المواقع، وبناء الأنظمة البرمجية.",
        btnStartNow: "ابدأ مشروعك الآن",
        growth: "النمو",
        s1: "مشروع منجز",
        s2: "عميل سعيد",
        s3: "حملة إعلانية",

        // الثيمات المتاحة
        /*
          theme_name_themes: "Themes 🎨 ", //0
        theme_name_light: "Light 🔵", //1
        theme_name_light_modern: "Light Modern 🔵",  //2
        theme_name_dark:"Dark ⚫", //3
        theme_name_dark_modern:"Dark Modern  🟣", //4
        theme_name_gold_luxury:"Gold Luxury  🟡", //5
      
        */
        theme_king_name_themes: "المظهر", //0
        theme_name_themes: "المظهر ", //1
        theme_name_light: " ⚪ فاتح ",//2
        theme_name_light_modern: "🔵 فاتح عصري",//3
        theme_name_dark: " ⚫ داكن ",//4
        theme_name_dark_modern:  " 🟣 داكن عصري",//5
        theme_name_gold_luxury: "  🟡 ذهبي فاخر",//6
            // الثيمات الخاصة في الجوال 
        phone_theme_king_name_themes: "  🎨", //0
        phone_theme_name_themes: "  🎨", //1
        phone_theme_name_light: "فاتح ⚪ ",//2
        phone_theme_name_light_modern: "🔵فاتح عصري  ", //3
        phone_theme_name_dark: " ⚫ داكن ", //4
        phone_theme_name_dark_modern: "🟣 داكن عصري", //5
        phone_theme_name_gold_luxury: "🟡 ذهبي فاخر", //6
        // قسم العناوين والفلترة لصفحة الأعمال
        works_badge: "معرض الأعمال والحلول",
        works_title: "حلول رقمية نبتكرها لتقود مشروعك نحو النمو",
        works_desc: "نستعرض معكم نماذج من خدماتنا الاحترافية في تطوير التواجد الرقمي، تحسين محركات البحث SEO، إدارة منصات التواصل، وإطلاق الحملات الإعلانية الممولة.",
        filter_all: "الكل",
        filter_marketing: "إدارة الحسابات",
        filter_ads: "الحملات الإعلانية",
        filter_web: "تطوير المواقع والتطبيقات",
        filter_seo: "تحسين محركات البحث SEO",

        // بطاقات المشاريع والبادجات
        badge_social_mgmt: "إدارة الحسابات",
        badge_web_dev: "تطوير المواقع",
        badge_paid_ads: "إعلانات ممولة",
        badge_ecom: "متاجر إلكترونية",
        badge_seo: "تحسين SEO",
        order_now: "اطلب الآن ←",
        
        works_hero_badge: "معرض الأعمال والخدمات",
        works_hero_title: "نظرة شاملة على حلولنا الرقمية وإبداعاتنا",
        works_hero_subtitle: "نستعرض لكم باقة متكاملة من الخدمات والتطبيقات التسويقية والبرمجية المصممة لرفع كفاءة أعمالكم وتحقيق نمو مستدام.",
        works_hero_img_tag: "حلول متكاملة تضمن لك التفوق الرقمي",
        works_feat_1: "تصاميم حديثة ومبتكرة",
        works_feat_2: "أداء عالي وسرعة فائقة",

        // نصوص كروت المشاريع
        p1_title: "إدارة وتنمية منصات التواصل الاجتماعي",
        p1_item1: "إدارة شاملة لصفحات فيسبوك، انستغرام، وواتساب الأعمال وتفاعل مستمر.",
        p1_item2: "صياغة محتوى إبداعي يبرز المزايا التقنية والتجارية لمنتجاتك وخدماتك.",
        p1_item3: "تنسيق ردود خدمة العملاء وجلب عملاء جدد باستراتيجيات تحويل مدروسة.",
        p1_tag: "إدارة التواصل الاجتماعي",

        p2_title: "تصميم وتطوير المواقع والأنظمة التعريفية",
        p2_desc: "نقدم حلول تطوير مواقع وبوابات رقمية بأعلى معايير السرعة والأمان، مخصصة للشركات والمؤسسات لتقديم الخدمات والمنتجات للعملاء بأفضل تجربة مستخدم (UI/UX).",
        p2_tag: "تطبيقات الويب",

        p3_title: "إطلاق وتمويل الحملات الإعلانية المستهدفة",
        p3_desc: "نصمم وننشئ إعلانات موجهة لأصحاب المشاريع والمنتجات، نضمن لك استهدافاً دقيقاً للجمهور المهتم لتحقيق أكبر عائد على الاستثمار (ROAS) بأقل تكلفة للوصول.",
        p3_tag: "حملات إعلانية ممولة",

        p4_title: "إدارة الهوية والهياكل التسويقية للمشاريع",
        p4_desc: "تحليل الأداء اليومي ومتابعة التفاعلات مع تقديم خطة محتوى متكاملة تحقق أهداف المشروع وتزيد من المبيعات والولاء لدى الزبائن.",
        p4_tag: "استراتيجية نمو",

        p5_title: "برمجة وتطوير المتاجر والتطبيقات التجارية",
        p5_desc: "بناء منصات وتطبيقات تجارة إلكترونية متكاملة وسريعة الاستجابة، تدعم ربط بوابات الدفع، المحافظ الإلكترونية، ووسائل الشحن المختلفة.",
        p5_tag: "تطوير المتاجر",

        p6_title: "صناعة المحتوى وتنمية التفاعل الرقمي",
        p6_desc: "بناء استراتيجيات محتوى مبتكرة وتصميم منشورات تفاعلية تضاعف وصول حساباتك وتبني مجتمعاً متفاعلاً من العملاء.",
        p6_modal_desc: "نساعدك في تحويل صفحاتك على منصات التواصل الاجتماعي إلى قناة مبيعات وتسويق فعالة من خلال صناعة محتوى إبداعي يبرز هوية مشروعك، مع تحسين أدوات التواصل وتفاعل المتابعين بشكل مستمر.",
        p6_ft1: "صياغة وإعداد جدول محتوى شهري متكامل ومصمم خصيصاً لهويتك.",
        p6_ft2: "تصميم جرافيك وفيديوهات قصيرة (Reels) تزيد من الانتشار والوصول.",
        p6_ft3: "إدارة وتحليل التفاعل وإعادة استهداف الزوار لتحويلهم لعملاء دائمين.",
        p6_ft4: "تقديم تقارير تحليليّة دورية تقيس معدل النمو وتفاعل الجمهور.",
        p6_tag: "مبيعات مباشرة",

        p7_title: "تهيئة وتحسين نتائج محركات البحث (SEO)",
        p7_desc: "نضمن لموقعك أو متجرك التصدر في نتائج جوجل الأولى مجاناً عبر تحسين الكلمات المفتاحية، بناء الباك لينك، ورفع سرعة الأداء التقني للموقع.",
        p7_tag: "تحسين محركات البحث",

        // تفاصيل النافذة المنبثقة
        modal_features_title: "ماذا تشمل هذه الخدمة؟",
        modal_order_now: "اطلب هذه الخدمة الآن",
        modal_close: "إغلاق",
        p1_modal_desc: "نقدم لك حلولاً متكاملة لإدارة حيوية لحسابات التواصل الاجتماعي. نقوم بدراسة جمهورك المستهدف وتحليل المنافسين لوضع استراتيجية تنشيطية تبني هويتك وتجذب المزيد من العملاء المهتمين.",
        p2_modal_desc: "نوفر تصميم وتطوير مواقع إلكترونية متجاوبة بالكامل تتناسب مع تطلعات نشاطك التجاري، مع الالتزام بأحدث تقنيات الويب العالمية وسرعة التصفح العالية.",
        p3_modal_desc: "نصمم ونطلق حملات إعلانية مدفوعة عبر منصات Google, Facebook, Instagram وغيرها للوصول المباشر إلى العميل المستهدف مع تحسين الاستهلاك وتوفير العائد.",
        p5_modal_desc: "نساعدك في تحويل متجرك إلى بوابة بيع رقمية متاحة 24/7 مع توفير أفضل تجربة تسوق تفاعلية لعملائك وإعادة استهدافهم لتكرار عمليات الشراء.",
        p7_modal_desc: "استراتيجيات متكاملة لتحسين ظهور موقعك في الصفحة الأولى لنتائج Google، مما يضمن تدفق الزوار مجاناً بشكل مستمر ودائم.",

        // الفوتر
        footer_desc: "وكالة رقمية متخصصة في تمكين المشاريع عبر خدمات تطوير البرمجيات، إدارة منصات التواصل، تحسين محركات البحث SEO، وإطلاق الحملات الإعلانية الموجهة.",
        footer_title_links: "روابط سريعة",
        footer_title_services: "خدماتنا الرئيسية",
        f_service_1: "إدارة حسابات التواصل الاجتماعي",
        f_service_2: "الحملات الإعلانية الممولة",
        f_service_3: "تطوير مواقع وتطبيقات الويب",
        f_service_4: "تحسين محركات البحث SEO",
        footer_title_newsletter: "النشرة البريدية",
        footer_newsletter_text: "اشترك معنا لتصلك أحدث الاستراتيجيات والحلول الرقمية.",
        footer_btn_subscribe: "اشترك الآن",
        footer_copyright: "© 2026 السروري للتسويق الرقمي والحلول البرمجية. جميع الحقوق محفوظة.",

        // باقات الأسعار
        pricing_badge: "خطط وأسعار مرنة",
        pricing_title: "اختر باقتك المناسبة وابدأ رحلة النجاح!",
        pricing_subtitle: "وضعنا بين يديك خيارات متنوعة ومدروسة بعناية لتناسب حجم مشروعك وميزانيتك، بدءاً من باقات التوفير الذكي وصولاً إلى باقات السيطرة والانتشار الواسع.",
        monthly_plans_heading: "أولاً: باقات إدارة الحسابات الشهرية",
        monthly_plans_subheading: "(تشمل: إعداد الخطط، كتابة المحتوى، التصاميم، التمويل الإعلاني، وإدارة الردود)",
        
        plan_startup_tag: "الشركات الناشئة",
        plan_startup_title: "باقة الانطلاقة",
        plan_startup_desc: "مخصصة للشركات الناشئة والأنشطة التجارية التي ترغب ببناء حضورها الأولي.",
        feat_1: "خطة تسويقية واستراتيجية مخصصة",
        feat_2: "كتابة محتوى جذاب ومتوافق مع الجمهور",
        feat_3: "8 منشورات إعلانية احترافية",
        feat_4: "تمويل إعلاني يستهدف 120,000 شخص",
        feat_5: "متابعة التفاعل وإدارة الردود",
        feat_6: "تقرير شهري لتقييم الأداء والنمو",
        
        most_popular: "الأكثر إقبالاً 🔥",
        plan_growth_tag: "رواد الأعمال",
        plan_growth_title: "باقة التوسع",
        plan_growth_desc: "مخصصة لرواد الأعمال وأصحاب المشاريع لتعزيز التفاعل والمبيعات.",
        feat_growth_1: "خطة تسويقية احترافية متكاملة",
        feat_growth_2: "صناعة محتوى إبداعي متنوع",
        feat_growth_3: "12 منشوراً إعلانياً جذاباً",
        feat_growth_4: "تمويل إعلاني يصل إلى 200,000 شخص",
        feat_growth_5: "إدارة فعالة للردود والرسائل",
        feat_growth_6: "إدارة مسابقات وتفعيل التفاعل",
        feat_growth_7: "تقرير شهري شامل ومفصل",

        plan_leadership_tag: "المؤسسات والعلامات",
        plan_leadership_title: "باقة الريادة",
        plan_leadership_desc: "مخصصة للمؤسسات والعلامات التجارية التي تستهدف أقصى تأثير رقمي.",
        feat_lead_1: "خطة تسويقية متقدمة ونشطة",
        feat_lead_2: "محتوى إبداعي ومستهدف بدقة",
        feat_lead_3: "16 منشوراً إعلانياً فاخراً",
        feat_lead_4: "تمويل إعلاني يغطي 260,000 شخص",
        feat_lead_5: "إدارة احترافية متكاملة للحسابات",
        feat_lead_6: "تنظيم مسابقات وعروض ترويجية",
        feat_lead_7: "تقرير تحليلي دقيق ومباشر",

        per_month: "/ شهرياً",
        subscribe_btn: "اشترك الآن",

        ads_plans_heading: "ثانياً: باقات الإعلانات الممولة (فيسبوك وإنستغرام)",
        ads_plans_subheading: "وصول حقيقي وموجه لجمهورك المستهدف بأقل التكاليف",
        silver_table_title: "الباقات الفضية (القياسية)",
        silver_table_sub: "خيار ممتاز للانطلاق والتجربة المستمرة",
        gold_table_title: "الباقات الذهبية (المكثفة)",
        gold_table_sub: "للالتفاف الواسع وإحكام السيطرة والتفوق السوقي",
        
        th_duration: "المدة",
        th_price: "السعر (ريال يمني)",
        th_reach: "الوصول التقريبي",

        d_3days: "3 أيام",
        d_5days: "5 أيام",
        d_7days: "7 أيام",
        d_10days: "10 أيام",
        d_15days: "15 يوماً",
        d_20days: "20 يوماً",
        d_30days: "30 يوماً",

        custom_package_note: "💡 ملاحظة: تتوفر لدينا أيضاً باقات مخصصة يتم تصميمها خصيصاً لتناسب أهدافك وميزانيتك بدقة.",
        cta_title: "تواصل معنا الآن وابدأ خطوتك الأولى",
        cta_subtitle: "فريقنا المخصص جاهز للرد على استفساراتك وتصميم الباقة الأمثل لنمو نشاطك التجاري.",

        // صفحة من نحن
        "about.hero.badge": "من نحن",
        "about.hero.title": "نحن نبتكر الحلول الرقمية لتنمية أعمالك",
        "about.hero.description": "وكالة تسويق رقمي متكاملة تجمع بين الإبداع والشغف والبيانات لمساعدة العلامات التجارية على النمو والتألق في العالم الرقمي.",
        "about.story.title": "قصتنا وشغفنا بالتطوير",
        "about.story.p1": "تأسست وكالة \"السروري\" برؤية واضحة: إحداث ثورة في كيفية تواصل الشركات مع عملائها عبر الإنترنت. نحن لا نقدم مجرد خدمات تسويقية، بل نبني شراكات استراتيجية طويلة الأمد تساعد على تحقيق نتائج ملموسة.",
        "about.story.p2": "يمتلك فريقنا خبرات واسعة في إدارة الحملات الإعلانية، بناء الهويات البصرية، تطوير المواقع، وصناعة المحتوى الإبداعي لضمان وصول علاماتكم التجارية لأقصى طاقاتها.",
        "about.stats.projects": "مشروع ناجح",
        "about.stats.clients": "عميل سعيد",
        "about.stats.years": "سنوات خبرة",
        "about.box.title": "لماذا يختارنا العملاء؟",
        "about.box.point1": "استراتيجيات مبنية على البيانات والتحليل الدقيق.",
        "about.box.point2": "تصاميم وحلول برمجية متجاوبة ومطابقة لأحدث المعايير.",
        "about.box.point3": "دعم فني ومتابعة مستمرة لضمان تحقيق الأهداف.",
        "about.values.mainTitle": "رؤيتنا وقيمنا",
        "about.values.mainSub": "المبادئ التي توجه كل خطوة نقوم بها",
        "about.values.visionTitle": "رؤيتنا",
        "about.values.visionDesc": "أن نكون الوكالة الرائدة في تقديم الحلول التسويقية والتكنولوجية المبتكرة في المنطقة، والرفيق الأول للشركات الناشئة والكبيرة.",
        "about.values.missionTitle": "رسالتنا",
        "about.values.missionDesc": "تمكين عملائنا من تحقيق أعلى معدلات النمو من خلال حملات إبداعية وحلول رقمية مدروسة بعناية وبأعلى معايير الجودة.",
        "about.values.valuesTitle": "قيمنا",
        "about.values.valuesDesc": "الشفافية التامة مع العملاء، الابتكار المستمر، والالتزام الصارم بمواعيد التسليم والجودة العالية.",

        // صفحة تواصل معنا
        "contact.hero.badge": "تواصل معنا",
        "contact.hero.title": "نحن هنا لمساعدتك وبدء مشروعك",
        "contact.hero.description": "هل لديك استفسار، فكرة مشروع، أو ترغب في استشارة تسويقية؟ تواصل معنا اليوم وسيرد عليك فريقنا المتخصص في أسرع وقت.",
        "contact.info.title": "معلومات التواصل",
        "contact.info.sub": "يمكنك التواصل معنا عبر القنوات التالية أو زيارة مكتبنا",
        "contact.info.phone": "أرقام التواصل والواتساب",
        "contact.info.email": "البريد الإلكتروني",
        "contact.info.address": "العنوان",
        "contact.info.address_value": "الجمهورية اليمنية - صنعاء_أمانة العاصمة ",
        "contact.info.hours": "ساعات العمل",
        "contact.info.hours_value": "السبت - الخميس: 9:00 صباحاً - 1:00 ظهراً",
        "contact.info.hours_value1": "مع العلم ان العمل اون لاين من الساعه على مدار اليوم",
        "contact.form.title": "أرسل لنا رسالة",
        "contact.form.name": "الاسم الكامل",
        "contact.form.name_ph": "أدخل اسمك الكريم",
        "contact.form.email": "البريد الإلكتروني",
        "contact.form.email_ph": "e.ahmedal.sorori@gmail.com",
        "contact.form.phone": "رقم الهاتف / الواتساب",
        "contact.form.phone_ph": "+967-772-223-904",
        "contact.form.service": "الخدمة المطلوبة",
        "contact.form.service_select": "اختر الخدمة...",
        "contact.form.service_web": "تطوير المواقع والأنظمة",
        "contact.form.service_marketing": "التسويق الرقمي وإدارة الحسابات",
        "contact.form.service_ads": "الإعلانات الممولة",
        "contact.form.service_design": "تصميم الهويات والـ UI/UX",
        "contact.form.service_other": "استشارة / خدمات أخرى",
        "contact.form.message": "تفاصيل الرسالة",
        "contact.form.message_ph": "اكتب تفاصيل مشروعك أو استفسارك هنا...",
        "contact.form.submit": "إرسال الرسالة"
    },
    en: {
        doc_title: "Our Works - Al-Sorory Digital Solutions & Marketing",
        logo: "Al-Sorory",
        name_logo: "Al-Sorory",
        site_logo: "Al-Sorory",
        startProj: "Start Project",
        btn_start_project: "Start Your Project",
        btn_lang: "AR",
        
        // Navigation
        home: "Home",
        services: "Services",
        works: "Our Work",
        package: "Packages",
        about: "About Us",
        contact: "Contact Us",
        nav_home: "Home",
        m_nav_home: "Home",
        nav_services: "Services",
        m_nav_services: "Services",
        nav_works: "Our Works",
        m_nav_works: " Works",   
        nav_packages: "Packages",
        m_nav_packages: "Packages",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        m_nav_about: "About ",
        m_nav_contact: "Contact ",

        // Hero Header
        badge: "Integrated Digital Agency",
        titleGold: "Digital Solutions",
        titleMain: "To Grow Your Business",
        desc: "We help companies and brands build a strong digital presence through e-marketing, web development, and software systems engineering.",
        btnStartNow: "Start Your Project Now",
        growth: "Growth",
        s1: "Done Projects",
        s2: "Happy Clients",
        s3: "Ad Campaigns",

        // Themes
        
        theme_king_name_themes: " Themes  ", //0
        theme_name_themes: " Themes  ", //1
        theme_name_light: "Light 🔵", //2
        theme_name_light_modern: "Light Modern 🔵",  //3
        theme_name_dark:"Dark ⚫", //4
        theme_name_dark_modern:"Dark Modern  🟣", //5
        theme_name_gold_luxury:"Gold Luxury  🟡", //6
            //  Phone-To-Themes  
        phone_theme_king_name_themes: "Themes ", //0
        phone_theme_name_themes: "Themes ", //1
        phone_theme_name_light: "Light ⚪", //2
        phone_theme_name_light_modern: "Light Modern 🔵",    //3
        phone_theme_name_dark:"Dark ⚫",     //4
        phone_theme_name_dark_modern:"Dark Modern 🟣",  //5
        phone_theme_name_gold_luxury:"Gold Luxury 🟡",  //6 
        /**theme_menu_title: "المظهر", //0
        theme_light_label: "فاتح",//1
        theme_light_modern_btn: "🔵 فاتح عصري",//2
        theme_dark_name: " ⚫ داكن ",//3
        theme_name_dark_modern:  " 🟣 داكن عصري",//4
        theme_gold_luxury_label: "  🟡 ذهبي فاخر",//5*/
        // Titles & Filters
        works_badge: "Portfolio & Solutions",
        works_title: "Digital Solutions Built to Grow Your Business",
        works_desc: "Explore our professional portfolio in web development, Search Engine Optimization (SEO), social media management, and high-ROI targeted paid ad campaigns.",
        filter_all: "All",
        filter_marketing: "Account Management",
        filter_ads: "Paid Ads",
        filter_web: "Web Development",
        filter_seo: "SEO Services",

        // Badges & Order Button
        badge_social_mgmt: "Social Management",
        badge_web_dev: "Web Development",
        badge_paid_ads: "Paid Ads",
        badge_ecom: "E-Commerce",
        badge_seo: "SEO Optimization",
        order_now: "Order Now →",

        works_hero_badge: "Portfolio & Services Overview",
        works_hero_title: "A Comprehensive Look at Our Digital Solutions",
        works_hero_subtitle: "Exploring an integrated suite of marketing and software services engineered to accelerate business growth.",
        works_hero_img_tag: "All-in-one digital excellence",
        works_feat_1: "Modern & Creative Designs",
        works_feat_2: "High Performance & Fast Speed",

        // Projects Content
        p1_title: "Social Media Platforms Management & Growth",
        p1_item1: "Full management for Facebook, Instagram, and WhatsApp Business with active engagement.",
        p1_item2: "Creative content creation showcasing technical & commercial features of your business.",
        p1_item3: "Handling customer queries and converting audience into active buyers.",
        p1_tag: "Social Media Management",

        p2_title: "Website Design & Corporate Portal Development",
        p2_desc: "High-performance, secure web applications built to showcase your business and services with optimal UI/UX.",
        p2_tag: "Web Applications",

        p3_title: "Targeted Paid Advertising Campaigns",
        p3_desc: "Tailored ad strategies for business owners to ensure high ROAS and precise audience targeting at optimized costs.",
        p3_tag: "Paid Ads Campaign",

        p4_title: "Brand Strategy & Social Growth Management",
        p4_desc: "Continuous performance auditing and content strategies designed to increase customer retention and sales.",
        p4_tag: "Growth Strategy",

        p5_title: "E-Commerce & Store Development",
        p5_desc: "Fast and responsive e-commerce stores integrated with payment gateways, electronic wallets, and shipping solutions.",
        p5_tag: "E-Commerce Dev",

        p6_title: "Content Creation & Social Engagement Growth",
        p6_desc: "Building innovative content strategies and engaging posts to multiply your organic reach and build a loyal audience.",
        p6_modal_desc: "We turn your social media profiles into active sales channels through creative content creation, visual branding, and constant engagement optimization.",
        p6_ft1: "Drafting a customized monthly content calendar tailored to your brand.",
        p6_ft2: "Graphic design & short video reels designed for maximum organic reach.",
        p6_ft3: "Managing interaction and retargeting leads to boost overall conversions.",
        p6_ft4: "Regular analytical reports tracking growth rate and audience engagement.",
        view_details: "View Details",

        p7_title: "Search Engine Optimization (SEO)",
        p7_desc: "We ensure your website ranks at the top of Google organic search results through keyword optimization, backlink building, and technical speed enhancement.",
        p7_tag: "Search Engine Optimization",

        modal_features_title: "What does this service include?",
        modal_order_now: "Order This Service Now",
        modal_close: "Close",
        p1_modal_desc: "Comprehensive social media account management aimed at building your brand voice, engaging targeted audiences, and boosting overall conversion rates.",
        p2_modal_desc: "Custom website development built with responsive designs, lightning-fast performance, and optimal user experience standards.",
        p3_modal_desc: "Targeted paid advertising strategies across platforms like Google and Meta to reach ideal buyers and maximize return on ad spend.",
        p5_modal_desc: "E-commerce solutions engineered to drive online sales with seamless checkout flows, secure payment gateways, and order management.",
        p7_modal_desc: "Search engine optimization (SEO) techniques designed to bring your website to top search rankings and increase organic web traffic.",

        // Footer
        footer_desc: "A digital agency dedicated to empowering businesses with web development, SEO optimization, social media management, and targeted ad campaigns.",
        footer_title_links: "Quick Links",
        footer_title_services: "Our Core Services",
        f_service_1: "Social Media Management",
        f_service_2: "Targeted Paid Ads",
        f_service_3: "Web & App Development",
        f_service_4: "Search Engine Optimization (SEO)",
        footer_title_newsletter: "Newsletter",
        footer_newsletter_text: "Subscribe to receive the latest digital strategies and technical solutions.",
        footer_btn_subscribe: "Subscribe Now",
        footer_copyright: "© 2026 Al-Sorory Digital Marketing & Software. All rights reserved.",

        // Packages
        pricing_badge: "Flexible Plans & Pricing",
        pricing_title: "Choose Your Right Package and Start Your Success Journey!",
        pricing_subtitle: "We have provided you with carefully studied options to suit your project size and budget, starting from smart savings packages to wide control and spread packages.",
        monthly_plans_heading: "First: Monthly Account Management Packages",
        monthly_plans_subheading: "(Includes: Plan preparation, content writing, designs, ad funding, and response management)",
        
        plan_startup_tag: "Startups",
        plan_startup_title: "Launch Package",
        plan_startup_desc: "Dedicated to startups and businesses looking to build their initial presence.",
        feat_1: "Custom marketing & strategy plan",
        feat_2: "Engaging and audience-aligned content writing",
        feat_3: "8 professional ad posts",
        feat_4: "Ad funding targeting 120,000 people",
        feat_5: "Engagement tracking & response management",
        feat_6: "Monthly performance & growth evaluation report",
        
        most_popular: "Most Popular 🔥",
        plan_growth_tag: "Entrepreneurs",
        plan_growth_title: "Expansion Package",
        plan_growth_desc: "Dedicated to entrepreneurs and project owners to boost engagement and sales.",
        feat_growth_1: "Comprehensive professional marketing plan",
        feat_growth_2: "Diverse creative content creation",
        feat_growth_3: "12 attractive ad posts",
        feat_growth_4: "Ad funding reaching up to 200,000 people",
        feat_growth_5: "Effective comment & message management",
        feat_growth_6: "Contests management & engagement boost",
        feat_growth_7: "Comprehensive and detailed monthly report",

        plan_leadership_tag: "Institutions & Brands",
        plan_leadership_title: "Leadership Package",
        plan_leadership_desc: "Dedicated to institutions and brands aiming for maximum digital impact.",
        feat_lead_1: "Advanced and active marketing plan",
        feat_lead_2: "Precise creative and targeted content",
        feat_lead_3: "16 luxurious ad posts",
        feat_lead_4: "Ad funding covering 260,000 people",
        feat_lead_5: "Complete professional account management",
        feat_lead_6: "Organizing contests and promotional offers",
        feat_lead_7: "Direct and accurate analytical report",

        per_month: "/ month",
        subscribe_btn: "Subscribe Now",

        ads_plans_heading: "Second: Sponsored Ads Packages (Facebook & Instagram)",
        ads_plans_subheading: "Real and targeted reach to your audience at minimal costs",
        silver_table_title: "Silver Packages (Standard)",
        silver_table_sub: "An excellent choice for launching and continuous testing",
        gold_table_title: "Gold Packages (Intensive)",
        gold_table_sub: "For wide deployment, tight control, and market supremacy",
        
        th_duration: "Duration",
        th_price: "Price (YER)",
        th_reach: "Approx. Reach",

        d_3days: "3 Days",
        d_5days: "5 Days",
        d_7days: "7 Days",
        d_10days: "10 Days",
        d_15days: "15 Days",
        d_20days: "20 Days",
        d_30days: "30 Days",

        custom_package_note: "💡 Note: We also offer custom packages tailored precisely to match your exact goals and budget.",
        cta_title: "Contact Us Now and Take Your First Step",
        cta_subtitle: "Our dedicated team is ready to answer your inquiries and design the optimal package for your business growth.",

        // About Us
        "about.hero.badge": "About Us",
        "about.hero.title": "We Innovate Digital Solutions to Grow Your Business",
        "about.hero.description": "A full-service digital marketing agency combining creativity, passion, and data to help brands grow and excel in the digital world.",
        "about.story.title": "Our Story & Passion for Growth",
        "about.story.p1": "AL-Sorori agency was founded with a clear vision: to revolutionize how businesses connect with their customers online. We don't just provide marketing services; we build long-term strategic partnerships that yield real results.",
        "about.story.p2": "Our team possesses extensive experience in ad campaign management, brand identity design, web development, and content creation to ensure your brand reaches its full potential.",
        "about.stats.projects": "Successful Projects",
        "about.stats.clients": "Happy Clients",
        "about.stats.years": "Years Experience",
        "about.box.title": "Why Clients Choose Us?",
        "about.box.point1": "Data-driven strategies and precise analytics.",
        "about.box.point2": "Responsive designs and modern software solutions.",
        "about.box.point3": "Continuous technical support and objective tracking.",
        "about.values.mainTitle": "Our Vision & Values",
        "about.values.mainSub": "The principles that guide every step we take",
        "about.values.visionTitle": "Our Vision",
        "about.values.visionDesc": "To be the leading innovative marketing and technology agency in the region, and the primary partner for startups and large enterprises.",
        "about.values.missionTitle": "Our Mission",
        "about.values.missionDesc": "Empowering our clients to achieve maximum growth through creative campaigns and carefully engineered digital solutions.",
        "about.values.valuesTitle": "Our Values",
        "about.values.valuesDesc": "Complete transparency with clients, continuous innovation, and strict commitment to deadlines and high quality.",

        // Contact Us
        "contact.hero.badge": "Contact Us",
        "contact.hero.title": "We're Here to Help You Launch Your Project",
        "contact.hero.description": "Have a question, a project idea, or need marketing advice? Get in touch today, and our team will get back to you promptly.",
        "contact.info.title": "Contact Information",
        "contact.info.sub": "Feel free to reach out via any of the following channels or visit us.",
        "contact.info.phone": "Phone & WhatsApp",
        "contact.info.email": "Email Address",
        "contact.info.address": "Location",
        "contact.info.github": "GitHub Profile",
        "contact.info.github_value": "www.github.com/ahmedalsorori",
        "contact.info.linkedin": "LinkedIn Profile",
        "contact.info.linkedin_value": "www.linkedin.com/in/e.ahmedal.sorori",
        "contact.info.address_value": "Republic of Yemen - Sana'a, Capital Secretariat",
        "contact.info.hours": "Working Hours",
        "contact.info.hours_value": "Sat - Thu: 9:00 AM - 1:00 PM",
        "contact.form.title": "Send Us a Message",
        "contact.form.name": "Full Name",
        "contact.form.name_ph": "Enter your full name",
        "contact.form.email": "Email Address",
        "contact.form.email_ph": "e.ahmedal.sorori@gmail.com",
        "contact.form.phone": "Phone / WhatsApp",
        "contact.form.phone_ph": "+967-772-223-904",
        "contact.form.service": "Required Service",
        "contact.form.service_select": "Select a service...",
        "contact.form.service_web": "Web & System Development",
        "contact.form.service_marketing": "Digital Marketing & Account Management",
        "contact.form.service_ads": "Sponsored Ads",
        "contact.form.service_design": "Branding & UI/UX Design",
        "contact.form.service_other": "Consultation / Other",
        "contact.form.message": "Message Details",
        "contact.form.message_ph": "Describe your project or inquiry here...",
        "contact.form.submit": "Send Message"
    }
};

// ==========================================
// 2. نظام الثيمات الموحد (Theme System)
// ==========================================
function toggleThemeMenu(menuId = 'theme-menu-desktop', event = null) {
    if (event) event.stopPropagation();
    const targetMenu = document.getElementById(menuId);
    if (!targetMenu) return;

    closeAllThemeMenus(targetMenu);
    targetMenu.classList.toggle('hidden');
}

function changeTheme(themeName, themeKey) {
    const body = document.body;

    body.classList.remove(...THEMES);
    body.classList.add(themeName);

    if (themeKey) {
        const localizedLabel = translations[currentLang][themeKey] || themeKey;
        document.querySelectorAll('.current-theme-label, #current-theme-label').forEach(elem => {
            elem.textContent = localizedLabel;
            elem.setAttribute('data-i18n', themeKey);
        });
        localStorage.setItem('app_theme_label_key', themeKey);
        localStorage.setItem('app_theme_label', localizedLabel);
    }

    closeAllThemeMenus();
    localStorage.setItem('app_theme', themeName);
}

function closeAllThemeMenus(exceptMenu = null) {
    document.querySelectorAll('[id^="theme-menu"]').forEach(menu => {
        if (menu !== exceptMenu) {
            menu.classList.add('hidden');
        }
    });
}

// ==========================================
// 3. نظام قائمة الجوال (Mobile Menu)
// ==========================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const iconBars = document.getElementById('menu-icon-bars');
    const iconClose = document.getElementById('menu-icon-close');

    if (!mobileMenu) return;

    const isHidden = mobileMenu.classList.toggle('hidden');

    if (iconBars && iconClose) {
        iconBars.classList.toggle('hidden', !isHidden);
        iconClose.classList.toggle('hidden', isHidden);
    }
}

// ==========================================
// 4. نظام الترجمة الموحد والشامل
// ==========================================
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('app_lang', lang);
    localStorage.setItem('preferred_language', lang);

    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // 1. تحديث زر تغيير اللغة
    const langBtnText = document.querySelector('.lang-text');
    if (langBtnText) langBtnText.innerText = translations[lang]['btn_lang'];

    // 2. ترجمة العناصر المعتمدة على data-i18n
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = translations[lang][key];
            } else {
                elem.innerText = translations[lang][key];
            }
        }
    });

    // 3. ترجمة العناصر المعتمدة على Element ID
    const data = translations[lang];
    if (data) {
        const setElementText = (id, textKey) => {
            const el = document.getElementById(id);
            if (el && data[textKey]) el.innerText = data[textKey];
        };

        setElementText('site-logo', 'logo');
        setElementText('btn-start-project', 'startProj');
        setElementText('nav-home', 'home');
        setElementText('nav-services', 'services');
        setElementText('nav-works', 'works');
        setElementText('nav-package', 'package');
        setElementText('nav_about', 'about');
        setElementText('nav-contact', 'contact');
        setElementText('btn-hero-contact', 'contact');
        setElementText('badge-text', 'badge');
        setElementText('hero-title-gold', 'titleGold');
        setElementText('hero-title-main', 'titleMain');
        setElementText('hero-desc', 'desc');
        setElementText('btn-hero-start-text', 'btnStartNow');
        setElementText('card-growth-title', 'growth');
        setElementText('stat-project', 's1');
        setElementText('stat-client', 's2');
        setElementText('stat-campaign', 's3');
    }

    // 4. تحديث النافذة المنبثقة للمشاريع إذا كانت مفتوحة
    const modal = document.getElementById('projectModal');
    if (modal && !modal.classList.contains('hidden') && activeProjectId) {
        openProjectModal(activeProjectId);
    }

    // 5. تحديث تسمية الثيم الحالي بناءً على المفتاح المحفوظ
    const savedThemeKey = localStorage.getItem('app_theme_label_key') || 'theme_light_label';
    document.querySelectorAll('.current-theme-label, #current-theme-label').forEach(label => {
        if (translations[lang][savedThemeKey]) {
            label.textContent = translations[lang][savedThemeKey];
        }
    });
}

function toggleLanguage() {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage(newLang);
}

// ==========================================
// 5. دالة فلترة المشاريع (Project Filter)
// ==========================================
function filterProjects(category, btnElement) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active-filter', 'bg-amber-500', 'text-white', 'border-amber-500', 'shadow-sm');
        btn.classList.add('border-gray-200', 'dark:border-gray-800', 'custom-text');
    });

    const activeBtn = btnElement || (window.event && window.event.currentTarget);
    if (activeBtn) {
        activeBtn.classList.add('active-filter', 'bg-amber-500', 'text-white', 'border-amber-500', 'shadow-sm');
        activeBtn.classList.remove('border-gray-200', 'dark:border-gray-800', 'custom-text');
    }

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category || card.classList.contains(category)) {
            card.style.display = 'flex';
            card.classList.remove('hidden');
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
        }
    });
}

// ==========================================
// 6. نافذة تفاصيل المشاريع المنبثقة (Project Modal)
// ==========================================
const projectsData = {
    p1: {
        badgeKey: "badge_social_mgmt",
        titleKey: "p1_title",
        descKey: "p1_modal_desc",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        featuresKey: [
            "إعداد خطة محتوى شهري استراتيجية وتستهدف جمهورك بدقة.",
            "تصميم منشورات وفيديوهات قصيرة (Reels/Shorts) باحترافية عالية.",
            "متابعة والرد على التعليقات والرسائل لزيادة معدل التفاعل.",
            "تقارير شهرية تحليليّة لقياس الأداء ونمو الحسابات."
        ]
    },
    p2: {
        badgeKey: "badge_web_dev",
        titleKey: "p2_title",
        descKey: "p2_modal_desc",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        featuresKey: [
            "تصميم واجهات حديثة ومتوافقة مع جميع الشاشات والهواتف.",
            "تحسين سرعة التحميل وأداء الموقع طبقاً لمعايير Google.",
            "ربط الموقع بصفحات التواصل الاجتماعي وأدوات التحليل.",
            "لوحة تحكم سهلة لإدارة وتحديث محتوى الموقع بنفسك."
        ]
    },
    p3: {
        badgeKey: "badge_paid_ads",
        titleKey: "p3_title",
        descKey: "p3_modal_desc",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
        featuresKey: [
            "استهداف دقيق للشريحة المهتمة بالشراء بالفعل.",
            "إدارة ميزانية الإعلانات لضمان تحقيق أعلى عائد على الاستثمار (ROAS).",
            "إجراء اختبارات A/B لأفضل التصاميم والنصوص الإعلانية.",
            "تحليل وتقارير فورية عن نفقات الحملة والمبيعات المحققة."
        ]
    },
    p5: {
        badgeKey: "badge_ecom",
        titleKey: "p5_title",
        descKey: "p5_modal_desc",
        image: "assets/img/works/pro5.png",
        featuresKey: [
            "تكامل تام مع بوابات الدفع الإلكتروني وشركات الشحن.",
            "تجربة تسوق سلسة من إضافة السلة وحتى إتمام الشراء.",
            "إدارة المخزون والطلبات والخصومات بمرونة كاملة.",
            "حماية وأمان عالي لمعاملات المشتريين والبيانات."
        ]
    },
    p6: {
        badgeKey: "badge_social_mgmt",
        titleKey: "p6_title",
        descKey: "p6_modal_desc",
        image: "assets/img/works/pro3.png",
        featuresKey: [
            "صياغة وإعداد جدول محتوى شهري متكامل ومصمم خصيصاً لهويتك.",
            "تصميم جرافيك وفيديوهات قصيرة (Reels) تزيد من الانتشار والوصول.",
            "إدارة وتحليل التفاعل وإعادة استهداف الزوار لتحويلهم لعملاء دائمين.",
            "تقديم تقارير تحليليّة دورية تقيس معدل النمو وتفاعل الجمهور."
        ]
    },
    p7: {
        badgeKey: "badge_seo",
        titleKey: "p7_title",
        descKey: "p7_modal_desc",
        image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
        featuresKey: [
            "دراسة الكلمات المفتاحية والأكثر بحثاً في مجالك.",
            "تحسين البنية التقنية للموقع وسرعة الأرشفة.",
            "كتابة محتوى متوافق مع خوارزميات محركات البحث.",
            "بناء روابط خلفية (Backlinks) قوية لرفع سلطة Domain."
        ]
    }
};

function openProjectModal(projectId) {
    activeProjectId = projectId;
    const project = projectsData[projectId];
    if (!project) return;

    const langTrans = translations[currentLang] || translations['ar'];

    const imgEl = document.getElementById('modalImage');
    const badgeEl = document.getElementById('modalBadge');
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDescription');

    if (imgEl) imgEl.src = project.image;
    if (badgeEl) badgeEl.textContent = langTrans[project.badgeKey] || "";
    if (titleEl) titleEl.textContent = langTrans[project.titleKey] || "";
    if (descEl) descEl.textContent = langTrans[project.descKey] || langTrans[project.titleKey];

    const featuresList = document.getElementById('modalFeatures');
    if (featuresList) {
        featuresList.innerHTML = '';
        project.featuresKey.forEach(ft => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2";
            li.innerHTML = `<span class="text-amber-500 font-bold">✓</span> <span>${ft}</span>`;
            featuresList.appendChild(li);
        });
    }

    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    activeProjectId = null;
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// ==========================================
// 7. وظائف الباقات والتواصل (Packages & Contact)
// ==========================================
function selectPackage(packageName) {
    const isAr = currentLang === 'ar';
    const message = isAr 
        ? `مرحباً، أود الاستفسار عن باقة (${packageName}) والبدء في تفاصيل العمل.`
        : `Hello, I would like to inquire about the (${packageName}) package and discuss details.`;
    
    const phoneNumber = "967770000000"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function switchBillingCycle(billingCycle) {
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const yearlyPrices = document.querySelectorAll('.price-yearly');
    const toggleBtns = document.querySelectorAll('.billing-toggle-btn');

    toggleBtns.forEach(btn => btn.classList.remove('active', 'bg-amber-500', 'text-white'));

    if (billingCycle === 'yearly') {
        monthlyPrices.forEach(el => el.classList.add('hidden'));
        yearlyPrices.forEach(el => el.classList.remove('hidden'));
    } else {
        yearlyPrices.forEach(el => el.classList.add('hidden'));
        monthlyPrices.forEach(el => el.classList.remove('hidden'));
    }
}

// ==========================================
// 8. تهيئة الأحداث العامة عند تحميل الصفحة
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. تطبيق اللغة والترجمات
    updateLanguage(currentLang);

    // 2. تطبيق الثيم المحفوظ
    const savedTheme = localStorage.getItem('app_theme') || 'theme-light';
    const savedThemeKey = localStorage.getItem('app_theme_label_key') || 'theme_light_label';
    changeTheme(savedTheme, savedThemeKey);

    // 3. تهيئة الفلترة افتراضياً
    const defaultFilterBtn = document.querySelector('.filter-btn.active-filter');
    if (defaultFilterBtn && typeof filterProjects === 'function') {
        filterProjects('all', defaultFilterBtn);
    }

    // 4. معالجة استمارة التواصل (Contact Form)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('form-name')?.value.trim();
            const email = document.getElementById('form-email')?.value.trim();
            const message = document.getElementById('form-message')?.value.trim();
            const responseBox = document.getElementById('form-response');

            if (!name || !email || !message) {
                if (responseBox) {
                    responseBox.innerText = currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill in all required fields.';
                    responseBox.className = "mt-4 text-red-500 text-sm font-semibold";
                }
                return;
            }

            if (responseBox) {
                responseBox.innerText = currentLang === 'ar' ? 'جاري إرسال رسالتك...' : 'Sending your message...';
                responseBox.className = "mt-4 text-amber-500 text-sm font-semibold";
            }

            setTimeout(() => {
                if (responseBox) {
                    responseBox.innerText = currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Message sent successfully! We will contact you soon.';
                    responseBox.className = "mt-4 text-green-500 text-sm font-semibold";
                }
                contactForm.reset();
            }, مفاجأة => 1200);
        });
    }
});

// إغلاق قوائم الثيمات والنوافذ عند النقر في أي مكان خارجي
document.addEventListener('click', (e) => {
    const isThemeBtn = e.target.closest('[onclick*="toggleThemeMenu"]');
    const isThemeMenu = e.target.closest('[id^="theme-menu"]');
    
    if (!isThemeBtn && !isThemeMenu) {
        closeAllThemeMenus();
    }

    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});