declare global {

    interface Window {

        Fancybox: any

    }

}

const validateForm = (form: Element) => {

    const labels: NodeListOf<Element> = form.querySelectorAll('.-validate-label-')
    let valid: boolean = true

    labels.forEach((label: Element) => {

        const input = (label as HTMLElement).querySelector('.-validate-input-') as HTMLInputElement
        const error = (label as HTMLElement).querySelector('.-validate-error-') as HTMLElement

        const inputFocus = (): void => {

            input.focus()
            input.classList.add('input--error')
            error.classList.remove('anim--fade')
            valid = false

        }

        const maxLengthInputTel = (numb: number): void => {

            if (input.value.length > 0 && input.value.length < numb) {

                error.innerText = 'Введите корректный номер!'
                inputFocus()

            }

        }

        if (input.value == null || input.value == '' || input.value.length == 0) {

            inputFocus()

        } else {

            input.classList.remove('input--error')
            error.classList.add('anim--fade')

        }

        if (input.classList.contains('-input-name-')) {

            if (input.value.length == 1) inputFocus()

        }

        if (input.classList.contains('-input-tel-')) {

            if (input.value[1] == '7') {

                maxLengthInputTel(18)

            } else if (input.value[0] == '8') {

                maxLengthInputTel(17)

            } else if (input.value[1] !== '7') {

                maxLengthInputTel(11)

            } else {

                error.innerText = 'Пожалуйста, введите ваш номер!'

            }

        }

        if (input.classList.contains('-input-email-')) {

            if (input.value.length < 6) inputFocus()

        }

        if (input.classList.contains('-input-select-')) {

            if (input.value == '0') inputFocus()

        }

        if (input.classList.contains('-input-textarea-')) {

            if (input.value.length > 0 && input.value.length < 10) {

                error.innerText = 'Введите не менее 10 символов!'
                inputFocus()

            } else {

                error.innerText = 'Пожалуйста, оставьте отзыв!'

            }

        }

        input.addEventListener('input', (() => {

            if (input.value.length > 0) {

                input.classList.remove('input--error')
                error.classList.add('anim--fade')

            }

        }) as EventListener, { once: true })

    })

    return valid

}

const formSubmit = (event: Event): void => {

    event.preventDefault()

    const form = event.target as HTMLFormElement
    const valid: boolean = validateForm(form)
    const requestUrl: string = '/submitHandler.php'
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement

    if (valid) {

        submitBtn.setAttribute('disabled', 'disabled')
        const formData: FormData = new FormData(form)

        fetch(requestUrl, {

            method: 'POST',
            body: formData

        }).then((result: Response) => {

            result.text()

        }).then(() => {
            window.Fancybox.close()
            window.Fancybox.show([{
                src: '/dialog-submit.php',
                type: 'ajax',
                dragToClose: false,
                mainClass: 'fancybox-dialog',

            }], {
                dragToClose: false,
                mainClass: 'fancybox-dialog',
            })

            form.reset()
            submitBtn.removeAttribute('disabled')

        }).catch((error: string) =>

            console.log('The form has not been sent', error)

        )

    }

}

const submitModal = (event: Event): void => {

    event.preventDefault()

    const form = event.target as HTMLFormElement
    const valid: boolean = validateForm(form)

    if (valid) {

        const formData: FormData = new FormData(form)
        const queryString = new URLSearchParams(formData).toString()
        const requestUrl: string = `/dialog-feedback.php?${queryString}`
        const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    
        
        window.Fancybox.show([{
            src: requestUrl,
            type: 'ajax',
            dragToClose: false,
            mainClass: 'fancybox-dialog',

        }], {
            dragToClose: false,
            mainClass: 'fancybox-dialog',
        })
    
        form.reset()
        submitBtn.removeAttribute('disabled')
        
    }

}

const init = (): void => {

    document.addEventListener('submit', ((event: Event) => {

        if ((event.target as HTMLElement).classList.contains('-validate-form-')) formSubmit(event)

        if ((event.target as HTMLElement).classList.contains('-dialog-form-')) submitModal(event)

    }) as EventListener)

}

export default { init }