export default class Collision {

    constructor(world) {
        this.player1Tank = world.player1Tank

        this.player2Tank = world.player2Tank

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
                this.player1Tank.axis.y >= wall.y - this.player1Tank.sh &&
                this.player1Tank.axis.x >= wall.x - this.player1Tank.sw &&
                wall.x + wall.sw >= this.player1Tank.axis.x &&
                this.player1Tank.direction === 0
            ) key = 'ArrowUp'
            if (
                this.player1Tank.axis.x <= wall.x + wall.sw &&
                this.player1Tank.axis.x >= wall.x + wall.sw &&
                this.player1Tank.axis.y <= wall.y + wall.sh &&
                this.player1Tank.axis.y >= wall.y - this.player1Tank.sh &&
                this.player1Tank.direction === 2
            ) key = 'ArrowLeft'
            if (
                this.player1Tank.axis.x + this.player1Tank.sw >= wall.x &&
                this.player1Tank.axis.x <= wall.x + wall.sw &&
                this.player1Tank.axis.y >= wall.y - this.player1Tank.sh &&
                this.player1Tank.axis.y <= wall.y + wall.sh &&
                this.player1Tank.direction === 6
            ) key = 'ArrowRight'
        })
        console.log(this.player1Tank.direction)
        return key
    }
}
