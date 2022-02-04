const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

scoreEl = document.querySelector('#scoreEl')
startGameBtn = document.querySelector('#startGameBtn')
bannerEl = document.querySelector('#bannerEl')
finalScEl = document.querySelector('#finalScEl')


const x = canvas.width/2
const y = canvas.height/2
let player = new Player(x, y, 20, 'white', 0)
let projectiles = []
let enemies = []
let particles = []
const wordsB = ['cal_', ' cor_', '_onica', '_arca']
const wordsV = ['a_ortar', 'cer_ell', 'lla_i', 'pro_ar']
let wpSwitch = 0
let animationId
let intervalId
let sc = 0
