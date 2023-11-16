export default class Tree {
    constructor(entity) {
        this.axis = {
            x: entity.x,
            y: entity.y
        }
        this.sh = entity.sh
        this.sw = entity.sw
        this.frame = entity.frame
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