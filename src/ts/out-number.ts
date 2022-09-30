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

	const block = document.querySelector('.-description-') as HTMLElement

	if (block) {

		const blockTop: number = block.getBoundingClientRect().top

		if (screen.height >= blockTop) {

			outNum(36, '-font-36-', 2500, 1)
			outNum(32, '-font-32-', 2500, 1)
			outNum(28, '-font-28-', 2500, 1)
			outNum(24, '-font-24-', 2500, 1)
			outNum(20, '-font-20-', 2500, 1)
			outNum(16, '-font-16-', 2500, 1)
			outNum(12, '-font-12-', 2500, 1)

			document.removeEventListener('scroll', scrollToPercent as EventListener)

		}

	}

}

const init = (): void => {

	document.addEventListener('scroll', scrollToPercent as EventListener)

}

export default { init }