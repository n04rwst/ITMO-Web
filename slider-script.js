document.addEventListener("DOMContentLoaded", () => {
    // Инициализация Swiper
    const swiper = new Swiper('.swiper', {
        // Бесконечная прокрутка слайдов
        loop: true,

        // Настройка автопрокрутки
        autoplay: {
            delay: 5000, // Задержка между переключениями
        },

        // Подключение кнопок навигации
        navigation: {
            nextEl: '.swiper-button-next', // Класс для кнопки вперед
            prevEl: '.swiper-button-prev', // Класс для кнопки назад
        },
    });
});
