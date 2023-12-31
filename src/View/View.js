export default class View {

    constructor(canvas, ctx, sprite) {
        this.canvas = canvas
        this.context = ctx
        this.sprite = sprite
    }

    async init() {
        await this.sprite.load()

    }

    update(world) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // this.drawGrid()
        this.renderBrickWall(world.bricksWalls)
        this.renderEnemyTanksBullet(world.enemyTanks)
        this.renderBullet(world.player1Tank)
        this.renderPlayer1Tank(world.player1Tank)
        this.renderEnemyTanks(world.enemyTanks)
        this.renderTrees(world.trees)
        this.renderExplosionAnimation(world.explosions)
    }


    renderPlayer1Tank(player1Tank) {
        player1Tank.render(this.context, this.sprite)
    }

    renderEnemyTanks(enemyTanks) {
        enemyTanks.map(tank => {
            tank.model.render(this.context, this.sprite)
        })
    }
    renderEnemyTanksBullet(enemyTanks) {
        enemyTanks.forEach(tank => {
            if (tank.model.isFire) {
                tank.model.bullet.render(this.context, this.sprite)
            }
        })
    }

    renderBullet(player1Tank) {
        if (player1Tank.isFire) {
            player1Tank.bullet.render(this.context, this.sprite)
        }
    }

    renderBrickWall(bricksWalls) {
        bricksWalls.map(wall => {
            wall.render(this.context, this.sprite)
        })
    }

    renderTrees(trees) {
        trees.map(tree => {
            tree.render(this.context, this.sprite)
        })
    }

    renderExplosionAnimation(explosions) {
        const animation = (explosion, idx) => {
            if (explosion.animationFrame <= 1) {
                if (explosion.delay < 10) explosion.delay++
                else {
                    explosion.animationFrame += 1
                    explosion.delay = 0
                }
            }
            else if (explosion.delay > 10) explosions.splice(idx, 1)
            explosion.delay++
            explosion.render(this.context, this.sprite)
        }

        if (explosions.length) {
            let index = 0
            for (let explosion of explosions) {
                animation(explosion, index)
                index++
            }
        }
        // explosions.forEach((explosion, idx) => animation(explosion, idx))
        // explosions.filter(explosion => explosion.count < 10)

        // dynamicExplosions.forEach((explosion, idx) => animation(explosion, idx, dynamicExplosions))
        // dynamicExplosions.filter(explosion => explosion.count < 10)

        // explosions.push(...filteredExplosions)
        // dynamicExplosions.push(...filteredDynamicExplosions)
    }

    // Отрисовка сетки
    drawGrid() {
        const step = 32 // Шаг сетки
        this.context.beginPath()

        // Горизонтальные линии
        for (let y = 0; y < this.canvas.height; y += step) {
            this.context.moveTo(0, y)
            this.context.lineTo(this.canvas.width, y)
        }

        // Вертикальные линии
        for (let x = 0; x < this.canvas.width; x += step) {
            this.context.moveTo(x, 0)
            this.context.lineTo(x, this.canvas.height)
        }

        this.context.strokeStyle = "grey" // Цвет сетки
        this.context.stroke() // Отрисовка линий
    }

}

