const init = (): void => {

	const header = document.querySelector('.-header-') as HTMLElement

	if (!header) return

	const logo = document.querySelector('.-logo-') as HTMLImageElement
	let prevScrollpos: number = window.pageYOffset

	const scrollHeader = (): void => {

		let currentScrollPos: number = window.pageYOffset

		if (currentScrollPos > header.clientHeight) {

			header.classList.add('bg-black')
			logo.classList.add('display-none')

			if ((document.documentElement as HTMLElement).clientWidth > 576) {
				if (prevScrollpos > currentScrollPos) {
	
					header.style.top = '0'
		
				} else {
		
					header.style.top = `-${header.clientHeight}px`
		
				}
			}


		} else {

			header.classList.remove('bg-black')
			logo.classList.remove('display-none')

		}

		prevScrollpos = currentScrollPos

	}

	document.addEventListener('scroll', scrollHeader as EventListener)

}

export default { init }