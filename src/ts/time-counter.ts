const init = (): void => {

    const count = document.querySelector('.-count-') as HTMLElement

    if (count) {

        const subtitle = count.querySelector('.-count-subtitle-') as HTMLElement
        const items: NodeListOf<Element> = count.querySelectorAll('.-count-item-')
        const units: NodeListOf<Element> = count.querySelectorAll('.-count-unit-')
        const date: number = new Date(2022, 11, 23, 0, 0, 0).getTime()

        const getCountTime = (): void => {

            const nowDate: number = new Date().getTime()
            const distance: number = date - nowDate

            const oneDay: number = 24 * 60 * 60 * 1000
            const oneHour: number = 60 * 60 * 1000
            const oneMinute: number = 60 * 1000

            let days: number = Math.floor(distance / oneDay)
            let hours: number = Math.floor((distance % oneDay) / oneHour)
            let minutes: number = Math.floor((distance % oneHour) / oneMinute)
            let seconds: number = Math.floor((distance % oneMinute) / 1000)

            const values: object = [days, hours, minutes, seconds]

            units.forEach((item: Element, index: number) => {

                const unit = item as HTMLElement
                unit.textContent = values[index]

            })

            if (distance < 0) {

                clearInterval(countDown)

                subtitle.classList.remove('display-none')

                items.forEach((item: Element) => {

                    (item as HTMLElement).remove()

                })

            }

        }

        const countDown: NodeJS.Timer = setInterval(getCountTime, 1000)
        getCountTime()

    }

}

export default { init }