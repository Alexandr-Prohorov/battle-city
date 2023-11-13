export default function controller (key, isMoving, hasCollision, entity) {
    if (isMoving) {
        switch (key) {
            case 'ArrowUp':
                entity.direction = 0
                entity.animationFrame ^=1
                if (!hasCollision.some(el => el === 'ArrowUp')) entity.axis.y -= 1
                break
            case 'ArrowRight':
                entity.direction = 6
                entity.animationFrame ^= 1
                if (!hasCollision.some(el => el === 'ArrowRight')) entity.axis.x += 1
                break
            case 'ArrowDown':
                entity.direction = 4
                entity.animationFrame ^=1
                if (!hasCollision.some(el => el === 'ArrowDown')) entity.axis.y += 1
                break
            case 'ArrowLeft':
                entity.direction = 2
                entity.animationFrame ^=1
                if (!hasCollision.some(el => el === 'ArrowLeft')) entity.axis.x -= 1
                break
            case 'Space':
                console.log('space', entity)
                entity.bullet.direction = entity.direction
                entity.fire()
                break
        }
    }
}