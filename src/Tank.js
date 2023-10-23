import Bullet from './Bullet.js'
export default class Tank {
    direction = 0
    axis = {
        x: 170,
        y: 170
    }
    animationFrame = 0
    isFire = false
    bullet = new Bullet(this.axis.x, this.axis.y)

    frames = [
        [2, 4, 26, 26],
        [34, 4, 26, 26],
        [68, 2, 26, 26],
        [100, 2, 26, 26],
        [130, 2, 26, 26],
        [162, 2, 26, 26],
        [194, 2, 26, 26],
        [226, 2, 26, 26]
    ]

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