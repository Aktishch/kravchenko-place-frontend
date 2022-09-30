const init = (): void => {

    const body = document.querySelector('body') as HTMLElement
    let theme: string = 'auto'

    if (localStorage.getItem('theme')) {

        theme = String(localStorage.getItem('theme'))

        theme == 'dark' ? body.setAttribute('data-theme', 'dark') : body.removeAttribute('data-theme')

    }

    document.addEventListener('keyup', ((event: KeyboardEvent) => {

        if (event.altKey && event.code == 'Digit5') {

            if (!body.hasAttribute('data-theme')) {

                theme = 'dark'
                body.setAttribute('data-theme', 'dark')
                localStorage.setItem('theme', theme)

            } else {

                theme = 'auto'
                body.removeAttribute('data-theme')
                localStorage.setItem('theme', theme)

            }

        }

    }) as EventListener)

}

export default { init }