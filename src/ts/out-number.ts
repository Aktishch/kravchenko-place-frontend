const outNum = (num: number, elem: string, time: number, step: number): void => {

	const item = document.querySelector(`.${elem}`) as HTMLElement
	const timer: number = Math.round(time / (num / step))
	let number: number = 0

	const interval: NodeJS.Timer = setInterval(() => {

		number = number + step

		if (number == num) clearInterval(interval)

		item.innerHTML = String(number)

	}, timer)

}

const scrollToPercent = (): void => {

	const block = document.querySelector('.-measurement-') as HTMLElement

	if (block) {

		const blockTop: number = block.getBoundingClientRect().top

		if (screen.height >= blockTop) {

			outNum(4000, '-font-4000-', 2500, 100)
			outNum(70, '-font-70-', 2500, 1)
			outNum(32, '-font-32-', 2500, 1)
			outNum(46, '-font-46-', 2500, 1)
			outNum(6, '-font-6-', 2500, 1)
			outNum(6, '-font-6-guests-', 2500, 1)
			outNum(30, '-font-30-', 2500, 1)
			outNum(72, '-font-72-', 2500, 1)

			document.removeEventListener('scroll', scrollToPercent as EventListener)

		}

	}

}

const init = (): void => {

	document.addEventListener('scroll', scrollToPercent as EventListener)

}

export default { init }