interface coordinates {

    width: number,
    left: number

}

const filtering = (category: string, items: NodeListOf<Element>): void => {

    items.forEach((item: Element) => {

        const absence: boolean = !item.classList.contains(category)

        absence ? item.classList.add('display-none') : item.classList.remove('display-none')

    })

}

const init = (): void => {

    const filter = document.querySelector('.-filter-') as HTMLElement

    if (filter) {

        const line = filter.querySelector('.-filter-line-') as HTMLElement
        const btns: NodeListOf<Element> = filter.querySelectorAll('.-filter-item-')
        const cards: NodeListOf<Element> = filter.querySelectorAll('.-filter-card-')

        if (line) line.style.width = `${(btns[0] as HTMLElement).offsetWidth}px`

        btns.forEach((btn: Element) => {

            btn.addEventListener('click', ((event: Event) => {

                const currentBtn: object = filter.getElementsByClassName('filter__item--active')
                const currentCard: string = String((event.target as HTMLElement).dataset.filter)

                currentBtn[0].className = currentBtn[0].className.replace('filter__item--active', '')
                btn.className += ' filter__item--active'

                const coordinat: coordinates = {

                    width: (event.currentTarget as HTMLElement).offsetWidth,
                    left: (event.currentTarget as HTMLElement).offsetLeft

                }

                line.style.width = `${coordinat.width}px`
                line.style.left = `${coordinat.left}px`

                filtering(currentCard, cards)

            }) as EventListener)

        })

    }

}

export default { init }