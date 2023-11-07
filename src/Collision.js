export default class Collision {

    constructor({player1Tank, bricksWalls}) {
        this.player1Tank = player1Tank
        this.bricksWalls = bricksWalls
    }

    get hasCollision() {
        const keys = []
        this.bricksWalls.forEach(wall => {
            if (
                this.player1Tank.axis.y <= wall.axis.y + wall.sh &&
                this.player1Tank.axis.y > wall.axis.y - this.player1Tank.sh &&
                this.player1Tank.axis.x < wall.axis.x + wall.sw &&
                this.player1Tank.axis.x > wall.axis.x - this.player1Tank.sw
            ) keys.push('ArrowUp')
            if (
                this.player1Tank.axis.y >= wall.axis.y - this.player1Tank.sh &&
                this.player1Tank.axis.y < wall.axis.y + wall.sh &&
                this.player1Tank.axis.x > wall.axis.x - this.player1Tank.sw &&
                this.player1Tank.axis.x < wall.axis.x + wall.sw
            ) keys.push('ArrowDown')
            if (
                this.player1Tank.axis.x <= wall.axis.x + wall.sw &&
                this.player1Tank.axis.x > wall.axis.x + this.player1Tank.sw &&
                this.player1Tank.axis.y < wall.axis.y + wall.sh &&
                this.player1Tank.axis.y > wall.axis.y - this.player1Tank.sh
            ) keys.push('ArrowLeft')
            if (
                this.player1Tank.axis.x >= wall.axis.x - this.player1Tank.sw &&
                this.player1Tank.axis.x < wall.axis.x + wall.sw &&
                this.player1Tank.axis.y > wall.axis.y - this.player1Tank.sh &&
                this.player1Tank.axis.y < wall.axis.y + wall.sh
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
        return keys
    }
}
