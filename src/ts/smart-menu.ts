const init = (): void => {

    const menu = document.querySelector('.-smart-menu-') as HTMLElement

    if (menu) {

        const container = menu.querySelector('.-smart-menu-block-') as HTMLElement
        const title = menu.querySelector('.-smart-menu-title-') as HTMLElement
        const items = menu.querySelector('.-smart-menu-items-') as HTMLElement
        const listing = menu.querySelector('.-smart-menu-listing-') as HTMLElement
        const btn = menu.querySelector('.-smart-menu-btn-') as HTMLButtonElement
        const count = menu.querySelector('.-smart-menu-count-') as HTMLElement
        let breaks: number[] = []

        const updateNav = (): void => {

            let containerWidth: number = btn.classList.contains('display-none') ? container.offsetWidth : container.offsetWidth - btn.offsetWidth

            if (containerWidth > 0) {

                let itemsWidth: number = items.offsetWidth

                if (itemsWidth > containerWidth) {

                    const lastItem = items.lastElementChild as HTMLElement

                    breaks.push(itemsWidth)
                    listing.prepend(lastItem)
                    count.innerText = String(breaks.length)

                    updateNav()

                } else {

                    if (containerWidth > breaks[breaks.length - 1]) {

                        const firstItem = listing.firstElementChild as HTMLElement

                        breaks.pop()
                        items.append(firstItem)
                        count.innerText = String(breaks.length)

                    }

                    itemsWidth == 0 ? title.classList.remove('display-none') : title.classList.add('display-none')

                    listing.querySelectorAll('li').length == 0 ? btn.classList.add('display-none') : btn.classList.remove('display-none')

                }

            }

        }

        updateNav()

        window.addEventListener('resize', updateNav as EventListener)

        btn.addEventListener('click', (() => {

            listing.classList.toggle('anim--fade')

        }) as EventListener)

    }

}

export default { init }