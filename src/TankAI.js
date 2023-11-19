import controller from './utils/controller.js';
export default class TankAI {
    constructor(tank) {
        this.model = tank
        this.axis = tank.axis
        this.direction = tank.direction
        this.sh = tank.sh
        this.sw = tank.sw
    }


    key = ''
    lastDirection = null
    moveCounter = 0

    decideMove() {
        // Уменьшаем счетчик движения на случайную величину для добавления непредсказуемости
        if (this.moveCounter > 0) {
            this.moveCounter -= Math.floor(Math.random() * 10);
        }

        // Если счетчик движения истек, выбираем новое направление
        if (this.moveCounter <= 0) {
            const directionChoice = Math.random();
            // Выбираем направление с вероятностью 80% продолжить текущее направление
            if (directionChoice < 0.8 && this.lastDirection !== null) {
                this.key = this.lastDirection;
            } else {
                // Случайный выбор нового направления
                const direction = Math.floor(Math.random() * 5);
                switch (direction) {
                    case 0:
                        this.key = 'ArrowUp';
                        break;
                    case 1:
                        this.key = 'ArrowDown';
                        break;
                    case 2:
                        this.key = 'ArrowLeft';
                        break;
                    case 3:
                        this.key = 'ArrowRight';
                        break;
                    case 4:
                        this.key = 'Space';
                        break;
                }
                this.lastDirection = this.key;
            }
            // Сброс счетчика движения
            this.moveCounter = Math.floor(Math.random() * 50) + 10; // Рандомное число от 10 до 59
        }
    }

    decideShoot() {
        // Решение о стрельбе
    }

    update() {
        // Обновление состояния ИИ каждый игровой тик
        this.decideMove();
        this.decideShoot();
    }
}