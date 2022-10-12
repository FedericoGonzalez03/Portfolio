let gravity;

gravity = (delta == 1 ? 0.24 : 0.1);

class Sprite {
    constructor(x = 0, y = 0, w = 20, h = 40, color = 'transparent') {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.vy = 0
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    gravity() {

        this.vy += gravity

    }
    movement() {
        if (this.y >= canvas.height - 55) {
            this.y = 345;
            this.vy = 0
        } else {
            this.y = Math.round(this.y + this.vy);
        }
    }
}

class Player extends Sprite {

    constructor(x, y, color, vx = 2, dir = 'idle', imgSrc) {
        super(x, y, 30, 40, color);
        this.dir = dir;
        this.vx = vx;
        this.vy = 0;
        this.img = new Image();
        this.img.src = imgSrc;
        this.hp = 100;
        this.recentlyAttacked = false;
    }

    draw() {

        if (attackingR) {
            ctx.drawImage(
                this.img,
                3 * (this.img.height / 8),
                2 * (this.img.height / 8),
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )

            ctx.beginPath();
            ctx.lineWidth = 2
            ctx.strokeStyle = 'grey'
            ctx.moveTo(this.x + this.w + 4, this.y + 17 - 2);
            ctx.lineTo(this.x + this.w + 20, this.y + 17 - 10);;
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = 4
            ctx.strokeStyle = 'black'
            ctx.moveTo(this.x + this.w, this.y + 17);
            ctx.lineTo(this.x + this.w + 4, this.y + 17 - 2);
            ctx.stroke()
            ctx.lineWidth = 2
            ctx.lineTo(this.x + this.w + 6, this.y + 17 + 2);
            ctx.lineTo(this.x + this.w + 2, this.y + 17 - 6);
            ctx.stroke();

            if (!this.recentlyAttacked) {
                this.recentlyAttacked = true;
                setTimeout(() => {
                    attackingR = false
                }, 200)
                setTimeout(() => {
                    this.recentlyAttacked = false
                }, 500)
            }
        } else if (attackingL) {
            ctx.drawImage(
                this.img,
                3 * (this.img.height / 8),
                3 * (this.img.height / 8),
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )

            ctx.beginPath();
            ctx.lineWidth = 2
            ctx.strokeStyle = 'grey'
            ctx.moveTo(this.x - 4, this.y + 17 - 2);
            ctx.lineTo(this.x - 20, this.y + 17 - 10);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = 4
            ctx.strokeStyle = 'black'
            ctx.moveTo(this.x, this.y + 17);
            ctx.lineTo(this.x - 4, this.y + 17 - 2);
            ctx.stroke()
            ctx.lineWidth = 2
            ctx.lineTo(this.x - 6, this.y + 17 + 2);
            ctx.lineTo(this.x - 2, this.y + 17 - 6);
            ctx.stroke();
            ctx.closePath();


            if (!this.recentlyAttacked) {
                this.recentlyAttacked = true;
                setTimeout(() => {
                    attackingL = false
                }, 200)
                setTimeout(() => {
                    this.recentlyAttacked = false
                }, 500)
            }
        } else if (this.dir === 'idle' && this.inGround()) {
            ctx.drawImage(
                this.img,
                0,
                0,
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )
        } else if (this.dir === 'der' && this.inGround()) {
            ctx.drawImage(
                this.img,

                frame > 45 ? 3 * (this.img.width / 8) :
                    frame > 30 ? 5 * (this.img.width / 8) :
                        frame > 15 ? 3 * (this.img.width / 8) :
                            2 * (this.img.width / 8),

                6 * (this.img.height / 8),
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )

        } else if (this.dir === 'izq' && this.inGround()) {
            ctx.drawImage(
                this.img,

                frame > 45 ? 3 * (this.img.width / 8) :
                    frame > 30 ? 5 * (this.img.width / 8) :
                        frame > 15 ? 3 * (this.img.width / 8) :
                            2 * (this.img.width / 8),


                7 * (this.img.height / 8),
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )
        } else if (this.dir === 'idle' && !this.inGround()) {
            ctx.drawImage(
                this.img,
                this.vy > 0 ? 7 * (this.img.height / 8) : 6 * (this.img.height / 8),
                0,
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )
        } else if (this.dir === 'der' && !this.inGround()) {
            ctx.drawImage(
                this.img,
                this.vy > 0 ? 7 * (this.img.height / 8) : 6 * (this.img.height / 8),
                2 * (this.img.height / 8),
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )
        } else if (this.dir === 'izq' && !this.inGround()) {
            ctx.drawImage(
                this.img,
                this.vy > 0 ? 7 * (this.img.height / 8) : 6 * (this.img.height / 8),
                3 * (this.img.height / 8),
                this.img.width / 8,
                1 * (this.img.height / 8),
                this.x - 36,
                this.y - 28,
                this.img.width * 0.2,
                this.img.height * 0.2
            )
        }
    }

    movement() {
        if (this.dir === 'der' && this.x < canvas.width - 30) this.x += this.vx;
        if (this.dir === 'izq' && this.x > 0) this.x -= this.vx;
        if (!this.inGround()) this.y = Math.round(this.y + this.vy);
    }

    jump() {
        if (this.inGround()) {
            this.vy = (gravity == 0.1 ? -5 : -11);
            this.y -= 0.1;
        }
    }

    attack(x) {
        if (!this.recentlyAttacked) {
            if (x > this.x + 15) {
                attackingR = true;
                console.log('attack')
                for (let enemy of enemies) {
                    if (enemy.x <= this.x + 55 && enemy.x >= this.x - 15
                        && enemy.y <= this.y+this.h && enemy.y >= this.y) {
                        enemy.hp -= 50
                        if (enemy.hp == 0) {
                            enemies.splice(enemies.indexOf(enemy), 1);
                            score++;
                            document.getElementById('score').innerHTML = score;
                        }
                    }
                }
            } else {
                attackingL = true;
                console.log('attack')
                for (let enemy of enemies) {
                    if (enemy.x+30 >= this.x - 25 && enemy.x<=this.x + 15
                        && enemy.y <= this.y+this.h && enemy.y >= this.y) {
                        enemy.hp -= 50
                        if (enemy.hp == 0) {
                            enemies.splice(enemies.indexOf(enemy), 1);
                            score++;
                            document.getElementById('score').innerHTML = score;
                        }
                    }
                }
            }
        }
    }

    inGround() {
        for (let gnd of ground) {
            if (this.y >= gnd.y - 40 && this.y <= gnd.y - 30 &&
                this.x > gnd.x - 30 && this.x < gnd.x + gnd.w) {
                this.y = gnd.y - 40;
                this.vy = 0
                return true;
            }
        }
    }
}


class Coin extends Sprite {
    constructor(x, y) {
        super(x, y);
        this.img = new Image();
        this.img.src = './img/Coin.png';
        this.taken = false;
    }

    draw() {
        this.isTaken();
        ctx.drawImage(
            this.img,

            frame > 50 ? 2 * (this.img.width / 3) :
                frame > 40 ? (this.img.width / 3) :
                    frame > 30 ? 0 :
                        frame > 20 ? 2 * (this.img.width / 3) :
                            frame > 10 ? (this.img.width / 3) :
                                0,

            frame > 30 ? 0 : (this.img.width / 3),

            this.img.width / 3,

            this.img.height / 3,

            this.x,
            this.y,
            this.img.width * 0.015,
            this.img.height * 0.015
        )
    }

    isTaken() {
        if (player.y >= this.y - 40 && player.y <= this.y + ((this.img.height) * 0.015) &&
            player.x > this.x - ((this.img.width) * 0.015) && player.x < this.x + ((this.img.width) * 0.015)) {

            coins.splice(coins.indexOf(this), 1);
            score++;
            document.getElementById('score').innerHTML = score

        }
    }
}


class NPC extends Sprite {
    constructor(x, y, color, hp) {
        super(x, y, 30, 40, color);
        this.hp = hp;
        this.vy = 0;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}