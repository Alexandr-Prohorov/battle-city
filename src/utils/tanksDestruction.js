import createExplosionAnimation from '../utils/createExplosionAnimation.js'
export default function tanksDestruction (tanks, collisionWidthDynamic, tank, gameData) {
    if (collisionWidthDynamic.length !== 0) {
        collisionWidthDynamic.forEach(obj => {
            if (obj.collisionSide) {
                obj.collisionObj.healthCounter  -= 1
            }
            if (obj.collisionObj && obj.collisionObj.healthCounter === 0) {
                // необходимо удалить элемент из исходного массива
                tanks.forEach((tank, idx) => {
                    if (tank === obj.collisionObj) {
                        tanks.splice(idx, 1)
                        // в зависимости от уровня танка прибавляется количество очков
                        gameData.score += 100
                    }
                })
                // createExplosionAnimation(obj.collisionObj.axis.x, obj.collisionObj.axis.y)
            }

        })
        // переделать
        if (tank.model) {
            tank.model.bullet = {}
            tank.model.isFire = false
        } else {
            tank.bullet = {}
            tank.isFire = false
        }
    }
}