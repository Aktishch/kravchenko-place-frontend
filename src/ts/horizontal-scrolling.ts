const containersSize = (): void => {

    const containers: NodeListOf<Element> = document.querySelectorAll('.-horizontal-scrolling-')

    containers.forEach((item: Element) => {

        const container = item as HTMLElement
        const block = container.querySelector('.-horizontal-sticky-') as HTMLElement
        const height: number = (block.scrollWidth - block.clientWidth) * 1.2

        container.setAttribute('style', `height: ${height}px`)

    })

}

const elementInViewport = (item: Element) => {

    const elementTop: number = item.getBoundingClientRect().top
    const elementBottom: number = item.getBoundingClientRect().bottom
    const elementHeight: number = document.documentElement.clientHeight

    return elementTop <= 0 && elementBottom > elementHeight

}

const wheelHandler = (): void => {

    const scrolling = Array.from(

        document.querySelectorAll('.-horizontal-scrolling-')).filter((item: Element) => {

            return elementInViewport(item)

        }

        )[0] as HTMLElement

    if (!scrolling) return

    const sticky = scrolling.querySelector('.-horizontal-sticky-') as HTMLElement
    const images: NodeListOf<Element> = scrolling.querySelectorAll('.-horizontal-image-')
    const belowTop: boolean = scrolling.offsetTop < document.documentElement.scrollTop
    const belowBottom: boolean = scrolling.offsetTop + scrolling.offsetHeight > document.documentElement.scrollTop
    const horizontally: boolean = belowTop && belowBottom

    if (horizontally) {

        window.addEventListener('scroll', (() => {

            if (screen.height >= sticky.getBoundingClientRect().top) {

                const scrolledPage: number = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)

                sticky.scrollLeft = scrolledPage - scrolling.offsetTop

                images.forEach((item: Element) => {

                    (item as HTMLImageElement).style.transform = `translateX(-${(scrolledPage / sticky.scrollWidth) * 10}%)`

                })

            }

        }) as EventListener)

    }

}

const mobileScroll = () => {

    if (document.documentElement.clientWidth < 576) {

        window.removeEventListener('wheel', wheelHandler as EventListener)

    } else {

        window.addEventListener('wheel', wheelHandler as EventListener)

    }

}

const init = (): void => {

    containersSize()
    wheelHandler()
    mobileScroll()

    window.addEventListener('resize', containersSize as EventListener)
    window.addEventListener('resize', mobileScroll as EventListener)
    window.addEventListener('wheel', wheelHandler as EventListener)

}

export default { init }