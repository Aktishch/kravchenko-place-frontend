// Libraries
import yandexMap from './lib/yandex-map'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'
import airDatepicker from './lib/air-datepicker'

// Scripts
import anchorTransition from './ts/data-href'
import scrolled from './ts/scrolled'
import waved from './ts/waved'
import maskTel from './ts/mask-tel'
import inputs from './ts/inputs'
import quantity from './ts/quantity'
import formValidate from './ts/form-validate'
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import draggableBtn from './ts/draggable-btn'
import outNumber from './ts/out-number'
import theme from './ts/theme'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

    yandexMap.init()
    fancybox.init()
    sliderSwiper.init()
    airDatepicker.init()
    anchorTransition.init()
    scrolled.init()
    waved.init()
    maskTel.init()
    inputs.init()
    quantity.init()
    formValidate.init()
    scrollHeader.init()
    mobileMenu.init()
    draggableBtn.init()
    theme.init()
    outNumber.init()

})