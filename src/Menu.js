import Tank from './Models/Tank.js'

import menuPointerController from './utils/menuPointerController.js'

export default class Menu {
    pointer = null
    gameModes = []
    header = {}
    footer = {}
    score = {}
    selectedModeIndex = 0
    savedData = {}


    async init(menuData) {
        this.generateEntities(menuData)
    }

    getSessionData() {
        this.savedData = JSON.parse(sessionStorage.getItem('myGame'))
    }

    update(key) {
        this.pointerController(key)
        this.getSessionData()
    }

    pointerController(key) {
        this.selectedModeIndex = menuPointerController(key, this.pointer, this.gameModes, this.selectedModeIndex)
    }

    generateEntities(menuData) {
        this.pointer = new Tank(menuData.tankPointer)
        this.gameModes = menuData.gameModes
        this.header = menuData.header
        this.footer = menuData.footer
        this.score = menuData.score
    }


}