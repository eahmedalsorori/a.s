const footerHTML = `
<footer class="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            <!-- Column 1: About -->
            <div class="space-y-6">
                <div class="flex items-center space-x-3 space-x-reverse">
                    <!-- Logo Container -->
                    <div class="flex items-center space-x-2 space-x-reverse">
                        <!-- شعار الوضع الفاتح يظهر في الوضع الفاتح ويختفي في الداكن -->
                        <img src="assets/img/Logo-1.png" alt="Logo Light" class="h-10 w-auto block dark:hidden">

                        <!-- شعار الوضع الداكن يظهر في الوضع الداكن ويختفي في الفاتح -->
                        <img src="assets/img/Logo-0.png" alt="Logo Dark" class="h-10 w-auto hidden dark:block">

                        <span class="text-2xl font-bold tracking-tight" data-lang-ar="م.أحمد السروري"
                            data-lang-en="E.Ahmed AL-Sorori">م.أحمد السروري</span>
                    </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm"
                    data-lang-ar="مطور ويب متكامل متخصص في تقديم حلول برمجية مبتكرة ومواقع متجاوبة تعزز من حضورك الرقمي."
                    data-lang-en="Full-stack web developer specializing in delivering innovative software solutions and responsive websites to enhance your digital presence.">
                    مطور ويب متكامل متخصص في تقديم حلول برمجية مبتكرة ومواقع متجاوبة تعزز من حضورك الرقمي.
                </p>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="space-y-6">
                <h3 class="text-lg font-bold border-b-2 border-green-500 pb-2 inline-block"
                    data-lang-ar="روابط سريعة" data-lang-en="Quick Links">روابط سريعة</h3>
                <ul class="grid grid-cols-2 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="index.html" class="hover:text-green-500 transition" data-lang-ar="الرئيسية"
                            data-lang-en="Home">الرئيسية</a></li>
                    <li><a href="services.html" class="hover:text-green-500 transition" data-lang-ar="خدماتي"
                            data-lang-en="Services">خدماتي</a></li>
                    <li><a href="who.html" class="hover:text-green-500 transition" data-lang-ar="من أنا"
                            data-lang-en="About Me">من أنا</a></li>
                    <li><a href="my-skills.html" class="hover:text-green-500 transition" data-lang-ar="مهاراتي"
                            data-lang-en="Skills">مهاراتي</a></li>
                    <li><a href="my-portfolio.html" class="hover:text-green-500 transition"
                            data-lang-ar="معرض أعمالي" data-lang-en="Portfolio">معرض أعمالي</a></li>
                    <li><a href="contact.html" class="hover:text-green-500 transition" data-lang-ar="اتصل بي"
                            data-lang-en="Contact">اتصل بي</a></li>
                </ul>
            </div>

            <div class="space-y-6">
                <h3 class="text-lg font-bold border-b-2 border-red-600 pb-2 inline-block" data-lang-ar="تواصل معي"
                    data-lang-en="Connect With Me">تواصل معي</h3>
                <!-- Social Icons -->
                <div class="flex flex-wrap gap-3">
                    <a href="https://github.com/eahmedalsorori" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                        <i class="fa-brands fa-square-github fa-xl"></i>
                    </a>
                    <a href="https://wa.me/967737762223?text=أهلا ممكن أسالك:" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                        <i class="fa-brands fa-whatsapp fa-xl"></i>
                    </a>
                    <a href="https://t.me/Eahmeda" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                        <i class="fa-brands fa-telegram fa-xl"></i>
                    </a>
                    <a href="https://ig.me/m/e1hm.d" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                        <i class="fa-brands fa-square-instagram fa-xl"></i>
                    </a>
                    <a href="https://www.facebook.com/ahmed.al.sorori2025" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                        <i class="fa-brands fa-facebook fa-xl"></i>
                    </a>
                    <a href="https://linkedin.com/in/ahmadalsorori" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                        <i class="fa-brands fa-square-linkedin fa-xl"></i>
                    </a>
                    <a href="mailto:e.ahmedal.sorori@gmail.com"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                        <i class="fa-brands fa-google fa-xl"></i>
                    </a>
                </div>

                <!-- Simple Contact Form -->
                <form action="#" method="POST" class="space-y-3">
                    <h4 class="text-sm font-semibold" data-lang-ar="أرسل لي رسالة سريعة"
                        data-lang-en="Send a quick message">أرسل لي رسالة سريعة</h4>
                    <div class="flex gap-2">
                        <input
                            class="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
                            type="text" name="message" placeholder="Your message...">
                        <button type="submit"
                            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold transition">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Professional Direct Contact Strip -->
        <div class="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <a href="mailto:e.ahmedal.sorori@gmail.com"
                class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                <span class="truncate">e.ahmedal.sorori@gmail.com</span>
                <i class="fa-solid fa-envelope fa-xl text-green-500"></i>

                </a>

            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition">
               
                <span data-lang-ar="الموقع الحالي: اليمن - صنعاء" data-lang-en="Live Location: Yemen - Sana'a">الموقع الحالي: اليمن - صنعاء</span>
                 <i class="fa-solid fa-magnifying-glass-location  fa-xl text-green-500"></i>
            </div>

            <a href="tel:+967772223904" dir="ltr"
                class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
                <i class="fa-solid fa-phone fa-xl text-green-500"></i>
                <span>+967 772 223 904</span>
            </a>

            <a href="https://github.com/eahmedalsorori" target="_blank"
                class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition">
               
                <span class="truncate">github.com/eahmedalsorori</span>
                 <i class="fa-brands fa-square-github fa-2xl text-green-500"></i>
            </a>
        </div>

        <!-- Copyright -->
        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
            <p data-lang-ar="جميع الحقوق محفوظة © 2026 أحمد السروري"
                data-lang-en="© 2026 Ahmed Al-Sorori. All rights reserved.">
                جميع الحقوق محفوظة © 2026 أحمد السروري
            </p>
        </div>
    </div>
</footer>
`;

// حقن الفوتر تلقائياً في العنصر المخصص عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});