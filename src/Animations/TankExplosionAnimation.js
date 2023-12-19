export default class TankExplosionAnimation {
    constructor({x, y}) {
        this.x = x - 30
        this.y = y - 30
    }

    animationFrame = 0
    count = 0

    sh = 64
    sw = 64
    frames = [
        [32 * 19, 32 * 8, 64, 64],
        [32 * 21, 32 * 8, 64, 64],
        [32 * 19, 32 * 8, 64, 64]
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