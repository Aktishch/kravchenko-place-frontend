import { Fancybox } from '@fancyapps/ui'
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru'
import '@fancyapps/ui/dist/fancybox.css'
import airDatepicker from './air-datepicker'
import sliderSwiper from './slider-swiper'

const init = () => {

    Fancybox.defaults.trapFocus = false
    Fancybox.defaults.autoFocus = false
    Fancybox.defaults.placeFocusBack = false
    Fancybox.defaults.l10n = ru

    Fancybox.defaults.template.spinner = `
        <div class="loader color-white">
            <svg class="icon">
                <use xlink:href="img/icons.svg#loader" />
            </svg>
        </div>`

    Fancybox.bind('[data-fancybox]', {

        dragToClose: false,
        mainClass: 'fancybox-dialog',

        on: {

            done: (fancybox, slide) => {

                airDatepicker.init()
                sliderSwiper.init()

            }

        }

    })

    window.Fancybox = Fancybox

}

export default { init }