import Sprite from '../Sprite.js'
import {CONTEXT_FONT_12, SUBTITLE, TITLE, TITLE_FONT} from '../globals.js'

export default class MainMenuView {
    constructor(canvas, ctx, sprite) {
        this.canvas = canvas
        this.context = ctx
        this.sprite = sprite
    }

    startAnimationY = 512
    animationSpeed = 1

    async init() {
        await this.sprite.load()
    }


    update(menu) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.renderScore(menu.score)
        this.renderTitle(menu.header)
        this.renderFooter(menu.footer)
        this.renderGameMode(menu.gameModes)
        this.startAnimationY ? this.startAnimationY -= 1 : this.tankPointer(menu.pointer)
        // if (this.startAnimationY) this.startAnimationY -= 1
    }

    renderText(textObject, additionalY = 0, withStroke = false) {
        const yPosition = additionalY + textObject.y;

        if (withStroke) {
            this.context.strokeText(textObject.text, textObject.x, yPosition);
        }
        this.context.fillText(textObject.text, textObject.x + 1, yPosition);
    }

    renderTitle(header) {
        this.context.font = header.font;
        this.context.fillStyle = header.fillStyle;
        this.context.strokeStyle = header.strokeStyle
        this.context.lineWidth = header.lineWidth;

        const additionalY = this.startAnimationY > 0 ? this.startAnimationY : 0
        this.renderText(header.title, additionalY, true)
        this.renderText(header.subtitle, additionalY, true)
    }

    renderFooter(footer) {
        this.context.font = footer.font
        this.context.textAlign = footer.textAlign
        this.context.fillStyle = footer.fillStyle

        const additionalY = this.startAnimationY > 0 ? this.startAnimationY : 0
        this.renderText(footer.dev, additionalY, false)
        this.renderText(footer.rights, additionalY, false)

    }

    renderGameMode(modes) {
        modes.forEach(mode => {
            this.context.font = CONTEXT_FONT_12 // Размер и шрифт текста
            this.context.textAlign = 'left' // Выравнивание текста по центру
            this.context.fillStyle = 'white'

            const additionalY = this.startAnimationY > 0 ? this.startAnimationY : 0
            this.renderText(mode, additionalY, false)
        })
    }

    renderScore() {
        this.context.font = CONTEXT_FONT_12 // Размер и шрифт текста
        this.context.textAlign = 'left' // Выравнивание текста по центру
        this.context.fillStyle = 'white'
        this.context.lineWidth = 3
        // вынести в отдельную функцию наверное
        const savedData = JSON.parse(sessionStorage.getItem('myGame'))

        const objLevel = {
            text: `I—        0${savedData.level}`,
            x: 180,
            y: 35
        }
        const objScore = {
            text: `HI—   ${savedData.score}`,
            x: 330,
            y: 35
        }
        const additionalY = this.startAnimationY > 0 ? this.startAnimationY : 0
        this.renderText(objLevel, additionalY, false)
        this.renderText(objScore, additionalY, false)
    }

    tankPointer(pointer) {
        pointer.render(this.context, this.sprite)
    }
}