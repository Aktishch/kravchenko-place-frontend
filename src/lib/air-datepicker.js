import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeRu from 'air-datepicker/locale/ru'
import { isTouchDevice } from '../functions/isTouchDevice'

const init = () => {

    // const calendars = document.querySelectorAll('.-calendar-')

    // calendars.forEach(item => {

    //     new AirDatepicker(item, {
    //         locale: localeRu,
    //         isMobile: isTouchDevice(),
    //         autoClose: true,
    //         minDate: new Date(),
    //         position: item.dataset.position || 'bottom left'

    //     })

    // })

    const forms = document.querySelectorAll('.-form-')

    forms.forEach(form => {

        const calendarFirst = form.querySelector('.-calendar-first-')
        const calendarLast = form.querySelector('.-calendar-last-')

        let dpMin, dpMax

        dpMin = new AirDatepicker(calendarFirst, {

            onSelect({date}) {

                dpMax.update({
                    
                    minDate: date
                    
                })

            },

            locale: localeRu,
            isMobile: isTouchDevice(),
            autoClose: true,
            minDate: new Date(),
            position: calendarFirst.dataset.position || 'bottom left'

        })

        dpMax = new AirDatepicker(calendarLast, {

            onSelect({date}) {

                dpMin.update({

                    maxDate: date

                })

            },

            locale: localeRu,
            isMobile: isTouchDevice(),
            autoClose: true,
            minDate: new Date(),
            position: calendarLast.dataset.position || 'bottom left'

        })

    })

}

export default { init }