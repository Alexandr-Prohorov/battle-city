import Game from './src/Game.js'
import View from './src/View/View.js'
import World from './src/World.js'
import Menu from './src/Menu.js'
import StageStart from './src/View/StageStart.js'
import Sprite from './src/Sprite.js'
import MainMenuView from './src/View/MainMenuView.js'

import levels from './data/levels.js'
import menuData from './data/menu.js'
import generateLevel from './src/utils/generateLevel.js'

const canvas = document.querySelector('canvas')
const sprite = new Sprite('./assets/sprite.png')

const ctx = canvas.getContext('2d')
ctx.font = '12px Pixel'


generateLevel(levels)

const game = new Game({
    menu: new Menu(),
    menuView: new MainMenuView(canvas, ctx, sprite),
    stageStart: new StageStart(canvas, ctx),
    world: new World(),
    view: new View(canvas, ctx, sprite),
    menuData,
    levels
})

game.init().then(() => {
    game.start()
})