const init = (): void => {

    const accordions: NodeListOf<Element> = document.querySelectorAll('*[data-accordion]')

    accordions.forEach((item: Element) => {

        const accordion = item as HTMLElement
        const toggle = accordion.querySelector('*[data-toggle]') as HTMLElement
        const content = accordion.querySelector('*[data-content]') as HTMLElement

        content.classList.add('overflow-hidden')

        if (accordion.dataset.accordion == 'hidden') content.style.height = '0'

        if (accordion.dataset.accordion == 'active') content.style.height = `${content.scrollHeight}px`

        toggle.addEventListener('click', (() => {

            if (accordion.dataset.accordion == 'hidden') {

                accordion.dataset.accordion = 'active'
                content.style.height = `${content.scrollHeight}px`

            } else {

                accordion.dataset.accordion = 'hidden'
                content.style.height = '0'

            }

        }) as EventListener)

    })

    document.addEventListener('click', ((event: Event) => {

        if (!(event.target as HTMLElement).hasAttribute('data-close') && !(event.target as HTMLElement).closest('[data-close]')) {

            document.querySelectorAll('*[data-close]').forEach((item: Element) => {

                const accordion = item as HTMLElement
                const content = accordion.querySelector('*[data-content]') as HTMLElement

                if (accordion.dataset.accordion == 'active') {

                    accordion.dataset.accordion = 'hidden'
                    content.style.height = '0'

                }

            })

        }

    }) as EventListener)

}

export default { init }