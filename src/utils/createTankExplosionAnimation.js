import TankExplosionAnimation from '../Animations/TankExplosionAnimation.js'

export default function createExplosionAnimation (array) {

    const result = []

    if (array.length)
        array.forEach(explosion => {
            if (explosion.collisionObj) result.push(new TankExplosionAnimation(explosion.collisionAxis))
        })


    return result

}