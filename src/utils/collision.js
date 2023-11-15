export default function collision (staticArray, dynamicObj) {
        const keys = []
        staticArray.forEach(staticObj => {
            if (
                dynamicObj.axis.y <= staticObj.axis.y + staticObj.sh &&
                dynamicObj.axis.y > staticObj.axis.y - dynamicObj.sh &&
                dynamicObj.axis.x < staticObj.axis.x + staticObj.sw &&
                dynamicObj.axis.x > staticObj.axis.x - dynamicObj.sw
            ) keys.push('ArrowUp')
            if (
                dynamicObj.axis.y >= staticObj.axis.y - dynamicObj.sh &&
                dynamicObj.axis.y < staticObj.axis.y + staticObj.sh &&
                dynamicObj.axis.x > staticObj.axis.x - dynamicObj.sw &&
                dynamicObj.axis.x < staticObj.axis.x + staticObj.sw
            ) keys.push('ArrowDown')
            if (
                dynamicObj.axis.x <= staticObj.axis.x + staticObj.sw &&
                dynamicObj.axis.x >= staticObj.axis.x + dynamicObj.sw &&
                dynamicObj.axis.y < staticObj.axis.y + staticObj.sh &&
                dynamicObj.axis.y > staticObj.axis.y - dynamicObj.sh
            ) keys.push('ArrowLeft')
            if (
                dynamicObj.axis.x >= staticObj.axis.x - dynamicObj.sw &&
                dynamicObj.axis.x < staticObj.axis.x + staticObj.sw &&
                dynamicObj.axis.y > staticObj.axis.y - dynamicObj.sh &&
                dynamicObj.axis.y < staticObj.axis.y + staticObj.sh
            ) keys.push('ArrowRight')
        })
        if (
            dynamicObj.axis.y <= 0
        ) keys.push('ArrowUp')
        if (
            dynamicObj.axis.y >= 512 - dynamicObj.sh
        ) keys.push('ArrowDown')
        if (
            dynamicObj.axis.x <= 0
        ) keys.push('ArrowLeft')
        if (
            dynamicObj.axis.x >= 800 - dynamicObj.sw
        ) keys.push('ArrowRight')
        return keys
}
