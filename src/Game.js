export default class Game {
    constructor({ menu, menuView, world, view, menuData, levels }) {
        this.menu = menu
        this.menuView = menuView
        this.world = world
        this.view = view
        this.menuData = menuData
        this.levels = levels

        this.loop = this.loop.bind(this)
    }
    isMoving = false
    key = ''
    counter = 0
    startTime = Date.now()
    tankMoveSound = new Audio('../sounds/battle-city-sfx-16.mp3')
    gameState = 'menu'
    gameData = {
        score: 0,
        level: 0,
        player: 'Player1'
    }

    async init () {
        await this.menu.init(this.menuData)
        await this.menuView.init()
        await this.view.init()
        await this.world.init(this.levels)

        this.setDataSession()
        this.setEventListener()
    }

    start() {
        requestAnimationFrame(this.loop)
    }

    loop() {
        switch (this.gameState) {
            case 'menu':
                this.updateMenuMode()
                break
            case 'play':
                this.updatePlayMode()
                break
        }
        this.updateCounter()
        requestAnimationFrame(this.loop)
    }

    updateMenuMode() {
        this.menu.update(this.key)
        this.menuView.update(this.menu)
        this.key = ''
    }

    updatePlayMode() {
        this.world.update(this.key, this.isMoving, this.gameData)
        this.view.update(this.world)
        if (this.key === 'Space') this.key = ''
        this.saveScore()
    }

    setDataSession() {
        sessionStorage.setItem('myGame', JSON.stringify(this.gameData))
    }

    setEventListener() {
        document.addEventListener("keydown", (event) => {
            event.preventDefault()
            this.key = event.code
            this.isMoving = true
            // this.tankMoveSound.play()
            if (event.code === 'Enter') {
                this.gameState = 'play'
            }
            if (event.code === 'Escape') {
                this.gameState = 'menu'
            }
        })

        document.addEventListener("keyup", (event) => {
            event.preventDefault()
            this.isMoving = false
            // this.tankMoveSound.pause()
        })
    }

    saveScore() {
        // изменить условие (game не должен знать про танки)
        if (!this.world.enemyTanks.length) {
            let serializedData = JSON.stringify(this.gameData)
            sessionStorage.setItem('myGame', serializedData)
            this.gameState = 'menu'
        }
    }

    updateCounter() {
        this.counter++
        const currentTime = Date.now()
        const elapsedTime = currentTime - this.startTime

        if (elapsedTime >= 1000) {
            const cyclesPerSecond = this.counter / (elapsedTime / 1000)
            document.getElementById('counter').innerText = cyclesPerSecond.toFixed(2)
            this.counter = 0
            this.startTime = currentTime
        }
    }

}