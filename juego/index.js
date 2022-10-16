const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 750;
canvas.height = 400;
ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

var frames = 0
var frame;
var score = 0;

let danger = new Array();
let coins = new Array();
let ground = new Array();
let players = new Array();
let enemies = new Array();
let vx;
console.log(vx)
const player = new Player(20, 310, 'transparent', vx, 'idle', './img/char.png');
const npc = new NPC(470,200,'blue',100)
const npc1 = new NPC(200, 150, 'blue', 150)
const npc2 = new NPC(300,310,'blue',100)
const npc3 = new NPC(50, 150, 'blue', 150)
players.push(player);
enemies.push(npc, npc1, npc2, npc3)
const floor = new Ground(0, 385, canvas.width, 20, '#332');
const block = new Ground(200, 300, 100, 20, '#332')
const dz = new DangerZone(335, 250, 50, 50, 'red')
const dz2 = new DangerZone(345, 110 ,15,15,'red');
const block2 = new Ground(400, 200, 100, 20, '#332')
const dz3 = new DangerZone(120, 150, 20, 50, 'red')
const dz4 = new DangerZone(120, 200, 50, 20, 'red')
const coin = new Coin(400, 150);
const coin1 = new Coin(500, 300);
const coin2 = new Coin(150, 107);
const coin3 = new Coin(280, 80);
coins.push(coin, coin1, coin2, coin3);
ground.push(floor,block,block2);
danger.push(dz,dz2,dz3,dz4);


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


const instImg = new Image();
instImg.src = './instructions.png'

let inicio = 5;
timeDecrease()
function timeDecrease(){

    if(inicio != 0){

        setTimeout(()=> {
            inicio--
            timeDecrease();
            console.log(inicio)
        },1000)
    }

}

function instrucions(){
    if(inicio > 0){
        ctx.drawImage(instImg, 0, 0,
            instImg.width, 
            instImg.height,
            50,
            50,
            instImg.width*0.1,
            instImg.height * 0.1);
        
    }
}

function update() {
    gravity = (delta == 1 ? 0.48 : 0.1);
    player.vx = vx
    frames++;
    frame = Math.floor(frames / delta) % 60;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    coins.map(cn => cn.draw())
    ground.map(gnd => gnd.draw());
    danger.map(dz => dz.draw())
    enemies.map(sprite => {
        sprite.draw()
        sprite.gravity();
        sprite.movement();
    })
    instrucions();
    players.map(sprite => {
        sprite.draw()
        sprite.gravity();
        sprite.movement();
    })
    setTimeout(() => {
        requestAnimationFrame(update);
    }, 1);
    
}



setTimeout(() => {
    requestAnimationFrame(update);
}, 1);


