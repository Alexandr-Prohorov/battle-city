import ExplosionAnimation from '../Animations/ExplosionAnimation.js'
// import TankExplosionAnimation from '../Models/TankExplosionAnimation.js'

export default function createExplosionAnimation (array) {

    const result = []

    if (array.length)
        array.forEach(explosion => {
            result.push(new ExplosionAnimation(explosion.collisionAxis))
        })


    return result

}