export default [
    {
        name: 'Level 1',
        // enemyTanks: [
        //     {
        //         x: 32 * 1,
        //         y: 32 * 10,
        //         sh: 32,
        //         sw: 32,
        //         frames: [
        //             [32 + 32 * 7, 0, 32, 32], // Первый кадр
        //             [32 + 32 * 8, 0, 32, 32], // Второй кадр
        //             [32 + 32 * 9, 0, 32, 32], // Третий кадр
        //             [32 + 32 * 10, 0, 32, 32], // Четвёртый кадр
        //             [32 + 32 * 11, 0, 32, 32], // Пятый кадр
        //             [32 + 32 * 12, 0, 32, 32], // Шестой кадр
        //             [32 + 32 * 13, 0, 32, 32], // Седьмой кадр
        //             [32 + 32 * 14, 0, 32, 32], // Восьмой кадр
        //         ]
        //     },
        //     {
        //         x: 32 * 2,
        //         y: 32 * 10,
        //         sh: 32,
        //         sw: 32,
        //         frames: [
        //             [32 + 32 * 7, 32, 32, 32], // Первый кадр
        //             [32 + 32 * 8, 32, 32, 32], // Второй кадр
        //             [32 + 32 * 9, 32, 32, 32], // Третий кадр
        //             [32 + 32 * 10, 32, 32, 32], // Четвёртый кадр
        //             [32 + 32 * 11, 32, 32, 32], // Пятый кадр
        //             [32 + 32 * 12, 32, 32, 32], // Шестой кадр
        //             [32 + 32 * 13, 32, 32, 32], // Седьмой кадр
        //             [32 + 32 * 14, 32, 32, 32], // Восьмой кадр
        //         ]
        //     },
        //     {
        //         x: 32 * 3,
        //         y: 32 * 10,
        //         sh: 32,
        //         sw: 32,
        //         frames: [
        //             [32 + 32 * 7, 32, 32, 32], // Первый кадр
        //             [32 + 32 * 8, 32, 32, 32], // Второй кадр
        //             [32 + 32 * 9, 32, 32, 32], // Третий кадр
        //             [32 + 32 * 10, 32, 32, 32], // Четвёртый кадр
        //             [32 + 32 * 11, 32, 32, 32], // Пятый кадр
        //             [32 + 32 * 12, 32, 32, 32], // Шестой кадр
        //             [32 + 32 * 13, 32, 32, 32], // Седьмой кадр
        //             [32 + 32 * 14, 32, 32, 32], // Восьмой кадр
        //         ]
        //     },
        //     {
        //         x: 32 * 4,
        //         y: 32 * 10,
        //         sh: 32,
        //         sw: 32,
        //         frames: [
        //             [32 + 32 * 7, 0, 32, 32], // Первый кадр
        //             [32 + 32 * 8, 0, 32, 32], // Второй кадр
        //             [32 + 32 * 9, 0, 32, 32], // Третий кадр
        //             [32 + 32 * 10, 0, 32, 32], // Четвёртый кадр
        //             [32 + 32 * 11, 0, 32, 32], // Пятый кадр
        //             [32 + 32 * 12, 0, 32, 32], // Шестой кадр
        //             [32 + 32 * 13, 0, 32, 32], // Седьмой кадр
        //             [32 + 32 * 14, 0, 32, 32], // Восьмой кадр
        //         ]
        //     },
        //     {
        //         x: 32 * 5,
        //         y: 32 * 10,
        //         sh: 32,
        //         sw: 32,
        //         frames: [
        //             [32 + 32 * 7, 0, 32, 32], // Первый кадр
        //             [32 + 32 * 8, 0, 32, 32], // Второй кадр
        //             [32 + 32 * 9, 0, 32, 32], // Третий кадр
        //             [32 + 32 * 10, 0, 32, 32], // Четвёртый кадр
        //             [32 + 32 * 11, 0, 32, 32], // Пятый кадр
        //             [32 + 32 * 12, 0, 32, 32], // Шестой кадр
        //             [32 + 32 * 13, 0, 32, 32], // Седьмой кадр
        //             [32 + 32 * 14, 0, 32, 32], // Восьмой кадр
        //         ]
        //     },
        //     {
        //         x: 32 * 6,
        //         y: 32 * 10,
        //         sh: 32,
        //         sw: 32,
        //         frames: [
        //             [32 + 32 * 7, 0, 32, 32], // Первый кадр
        //             [32 + 32 * 8, 0, 32, 32], // Второй кадр
        //             [32 + 32 * 9, 0, 32, 32], // Третий кадр
        //             [32 + 32 * 10, 0, 32, 32], // Четвёртый кадр
        //             [32 + 32 * 11, 0, 32, 32], // Пятый кадр
        //             [32 + 32 * 12, 0, 32, 32], // Шестой кадр
        //             [32 + 32 * 13, 0, 32, 32], // Седьмой кадр
        //             [32 + 32 * 14, 0, 32, 32], // Восьмой кадр
        //         ]
        //     },
        // ],
        enemyTanks: [],
        trees: [
            // {x: 32 * 6, y: 32 * 6, sh: 32, sw: 32, frame: [32 * 17, 32 * 2, 32, 32]},
            {x: 32 * 7, y: 32 * 6, sh: 32, sw: 32, frame: [32 * 17, 32 * 2, 32, 32]},
            {x: 32 * 8, y: 32 * 6, sh: 32, sw: 32, frame: [32 * 17, 32 * 2, 32, 32]},
            {x: 32 * 6, y: 32 * 7, sh: 32, sw: 32, frame: [32 * 17, 32 * 2, 32, 32]},
            {x: 32 * 7, y: 32 * 7, sh: 32, sw: 32, frame: [32 * 17, 32 * 2, 32, 32]},
            {x: 32 * 8, y: 32 * 7, sh: 32, sw: 32, frame: [32 * 17, 32 * 2, 32, 32]},
        ],
        player1Tank: {
            x: 195,
            y: 195,
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
        },
        bricksWalls: [
            // Левый столбик (вертикальный)
            {x: 32 * 5, y: 32},    // Уже существующий блок
            {x: 32 * 5, y: 32 * 2}, // Уже существующий блок
            {x: 32 * 5, y: 32 * 3}, // Уже существующий блок
            {x: 32 * 5, y: 32 * 4}, // Уже существующий блок
            {x: 32 * 5, y: 32 * 5}, // Уже существующий блок

            // Правый столбик (вертикальный)
            {x: 32 * 6, y: 32},    // Уже существующий блок
            {x: 32 * 6, y: 32 * 2}, // Уже существующий блок
            {x: 32 * 6, y: 32 * 3}, // Уже существующий блок
            {x: 32 * 6, y: 32 * 4}, // Уже существующий блок
            {x: 32 * 6, y: 32 * 5}, // Уже существующий блок

            // Верхняя сторона (горизонтальная)
            {x: 32 * 7, y: 32},    // Дополнительный блок
            {x: 32 * 4, y: 32},    // Дополнительный блок

            // Нижняя сторона (горизонтальная)
            {x: 32 * 7, y: 32 * 5}, // Дополнительный блок
            {x: 32 * 4, y: 32 * 5}  // Дополнительный блок
        ]
    }
];