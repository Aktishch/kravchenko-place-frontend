import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const init = () => {

    const sliderGallery = new Swiper('.cottages-slider .swiper', {

        slidesPerGroup: 1,
        slidesPerView: 1,
        loop: true,
        speed: 500,

        autoplay: {

            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false

        }

    })

    const detailSlider = new Swiper('.detail-slider .swiper', {

        pagination: {

            el: '.building .swiper-pagination',
            clickable: true

        },

        navigation: {

            prevEl: '.building .swiper-button-prev',
            nextEl: '.building .swiper-button-next'

        },

        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 1000,
        spaceBetween: 15

    })

    const imagesSlider = new Swiper('.images-slider .swiper', {

        pagination: {

            el: '.building .swiper-pagination',
            clickable: true

        },

        navigation: {

            prevEl: '.building .swiper-button-prev',
            nextEl: '.building .swiper-button-next'

        },

        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 1000,
        spaceBetween: 15

    })

    const bgSlider = new Swiper('.bg-slider .swiper', {

        pagination: {

            el: '.building .swiper-pagination',
            clickable: true

        },

        navigation: {

            prevEl: '.building .swiper-button-prev',
            nextEl: '.building .swiper-button-next'

        },

        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 1000,
        spaceBetween: 15

    })

    const detailsSlider = new Swiper('.details-slider .swiper', {

        pagination: {

            el: '.details-slider .swiper-pagination',
            clickable: true

        },

        navigation: {

            prevEl: '.details-slider .swiper-button-prev',
            nextEl: '.details-slider .swiper-button-next'

        },

        slidesPerGroup: 1,
        slidesPerView: 1,

    })

    window.Swiper = Swiper

}

export default { init }