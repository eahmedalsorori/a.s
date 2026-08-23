const headerHTML = `
    <!-- Start Header -->
     <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

            <!-- Logo -->
           <div class="flex items-center space-x-3 space-x-reverse">
    <!-- شعار الوضع الفاتح يظهر في الوضع الفاتح ويختفي في الداكن -->
    <img src="assets/img/Logo-1.png" alt="Logo Light" class="h-10 w-auto block dark:hidden">

    <!-- شعار الوضع الداكن يظهر في الوضع الداكن ويختفي في الفاتح -->
    <img src="assets/img/Logo-0.png" alt="Logo Dark" class="h-10 w-auto hidden dark:block">

    <span class="text-xl font-bold tracking-wide" data-lang-ar="م.أحمد السروري"
        data-lang-en="E.Ahmed AL-Sorori">م.أحمد السروري</span>
</div>
            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center space-x-8 space-x-reverse font-medium">
                <a href="index.html" class="hover:text-green-500 dark:hover:text-green-400 transition"
                    data-lang-ar="الرئيسية" data-lang-en="Home">الرئيسية</a>
                <a href="services.html" class="hover:text-green-500 dark:hover:text-green-400 transition"
                    data-lang-ar="خدماتي" data-lang-en="Services">خدماتي</a>
                <a href="who.html" class="hover:text-green-500 dark:hover:text-green-400 transition"
                    data-lang-ar="من أنا" data-lang-en="About Me">من أنا</a>
                <a href="my-skills.html" class="hover:text-green-500 dark:hover:text-green-400 transition"
                    data-lang-ar="مهاراتي" data-lang-en="Skills">مهاراتي</a>
                <a href="my-portfolio.html" class="hover:text-green-500 dark:hover:text-green-400 transition"
                    data-lang-ar="معرض أعمالي" data-lang-en="Portfolio">أعمالي</a>
                <a href="contact.html" class="hover:text-green-500 dark:hover:text-green-400 transition"
                    data-lang-ar="تواصل معي" data-lang-en="Contact">تواصل معي</a>
            </nav>

            <!-- Actions (Lang, DarkMode, Mobile Menu Button) -->
            <div class="flex items-center space-x-3 space-x-reverse">
                <button onclick="toggleLanguage()"
                    class="px-3 py-1.5 text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <i class="fa-solid fa-globe ml-1"></i> <span id="lang-btn-text">En</span>
                </button>
                <button onclick="toggleDarkMode()"
                    class="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <i class="fa-solid fa-moon dark:hidden text-gray-700"></i>
                    <i class="fa-solid fa-sun hidden dark:block text-yellow-400"></i>
                </button>
                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()"
                    class="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition focus:outline-none">
                    <i class="fa-solid fa-bars text-xl text-gray-700 dark:text-gray-300"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu"
            class="hidden md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 space-y-3 font-medium">
            <a href="index.html" class="block hover:text-green-500 transition py-1" data-lang-ar="الرئيسية"
                data-lang-en="Home">الرئيسية</a>
            <a href="services.html" class="block hover:text-green-500 transition py-1" data-lang-ar="خدماتي"
                data-lang-en="Services">خدماتي</a>
            <a href="who.html" class="block hover:text-green-500 transition py-1" data-lang-ar="من أنا"
                data-lang-en="About Me">من أنا</a>
            <a href="my-skills.html" class="block hover:text-green-500 transition py-1" data-lang-ar="مهاراتي"
                data-lang-en="Skills">مهاراتي</a>
            <a href="my-portfolio.html" class="block hover:text-green-500 transition py-1" data-lang-ar="معرض أعمالي"
                data-lang-en="Portfolio">أعمالي</a>
            <a href="contact.html" class="block hover:text-green-500 transition py-1" data-lang-ar="تواصل معي"
                data-lang-en="Contact">تواصل معي</a>
        </div>
    </header>


`;

// دالة لحقن الهيدر تلقائياً في عنصر يحمل id معين (مثلاً id="header-container")
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});