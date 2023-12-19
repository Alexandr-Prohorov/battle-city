export default class Game {
    constructor({ menu, menuView, stageStart, world, view, menuData, levels }) {
        this.menu = menu
        this.menuView = menuView
        this.stageStart = stageStart
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
    timeoutId = null

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
            case 'stageStart':
                this.updateStageStartMode()
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

    updateStageStartMode() {
        this.stageStart.update('STAGE 1')
    }

    updatePlayMode() {
        this.world.update(this.key, this.isMoving, this.gameData)
        this.view.update(this.world)
        if (this.key === 'Space') this.key = '' // чтобы стрельба прерывалась (надо изменить)
        if (!this.world.enemyTanks.length && !this.timeoutId) {
            this.saveScore()
            this.timeoutId = setTimeout(() => {
                this.gameState = 'menu'
            }, 3000)
        }
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
            if (event.code === 'Enter' && !this.menuView.startAnimationY) {
                this.gameState === 'menu' ? this.gameState = 'stageStart' : this.gameState = 'play'
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
        // изменить (game не должен знать про танки)
        let serializedData = JSON.stringify(this.gameData)
        sessionStorage.setItem('myGame', serializedData)
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