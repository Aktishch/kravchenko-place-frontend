interface composition {

    status: string,
    time: number,
    index: number

}

type compositionDetail = {

    artist: string,
    song: string,
    audio: string,
    img: string

}

const compositions: compositionDetail[] = [

    {

        artist: 'Slipknot',
        song: 'Snuff',
        audio: 'https://mp3minusovki.com/music/fhvndfjwserjgt/247bab1c312b2335afe3f5c9b496a3d3/01d63b016f64e0739a9e3d2599b6521f.mp3',
        img: 'img/pictures/postcard-1.jpg'

    },

    {

        artist: 'System of a down',
        song: 'Lonely Day',
        audio: 'https://cdn1.shadam.net/uploads/files/2018-09/1536003683_system-of-a-down-lonely-day.mp3',
        img: 'img/pictures/postcard-3.jpg'

    },

    {

        artist: 'Scorpions',
        song: 'Slave Me',
        audio: 'https://ruo.morsmusic.org/load/941771577/Scorpions_-_Slave_Me_(musmore.com).mp3',
        img: 'img/pictures/postcard-5.jpg'

    }

]

const player = (id: string, playlist: compositionDetail[], storage: string): void => {

    const player = document.querySelector(`#${id}`) as HTMLElement

    if (player) {

        const musics: NodeListOf<Element> = player.querySelectorAll('.-player-music-')
        const img = player.querySelector('.-player-img-') as HTMLImageElement
        const musician = player.querySelector('.-player-musician-') as HTMLElement
        const song = player.querySelector('.-player-song-') as HTMLElement
        const audio = player.querySelector('.-player-audio-') as HTMLAudioElement
        const progress = player.querySelector('.-player-progress-') as HTMLElement
        const range = player.querySelector('.-player-range-') as HTMLElement
        const status = player.querySelector('.-player-status-') as HTMLButtonElement
        const statusIcon = status.querySelector('use') as SVGUseElement
        const prev = player.querySelector('.-player-prev-') as HTMLButtonElement
        const next = player.querySelector('.-player-next-') as HTMLButtonElement
        const start = player.querySelector('.-player-start-') as HTMLElement
        const end = player.querySelector('.-player-end-') as HTMLElement
        const volume = player.querySelector('.-player-volume-') as HTMLButtonElement

        let songIndex: number = 0

        let currentComposition: composition = {

            status: 'pause',
            time: 0,
            index: 0

        }

        const loadComposition = (artist: string, name: string, audioSrc: string, imgSrc: string): void => {

            if (musician) musician.innerHTML = artist
            if (song) song.innerHTML = name
            if (audio) audio.src = audioSrc
            if (img) img.src = imgSrc

        }

        const statusAudio = (): void => {

            if (audio.paused) {

                audio.play()

                statusIcon.setAttribute('xlink:href', 'img/icons.svg#pause')

                if (musics) {

                    musics.forEach((item: Element) => {

                        const music = item as HTMLElement
                        const musicIndex: number = Number(music.dataset.music)
                        const musicStatus = music.querySelector('use') as SVGUseElement

                        if (musicIndex == songIndex) musicStatus.setAttribute('xlink:href', 'img/icons.svg#pause')
                        if (musicIndex != songIndex) musicStatus.setAttribute('xlink:href', 'img/icons.svg#play')

                    })

                }

                currentComposition.status = 'play'

            } else {

                audio.pause()

                statusIcon.setAttribute('xlink:href', 'img/icons.svg#play')

                if (musics) {

                    musics.forEach((item: Element) => {

                        const music = item as HTMLElement
                        const musicIndex: number = Number(music.dataset.music)
                        const musicStatus = music.querySelector('use') as SVGUseElement

                        if (musicIndex == songIndex) musicStatus.setAttribute('xlink:href', 'img/icons.svg#play')

                    })

                }

                currentComposition.status = 'pause'

            }

            currentComposition.index = songIndex

        }

        const audioPause = (): void => {

            statusIcon.setAttribute('xlink:href', 'img/icons.svg#play')

            if (musics) {

                musics.forEach((item: Element) => {

                    const music = item as HTMLElement
                    const musicStatus = music.querySelector('use') as SVGUseElement

                    musicStatus.setAttribute('xlink:href', 'img/icons.svg#play')

                })

            }

        }

        const nextSong = (): void => {

            songIndex++

            if (songIndex > playlist.length - 1) songIndex = 0

            loadComposition(playlist[songIndex].artist, playlist[songIndex].song, playlist[songIndex].audio, playlist[songIndex].img)

            statusAudio()

        }

        const prevSong = (): void => {

            songIndex--

            if (songIndex < 0) songIndex = playlist.length - 1

            loadComposition(playlist[songIndex].artist, playlist[songIndex].song, playlist[songIndex].audio, playlist[songIndex].img)

            statusAudio()

        }

        const audioTiming = (time: Element, status: string): void => {

            let min: number = 0
            let sec: number = 0

            if (status == 'start') {

                min = Math.floor(audio.currentTime / 60)
                sec = Math.floor(audio.currentTime % 60)

            } else {

                min = Math.floor(audio.duration / 60)
                sec = Math.floor(audio.duration % 60)

            }

            let formatMin: string = ''
            let formatSec: string = ''

            min < 10 ? formatMin = `0${min}` : formatMin = String(min)
            sec < 10 ? formatSec = `0${sec}` : formatSec = String(sec)

            if (time) time.innerHTML = `${formatMin}:${formatSec}`

        }

        const audioStart = (): void => {

            let percent: number = (audio.currentTime / audio.duration) * 100
            range.style.width = `${percent}%`

            audioTiming(start, 'start')

            currentComposition.time = audio.currentTime
            sessionStorage.setItem(`${storage}`, JSON.stringify(currentComposition))

        }

        const audioEnd = (): void => {

            audio.addEventListener('loadedmetadata', (() => {

                audioTiming(end, 'end')

            }) as EventListener)

        }

        const setProgress = (event: MouseEvent): void => {

            let width: number = progress.clientWidth
            let clickX: number = event.offsetX
            let duration: number = audio.duration

            audio.currentTime = (clickX / width) * duration

        }

        loadComposition(playlist[0].artist, playlist[0].song, playlist[0].audio, playlist[0].img)

        if (sessionStorage.getItem(`${storage}`)) {

            currentComposition = JSON.parse(sessionStorage.getItem(`${storage}`) || '{}')

            songIndex = currentComposition.index

            if (songIndex == null || songIndex == undefined) songIndex = 0

            loadComposition(playlist[songIndex].artist, playlist[songIndex].song, playlist[songIndex].audio, playlist[songIndex].img)

            audio.currentTime = currentComposition.time

            if (currentComposition.status == 'play') {

                statusAudio()

                if (audio.paused) audioPause()

            }

        }

        if (musics) {

            musics.forEach((item: Element) => {

                const music = item as HTMLElement
                const musicIndex = Number(music.dataset.music)

                music.addEventListener('click', (() => {

                    if (musicIndex != songIndex) {

                        songIndex = musicIndex
                        loadComposition(playlist[songIndex].artist, playlist[songIndex].song, playlist[songIndex].audio, playlist[songIndex].img)

                    }

                    statusAudio()

                }) as EventListener)

            })

        }

        if (volume) {

            volume.addEventListener('click', (() => {

                volume.classList.toggle('-player-mute-')

                const volumeIcon = volume.querySelector('svg') as SVGSVGElement
                const volumeIconSrc = volumeIcon.querySelector('use') as SVGUseElement

                if (volume.classList.contains('-player-mute-')) {

                    volumeIcon.classList.add('fade-50')
                    volumeIconSrc.setAttribute('xlink:href', 'img/icons.svg#volume-off')
                    audio.volume = 0

                } else {

                    volumeIcon.classList.remove('fade-50')
                    volumeIconSrc.setAttribute('xlink:href', 'img/icons.svg#volume-up')
                    audio.volume = 1

                }

            }) as EventListener)

        }

        status.addEventListener('click', statusAudio as EventListener)
        next.addEventListener('click', nextSong as EventListener)
        prev.addEventListener('click', prevSong as EventListener)
        audio.addEventListener('timeupdate', audioStart as EventListener)
        audio.addEventListener('timeupdate', audioEnd as EventListener)
        audio.addEventListener('ended', nextSong as EventListener)
        audio.addEventListener('pause', audioPause as EventListener)
        progress.addEventListener('click', setProgress as EventListener)

    }

}

const onlyPlayOneIn = (event: Event): void => {

    const audios = document.querySelectorAll('audio')

    for (let i: number = 0; i < audios.length; i++) {

        const audio = audios[i] as HTMLAudioElement

        if (audio !== event.target) audio.pause()

    }

}

const init = (): void => {

    document.addEventListener('play', ((event: Event) => {

        onlyPlayOneIn(event)

    }) as EventListener, true)

    player('player', compositions, 'composition')

}

export default { init }