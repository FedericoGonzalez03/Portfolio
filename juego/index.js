const splash = document.querySelector('.splash')




const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 750;
canvas.height = 400;
ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

var frames = 0
var frame;
var score = 0;


let coins = new Array();
let ground = new Array();
let players = new Array();
let enemies = new Array();
let vx;
console.log(vx)
const player = new Player(20, 310, 'transparent', vx, 'idle', './img/char.png');
const npc = new NPC(500,310,'red',100)
const npc1 = new NPC(200, 150, 'red', 150)
const npc2 = new NPC(300,310,'red',100)
const npc3 = new NPC(50, 150, 'red', 150)
players.push(player);
enemies.push(npc, npc1, npc2, npc3)
const floor = new Sprite(0, 385, canvas.width, 20, '#332');
const block = new Sprite(200, 300, 100, 20, 'wheat')
const coin = new Coin(400, 200);
const coin1 = new Coin(500, 300);
const coin2 = new Coin(150, 107);
const coin3 = new Coin(250, 150);
coins.push(coin, coin1, coin2, coin3);
ground.push(floor);
ground.push(block);





attackingR = false;
attackingL = false;


document.addEventListener('keydown', e => {
    e.preventDefault();
    if (e.keyCode === 65) player.dir = 'izq';
    if (e.keyCode === 68) player.dir = 'der';
    if (e.keyCode === 32) player.jump();
})

if(!attackingL && !attackingR){
    document.addEventListener('keydown', e => {
        e.preventDefault();
        if (e.keyCode === 69) player.attack(player.x+100);
        if (e.keyCode === 81) player.attack(player.x-100);;
    })
}

document.addEventListener('keyup', e => {
    e.preventDefault();
    if (e.keyCode === 65 && player.dir === 'izq') player.dir = 'idle';
    if (e.keyCode === 68 && player.dir === 'der') player.dir = 'idle';
})


function update() {
    gravity = (delta == 1 ? 0.48 : 0.1);
    player.vx = vx
    frames++;
    frame = Math.floor(frames / delta) % 60;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    coins.map(cn => cn.draw())
    ground.map(gnd => gnd.draw());
    players.map(sprite => {
        sprite.draw()
        sprite.gravity();
        sprite.movement();
    })
    enemies.map(sprite => {
        sprite.draw()
        sprite.gravity();
        sprite.movement();
    })
    requestAnimationFrame(update);
}



requestAnimationFrame(update);


