const init = (): void => {

    const ranges: NodeListOf<Element> = document.querySelectorAll('.-range-')

    ranges.forEach((item: Element) => {

        const inputs: NodeListOf<Element> = (item as HTMLElement).querySelectorAll('.-range-input-')
        const circles: NodeListOf<Element> = (item as HTMLElement).querySelectorAll('.-range-circle-')

        const firstInput = inputs[0] as HTMLInputElement
        const lastInput = inputs[1] as HTMLInputElement
        const firstCircle = circles[0] as HTMLInputElement
        const lastCircle = circles[1] as HTMLInputElement

        firstInput.value = firstCircle.value
        lastInput.value = lastCircle.value

        firstInput.addEventListener('input', (() => {

            if (+firstInput.value > Number(lastInput.value)) {

                firstCircle.value = firstInput.value
                lastInput.value = firstInput.value
                lastCircle.value = lastInput.value

            }

            firstCircle.value = firstInput.value

        }) as EventListener)

        lastInput.addEventListener('input', (() => {

            if (+lastInput.value < Number(firstInput.value)) {

                lastCircle.value = lastInput.value
                firstInput.value = lastInput.value
                firstCircle.value = firstInput.value

            }

            lastCircle.value = lastInput.value

        }) as EventListener)

        firstCircle.addEventListener('input', (() => {

            if (+firstCircle.value > Number(lastCircle.value)) {

                lastCircle.value = firstCircle.value
                lastInput.value = lastCircle.value

            }

            firstInput.value = firstCircle.value

        }) as EventListener)

        lastCircle.addEventListener('input', (() => {

            if (+lastCircle.value < Number(firstCircle.value)) {

                firstCircle.value = lastCircle.value
                firstInput.value = firstCircle.value

            }

            lastInput.value = lastCircle.value

        }) as EventListener)

    })

}

export default { init }