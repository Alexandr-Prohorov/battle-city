export default function menuPointerController (key, pointer, modes, modeIndex) {
    pointer.direction = 6
    pointer.animationFrame ^= 1
    switch (key) {
        case 'ArrowUp':
            if (modeIndex > 0) {
                modeIndex -= 1
            }
            break
        case 'ArrowDown':
            if (modeIndex < modes.length - 1 && modeIndex < modeIndex + 1) {
                modeIndex += 1
            }
            break
    }

    pointer.axis.x = modes[modeIndex].x - 50
    pointer.axis.y = modes[modeIndex].y - 20

    return modeIndex
}