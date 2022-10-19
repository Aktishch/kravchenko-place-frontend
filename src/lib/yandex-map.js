import ymaps from 'ymaps'

const init = () => {

    const mark = [45.15964104781791, 39.32342800895679]
    let center

    window.screen.width > 576 ? center = [45.12139783884953,38.86812917662862] : center = [45.15964104781791, 39.32342800895679]

    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {

        const inputs = [...document.querySelectorAll('[data-suggest-view]')]

        inputs.forEach((input) => {

            new maps.SuggestView(input, {

                results: 5,
                container: document.body

            })

        })

        const map = new maps.Map('map', {

            center: center,
            zoom: 10

        })

        const placemark = new maps.Placemark(mark, {}, {

            iconLayout: 'default#image',
            iconImageHref: '../img/pictures/geo.png',
            iconImageSize: [52, 60],
            iconImageOffset: [-20, -50]

        })

        map.controls.remove('geolocationControl')
        map.controls.remove('searchControl')
        map.controls.remove('trafficControl')
        map.controls.remove('typeSelector')
        map.geoObjects.add(placemark)

    }).catch(error =>

        console.log('Failed to load Yandex Maps', error)

    )

}

export default { init }