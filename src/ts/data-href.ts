const anchorTransition = (event: Event): void => {

    event.preventDefault()

    const id: string = String((event.target as HTMLAnchorElement).getAttribute('href'))
    const scrollToBlock = document.querySelector(id) as HTMLElement

    scrollToBlock.scrollIntoView({

        behavior: 'smooth',
        block: 'start'

    })

}

const init = (): void => {

    document.addEventListener('click', ((event: Event) => {

        if ((event.target as HTMLElement).hasAttribute('data-href')) anchorTransition(event)

    }) as EventListener)

}

export default { init }