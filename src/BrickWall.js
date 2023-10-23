export default class BrickWall {

    constructor(entity) {
        this.axis = {
            x: entity.x,
            y: entity.y
        }
    }
    frame  = [512, 0, 32, 32]

    render(context, sprite) {
        let _frame = this.frame
        context.drawImage(
            sprite.image,
            _frame[0], _frame[1], _frame[2], _frame[3],
            this.axis.x, this.axis.y, 32, 32
        )
    }
}