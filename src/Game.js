import Collision from './Collision.js';
export default class Game {
    constructor({ world, view, levels }) {
        this.world = world
        this.view = view
        this.levels = levels
        this.collision = new Collision(this.world)

        this.loop = this.loop.bind(this)
    }
    isMoving = false
    key = ''
    counter = 0
    startTime = Date.now()

    async init () {
        await this.view.init()
        await this.world.init(this.levels)
        await this.collision.init(this.levels[0].bricksWalls)

        document.addEventListener("keydown", (event) => {
            event.preventDefault()
            this.key = event.code
            this.isMoving = true
        });

        document.addEventListener("keyup", (event) => {
            event.preventDefault()
            this.isMoving = false
        });
    }

    start() {
        requestAnimationFrame(this.loop)
    }

    loop() {
        this.updateCounter()
        this.world.update(this.key, this.isMoving, this.collision.hasCollision)
        this.view.update(this.world)
        requestAnimationFrame(this.loop)
    }

    updateCounter() {
        this.counter++  // Увеличиваем счетчик
        const currentTime = Date.now()
        const elapsedTime = currentTime - this.startTime // Вычисляем прошедшее время

        if (elapsedTime >= 1000) { // Если прошла секунда
            const cyclesPerSecond = this.counter / (elapsedTime / 1000) // Рассчитываем циклы в секунду
            document.getElementById('counter').innerText = cyclesPerSecond.toFixed(2)
            this.counter = 0 // Сбрасываем счетчик
            this.startTime = currentTime // Обновляем время старта
        }
    }

}