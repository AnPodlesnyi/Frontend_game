import platform from '../img/platform.png';
import hills from '../img/hills.png';
import background from '../img/background.png';
import platformSmallTall from '../img/platformSmallTall.png';

import spriteRunLeft from '../img/spriteRunLeft.png';
import spriteRunRight from '../img/spriteRunRight.png';
import spriteStandLeft from '../img/spriteStandLeft.png';
import spriteStandRight from '../img/spriteStandRight.png';

import coin from '../img/coin.png';
import coinImage from '../img/spri.png';

import enemay from '../img/enem.png'

import win from '../img/win.png';
import wins from '../img/finish.png'

import reload from '../img/reload.png';

import pllevl from '../img/plat2.png';
import pllevl2 from '../img/plat1.png';
import pllevl3 from '../img/plat3.png';



const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

let statistics = {};
let playerName = '';

canvas.width = 1024;
canvas.height = 576;

const gravity = 1.6

class Player {
    constructor() {
        this.spead = 10
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66
        this.height = 150

        this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createImage(spriteStandRight),
                left: createImage(spriteStandLeft),
                cropWidth: 177,
                width: 66
            },
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
                cropWidth: 341,
                width: 127.875
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
    }

    update() {
        this.frames++;

        if (this.frames > 59 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0
        else if (this.frames > 29 && (this.currentSprite === this
            .sprites.run.right || this.currentSprite === this.
                sprites.run.left)
        )
            this.frames = 0

        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
    }
}
//  ------------------------------------------------------------------ Создание Платформы
class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class Win {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}


function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}
//  ------------------------------------------------------------------  Создание Монет
class Sprite {
    constructor({ x, y, image }) {

        this.image = image;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 5.5;
        this.numberOfFrames = 9.1;

        this.width = 400;
        this.height = 100;

        this.count = 0

        this.start();
        this.position = {
            x,
            y
        }
    }

    update() {
        this.tickCount++;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    draw() {
        c.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            0,
            this.width / this.numberOfFrames,
            this.height,
            this.position.x,
            this.position.y,
            this.width / this.numberOfFrames,
            this.height
        )
    }

    start() {
        let loop = () => {
            this.update();
            this.draw();

            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }
}

// ---------------------------------------------------------- создание Врага
class Enemy {
    constructor({ x, y, image }) {

        this.image = image;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 14.5;
        this.numberOfFrames = 2.56;

        this.width = 400;
        this.height = 150;

        this.count = 0

        this.start();
        this.position = {
            x,
            y
        }
    }

    update() {
        this.tickCount++;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    draw() {
        c.drawImage(
            this.image,
            this.frameIndex * 200/ this.numberOfFrames,
            0,
            200 / this.numberOfFrames,
            this.height,
            this.position.x,
            355,
            250 / this.numberOfFrames,
            this.height
        )
    }

    start() {
        let loop = () => {
            this.update();
            this.draw();

            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }
}

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall)
let platformlevelImg = createImage(pllevl);
let platformlevelImg2 = createImage(pllevl2);
let platformlevelImg3 = createImage(pllevl3);

let player = new Player();
let platforms = [
];

let genericObjects = [
];

let sprite = [
];

let enemy = [
];

let winss = [

]

let lastKey
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0;
platformImage = createImage(platform);

function init() {

    platformImage = createImage(platform);
    platformlevelImg = createImage(pllevl);

    player = new Player();
    //  ------------------------------------------------------------------  Платформы
    platforms = [
        new Platform({
            x: platformImage.width * 4 + 300 - 2 + platformImage.width
                - platformSmallTallImage.width,
            y: 270,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 7 + 130 - 2 + platformImage.width
                - platformSmallTallImage.width,
            y: 380,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 7 + 400 + 10 + platformImage.width
                - platformSmallTallImage.width,
            y: 290,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 7 + 400 + 10 + platformImage.width
                - platformSmallTallImage.width,
            y: 380,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 7 + 720 - 25 + platformImage.width
                - platformSmallTallImage.width,
            y: 200,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 7 + 720 - 25 + platformImage.width
                - platformSmallTallImage.width,
            y: 290,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 7 + 720 - 25 + platformImage.width
                - platformSmallTallImage.width,
            y: 380,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: platformImage.width * 11
                - platformSmallTallImage.width,
            y: 0,
            image: createImage(win)
        }),
        new Platform({
            x: -1,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width - 3,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 2 + 100,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 3 + 300,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 4 + 300 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 5 + 700 - 2,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 6 + 700 - 4,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 7 + 700 - 6,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 8 + 1100 - 6,
            y: 470,
            image: platformImage
        }),
        new Platform({
            x: platformImage.width * 9 + 1100 - 8,
            y: 470,
            image: platformImage
        }),
    ];


    genericObjects = [
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(background)
        }),
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(hills)
        })
    ]

    scrollOffset = 0;

    sprite = [
        new Sprite({
            x: 600,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 700,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 800,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 2950,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 3050,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 3150,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 4000,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 4100,
            y: 400,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 4200,
            y: 400,
            image: createImage(coinImage),
        }),
    ]

    enemy = [
        new Enemy({
            x: 1600,
            y: 0,
            image: createImage(enemay),
        }),
        new Enemy({
            x: 2400,
            y: 0,
            image: createImage(enemay),
        }),
        new Enemy({
            x: 3800,
            y: 0,
            image: createImage(enemay),
        }),
    ]
}
// initLevel
function initLevel() {

    platformImage = createImage(platform);
    platformlevelImg = createImage(pllevl);

    player = new Player();
    //  ------------------------------------------------------------------  Платформы
    platforms = [
        new Platform({
            x: platformlevelImg.width * 4 + 300 - 2 + platformlevelImg.width
                - platformSmallTallImage.width,
            y: 270,
            image: createImage(pllevl)
        }),
        new Platform({
            x: platformlevelImg * 7 + 130 - 2 + platformlevelImg.width,
            y: 380,
            image: createImage(platformSmallTall)
        }),
        new Platform({
            x: -1,
            y: 470,
            image: platformlevelImg
        }),
        new Platform({
            x: platformImage.width - 3,
            y: 300,
            image: platformlevelImg2
        }),
        new Platform({
            x: platformImage.width * 1.7,
            y: 470,
            image: platformlevelImg3
        }),
        new Platform({
            x: platformImage.width * 2.5,
            y: 470,
            image: platformlevelImg
        }),
        new Platform({
            x: platformImage.width * 5,
            y: 470,
            image: platformlevelImg2
        }),
        new Platform({
            x: platformImage.width * 5 + 500,
            y: 350,
            image: platformlevelImg3
        }),
        new Platform({
            x: platformImage.width * 6 + 200,
            y: 470,
            image: platformlevelImg
        }),
        new Platform({
            x: platformImage.width * 7 + 300,
            y: 470,
            image: platformlevelImg3
        }),
        new Platform({
            x: platformImage.width * 7 + 700,
            y: 470,
            image: platformlevelImg3
        }),
        new Platform({
            x: platformImage.width * 7 + 1000,
            y: 350,
            image: platformlevelImg3
        }),
        new Platform({
            x: platformImage.width * 7 + 1250,
            y: 250,
            image: platformlevelImg3
        }),
        new Platform({
            x: platformImage.width * 7 + 1600,
            y: 510,
            image: platformlevelImg
        }),
        new Platform({
            x: platformImage.width * 7 + 2000,
            y: 510,
            image: platformlevelImg
        }),
    ];

    winss = [
        new Win({
            x: platformImage.width * 11 - 300
                - platformSmallTallImage.width,
            y: 430,
            image: createImage(wins)
        })
    ]

    genericObjects = [
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(background)
        }),
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(hills)
        })
    ]
    //  ------------------------------------------------------------------  Монеты
    scrollOffset = 0;

    sprite = [
        new Sprite({
            x: 1050,
            y: 420,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 1700,
            y: 420,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 3050,
            y: 420,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 2950,
            y: 420,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 3900,
            y: 420,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 3900,
            y: 420,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 4420,
            y: 420,
            image: createImage(coinImage),
        }),
        new Sprite({
            x: 4820,
            y: 420,
            image: createImage(coinImage),
        }),
    ]

    enemy = [
        new Enemy({
            x: 1600,
            y: 0,
            image: createImage(enemay),
        }),
        new Enemy({
            x: 3800,
            y: 0,
            image: createImage(enemay),
        }),
    ]

}

var tr = true;

function trueFalse(ar) {
    if (tr === true) {
        console.log('win')
        youWin()
    } else if (tr === false) {
        tr = ar
    }
    console.log(tr)
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach((genericObject) => {
        genericObject.draw()
    })

    platforms.forEach(platform => {
        platform.draw()
    })

    winss.forEach(win => {
        win.draw()
    })

    sprite.forEach((coinImage) => {
        coinImage.draw()
    })
    enemy.forEach((enemyy) => {
        enemyy.draw()
    })

    player.update()

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.spead
    } else if (
        (keys.left.pressed && player.position.x > 100) ||
        (keys.left.pressed && scrollOffset === 0 && player.
            position.x > 0)
    ) {
        player.velocity.x = -player.spead
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach(platform => {
                platform.position.x -= player.spead
            })
            genericObjects.forEach(genericObject => {
                genericObject.position.x -= player.spead * 0.66
            })
            sprite.forEach((coinImage) => {
                coinImage.position.x -= player.spead
            })
            enemy.forEach((enemyy) => {
                enemyy.position.x -= player.spead
            })
            winss.forEach((wins) => {
                wins.position.x -= player.spead
            })
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.spead
            platforms.forEach(platform => {
                platform.position.x += player.spead
            })
            genericObjects.forEach(genericObject => {
                genericObject.position.x += player.spead * 0.66
            })
            sprite.forEach((coinImage) => {
                coinImage.position.x += player.spead
            })
            enemy.forEach((enemyy) => {
                enemyy.position.x += player.spead
            })
            winss.forEach((wins) => {
                wins.position.x += player.spead
            })
        }
    }
    // ----------------------------------------------------       обнаружение столкновения с платформой
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })
    // ---------------------------------------------------------------------- обнаружение чкловека с монетой
    sprite.forEach((coinImage) => {
        if (player.position.y + player.height >= coinImage.position.x  &&
            player.position.x + player.width >= coinImage.position.x &&
            player.position.x <= coinImage.position.x) {
            coinImage.position.x = -1000;
            var n = localStorage.getItem('on_load_counter');
            if (n === null) {
                n = 0;
            }
            n++;
            localStorage.setItem("on_load_counter", n);
            document.getElementById('count').innerHTML = n;
        }
    })
    enemy.forEach((enemyy) => {
        if (player.position.y + player.height >= enemyy.position.x &&
            player.position.y + player.height + player.velocity.y >= enemyy.position.x &&
            player.position.x + player.width >= enemyy.position.x &&
            player.position.x <= enemyy.position.x) {
            sprite.forEach((coinImage) => {
                coinImage.position.x = -1000;
            })
            init()
            enemyy.position.x = -1000;
            clearLocal()
            winss.forEach((wins) => {
                wins.position.x = -6000;
            })
        }
    })
    // ----------------------------------------------------------- Победа второй уровень
    winss.forEach((wins) => {
        if (player.position.y + player.height >= wins.position.x &&
            player.position.y + player.height + player.velocity.y >= wins.position.x &&
            player.position.x + player.width >= wins.position.x &&
            player.position.x <= wins.position.x) {
            trueFalse();
            tr = false;
            wins.position.y = -2000;
        }
    })


    //--------------------------------------------------------       переключение человечка право,лево

    if (
        keys.right.pressed &&
        lastKey === 'right' &&
        player.currentSprite !== player.sprites.run.right) {
        player.frames = 1
        player.currentSprite = player.sprites.run.right
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    } else if (
        keys.left.pressed &&
        lastKey === 'left' && player.currentSprite
        !== player.sprites.run.left
    ) {
        player.currentSprite = player.sprites.run.left
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    } else if (
        !keys.left.pressed &&
        lastKey === 'left' && player.currentSprite
        !== player.sprites.stand.left
    ) {
        player.currentSprite = player.sprites.stand.left
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    } else if (
        !keys.right.pressed &&
        lastKey === 'right' && player.currentSprite
        !== player.sprites.stand.right
    ) {
        player.currentSprite = player.sprites.stand.right
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }
    // win condition 
    if (scrollOffset > 2800) {
        initLevel()
    }
    //lose condition
    if (player.position.y > canvas.height) {
        // запуск игры сначала
        sprite.forEach((coinImage) => {
            coinImage.position.x = -1000;
        })
        enemy.forEach((enemyy) => {
            enemyy.position.x = -1000;
        })
        winss.forEach((wins) => {
            wins.position.x = -6000;
        })
        init()
        clearLocal()
    }
    // console.log(scrollOffset)
}


// -------------------------------------------------------------------очистка Локал

function clearLocal() {
    localStorage.removeItem('on_load_counter')
    document.getElementById('count').innerHTML = '0';
}
function saveStat() {
    statistics[playerName] = document.getElementById('count').innerHTML;
    localStorage.setItem('stat', JSON.stringify(statistics));
}
function getStat() {
    if (localStorage.getItem('stat')) {
        statistics = JSON.parse(localStorage.getItem('stat'));
        console.log(statistics);
    }
}

// ----------------------------------------------------------------- запуск меню

creatMenu()
getStat()

// ---------------------------------------------------------------- кнопки управления
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65,37:
            keys.left.pressed = true
            lastKey = 'left'
            break;
        case 83,40:
            break;
        case 68,39:
            keys.right.pressed = true
            lastKey = 'right'
            break;
        case 87,38:
            if (player.velocity.y < -1) {
                break
            } else (
                player.velocity.y -= 25)
            break;
    }
})

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65,37:
            keys.left.pressed = false
            break;
        case 83,40:
            break;
        case 68,39:
            keys.right.pressed = false
            break;
        case 87,38:
            break;
    }
})

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = true
            lastKey = 'left'
            break;
        case 83:
            break;
        case 68:
            keys.right.pressed = true
            lastKey = 'right'
            break;
        case 87:
            if (player.velocity.y < -1) {
                break
            } else (
                player.velocity.y -= 25)
            break;
    }
})

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            break;
        case 83:
            break;
        case 68:
            keys.right.pressed = false
            break;
        case 87:
            break;
    }
})



// ----------------------------------------- Победа во втором уровне 


function youWin() {
    let d = document.createElement('div');
    d.style.width = '300px';
    d.style.background = 'gray';
    d.style.position = 'absolute';
    d.style.textAlign = 'center';
    d.style.borderRadius = '5px'
    document.body.appendChild(d);

    createStatistics();
    saveStat();
    createStat();

    function createStatistics() {
        var button = document.createElement("button");
        button.id = 'statistics'
        button.innerHTML = `Restart`;
        button.style.width = '180px';
        button.style.height = '40px';
        button.style.textAlign = 'center';
        button.style.margin = '25px 25px 25px 25px';
        button.style.fontSize = '25px';
        button.style.borderRadius = '10px';
        button.style.backgroundColor = '#58bab3';
        button.style.color = '#808080';
        button.style.fontFamily = 'Orbitron';
        button.style.borderStyle = 'none';
        button.style.boxShadow = '5px 5px 5px black';
        d.appendChild(button);
        button.addEventListener("click", function () {
            d.style.display = "none";
            location.reload()
            // -----------------------------------------------------изменения
            init();
            trueFalse(true);
            winss.forEach((wins) => {
                wins.position.x = -6000;
            })
        });
    }

    function createStat() {
        if (localStorage.getItem('stat')) {
            let stat = JSON.parse(localStorage.getItem('stat'));
            let tbl = document.createElement('table');
            let trTop = tbl.insertRow();
            trTop.innerHTML = 'Best score:'
            trTop.style.textAlign = 'end';
            trTop.style.fontSize = '24px';
            trTop.style.margin = '0 0 25px 0';
            trTop.style.padding = '0 0 0 50px';
            trTop.style.color = 'white';
            for (const prop in stat) {
                let tr = tbl.insertRow();
                tr.style.height = '30px';
                let td1 = tr.insertCell();
                td1.appendChild(document.createTextNode(`${prop}`));
                let td2 = tr.insertCell();
                td2.appendChild(document.createTextNode(`${stat[prop]}`));
            }    
            tbl.style.width = '220px';
            tbl.style.margin = '0 0 25px 0';
            d.appendChild(tbl);
        }
        else {
            let empty = document.createElement('div');
            empty.innerHTML = 'Statistic is empty!';
            empty.style.margin = '0 0 25px 0';
            d.appendChild(empty);
        }
    }
}

// создание меню блока

function creatCent() {
    var d = document.createElement('div');
    d.id = 'count';
    d.style.width = '60px';
    d.style.height = '37px';
    d.style.background = 'gray';
    d.style.position = 'absolute';
    d.style.textAlign = 'center';
    d.style.fontSize = '28px'
    d.style.marginTop = '-500px';
    d.style.marginLeft = '650px';
    d.style.borderRadius = '20px';
    d.style.padding = '3px 0px 0px 27px';
    d.innerHTML = '0'
    document.body.appendChild(d);
}
function creatCoin() {
    var img = document.createElement("img");
    img.src = coin;
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.position = 'absolute';
    img.style.marginTop = '-250px';
    img.style.marginLeft = '302px';
    document.body.appendChild(img);
}
function creatReset() {
    var img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/16/16427.png";
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.position = 'absolute';
    img.style.marginTop = '-250px';
    img.style.marginLeft = '400px';
    document.body.appendChild(img);
    img.addEventListener("click", function () {
        menuPause()
        player.spead = 0;
        player.sprites.run.cropWidth = 0;
        player.sprites.run.width = 0;
    });
}

function menuPause() {
    var d = document.createElement('div');
    d.style.width = '260px';
    d.style.height = '160px';
    d.style.background = 'gray';
    d.style.position = 'absolute';
    d.style.textAlign = 'center';
    d.style.borderRadius = '4px'
    d.style.fontFamily = 'Orbitron';
    document.body.appendChild(d);

    function createCounti() {
        var button = document.createElement("button");
        button.id = 'Continue'
        button.innerHTML = `Continue`;
        button.style.width = '180px';
        button.style.height = '35px';
        button.style.textAlign = 'center';
        button.style.margin = '30px 25px 25px 25px';
        button.style.fontSize = '25px';
        button.style.borderRadius = '4px';
        button.style.backgroundColor = '#58bab3';
        button.style.color = '#808080';
        button.style.fontFamily = 'Orbitron';
        button.style.borderStyle = 'none';
        button.style.boxShadow = '5px 5px 5px black';
        d.appendChild(button);
        button.addEventListener("click", function () {
            d.style.display = 'none';
            player.spead = 10;
            player.sprites.run.cropWidth = 341;
            player.sprites.run.width = 127.875;
        });
    }
    function createHomeMenu() {
        var button = document.createElement("button");
        button.id = 'Menu'
        button.innerHTML = `Menu`;
        button.style.width = '180px';
        button.style.height = '35px';
        button.style.textAlign = 'center';
        button.style.margin = '0px 25px 25px 25px';
        button.style.fontSize = '25px';
        button.style.borderRadius = '4px';
        button.style.backgroundColor = '#58bab3';
        button.style.color = '#808080';
        button.style.fontFamily = 'Orbitron';
        button.style.borderStyle = 'none';
        button.style.boxShadow = '5px 5px 5px black';
        d.appendChild(button);
        button.addEventListener("click", function () {
            document.getElementById("plName").remove();
            creatMenu();
            d.style.display = 'none';
            location.reload()
        });
    }

    createCounti()
    createHomeMenu()
}

function creatPause() {
    var img = document.createElement("img");
    img.src = reload;
    img.style.width = '45px';
    img.style.height = '45px';
    img.style.position = 'absolute';
    img.style.marginTop = '-250px';
    img.style.marginLeft = '450px';
    document.body.appendChild(img);
    img.addEventListener("click", function () {
        enemy.forEach((enemyy) => {
            enemyy.position.x = -1000;
        })
        sprite.forEach((coinImage) => {
            coinImage.position.x = -1000;
        })
        winss.forEach((wins) => {
            wins.position.x = -6000;
        })
        init()
        clearLocal()
    });
}

function creatMenu() {
    var d = document.createElement('div');
    d.style.width = '260px';
    d.style.height = '220px';
    d.style.background = 'gray';
    d.style.position = 'absolute';
    d.style.textAlign = 'center';
    d.style.borderRadius = '4px'
    d.style.fontFamily = 'Orbitron';
    document.body.appendChild(d);


    function createInput() {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute('placeholder', 'Player name')
        d.appendChild(input);
        input.style.margin = '30px 0px 0px 0px';
        input.style.width = '180px';
        input.style.height = '35px';
        input.style.textAlign = 'Center';
        input.style.borderRadius = '4px';
        input.style.fontSize = '20px';
        input.style.backgroundColor = '#58bab3';
        input.style.color = 'white';
        input.id = "myName"
        input.style.fontFamily = 'Orbitron';
        input.style.borderStyle = 'none';
        input.style.outline = '0px'
    }
    createInput()

    function createStatistics() {
        var button = document.createElement("button");
        button.id = 'statistics'
        button.innerHTML = `Statistics`;
        button.style.width = '180px';
        button.style.height = '35px';
        button.style.textAlign = 'center';
        button.style.margin = '0px 25px 25px 25px';
        button.style.fontSize = '25px';
        button.style.borderRadius = '4px';
        button.style.backgroundColor = '#58bab3';
        button.style.color = '#808080';
        button.style.fontFamily = 'Orbitron';
        button.style.borderStyle = 'none';
        button.style.boxShadow = '5px 5px 5px black';
        d.appendChild(button);
        button.addEventListener("click", function () {
            mainStatistics();
            d.style.display = "none";
        });
    }
    
    function createButton() {
        var button = document.createElement("button");
        button.innerHTML = `Start`;
        button.style.width = '180px';
        button.style.height = '35px';
        button.style.textAlign = 'center';
        button.style.margin = '25px';
        button.style.fontSize = '25px';
        button.style.borderRadius = '4px';
        button.style.backgroundColor = '#58bab3';
        button.style.color = '#808080';
        button.style.fontFamily = 'Orbitron';
        button.style.borderStyle = 'none';
        button.style.boxShadow = '5px 5px 5px black';
        // assuming the Div ID is bar
        d.appendChild(button);
        //the following function will alert a window when the button is clicked
        button.addEventListener("click", function () {
            init()
            animate()
            let div = document.createElement('div');
            div.id = 'plName';
            div.style.position = 'absolute';
            div.style.marginTop = '-500px';
            div.style.fontSize = '30px';
            div.style.color = 'white';
            div.style.marginLeft = '-850px';
            div.style.color = '#C0C0C0';
            document.body.appendChild(div);
            creatReset();
            creatPause();
            creatCent();
            creatCoin();
            localStorage.removeItem('on_load_counter');
            d.style.display = "none";
            if (document.getElementById("myName").value.length > 0) {
                document.getElementById("plName").innerHTML = document.getElementById("myName").value.slice(0, 8);
            }
            else {
                document.getElementById("plName").innerHTML = 'Unname';
            }
            playerName = document.getElementById("plName").innerHTML;
        });
    }
    createButton()
    createStatistics()
}
// -----------------------------------------------------------статистика по игрокам

function mainStatistics() {
    let d = document.createElement('div');
    d.style.width = '260px';
    d.style.background = 'grey';
    d.style.position = 'absolute';
    d.style.textAlign = 'center';
    d.style.borderRadius = '5px'
    document.body.appendChild(d);

    function createStat() {
        if (localStorage.getItem('stat')) {
            let stat = JSON.parse(localStorage.getItem('stat'));
            let tbl = document.createElement('table');
            let trTop = tbl.insertRow();
            trTop.innerHTML = 'Best score:'
            trTop.style.textAlign = 'end';
            trTop.style.fontSize = '24px';
            trTop.style.margin = '0 0 25px 0';
            trTop.style.padding = '0 0 0 50px';
            trTop.style.color = 'white';
            for (const prop in stat) {
                let tr = tbl.insertRow();
                tr.style.height = '30px';
                let td1 = tr.insertCell();
                td1.appendChild(document.createTextNode(`${prop}`));
                let td2 = tr.insertCell();
                td2.appendChild(document.createTextNode(`${stat[prop]}`));
            }    
            tbl.style.width = '220px';
            tbl.style.margin = '0 0 25px 0';
            d.appendChild(tbl);
        }
        else {
            let empty = document.createElement('div');
            empty.innerHTML = 'Statistic is empty!';
            empty.style.margin = '0 0 25px 0';
            d.appendChild(empty);
        }
    }


    function createExet() {
        let button = document.createElement("button");
        button.id = 'exet'
        button.innerHTML = `Menu`;
        button.style.width = '180px';
        button.style.height = '40px';
        button.style.textAlign = 'center';
        button.style.margin = '25px 25px 25px 25px';
        button.style.fontSize = '25px';
        button.style.borderRadius = '4px';
        button.style.backgroundColor = '#58bab3';
        button.style.color = '#808080';
        button.style.fontFamily = 'Orbitron';
        button.style.borderStyle = 'none';
        button.style.boxShadow = '5px 5px 5px black';
        d.appendChild(button);
        button.addEventListener("click", function () {
            d.style.display = "none";
            creatMenu();
        });
    }
    createExet();
    createStat();
}