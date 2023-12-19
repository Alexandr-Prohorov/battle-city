export default class TankShield {
    constructor(axis, delay) {
        this.axis = {
            x: axis.x,
            y: axis.y
        }
        this.delay = delay
    }

    animationFrame = 0
    countDelay = 0

    sh = 32
    sw = 32
    frames = [
        [32 * 16, 32 * 9, 32, 32],
        [32 * 17, 32 * 9, 32, 32]
    ]


    get frame() {
        return this.frames[this.animationFrame]
    }

    render(context, sprite) {
        let _frame = this.frame
        context.drawImage(
            sprite.image,
            _frame[0], _frame[1], _frame[2], _frame[3],
            this.axis.x, this.axis.y, this.sw, this.sh
        )
    }
}