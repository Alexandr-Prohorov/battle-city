import {CONTEXT_FONT_12} from '../globals.js'
export default class StageStart {
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.context = ctx
    }

    update(header) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.context.fillStyle = 'gray'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.font = CONTEXT_FONT_12 // Размер и шрифт текста
        this.context.textAlign = 'left' // Выравнивание текста по центру
        this.context.fillStyle = 'black'

        const centerX =  this.context.canvas.width / 2.15
        const centerY =  this.context.canvas.height / 2.15

        this.context.fillText(header, centerX, centerY)
    }
}
