class Projectile {
    constructor(x, y, radius, color, speed, wps) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.speed = speed
        this.wps = wps

    }
    draw (){
        ctx.beginPath(); //specifies we wanna start drawing on the scene
        ctx.arc(this.x, this.y, this.radius*2, 0, Math.PI*2, false)
        ctx.fillStyle = this.color
        ctx.globalAlpha = 1
        ctx.fill()
    }

    update(){
        this.draw()
        this.x += this.speed.x
        this.y += this.speed.y
    }

}