const init = (): void => {

    const html = document.querySelector('html') as HTMLElement
    
    html.classList.remove('overflow-hidden')
	html.style.marginRight = '0'

}

const destroy = (): void => {

    const html = document.querySelector('html') as HTMLElement
    const documentWidth: number = document.documentElement.clientWidth
    const windowWidth: number = window.innerWidth
    const scrollBarWidth: number = windowWidth - documentWidth

    html.classList.add('overflow-hidden')
	html.style.marginRight = `${scrollBarWidth}px`

}

export default { init, destroy }