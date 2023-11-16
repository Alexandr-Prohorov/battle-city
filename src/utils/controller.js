export default function controller (key, isMoving, hasCollision, entity) {
    let collision = hasCollision.filter(el => el.key === key);
    if (isMoving) {
        switch (key) {
            case 'ArrowUp':
                entity.direction = 0
                entity.animationFrame ^=1

                if (collision.length === 0) {
                    entity.axis.y -= 1
                } else if (collision.length === 1 && Math.abs(collision[0].intersectionLength) <= 8) {
                    entity.axis.x += collision[0].intersectionLength;
                }
                break
            case 'ArrowRight':
                entity.direction = 6
                entity.animationFrame ^= 1
                if (collision.length === 0) {
                    entity.axis.x += 1
                } else if (collision.length === 1 && Math.abs(collision[0].intersectionLength) <= 8) {
                    entity.axis.y += collision[0].intersectionLength;
                }
                break
            case 'ArrowDown':
                entity.direction = 4
                entity.animationFrame ^=1
                if (collision.length === 0) {
                    entity.axis.y += 1
                } else if (collision.length === 1 && Math.abs(collision[0].intersectionLength) <= 8) {
                    entity.axis.x += collision[0].intersectionLength;
                }
                break
            case 'ArrowLeft':
                entity.direction = 2
                entity.animationFrame ^=1
                if (collision.length === 0) {
                    entity.axis.x -= 1
                } else if (collision.length === 1 && Math.abs(collision[0].intersectionLength) <= 8) {
                    entity.axis.y += collision[0].intersectionLength;
                }
                break
            case 'Space':
                console.log('space', entity)
                entity.fire()
                break
        }
    }
}