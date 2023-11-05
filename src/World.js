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
        console.log('collision', collision)
        if (isMoving) {
            switch (key) {
                case 'ArrowUp':
                    if (collision !== 'ArrowUp') {
                        this.player1Tank.direction = 0
                        this.player1Tank.animationFrame ^=1
                        this.player1Tank.axis.y -= 1
                    }
                    break
                case 'ArrowRight':
                    if (collision !== 'ArrowRight') {
                        this.player1Tank.direction = 6
                        this.player1Tank.animationFrame ^= 1
                        this.player1Tank.axis.x += 1
                    }
                    break
                case 'ArrowDown':
                    if (collision !== 'ArrowDown') {
                        this.player1Tank.direction = 4
                        this.player1Tank.animationFrame ^=1
                        this.player1Tank.axis.y += 1
                    }
                    break
                case 'ArrowLeft':
                    if (collision !== 'ArrowLeft') {
                        this.player1Tank.direction = 2
                        this.player1Tank.animationFrame ^=1
                        this.player1Tank.axis.x -= 1
                    }
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

