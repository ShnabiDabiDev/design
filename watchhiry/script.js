
let imagehiry = null;
let profilename = null;
let ownershortsname = null;
let ownershortsid = null;

const socket = io();

socket.on('sendfilterhiry', (data) => {
    // data.results.rows.forEach(result => {
    //     filterform = result.id
    // })
    window.location.href = `/watch/${data.results.videoid}`
})

async function getvideodatascroll(id) {
    console.log(id)

    socket.emit('getwatchdata', {
        pageid: id
    });

    socket.on('getwatchdataresult', (data) => {

        imagehiry = data.image;
        ownershortsid = data.ownerid;

        document.querySelector('.user-label').textContent = ownershortsid;
        document.querySelector('.center-image').src = data.image

        socket.emit('getuserbyidfetch', {
            id: ownershortsid
        });
    });

    socket.on('getuserbyidresult', (data) => {

        ownershortsname = data.username;

        document.querySelector('.square-avatar').textContent = 'N';
        document.querySelector('.square-title').textContent = ownershortsname;
    });
}

socket.on('gethirytowatchresponse', (data) => {
    history.pushState({}, "", `/watch/${data.video.videoid}/`);
    getvideodatascroll(data.video.videoid)
})


async function getvideodata() {
    const id = window.location.pathname.split('/')[2];

    socket.emit('getwatchdata', {
        pageid: id
    });

    socket.on('getwatchdataresult', (data) => {

        imagehiry = data.image;
        ownershortsid = data.ownerid;

        document.querySelector('.user-label').textContent = ownershortsid;

        socket.emit('getuserbyidfetch', {
            id: ownershortsid
        });
    });

    socket.on('getuserbyidresult', (data) => {

        ownershortsname = data.username;

        document.querySelector('.square-avatar').textContent = 'N';
        document.querySelector('.square-title').textContent = ownershortsname;
    });
}


/* =========================================================
   ФИЛЬТРЫ
   ========================================================= */

function initFilters() {

    const options = document.querySelectorAll('.filter-option');

    /*
     * ЛЕВЫЕ ФИЛЬТРЫ
     *
     * ВАЖНО:
     * здесь обработчик добавляется только один раз.
     * Никаких повторных initFilters().
     */
    options.forEach((option) => {

        option.addEventListener('click', function (e) {

            e.preventDefault();
            e.stopPropagation();

            const wasActive = this.classList.contains('active');
            socket.emit('sendfilter', {
                filter: this.dataset.value
            })
            /*
             * Сначала удаляем active у всех.
             */
            options.forEach((item) => {
                item.classList.remove('active');
                item.classList.remove('filter-click');
            });

            /*
             * Если элемент уже был активен,
             * оставляем все фильтры выключенными.
             */
            if (wasActive) {
                console.log('Фильтр снят:', this.dataset.value);
                return;
            }

            /*
             * Активируем выбранный фильтр.
             */
            this.classList.add('active');

            /*
             * Перезапускаем CSS-анимацию.
             *
             * offsetWidth заставляет браузер
             * пересчитать layout перед повторным
             * добавлением класса.
             */
            void this.offsetWidth;

            this.classList.add('filter-click');

            console.log(
                'Выбран фильтр:',
                this.dataset.value
            );

            /*
             * После завершения анимации убираем
             * только временный класс анимации.
             *
             * active остаётся.
             */
            setTimeout(() => {
                this.classList.remove('filter-click');
            }, 450);
        });


        /*
         * Дополнительная hover-анимация.
         *
         * Никакого изменения transform через JS,
         * поэтому click-анимация больше не конфликтует
         * с hover.
         */
        option.addEventListener('mouseenter', function () {

            if (!this.classList.contains('active')) {
                this.classList.add('filter-hover');
            }

        });

        option.addEventListener('mouseleave', function () {

            this.classList.remove('filter-hover');

        });
    });


    /* =====================================================
       PRICE
       ===================================================== */

    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');

    function animatePriceInput(input) {

        const wrap = input.closest('.price-input-wrap');

        if (!wrap) {
            return;
        }

        wrap.style.transition = 'all 0.15s ease';
        wrap.style.transform = 'scale(1.04)';
        wrap.style.borderColor = '#8b5cf6';
        wrap.style.boxShadow =
            '0 0 0 4px rgba(139,92,246,0.15)';

        setTimeout(() => {

            wrap.style.transform = 'scale(1)';
            wrap.style.borderColor =
                'rgba(209,213,219,0.3)';
            wrap.style.boxShadow = 'none';

        }, 250);
    }


    if (priceMin) {

        priceMin.addEventListener('input', function () {

            animatePriceInput(this);

            const val = parseFloat(this.value);

            if (!isNaN(val) && val < 0) {
                this.value = 0;
            }

            console.log(
                'Price min:',
                this.value || 'empty'
            );
        });
    }


    if (priceMax) {

        priceMax.addEventListener('input', function () {

            animatePriceInput(this);

            const val = parseFloat(this.value);

            if (!isNaN(val) && val < 0) {
                this.value = 0;
            }

            console.log(
                'Price max:',
                this.value || 'empty'
            );
        });
    }


    /*
     * Фокус price input.
     */
    [priceMin, priceMax].forEach((input) => {

        if (!input) {
            return;
        }

        input.addEventListener('focus', function () {

            const wrap =
                this.closest('.price-input-wrap');

            if (!wrap) {
                return;
            }

            wrap.style.borderColor = '#8b5cf6';

            wrap.style.boxShadow =
                '0 0 0 4px rgba(139,92,246,0.10)';

            wrap.style.background =
                'rgba(255,255,255,0.85)';
        });


        input.addEventListener('blur', function () {

            const wrap =
                this.closest('.price-input-wrap');

            if (!wrap) {
                return;
            }

            wrap.style.borderColor =
                'rgba(209,213,219,0.3)';

            wrap.style.boxShadow = 'none';

            wrap.style.background =
                'rgba(255,255,255,0.5)';
        });

    });


    /* =====================================================
       АНИМАЦИЯ ПОЯВЛЕНИЯ ФИЛЬТРОВ
       ===================================================== */

    const left = document.getElementById('filterLeft');
    const right = document.getElementById('filterRight');


    if (left) {

        left.style.opacity = '0';

        left.style.transform =
            'translateY(-50%) translateX(-20px)';

        setTimeout(() => {

            left.style.transition =
                'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';

            left.style.opacity = '1';

            left.style.transform =
                'translateY(-50%) translateX(0)';

        }, 100);
    }


    if (right) {

        right.style.opacity = '0';

        right.style.transform =
            'translateY(-50%) translateX(20px)';

        setTimeout(() => {

            right.style.transition =
                'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';

            right.style.opacity = '1';

            right.style.transform =
                'translateY(-50%) translateX(0)';

        }, 200);
    }
}


/* =========================================================
   SOCKET.IO
   ========================================================= */

getvideodata();

socket.on('userdata', (data) => {

    console.log("userdata:", data);

    profilename = data.username;

    console.log("profilename:", profilename);

    document.querySelector('.nickname').textContent =
        profilename;
});

const filterForm = null
console.log(imagehiry);
console.log(profilename);
console.log(ownershortsname);
console.log(ownershortsid);


/* =========================================================
   ЛАЙК + АНИМАЦИИ
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    const likeBtn =
        document.getElementById('likeBtn');

    const icon =
        likeBtn.querySelector('i');

    const squareCard =
        document.getElementById('squareCard');

    const particlesContainer =
        document.getElementById('particlesContainer');

    const scrollParticlesWrapper =
        document.getElementById('scrollParticlesWrapper');

    const scrollRing =
        document.getElementById('scrollRing');


    let isLiked = false;


    /* =====================================================
       PARTICLES LIKE
       ===================================================== */

    function createParticles() {

        particlesContainer.innerHTML = '';

        const count = 8;

        const colors = [
            '#ff3040',
            '#ff6b81',
            '#ff4757',
            '#ffa502'
        ];


        for (let i = 0; i < count; i++) {

            const particle =
                document.createElement('div');

            particle.classList.add('particle');

            particle.innerHTML =
                '<i class="fa-solid fa-heart"></i>';


            const tx =
                (Math.random() - 0.5) * 300;

            const ty =
                (Math.random() - 0.5) * 300;


            particle.style.setProperty(
                '--tx',
                tx + 'px'
            );

            particle.style.setProperty(
                '--ty',
                ty + 'px'
            );


            particle.style.color =
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ];


            particlesContainer.appendChild(
                particle
            );


            setTimeout(() => {

                particle.classList.add('active');

            }, i * 20);
        }
    }


    /* =====================================================
       LIKE CLICK
       ===================================================== */

    likeBtn.addEventListener('click', (e) => {

        e.stopPropagation();


        if (!isLiked) {

            isLiked = true;

            likeBtn.classList.add('liked');

            icon.className =
                'fa-solid fa-heart';

            createParticles();

        } else {

            isLiked = false;

            likeBtn.classList.remove('liked');

            icon.className =
                'fa-regular fa-heart';
        }
    });


    /* =====================================================
       GRADIENT CARD
       ===================================================== */

    const el =
        document.querySelector('.content-square');

    let valgradientlogic = 0;


    document
        .querySelector('.like-btn')
        .addEventListener('click', () => {

            valgradientlogic += 1;

            console.log(valgradientlogic);


            if (valgradientlogic === 1) {

                el.classList.remove(
                    'play',
                    'stop'
                );

                void el.offsetWidth;

                el.classList.add('play');


                setTimeout(() => {

                    el.classList.remove('play');

                    el.classList.add('stop');

                }, 1000);

            } else {

                valgradientlogic = 0;
            }
        });


    /* =====================================================
       SCROLL EFFECT
       ===================================================== */

    function triggerScrollEffect() {

        scrollRing.classList.remove('active');

        void scrollRing.offsetWidth;

        scrollRing.classList.add('active');


        scrollParticlesWrapper.innerHTML = '';

        const count = 40;

        const colors = [
            '#f9fafb',
            '#f3f4f6',
            '#e5e7eb'
        ];


        for (let i = 0; i < count; i++) {

            const p =
                document.createElement('div');

            p.classList.add('scroll-particle');


            const tx =
                (Math.random() - 0.5) * 800;

            const ty =
                (Math.random() - 0.5) * 800;


            p.style.setProperty(
                '--tx',
                tx + 'px'
            );

            p.style.setProperty(
                '--ty',
                ty + 'px'
            );


            p.style.background =
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ];


            scrollParticlesWrapper.appendChild(p);


            setTimeout(() => {

                p.classList.add('active');

            }, i * 5);


            setTimeout(() => {

                p.remove();

            }, 1600);
        }
    }

    let currentSlide = 1;

    squareCard.addEventListener('click', () => {

        triggerScrollEffect();

        squareCard.classList.remove(
            'slide-out-up',
            'slide-in-down'
        );

        void squareCard.offsetWidth;

        squareCard.classList.add(
            'slide-out-up'
        );

        let currentpageid = window.location.pathname.split('/')[2];

        socket.emit('gethirytowatch', {
            id: currentpageid
        })

        setTimeout(() => {

            squareCard.classList.remove(
                'slide-out-up'
            );

            void squareCard.offsetWidth;

            squareCard.classList.add(
                'slide-in-down'
            );

            setTimeout(() => {

                squareCard.classList.remove(
                    'slide-in-down'
                );

                scrollRing.classList.remove(
                    'active'
                );

            }, 500);

        }, 400);
    });

    initFilters();

});

