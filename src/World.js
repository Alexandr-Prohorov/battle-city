import Tank from './Models/Tank.js'
import BrickWall from './Models/BrickWall.js'
import collision from './utils/collision.js'
import TankAI from './TankAI.js'

import controller from './utils/controller.js'

export default class World {
    player1Tank = null
    player2Tank = null
    bricksWalls = []
    enemyTanks = []

    async init(level) {
        this.generateEntities(level) // Переделать если уровней много
    }

    update(key, isMoving) {
        let collisionCheck = collision(this.enemyTanks.concat(this.bricksWalls), this.player1Tank)
        controller(key, isMoving, collisionCheck, this.player1Tank)

        this.enemyTanks.forEach(tank => {
            tank.update()
            let tankKey = tank.key
            let collisionCheck = collision(this.bricksWalls.concat([this.player1Tank]), tank.model)
            controller(tankKey, isMoving = true, collisionCheck, tank.model)
        })
    }

    generateEntities(level) {
        level.map(entity => {
            entity.bricksWalls.map(elem => {
                this.bricksWalls.push(new BrickWall(elem))
            })

            this.player1Tank = new Tank(entity.player1Tank)

            entity.enemyTanks.map(elem => {
                this.enemyTanks.push(new TankAI(new Tank(elem)))
            })
        })
    }

}

