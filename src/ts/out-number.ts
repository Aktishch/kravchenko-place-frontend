const outNum = (num: number, elem: HTMLElement, time: number, step: number): void => {
	const timer = Math.round(time / (num / step))
	let number = 0

	const interval = setInterval(() => {

		number = number + step

		if (number >= num) {
			number = num
			clearInterval(interval)
		}

		elem.innerHTML = String(number)

	}, timer)

}

const scrollToPercent = (): void => {

	const block = document.querySelector('.-measurement-') as HTMLElement

	if (block) {

		const blockTop: number = block.getBoundingClientRect().top

		if (screen.height >= blockTop) {

			const items = block.querySelectorAll<HTMLElement>('[data-type-numbers]')

			items.forEach((el)=>{
				const number = Number(el.getAttribute('data-type-numbers'))
				const step = number > 1000 ? 10 : 1

				outNum(number, el, 2500, step)
			})

			document.removeEventListener('scroll', scrollToPercent as EventListener)

		}

	}

}

const init = (): void => {

	document.addEventListener('scroll', scrollToPercent as EventListener)

}

export default { init }