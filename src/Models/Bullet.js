export default class Bullet {
    constructor(positionX, positionY) {
        this.x = positionX

        this.y = positionY
    }
    speed = 0
    direction = 0

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
        switch (this.direction) {
            case 0:
            case 1:
                this.y -= this.speed;
                context.drawImage(
                    sprite.image,
                    _frame[0], _frame[1], _frame[2], _frame[3],
                    this.x + 10, this.y--, 6, 8
                )
                break
            case 2:
            case 3:
                this.x -= this.speed;
                context.drawImage(
                    sprite.image,
                    _frame[0], _frame[1], _frame[2], _frame[3],
                    this.x--, this.y + 10, 8, 6
                )
                break
            case 4:
            case 5:
                this.y += this.speed;
                context.drawImage(
                    sprite.image,
                    _frame[0], _frame[1], _frame[2], _frame[3],
                    this.x + 10, this.y++, 6, 8
                )
                break
            case 6:
            case 7:
                this.x += this.speed;
                context.drawImage(
                    sprite.image,
                    _frame[0], _frame[1], _frame[2], _frame[3],
                    this.x++, this.y + 10, 8, 6
                )
                break
        }
    }
}