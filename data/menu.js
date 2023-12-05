import {CONTEXT_FONT_12, TITLE_FONT} from '../src/globals.js'

export default {
    header: {
        title: {
            text: 'Battle',
            x: 200,
            y: 130
        },
        subtitle: {
            text: 'City',
            x: 270,
            y: 230
        },
        font: TITLE_FONT,
        fillStyle: 'red',
        strokeStyle: 'white',
        lineWidth: 3
    },
    footer: {
        dev: {
            text: '\u00A9  2023  ALEXANDR - PROKHOROV',
            x: 280,
            y: 430
        },
        rights: {
            text: 'ALL RIGHTS RESERVED',
            x: 320,
            y: 460
        },
        font: CONTEXT_FONT_12,
        textAlign: 'left',
        fillStyle: 'white',
        lineWidth: 3
    },
    subFooter: {

    },
    score: {
        font: CONTEXT_FONT_12,
        textAlign: 'left',
        fillStyle: 'white',
        lineWidth: 3
    },
    gameModes: [
        {
            text: '1 PLAYER',
            x: 380,
            y: 300
        },
        {
            text: '2 PLAYERS',
            x: 380,
            y: 330
        }
    ],
    tankPointer: {
        x: 0,
        y: 0,
        sh: 32,
        sw: 32,
        frames: [
            [0, 0, 32, 32],
            [32, 0, 32, 32],
            [32 + 32 * 1, 0, 32, 32],
            [32 + 32 * 2, 0, 32, 32],
            [32 + 32 * 3, 0, 32, 32],
            [32 + 32 * 4, 0, 32, 32],
            [32 + 32 * 5, 0, 32, 32],
            [32 + 32 * 6, 0, 32, 32]
        ]
    }
}