export default class CreateTankAnimation {
    constructor(axis) {
        this.axis = {
            x: axis.x,
            y: axis.y
        }
    }

    animationFrame = 0
    delay = 0
    count = 0
    sh = 32
    sw = 32
    frames = [
        [32 * 16, 32 * 6, 32, 32],
        [32 * 17, 32 * 6, 32, 32],
        [32 * 18, 32 * 6, 32, 32],
        [32 * 19, 32 * 6, 32, 32]
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