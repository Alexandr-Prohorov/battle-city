export default class ExplosionAnimation {
    constructor({x, y}) {
        this.x = x - 14
        this.y = y - 14
    }

    animationFrame = 0
    delay = 0

    sh = 32
    sw = 32
    frames = [
        [32 * 16, 32 * 8, 32, 32],
        [32 * 17, 32 * 8, 32, 32],
        [32 * 18, 32 * 8, 32, 32]
    ]

    get frame() {
        return this.frames[this.animationFrame]
    }

    render(context, sprite) {
        let _frame = this.frame
        context.drawImage(
            sprite.image,
            _frame[0], _frame[1], _frame[2], _frame[3],
            this.x, this.y, this.sw, this.sh
        )
    }
}