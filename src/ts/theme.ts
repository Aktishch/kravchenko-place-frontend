const init = (): void => {

    const body = document.querySelector('body') as HTMLElement
    const btns: NodeListOf<Element> = document.querySelectorAll('.-dark-btn-')
    const inputs: NodeListOf<Element> = document.querySelectorAll('.-dark-switch-')

    let theme: string = 'auto'

    btns.forEach((item: Element) => {

        const btn = item as HTMLElement
        const input = btn.querySelector('.-dark-switch-') as HTMLInputElement

        const darkTheme = () => {

            if (!body.hasAttribute('data-theme')) {

                theme = 'dark'
                body.setAttribute('data-theme', 'dark')

                inputs.forEach((el: Element) => {

                    (el as HTMLInputElement).checked = true

                })

                localStorage.setItem('theme', theme)

            } else {

                theme = 'auto'
                body.removeAttribute('data-theme')

                inputs.forEach((el: Element) => {

                    (el as HTMLInputElement).checked = false

                })

                localStorage.setItem('theme', theme)

            }

        }

        if (localStorage.getItem('theme')) {

            theme = String(localStorage.getItem('theme'))

            if (theme == 'dark') {

                body.setAttribute('data-theme', 'dark')

                inputs.forEach((el: Element) => {

                    (el as HTMLInputElement).checked = true

                })

            } else {

                body.removeAttribute('data-theme')

                inputs.forEach((el: Element) => {

                    (el as HTMLInputElement).checked = false

                })

            }

        }

        btn.addEventListener('click', darkTheme as EventListener)

    })

}

export default { init }