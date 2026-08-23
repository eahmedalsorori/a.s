// 1. مصفوفة الترجمات (يمكنك إضافة أي عدد من النصوص هنا)
const translations = {
    'ar': {
        'page-title':
            'م.أحمد السروري',
        'nav_home': 'الرئيسية', 'nav_services': 'خدماتنا', 'nav_works': 'أعمالنا', 'nav_contact': 'تواصل معنا', 'hero_title':
            'م/ أحمد السروري', 'hero_subtitle': 'مطور برمجيات محترف',
        'about_title': 'نبذة عني',
        'about_desc': 'مطور ويب متخصص في بناء تطبيقات متكاملة وسريعة، أمتلك خبرة واسعة في التقنيات الأمامية والخلفية. أركز دائماً على كتابة كود نظيف وقابل للتطوير.',
        'skills_title': 'المهارات التقنية',
        'front_end': 'تطوير الواجهات', 'front_desc': 'تصميم واجهات مستخدم متميزة ومتجاوبة بالكامل لضمان توافقها مع جميع الأجهزة.',
        'back_end': 'تطوير الخلفية', 'back_desc': 'بناء أنظمة برمجية قوية وقابلة للتوسع باستخدام أحدث تقنيات الـ Backend.',
        'db_systems': 'قواعد البيانات', 'db_desc': 'تصميم وإدارة قواعد بيانات علائقية تضمن سرعة الاستعلامات والأمان العالي.',
        'projects_title': 'أبرز المشاريع',
        'contact_title': 'دعنا نعمل معاً',
        'contact_desc': 'هل لديك فكرة مشروع؟ أنا مستعد لتحويل أفكارك إلى واقع برمجى احترافي.',
        'footer_text': 'جميع الحقوق محفوظة © Eng. Ahmed Al-Sorori 2026'
    },
    'en': {
        'page-title':
            'E.Ahmed AL-Sorori',
        'nav_home': 'Home',
        'nav_services': 'Services',
        'about_title': 'About Me',
        'about_desc': 'A web developer specializing in building integrated software systems. I combine creativity in UI with high-performance back-end processing.',
        'btn_contact': 'Contact Me'
    }
};

// 2. دالة تبديل اللغة
function changeLanguage(lang) {
    // تحديث اتجاه الصفحة
    const html = document.documentElement;
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);

    // تحديث النصوص بناءً على data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // حفظ اللغة في المتصفح
    localStorage.setItem('userLang', lang);
}

// 3. التحقق من اللغة المحفوظة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('userLang') || 'ar';
    changeLanguage(savedLang);
});
