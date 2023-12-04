import {WALL_HEIGHT, WALL_WIDTH} from '../globals.js'
export default function generateLevel (levels) {
    const newBricksWalls = []
    levels[0].bricksWalls.map(wall => {
        newBricksWalls.push(
            { x: wall.x, y: wall.y, sh: WALL_HEIGHT, sw: WALL_WIDTH, frame: [512, 0, WALL_WIDTH, WALL_HEIGHT] },
            { x: wall.x + WALL_WIDTH, y: wall.y, sh: WALL_HEIGHT, sw: WALL_WIDTH, frame: [512 + WALL_WIDTH, 0, WALL_WIDTH, WALL_HEIGHT] },
            { x: wall.x, y: wall.y + WALL_HEIGHT, sh: WALL_HEIGHT, sw: WALL_WIDTH, frame: [512, 0 + WALL_HEIGHT, WALL_WIDTH, WALL_HEIGHT] },
            { x: wall.x + WALL_WIDTH, y: wall.y + WALL_HEIGHT, sh: WALL_HEIGHT, sw: WALL_WIDTH, frame: [512 + WALL_WIDTH, 0 + WALL_HEIGHT, WALL_WIDTH, WALL_HEIGHT] }
        )
    })
    levels[0].bricksWalls = newBricksWalls
}