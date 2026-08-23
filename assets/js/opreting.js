// استرجاع الإعدادات المحفوظة مسبقاً وتطبيقها فوراً عند التحميل
let currentLang = localStorage.getItem('site_lang') || 'ar';

document.addEventListener("DOMContentLoaded", () => {
    const html = document.getElementById('html-root');
    const langBtnText = document.getElementById('lang-btn-text');

    // 1. تطبيق اللغة المحفوظة
    if (html) {
        html.setAttribute('lang', currentLang);
        html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        if (langBtnText) {
            langBtnText.innerText = currentLang === 'ar' ? 'En' : 'ع';
        }
        updatePageLanguage();
    }

    // 2. تطبيق الثيم المحفوظ (Dark Mode)
    const savedTheme = localStorage.getItem('site_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});

function toggleLanguage() {
    const html = document.getElementById('html-root');
    const langBtnText = document.getElementById('lang-btn-text');

    currentLang = currentLang === 'ar' ? 'en' : 'ar';

    // حفظ اللغة الجديدة في الـ localStorage
    localStorage.setItem('site_lang', currentLang);

    if (currentLang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        if (langBtnText) langBtnText.innerText = 'ع';
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        if (langBtnText) langBtnText.innerText = 'En';
    }

    updatePageLanguage();
}

function updatePageLanguage() {
    // تحديث كافة العناصر التي تحمل خصائص اللغات في الصفحة الحالية
    document.querySelectorAll('[data-lang-ar]').forEach(el => {
        const text = el.getAttribute(`data-lang-${currentLang}`);
        if (text) el.innerText = text;
    });
}

function toggleDarkMode() {
    const html = document.getElementById('html-root');
    html.classList.toggle('dark');

    // حفظ حالة الثيم الحالية في الـ localStorage
    if (html.classList.contains('dark')) {
        localStorage.setItem('site_theme', 'dark');
    } else {
        localStorage.setItem('site_theme', 'light');
    }
}

// دالة تحكم قائمة الهواتف المحمولة (Mobile Menu)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

/**===========================================Start->Page=Servies.html */

function openServiceModal(enTitle, arTitle, arDesc) {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDescription');

    // Detect current language context or show Arabic/English based on attribute
    const isEn = document.documentElement.lang === 'en' || document.body.getAttribute('data-current-lang') === 'en';

    titleEl.innerText = arTitle; // Can be swapped dynamically if multi-lang state exists
    descEl.innerText = arDesc;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');

    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Close modal when clicking outside the box
window.onclick = function (event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceModal();
    }
}

/**===========================================End-> Page=Servies.html */