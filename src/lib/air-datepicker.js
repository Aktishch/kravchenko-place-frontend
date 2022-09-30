import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeRu from 'air-datepicker/locale/ru'
import { isTouchDevice } from '../functions/isTouchDevice'

const init = () => {

    const calendars = document.querySelectorAll('.-calendar-')

    calendars.forEach(item => {

        new AirDatepicker(item, {
            locale: localeRu,
            isMobile: isTouchDevice(),
            autoClose: true,
            minDate: new Date(),
            position: item.dataset.position || 'bottom left'

        })

    })

}

export default { init }