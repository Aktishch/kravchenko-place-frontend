interface coordinates {

    top: number,
    left: number

}

const lightening = (event: MouseEvent): void => {

    const element = (event.target as HTMLElement).closest('.-lightening-') as HTMLElement

    const coordinat: coordinates = {

        top: event.clientY - element.getBoundingClientRect().top,
        left: event.clientX - element.getBoundingClientRect().left

    }

    element.style.setProperty('--y', `${coordinat.top}px`)
    element.style.setProperty('--x', `${coordinat.left}px`)

}

const init = (): void => {

    document.addEventListener('mousemove', ((event: MouseEvent) => {

        if ((event.target as HTMLElement).closest('.-lightening-')) lightening(event)

    }) as EventListener)

}

export default { init }