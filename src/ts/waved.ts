interface coordinates {

    top: number,
    left: number

}

const waved = (event: MouseEvent): void => {

    const element = (event.target as HTMLElement).closest('.-waved-') as HTMLElement
    const circle = document.createElement('div') as HTMLDivElement

    const coordinat: coordinates = {

        top: event.clientY - element.getBoundingClientRect().top,
        left: event.clientX - element.getBoundingClientRect().left

    }

    circle.classList.add('circle')
    circle.style.top = `${coordinat.top}px`
    circle.style.left = `${coordinat.left}px`

    element.appendChild(circle)
    element.focus()

    setTimeout(() => {

        circle.remove()

    }, 1000)

}

const init = (): void => {

    document.addEventListener('click', ((event: MouseEvent) => {

        if ((event.target as HTMLElement).closest('.-waved-')) waved(event)

    }) as EventListener)

}

export default { init }