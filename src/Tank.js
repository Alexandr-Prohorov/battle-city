import Bullet from './Bullet.js'
export default class Tank {
    constructor(entity) {
        this.axis = {
            x: entity.x,
            y: entity.y
        }
        this.frames = entity.frames
    }
    direction = 0
    sh = 26
    sw = 26
    animationFrame = 0
    isFire = false
    // bullet = new Bullet(this.axis.x, this.axis.y)

    get frame() {
        return this.frames[this.direction + this.animationFrame]
    }

    fire() {
        this.bullet.x = this.axis.x
        this.bullet.y = this.axis.y
        this.isFire = true
    }

    render(context, sprite) {
        let _frame = this.frame
        context.drawImage(
            sprite.image,
            _frame[0], _frame[1], _frame[2], _frame[3],
            this.axis.x, this.axis.y, 26, 26
        )
    }

}