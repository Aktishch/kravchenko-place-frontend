import scrollBar from './scrollBar'

const init = (): void => {

    const burger = document.querySelector('.-burger-') as HTMLElement
    const close = document.querySelector('.-close-') as HTMLElement
    const mobile = document.querySelector('*[data-mobile]') as HTMLElement

    const openModal = (): void => {

        scrollBar.destroy()
        mobile.classList.add('mobile--show')

    }

    const closeModal = (): void => {

        scrollBar.init()
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