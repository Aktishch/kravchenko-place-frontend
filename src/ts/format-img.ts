const canUseWebp = () => {

    const canvas = document.createElement('canvas') as HTMLCanvasElement

    if (!!(canvas.getContext && canvas.getContext('2d'))) return canvas.toDataURL('image/webp').indexOf('data:image/webp') == 0

    return false

}

const createBg = () => {

    const images: NodeListOf<Element> = document.querySelectorAll('[data-bg]')

    images.forEach((item: Element) => {

        const image = item as HTMLElement
        const src: string = String(image.getAttribute('data-bg'))
        image.style.backgroundImage = `url('${src}')`

    })

}

const createBgWebp = () => {

    const isitFirefox: RegExpMatchArray | null = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./)
    const firefoxVer: number = isitFirefox ? Number(isitFirefox[1]) : 0

    if (canUseWebp() || firefoxVer >= 65) {

        const webpImages: NodeListOf<Element> = document.querySelectorAll('[data-bg-webp]')

        webpImages.forEach((item: Element) => {

            const webpImage = item as HTMLElement
            const webpSrc: string = String(webpImage.getAttribute('data-bg-webp'))
            webpImage.style.backgroundImage = `url('${webpSrc}')`

        })

    }

}

const init = (): void => {

    createBg()
    createBgWebp()

}

export default { init }