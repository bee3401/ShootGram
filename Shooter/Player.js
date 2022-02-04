

class Player {
    constructor(x, y, radius, color, wps) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.wps = wps
    }

    draw (){
        ctx.beginPath(); //specifies we wanna start drawing on the scene
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle = this.color
        ctx.globalAlpha = 1
        ctx.fill()
        ctx.fillStyle = 'black'
        ctx.font = "15px Arial"
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        if (this.wps == 0) ctx.fillText('B', this.x, this.y)
        else ctx.fillText('V', this.x, this.y)
    }
}