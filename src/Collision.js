export default class Collision {

    constructor(world) {
        this.player1Tank = {
            axis: world.player1Tank.axis,
            sh: 26,
            sw: 26
        }

        this.player2Tank = world.player2Tank

        // this.brickWall = {
        //     axis: world.brickWall.axis,
        //     sh: 32,
        //     sw: 32
        // }
        this.bricksWalls = []

        this.enemyTanks = world.enemyTanks
    }

    init(walls) {
        console.log(walls)
        this.bricksWalls = walls.map(item => {
            return {
                x: item.x,
                y: item.y,
                sh: 32,
                sw: 32
            }
        })
    }

    update() {
        this.hasCollision();
    }

    hasCollision() {
        console.log('player1Tank', this.player1Tank.axis.y)
        let key = ''
        this.bricksWalls.forEach(wall => {
             if (
                 this.player1Tank.axis.y <= wall.y + wall.sh &&
                 this.player1Tank.axis.x >= wall.x - this.player1Tank.sw &&
                 wall.x + wall.sw >= this.player1Tank.axis.x
             ) key = 'ArrowUp'
        })
        // console.log(key)
        return key
    }
}
