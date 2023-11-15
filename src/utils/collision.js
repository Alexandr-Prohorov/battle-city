export default function collision (staticArray, dynamicObj, isStatic) { // -> [{key: key, intersectionLength: null}]
    const keys = []
    const getIntersection = (staticObj, direction) => {
        // Расчет длины соприкосновения
        let intersectionLength = 0

        const dynamicBottom = dynamicObj.axis.y + dynamicObj.sh
        const dynamicTop = dynamicObj.axis.y
        const staticBottom = staticObj.axis.y + staticObj.sh
        const staticTop = staticObj.axis.y

        const dynamicRight = dynamicObj.axis.x + dynamicObj.sw
        const dynamicLeft = dynamicObj.axis.x
        const staticRight = staticObj.axis.x + staticObj.sw
        const staticLeft = staticObj.axis.x

        if (direction === 'ArrowUp' || direction === 'ArrowDown') {
            const horizontalIntersection = Math.min(dynamicRight, staticRight) - Math.max(dynamicLeft, staticLeft);
            intersectionLength = (dynamicRight - staticRight >= staticLeft - dynamicLeft) ? horizontalIntersection : -horizontalIntersection;
        } else if (direction === 'ArrowLeft' || direction === 'ArrowRight') {
            const verticalIntersection = Math.min(dynamicBottom, staticBottom) - Math.max(dynamicTop, staticTop);
            intersectionLength = (dynamicBottom - staticBottom >= staticTop - dynamicTop) ? verticalIntersection : -verticalIntersection;
        }

        return intersectionLength
    }
    staticArray.forEach(staticObj => {
        if (
            dynamicObj.axis.y <= staticObj.axis.y + staticObj.sh &&
            dynamicObj.axis.y > staticObj.axis.y - dynamicObj.sh &&
            dynamicObj.axis.x < staticObj.axis.x + staticObj.sw &&
            dynamicObj.axis.x > staticObj.axis.x - dynamicObj.sw
        ) {
            const intersection = isStatic ? getIntersection(staticObj, 'ArrowUp') : 0
            keys.push({key: 'ArrowUp', intersectionLength: intersection})
        }
        if (
            dynamicObj.axis.y >= staticObj.axis.y - dynamicObj.sh &&
            dynamicObj.axis.y < staticObj.axis.y + staticObj.sh &&
            dynamicObj.axis.x > staticObj.axis.x - dynamicObj.sw &&
            dynamicObj.axis.x < staticObj.axis.x + staticObj.sw
        ) {
            const intersection = isStatic ? getIntersection(staticObj, 'ArrowDown') : 0
            keys.push({key: 'ArrowDown', intersectionLength: intersection})
        }
        if (
            dynamicObj.axis.x <= staticObj.axis.x + staticObj.sw &&
            dynamicObj.axis.x > staticObj.axis.x &&
            dynamicObj.axis.y + dynamicObj.sh > staticObj.axis.y &&
            dynamicObj.axis.y < staticObj.axis.y + staticObj.sh
        ) {
            const intersection = isStatic ? getIntersection(staticObj, 'ArrowLeft') : 0
            keys.push({key: 'ArrowLeft', intersectionLength: intersection})
        }
        if (
            dynamicObj.axis.x >= staticObj.axis.x - dynamicObj.sw &&
            dynamicObj.axis.x < staticObj.axis.x + staticObj.sw &&
            dynamicObj.axis.y > staticObj.axis.y - dynamicObj.sh &&
            dynamicObj.axis.y < staticObj.axis.y + staticObj.sh
        ) {
            const intersection = isStatic ? getIntersection(staticObj, 'ArrowRight') : 0
            keys.push({key: 'ArrowRight', intersectionLength: intersection})
        }
    })
    if (
        dynamicObj.axis.y <= 0
    ) keys.push({key: 'ArrowUp'})
    if (
        dynamicObj.axis.y >= 512 - dynamicObj.sh
    ) keys.push({key: 'ArrowDown'})
    if (
        dynamicObj.axis.x <= 0
    ) keys.push({key: 'ArrowLeft'})
    if (
        dynamicObj.axis.x >= 800 - dynamicObj.sw
    ) keys.push({key: 'ArrowRight'})
    return keys
}
