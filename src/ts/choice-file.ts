const choiceFile = (event: Event): void => {

    const input = event.target as HTMLInputElement
    const file: File = (input.files as FileList)[0]
    const readFile: FileReader = new FileReader()

    readFile.readAsDataURL(file)

    readFile.addEventListener('loadend', (() => {

        (input.nextElementSibling as HTMLImageElement).src = String(readFile.result)

    }) as EventListener)

}

const init = (): void => {

    document.addEventListener('change', ((event: Event) => {

        if ((event.target as HTMLElement).classList.contains('-file-')) choiceFile(event)

    }) as EventListener)

}

export default { init }