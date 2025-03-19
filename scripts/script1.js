document.addEventListener('DOMContentLoaded', function () {
    let blocks = document.querySelectorAll('.animated');

    function checkBlocksVisibility() {

        blocks.forEach(block => {

            if (isElementInViewport(block)) {
                block.classList.remove('animated');
                block.classList.add('visible');
            }
        });
    }

    checkBlocksVisibility();

    window.addEventListener('scroll', function () {
        checkBlocksVisibility();
    });

    // Функция для проверки видимости элемента на экране
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (rect.top <= window.innerHeight - 200);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector('#back-to-top');
    btn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Функция для отображения кнопки при прокрутке
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { // Если страница прокручена больше чем на 200 пикселей
            btn.classList.add('show'); // Отображаем кнопку
        } else {
            btn.classList.remove('show'); // Скрываем кнопку
        }
    });
});