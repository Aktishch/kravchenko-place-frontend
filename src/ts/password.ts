const showPassword = (event: Event): void => {

    const btn = (event.target as HTMLElement).closest('.-eye-') as HTMLElement
    const eye = btn.querySelector('use') as SVGUseElement
    const input = (btn.parentElement as HTMLElement).querySelector('.-input-password-') as HTMLInputElement

    if (input.type === 'password') {

        eye.setAttribute('xlink:href', 'img/icons.svg#eye-hidden')
        input.type = 'text'

    } else {

        eye.setAttribute('xlink:href', 'img/icons.svg#eye-visible')
        input.type = 'password'

    }

}

const init = (): void => {

    document.addEventListener('click', ((event: Event) => {

        if ((event.target as HTMLElement).closest('.-eye-')) showPassword(event)

    }) as EventListener)

}

export default { init }