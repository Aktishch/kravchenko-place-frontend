interface coordinates {

	top: number,
	left: number

}

const touchBtn = (): void => {

	const html = document.querySelector('html') as HTMLElement

	document.addEventListener('touchmove', ((event: TouchEvent) => {

		if ((event.target as HTMLElement).classList.contains('-draggable-btn-')) {

			if (event.targetTouches.length == 1) {

				html.classList.add('overflow-hidden')
				const btn = event.target as HTMLElement
				const touch: Touch = event.targetTouches[0]

				const coordinat: coordinates = {

					top: touch.clientY,
					left: touch.clientX

				}

				btn.style.top = `${coordinat.top}px`
				btn.style.left = `${coordinat.left}px`

				sessionStorage.setItem('coordinates', JSON.stringify(coordinat))

			}

		}

	}) as EventListener)

	document.addEventListener('touchend', ((event: Event) => {

		if ((event.target as HTMLElement).classList.contains('-draggable-btn-')) html.classList.remove('overflow-hidden')

	}) as EventListener)

}

const init = (): void => {

	const btn = document.querySelector('.-draggable-btn-') as HTMLElement

	if (sessionStorage.getItem('coordinates')) {

		const coordinat: coordinates = JSON.parse(sessionStorage.getItem('coordinates') || '{}')

		btn.style.top = `${coordinat.top}px`
		btn.style.left = `${coordinat.left}px`

	}

	document.addEventListener('scroll', (() => {

		let scrollTop: number = window.scrollY

		scrollTop >= 250 ? btn.classList.remove('anim--scale') : btn.classList.add('anim--scale')

	}) as EventListener)

	touchBtn()

}

export default { init }