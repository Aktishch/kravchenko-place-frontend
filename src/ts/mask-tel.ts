declare global {

    interface Window {

        clipboardData: any

    }

}

const getInputNumbersValue = (input: HTMLInputElement) => {

    return input.value.replace(/\D/g, '')

}

const onPhoneInput = (event: InputEvent) => {

    const input = event.target as HTMLInputElement
    let inputNumbersValue: string = getInputNumbersValue(input)
    let selectionStart: number | null = input.selectionStart
    let formattedInputValue: string = ''

    if (!inputNumbersValue) return input.value = ''

    if (input.value.length != selectionStart) {

        if (event.data && /\D/g.test(event.data)) input.value = inputNumbersValue

        return

    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {

        if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue

        let firstSymbols: string = inputNumbersValue[0] == '8' ? '8' : '+7'
        formattedInputValue = input.value = firstSymbols + ' '

        if (inputNumbersValue.length > 1) formattedInputValue += '(' + inputNumbersValue.substring(1, 4)

        if (inputNumbersValue.length >= 5) formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)

        if (inputNumbersValue.length >= 8) formattedInputValue += '-' + inputNumbersValue.substring(7, 9)

        if (inputNumbersValue.length >= 10) formattedInputValue += '-' + inputNumbersValue.substring(9, 11)

    } else {

        formattedInputValue = '+' + inputNumbersValue.substring(0, 16)

    }

    input.value = formattedInputValue

}

const onPhoneKeyDown = (event: KeyboardEvent): void => {

    const input = event.target as HTMLInputElement
    let inputNumbersValue: string = getInputNumbersValue(input)

    if (event.code == 'Backspace' && inputNumbersValue.length == 1) input.value = ''


}

const onPhonePaste = (event: ClipboardEvent): void => {

    const input = event.target as HTMLInputElement
    let inputNumbersValue: string = getInputNumbersValue(input)
    let pasted = event.clipboardData || window.clipboardData

    if (pasted) {

        let pastedText: string = pasted.getData('Text')

        if (/\D/g.test(pastedText)) {

            input.value = inputNumbersValue

            return

        }

    }

}

const init = (): void => {

    document.addEventListener('input', ((event: InputEvent) => {

        if ((event.target as HTMLInputElement).getAttribute('type') == 'tel') onPhoneInput(event)

    }) as EventListener)

    document.addEventListener('keydown', ((event: KeyboardEvent) => {

        if ((event.target as HTMLInputElement).getAttribute('type') == 'tel') onPhoneKeyDown(event)

    }) as EventListener)

    document.addEventListener('paste', ((event: ClipboardEvent) => {

        if ((event.target as HTMLInputElement).getAttribute('type') == 'tel') onPhonePaste(event)

    }) as EventListener)

}

export default { init }