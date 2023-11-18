export default class BrickWall {

    constructor(entity) {
        this.axis = {
            x: entity.x,
            y: entity.y
        }
        this.sh = entity.sh
        this.sw = entity.sw
        this.frame = entity.frame
    }
    healthCounter = 2

    render(context, sprite) {
        context.drawImage(
            sprite.image,
            this.frame[0], this.frame[1], this.frame[2], this.frame[3],
            this.axis.x, this.axis.y, this.sw, this.sh
        )
    }
}