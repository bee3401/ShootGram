class Particle {
    constructor(x, y, radius, color, speed) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color  = color
        this.speed  = speed
        this.lifeTime = 1
        this.friction = 0.99
    }

    draw (){
        ctx.save()
        ctx.beginPath(); //specifies we wanna start drawing on the scene
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.lifeTime
        ctx.fill()
        ctx.restore()
    }

    update(){
        this.draw()
        this.speed.x *= this.friction
        this.speed.y *= this.friction
        this.x += this.speed.x
        this.y += this.speed.y
        this.lifeTime -=0.01
    }
}