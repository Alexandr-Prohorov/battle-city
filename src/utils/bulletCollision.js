export default function bulletCollision (arrayObjects, bullet) { // -> [{key: key, collisionObj: obj}]
    const keys = []
    arrayObjects.forEach(obj => {
        if (
            bullet.axis.x + bullet.sw > obj.axis.x && // Правый край пули >= Левому краю объекта
            bullet.axis.x < obj.axis.x + obj.sw && // Левый край пули <= Правому краю объекта
            bullet.axis.y < obj.axis.y + obj.sh && // Верхний край пули <= Нижнему краю объекта
            bullet.axis.y + bullet.sh > obj.axis.y // Нижний край пули >= Верхнему краю объекта
        ) {
            // Определение, с какой стороны произошло столкновение
            let deltaX = Math.min(obj.axis.x + obj.sw - bullet.axis.x, bullet.axis.x + bullet.sw - obj.axis.x)
            let deltaY = Math.min(obj.axis.y + obj.sh - bullet.axis.y, bullet.axis.y + bullet.sh - obj.axis.y)

            if (deltaX < deltaY) {
                // Столкновение с боковой стороной
                let side = bullet.axis.x < obj.axis.x ? 'ArrowLeft' : 'ArrowRight'
                keys.push({ collisionSide: side, collisionObj: obj, collisionAxis: bullet.axis })
            } else {
                // Столкновение с верхней или нижней стороной
                let side = bullet.axis.y < obj.axis.y ? 'ArrowUp' : 'ArrowDown'
                keys.push({ collisionSide: side, collisionObj: obj, collisionAxis: bullet.axis })
            }
            // todo: добавить условие для deltaX === deltaY
        }
    })
    if (
        bullet.axis.y <= 0
    ) keys.push({key: 'ArrowUp', collisionAxis: bullet.axis})
    if (
        bullet.axis.y >= 512 - bullet.sh
    ) keys.push({key: 'ArrowDown', collisionAxis: bullet.axis})
    if (
        bullet.axis.x <= 0
    ) keys.push({key: 'ArrowLeft', collisionAxis: bullet.axis})
    if (
        bullet.axis.x >= 800 - bullet.sw
    ) keys.push({key: 'ArrowRight', collisionAxis: bullet.axis})
    return keys
}
