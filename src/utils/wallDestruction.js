export default function wallDestruction (walls, collisionWidthStatic, tank) {
    if (collisionWidthStatic.length !== 0) {
        collisionWidthStatic.forEach(obj => {
            if (obj.collisionObj && obj.collisionObj.healthCounter === 1) {
                // необходимо удалить элемент из исходного массива
                walls.forEach((wall, idx) => {
                    if (wall === obj.collisionObj) {
                        walls.splice(idx, 1)
                    }
                })
            }
            else if (obj.collisionSide === 'ArrowUp') {
                obj.collisionObj.axis.y += 8
                obj.collisionObj.sh -= 8
                obj.collisionObj.frame[3] -= 8
                obj.collisionObj.frame[1] += 8
                obj.collisionObj.healthCounter -= 1
            } else if (obj.collisionSide === 'ArrowDown') {
                obj.collisionObj.sh -= 8
                obj.collisionObj.frame[3] -= 8
                obj.collisionObj.healthCounter -= 1
            } else if (obj.collisionSide === 'ArrowLeft') {
                obj.collisionObj.axis.x += 8
                obj.collisionObj.sw -= 8
                obj.collisionObj.frame[2] -= 8
                obj.collisionObj.frame[0] += 8
                obj.collisionObj.healthCounter -= 1
            } else if (obj.collisionSide === 'ArrowRight') {
                obj.collisionObj.sw -= 8
                obj.collisionObj.frame[2] -= 8
                obj.collisionObj.healthCounter -= 1
            }
        })
        tank.bullet = {}
        tank.isFire = false
    }
}