const writeText = (elem: Element, text: string[], speed: number): void => {

	const letters: string[] = text.join('').split('')

	const interval: NodeJS.Timer = setInterval(() => {

		if (!letters[0]) return clearInterval(interval)

		elem.innerHTML += letters.shift()

	}, speed != undefined ? speed : 100)

}

const scrollToText = (): void => {

	const block = document.querySelector('.-description-') as HTMLElement

	if (block) {

		const blockTop: number = block.getBoundingClientRect().top
		const record = document.querySelector('.-record-') as HTMLElement
		const recordText: string = String(record.dataset.text)

		if (screen.height >= blockTop) {

			writeText(record, [recordText], 50)

			document.removeEventListener('scroll', scrollToText as EventListener)

		}

	}

}

const init = (): void => {

	document.addEventListener('scroll', scrollToText as EventListener)

}

export default { init }