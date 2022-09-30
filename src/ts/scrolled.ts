const offset = (element: Element) => {

	const elemTop: number = element.getBoundingClientRect().top
	const elemLeft: number = element.getBoundingClientRect().left
	const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop
	const scrollLeft: number = window.pageXOffset || document.documentElement.scrollLeft

	return {

		top: elemTop + scrollTop,
		left: elemLeft + scrollLeft

	}

}

const animOnScroll = (): void => {

	const elements: NodeListOf<Element> = document.querySelectorAll('.-elem-')

	for (let i: number = 0; i < elements.length; i++) {

		const element = elements[i] as HTMLElement
		const elementHeight: number = element.offsetHeight
		const elementOffset: number = offset(element).top
		const elementStart: number = 3

		let elementPoint: number = window.innerHeight - elementHeight / elementStart

		if (elementPoint > window.innerHeight) elementPoint = window.innerHeight - window.innerHeight / elementStart

		if (window.pageYOffset > elementOffset - elementPoint && window.pageYOffset < elementOffset + elementHeight) element.classList.add('-show-')

	}

}

const init = (): void => {

	animOnScroll()
	document.addEventListener('scroll', animOnScroll as EventListener)

}

export default { init }