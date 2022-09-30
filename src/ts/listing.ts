const init = (): void => {

    const listings: NodeListOf<Element> = document.querySelectorAll('.-list-')

    listings.forEach((item: Element) => {

        const listing = item as HTMLElement
        const listingBtn = listing.querySelector('.-list-show-') as HTMLButtonElement
        const listingItems: NodeListOf<Element> = listing.querySelectorAll('.-list-el-hid-')

        listingBtn.addEventListener('click', (() => {

            for (let i: number = 0; i < listingItems.length; i++) {

                listingItems[i].classList.remove('display-none')
                listingBtn.remove()

            }

        }) as EventListener)

    })

}

export default { init }