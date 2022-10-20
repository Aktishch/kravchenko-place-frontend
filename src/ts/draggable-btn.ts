import scrollBar from './scrollBar'

interface coordinates {

	top: number,
	left: number

}

const setTranslate = (elem: HTMLElement, xPos: number, yPos: number): void => {

	elem.style.transform = `translate(${xPos}px, ${yPos}px)`

}

const draggable = (id: string, el: string, storage: string): void => {

	const body = document.querySelector('body') as HTMLElement
	const dragItem = document.querySelector(`.${id}`) as HTMLElement

	if (dragItem) {

		const coordinat: coordinates = {
	
			top: 0,
			left: 0
	
		}
	
		let active: boolean = false
		let currentY: number
		let currentX: number
		let initialY: number
		let initialX: number
	
		const dragElememt = () => {
	
			if (el == 'parent') {
	
				setTranslate((dragItem.parentElement as HTMLElement), coordinat.left, coordinat.top)
	
			} else {
	
				setTranslate(dragItem, coordinat.left, coordinat.top)
	
			}
	
		}
	
		const dragStart = (event: Event): void => {
	
			if (event.type === 'touchstart') {
	
				initialY = (event as TouchEvent).touches[0].clientY - coordinat.top
				initialX = (event as TouchEvent).touches[0].clientX - coordinat.left
	
			} else {
	
				initialY = (event as MouseEvent).clientY - coordinat.top
				initialX = (event as MouseEvent).clientX - coordinat.left
	
			}
	
			if (event.target === dragItem) active = true
	
		}
	
		const dragEnd = (): void => {
	
			initialX = currentX
			initialY = currentY
			active = false
	
		}
	
		const drag = (event: Event): void => {
	
			if (active) {
	
				if (event.type === 'touchmove') {
	
					currentX = (event as TouchEvent).touches[0].clientX - initialX
					currentY = (event as TouchEvent).touches[0].clientY - initialY
	
				} else {
	
					currentX = (event as MouseEvent).clientX - initialX
					currentY = (event as MouseEvent).clientY - initialY
	
				}
	
				coordinat.top = currentY
				coordinat.left = currentX
	
				dragElememt()
	
				sessionStorage.setItem(`${storage}`, JSON.stringify(coordinat))
	
			}
	
		}
	
		if (sessionStorage.getItem(`${storage}`)) {
	
			coordinat.top = JSON.parse(sessionStorage.getItem('coordinates') || '{}').top
			coordinat.left = JSON.parse(sessionStorage.getItem('coordinates') || '{}').left
	
			dragElememt()
	
		}
	
		dragItem.addEventListener('touchstart', scrollBar.destroy as EventListener)
		dragItem.addEventListener('touchend', scrollBar.init as EventListener)
		dragItem.addEventListener('mousedown', scrollBar.destroy as EventListener)
		dragItem.addEventListener('mouseup', scrollBar.init as EventListener)
	
		body.addEventListener('touchstart', dragStart as EventListener, false)
		body.addEventListener('touchmove', drag as EventListener, false)
		body.addEventListener('touchend', dragEnd as EventListener, false)
		
		body.addEventListener('mousedown', dragStart as EventListener, false)
		body.addEventListener('mousemove', drag as EventListener, false)
		body.addEventListener('mouseup', dragEnd as EventListener, false)
		
	}


}

const init = (): void => {

	draggable('-draggable-btn-', '', 'coordinates')

}

export default { init }