const init = (): void => {

    const form = document.querySelector('.-form-data-') as HTMLElement

    if (form) {

        const inputs: NodeListOf<Element> = form.querySelectorAll('.-validate-input-')
        let formData: object = {}

        if (sessionStorage.getItem('form-data')) {

            formData = JSON.parse(sessionStorage.getItem('form-data') || '{}')

            inputs.forEach((item: Element) => {

                const input = item as HTMLInputElement

                for (const key in formData) {

                    if (input.name == key) input.value = formData[key]

                }

            })

        }

        form.addEventListener('input', (() => {

            inputs.forEach((item: Element) => {

                const input = item as HTMLInputElement
                formData[input.name] = input.value
                sessionStorage.setItem('form-data', JSON.stringify(formData))

            })

        }) as EventListener)

    }

}

export default { init }