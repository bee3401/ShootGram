class Enemy {
    constructor(x, y, radius, color, speed, word, wps) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color  = color
        this.speed  = speed
        this.word   = word
        this.wps    = wps
    }

    draw (){
        ctx.beginPath(); //specifies we wanna start drawing on the scene
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle = this.color
        ctx.globalAlpha = 1
        ctx.fill()
        ctx.fillStyle = 'white'
        ctx.font = '20px Arial'
        ctx.textAlign = 'center'
        if (Math.random() > 0.5) ctx.fillText(this.word, this.x, this.y, this.radius)

        else ctx.fillText(this.word, this.x, this.y, this.radius)


    }

    update(){
        this.draw()
        this.x += this.speed.x
        this.y += this.speed.y
    }
}