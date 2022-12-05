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

            onSelect({ date }) {
                dpMax.update({
                    minDate: date

                })

            },
            onRenderCell: renderCellHandler,
            locale: localeRu,
            isMobile: isTouchDevice(),
            autoClose: true,
            minDate: new Date(),
            position: calendarFirst.dataset.position || 'bottom left'

        })

        dpMax = new AirDatepicker(calendarLast, {

            onSelect({ date }) {
                dpMin.update({
                    maxDate: date

                })

            },
            onRenderCell: renderCellHandler,
            locale: localeRu,
            isMobile: isTouchDevice(),
            autoClose: true,
            minDate: new Date(),
            position: calendarLast.dataset.position || 'bottom left'

        })

    })

}

const excludeDates = [
    +new Date(2022, 11, 31),
    +new Date(2023, 0, 1),
    +new Date(2023, 0, 2),
]

function renderCellHandler({ date, cellType }) {
    if (cellType === 'day') {

        return {
            disabled: excludeDates.includes(+date),
        }
    }
}

export default { init }