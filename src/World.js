import Tank from './Tank.js'
import BrickWall from './BrickWall.js'
export default class World {
    grid = [];
    player1Tank = new Tank()
    player2Tank = null
    bricksWalls = []
    enemyTanks = []

    async init(level) {
        this.generateEntities(level) // Переделать если уровней много
    }

    update(key, isMoving, collision) {
        console.log('UPDATE', key, isMoving, collision)
        if (isMoving) {
            switch (key) {
                case 'ArrowUp':
                    this.player1Tank.direction = 0
                    this.player1Tank.animationFrame ^=1
                    if (!collision.some(el => el === 'ArrowUp')) this.player1Tank.axis.y -= 1
                    break
                case 'ArrowRight':
                   this.player1Tank.direction = 6
                   this.player1Tank.animationFrame ^= 1
                   if (!collision.some(el => el === 'ArrowRight')) this.player1Tank.axis.x += 1
                    break
                case 'ArrowDown':
                    this.player1Tank.direction = 4
                    this.player1Tank.animationFrame ^=1
                    if (!collision.some(el => el === 'ArrowDown')) this.player1Tank.axis.y += 1
                    break
                case 'ArrowLeft':
                    this.player1Tank.direction = 2
                    this.player1Tank.animationFrame ^=1
                    if (!collision.some(el => el === 'ArrowLeft')) this.player1Tank.axis.x -= 1
                    break
                case 'Space':
                    console.log('space', this.player1Tank)
                    this.player1Tank.bullet.direction = this.player1Tank.direction
                    this.player1Tank.fire()
                    break
            }
        }
    }

    generateEntities(level) {
        level.map(entity => {
            entity.bricksWalls.map(elem => {
                this.bricksWalls.push(new BrickWall(elem))
            })
        })
    }

}

