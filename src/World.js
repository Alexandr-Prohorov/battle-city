import Tank from './Models/Tank.js'
import BrickWall from './Models/BrickWall.js'
import Tree from './Models/Tree.js'
import TankAI from './TankAI.js'

import collision from './utils/collision.js'
import controller from './utils/controller.js'

export default class World {
    player1Tank = null
    player2Tank = null
    bricksWalls = []
    trees = []
    enemyTanks = []

    async init(level) {
        this.generateEntities(level) // Переделать если уровней много
    }

    update(key, isMoving) {
        this.player1TankController(key, isMoving)
        this.enemyTanksController()
    }

    player1TankController (key, isMoving) {
        let arrayDynamicObjects = this.enemyTanks
        let arrayStaticObjects = this.bricksWalls

        let collisionWidthDynamic = collision(arrayDynamicObjects, this.player1Tank, false)
        let collisionWidthStatic = collision(arrayStaticObjects, this.player1Tank,  true)

        let collisionCheck = collisionWidthStatic.concat(collisionWidthDynamic)
        controller(key, isMoving, collisionCheck, this.player1Tank)
    }

    enemyTanksController () {
        this.enemyTanks.forEach((tank, idx) => {
            let arrayDynamicObjects = this.enemyTanks.filter((_, index) => index !== idx).concat([this.player1Tank])
            let arrayStaticObjects = this.bricksWalls

            let collisionWidthStatic = collision(arrayStaticObjects, tank.model,  true)
            let collisionWidthDynamic = collision(arrayDynamicObjects, tank.model, false)

            tank.update()
            let tankKey = tank.key

            let collisionCheck = collisionWidthStatic.concat(collisionWidthDynamic)
            controller(tankKey,true, collisionCheck, tank.model)
        })
    }

    generateEntities(level) {
        level.map(entity => {
            entity.bricksWalls.map(elem => {
                this.bricksWalls.push(new BrickWall(elem))
            })

            entity.trees.map(elem => {
                this.trees.push(new Tree(elem))
            })

            this.player1Tank = new Tank(entity.player1Tank)

            entity.enemyTanks.map(elem => {
                this.enemyTanks.push(new TankAI(new Tank(elem)))
            })
        })
    }

}

