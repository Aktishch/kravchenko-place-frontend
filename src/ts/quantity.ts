const quantityIncrease = (event: InputEvent): void => {

    const block = ((event.target as HTMLButtonElement).parentElement as HTMLElement)
    const quantity = block.querySelector('.-quantity-') as HTMLInputElement
    let quantityValue = Number(quantity.value)

    ++quantityValue
    quantity.value = String(quantityValue)

}

const quantityDecrease = (event: InputEvent): void => {

    const block = ((event.target as HTMLButtonElement).parentElement as HTMLElement)
    const quantity = block.querySelector('.-quantity-') as HTMLInputElement
    let quantityValue = Number(quantity.value)

    --quantityValue
    quantity.value = String(quantityValue)

    if (quantityValue < 1) quantity.value = '0'

}

const init = (): void => {

    document.addEventListener('click', ((event: InputEvent) => {

        if ((event.target as HTMLElement).classList.contains('-increase-')) quantityIncrease(event)

        if ((event.target as HTMLElement).classList.contains('-decrease-')) quantityDecrease(event)

    }) as EventListener)

}

export default { init }