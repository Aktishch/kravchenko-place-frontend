import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeRu from 'air-datepicker/locale/ru'
import { isTouchDevice } from '../functions/isTouchDevice'

const init = () => {

    const forms = document.querySelectorAll('.-form-')

    const excludeDates = [

        // +new Date(2022, 11, 31),
        // +new Date(2023, 0, 1),
        // +new Date(2023, 0, 2),

    ]

    window.excludeDates = excludeDates

    forms.forEach(form => {

        const calendarFirst = form.querySelector('.-calendar-first-')
        const calendarLast = form.querySelector('.-calendar-last-')

        let dpMin, dpMax

        dpMin = new AirDatepicker(calendarFirst, {

            onSelect({ date }) {

                const opts = {

                    minDate: date,
                    maxDate: false

                }

                if (+date < Math.min(...window.excludeDates)) {

                    opts.maxDate = new Date(Math.min(...window.excludeDates))

                }

                dpMax.update(opts)

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

                const opts = {
                    maxDate: date,
                    minDate: new Date()
                }

                if (+date > Math.max(...window.excludeDates)) {

                    opts.minDate = new Date(Math.max(...window.excludeDates))

                }

                dpMin.update(opts)

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

function getMinMaxDate(dates) {
    return {
        min: Math.min(dates),
    }
}


function renderCellHandler({ date, cellType }) {
    if (cellType === 'day') {

        return {
            disabled: window.excludeDates.includes(+date),
            classes: window.excludeDates.includes(+date) ? 'datepicker-cell--red' : null
        }

    }

}

export default { init }