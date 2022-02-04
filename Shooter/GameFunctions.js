function init() {
    player = new Player(x, y, 20, 'white', 0)
    projectiles = []
    enemies = []
    particles = []
    wpSwitch = 0
    sc = 0
    scoreEl.innerHTML = sc
}

function outOfSight(p) {
    return (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height)
}

function animate(){
    animationId = requestAnimationFrame(animate)
    ctx.fillStyle = 'rgb(173, 110, 235)'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    player.draw()

    projectiles.forEach((p, index)=> {
        if (outOfSight(p)){
            setTimeout(() =>{
                projectiles.splice(index, 1)
            }, 0)
        }
        else p.update()
    })

    enemies.forEach((e, i) => {
        e.update()
        const dist = Math.hypot(player.x - e.x, player.y - e . y)
        if (dist - e.radius - player.radius < 1){
            cancelAnimationFrame(animationId)
            clearInterval(intervalId)
            bannerEl.style.display = 'flex'
            finalScEl.innerHTML = sc.toString()

        }

        projectiles.forEach((p, j) => {
            const dist = Math.hypot(p.x - e.x, p.y - e . y)
            if ( dist - p.radius - e.radius < 1){
                if (e.wps !== p.wps){
                    cancelAnimationFrame(animationId)
                    clearInterval(intervalId)
                    bannerEl.style.display = 'flex'
                    finalScEl.innerHTML = sc.toString()
                }
                else{
                    setTimeout(() =>{
                        enemies.splice(i, 1)
                        projectiles.splice(j, 1)
                    }, 0)
                    for(let i = 0; i < 50; i++){
                        particles.push(new Particle(p.x, p.y, Math.random()*3, e.color, {x: (Math.random() -0.5)*(Math.random()*7), y: (Math.random() -0.5)*(Math.random()*7)}))
                    }
                    sc += 100
                    scoreEl.innerHTML = sc
                }

            }
        })
    })
    particles.forEach((p, i) => {
        p.update()
        if (p.lifeTime <= 0 || outOfSight(p)) particles.splice(i, 1)
    })

}

function spawnEnemies(){
    intervalId = setInterval(()=> {
        const radius =  50//Math.random() * (50 - 10) + 10
        let x
        let y

        if (Math.random() > 0.5){
            x = Math.random() > 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y =  Math.random() > 0.5 ? 0 - radius : canvas.height + radius
        }
        const color = `hsl(${Math.random()*360}, 50%, 50%)`
        const angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x)
        const speed = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        if (Math.random() < 0.5){
            enemies.push(new Enemy(x, y, radius, color, {x: speed.x, y: speed.y}, wordsB[Math.floor(Math.random()*4)], 0))
        }
        else {
            enemies.push(new Enemy(x, y, radius, color, {x: speed.x, y: speed.y}, wordsV[Math.floor(Math.random()*4)], 1))
        }

    }, 2000)
}
addEventListener('keypress', (event) => {
    if (event.key === 'a') {
        wpSwitch = 0
        player.wps = 0
    }
    else if (event.key === 'd') {
        wpSwitch = 1
        player.wps = 1
    }
})
addEventListener('click', (event) => {
    const angle = Math.atan2(event.clientY - canvas.height/2, event.clientX - canvas.width/2)
    const speed = {
        x: Math.cos(angle) * 4,
        y: Math.sin(angle) * 4
    }
    projectiles.push(new Projectile(canvas.width/2, canvas.height/2, 2, 'white', {x: speed.x, y: speed.y}, wpSwitch))
})

startGameBtn.addEventListener('click', () =>{
    init()
    animate()
    spawnEnemies()
    bannerEl.style.display = 'none'
})