import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeRu from 'air-datepicker/locale/ru'

const init = () => {

    const calendars = document.querySelectorAll('.-calendar-')

    calendars.forEach(item => {

        new AirDatepicker(item, {
    
            locale: localeRu,
            // isMobile: true,
            buttons: ['clear']
    
        })

    })

}

export default { init }