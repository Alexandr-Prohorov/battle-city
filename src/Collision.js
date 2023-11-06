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
        const keys = []
        this.bricksWalls.forEach(wall => {
            if (
                this.player1Tank.axis.y <= wall.y + wall.sh &&
                this.player1Tank.axis.y > wall.y - this.player1Tank.sh &&
                this.player1Tank.axis.x < wall.x + wall.sw &&
                this.player1Tank.axis.x > wall.x - this.player1Tank.sw
            ) keys.push('ArrowUp')
            if (
                this.player1Tank.axis.y >= wall.y - this.player1Tank.sh &&
                this.player1Tank.axis.y < wall.y + wall.sh &&
                this.player1Tank.axis.x > wall.x - this.player1Tank.sw &&
                this.player1Tank.axis.x < wall.x + wall.sw
            ) keys.push('ArrowDown')
            if (
                this.player1Tank.axis.x <= wall.x + wall.sw &&
                this.player1Tank.axis.x > wall.x + this.player1Tank.sw &&
                this.player1Tank.axis.y < wall.y + wall.sh &&
                this.player1Tank.axis.y > wall.y - this.player1Tank.sh
            ) keys.push('ArrowLeft')
            if (
                this.player1Tank.axis.x >= wall.x - this.player1Tank.sw &&
                this.player1Tank.axis.x < wall.x + wall.sw &&
                this.player1Tank.axis.y > wall.y - this.player1Tank.sh &&
                this.player1Tank.axis.y < wall.y + wall.sh
            ) keys.push('ArrowRight')
        })
        if (
            this.player1Tank.axis.y <= 0
        ) keys.push('ArrowUp')
        if (
            this.player1Tank.axis.y >= 512
        ) keys.push('ArrowDown')
        if (
            this.player1Tank.axis.x <= 0
        ) keys.push('ArrowLeft')
        if (
            this.player1Tank.axis.x >= 800
        ) keys.push('ArrowRight')
        console.log(this.player1Tank.direction)
        return keys
    }
}
