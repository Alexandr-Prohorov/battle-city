import Tank from './Models/Tank.js'
import BrickWall from './Models/BrickWall.js'
import Tree from './Models/Tree.js'
import TankAI from './TankAI.js'

import collision from './utils/collision.js'
import controller from './utils/controller.js'
import bulletController from './utils/bulletController.js'
import bulletCollision from './utils/bulletCollision.js'
import wallDestruction from './utils/wallDestruction.js'
import tanksDestruction from './utils/tanksDestruction.js'
import createExplosionAnimation from './utils/createExplosionAnimation.js'

export default class World {
    player1Tank = null
    player2Tank = null
    bricksWalls = []
    trees = []
    enemyTanks = []
    explosions = []
    dynamicExplosions = []
    gameData = {}

    async init(level) {
        this.generateEntities(level) // Переделать если уровней много
    }

    update(key, isMoving, gameData) {
        this.gameData = gameData
        this.player1TankController(key, isMoving)
        this.enemyTanksController()
        this.bulletPlayer1TankController(gameData)
        this.bulletEnemyTanksController()
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
            // wallDestruction(this.bricksWalls, collisionWidthStatic, tank.model)
        })
    }

    bulletPlayer1TankController (gameData) {
        if (this.player1Tank.isFire) {
            let arrayStaticObjects = this.bricksWalls
            let arrayDynamicObjects = this.enemyTanks
            let collisionWidthStatic = bulletCollision(arrayStaticObjects, this.player1Tank.bullet)
            let collisionWidthDynamic = bulletCollision(arrayDynamicObjects, this.player1Tank.bullet)

            let collisions = collisionWidthStatic.concat(collisionWidthDynamic)
            bulletController(this.player1Tank.bullet.direction, collisions, this.player1Tank.bullet)
            // tanksDestruction можно переделать, чтобы он возвращал индекс объекта который через splice можно удалить
            tanksDestruction(this.enemyTanks, collisionWidthDynamic, this.player1Tank, gameData)
            wallDestruction(this.bricksWalls, collisionWidthStatic, this.player1Tank)

            const set = new Set()

            createExplosionAnimation(collisions).forEach(explosion => {
                set.add(explosion)
            })

            set.forEach(explosion => {
                this.explosions.push(explosion)
            })

            // this.explosions.push(...createExplosionAnimation(collisions))
            // console.log('set', set)

            // if (collisionCheck.length) this.explosions.push(new ExplosionAnimation(collisionCheck[0].collisionObj.axis))
            // if (collisionWidthDynamic.length) this.dynamicExplosions.push(new TankExplosionAnimation(collisionCheck[0].collisionObj.axis))
        }
    }

    bulletEnemyTanksController () {
        this.enemyTanks.forEach(tank  => {
            if (tank.model.isFire) {
                let arrayStaticObjects = this.bricksWalls
                let collisionWidthStatic = bulletCollision(arrayStaticObjects, tank.model.bullet)
                bulletController(tank.model.bullet.direction, collisionWidthStatic, tank.model.bullet)
                wallDestruction(this.bricksWalls, collisionWidthStatic, tank.model)

                const set = new Set()

                createExplosionAnimation(collisionWidthStatic).forEach(explosion => {
                    set.add(explosion)
                })

                set.forEach(explosion => {
                    this.explosions.push(explosion)
                })
            }
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

