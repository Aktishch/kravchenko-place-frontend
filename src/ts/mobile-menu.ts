const init = (): void => {

    const html = document.querySelector('html') as HTMLElement
    const burger = document.querySelector('.-burger-') as HTMLElement
    const close = document.querySelector('.-close-') as HTMLElement
    const mobile = document.querySelector('*[data-mobile]') as HTMLElement

    const documentWidth: number = document.documentElement.clientWidth
    const windowWidth: number = window.innerWidth
    const scrollBarWidth: number = windowWidth - documentWidth

    const openModal = (): void => {

        html.classList.add('overflow-hidden')
        html.style.marginRight = `${scrollBarWidth}px`
        mobile.classList.add('mobile--show')

    }

    const closeModal = (): void => {

        html.classList.remove('overflow-hidden')
        html.style.marginRight = '0'
        mobile.classList.remove('mobile--show')

    }

    burger.addEventListener('click', openModal as EventListener)
    close.addEventListener('click', closeModal as EventListener)

    document.addEventListener('click', ((event: Event) => {

        if (!(event.target as HTMLElement).hasAttribute('data-mobile') && !(event.target as HTMLElement).closest('[data-mobile]') && !(event.target as HTMLElement).closest('.-burger-')) closeModal()

        if ((event.target as HTMLElement).classList.contains('-mobile-link-')) closeModal()

    }) as EventListener)

}

export default { init }