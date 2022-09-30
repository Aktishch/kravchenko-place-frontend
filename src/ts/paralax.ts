interface coordinates {

    top: number,
    left: number

}

const init = (): void => {

    const paralaxBlock = document.querySelector('.-paralax-') as HTMLElement

    if (paralaxBlock) {

        const paralaxItems: NodeListOf<Element> = paralaxBlock.querySelectorAll('.-paralax-item-')

        paralaxBlock.addEventListener('mouseenter', (() => {

            paralaxBlock.addEventListener('mousemove', ((event: MouseEvent) => {

                const coordinat: coordinates = {

                    top: event.clientY / window.innerHeight,
                    left: event.clientX / window.innerWidth

                }

                paralaxItems.forEach((item: Element) => {

                    const paralaxItem = item as HTMLElement

                    if (paralaxItem.classList.contains('-paralax-bg-1-')) paralaxItem.setAttribute('style', `transform: translate(${coordinat.left * 10}px, -${coordinat.top * 10}px);`)

                    if (paralaxItem.classList.contains('-paralax-bg-2-')) paralaxItem.setAttribute('style', `transform: translate(-${coordinat.left * 20}px, ${coordinat.top * 20}px);`)

                    if (paralaxItem.classList.contains('-paralax-circle-grey-')) paralaxItem.setAttribute('style', `transform: translate(${coordinat.left * 50}%, ${coordinat.top * 50}%);`)

                    if (paralaxItem.classList.contains('-paralax-circle-white-')) paralaxItem.setAttribute('style', `transform: translate(-${coordinat.left * 50}%, -${coordinat.top * 50}%);`)

                })

            }) as EventListener)

        }) as EventListener)

    }

}

export default { init }