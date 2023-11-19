export default class Bullet {
    constructor(positionX, positionY, direction) {
        this.axis = {
            x: positionX + 12,
            y: positionY + 12
        }
        this.direction = direction
    }
    sh = 8
    sw = 8
    speed = 0
    active = false
    frames = [
        [646, 204, 6, 8],
        [646, 204, 6, 8],
        [660, 204, 8, 6],
        [660, 204, 8, 6],
        [678, 204, 6, 8],
        [678, 204, 6, 8],
        [692, 204, 8, 6],
        [692, 204, 8, 6]
    ]

    get frame() {
        return this.frames[this.direction]
    }

    render(context, sprite) {
        let _frame = this.frame
        context.drawImage(
            sprite.image,
            _frame[0], _frame[1], _frame[2], _frame[3],
            this.axis.x, this.axis.y, _frame[2], _frame[3]
        )
    }
}