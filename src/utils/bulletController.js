export default function bulletController (direction, hasCollision, entity) {
    switch (direction) {
        case 0:
        case 1:
            if (hasCollision.length === 0) {
                entity.axis.y -= 4
            }
            break
        case 2:
        case 3:
            if (hasCollision.length === 0) {
                entity.axis.x -= 4
            }
            break
        case 4:
        case 5:
            if (hasCollision.length === 0) {
                entity.axis.y += 4
            }
            break
        case 6:
        case 7:
            if (hasCollision.length === 0) {
                entity.axis.x += 4
            }
            break
    }
}