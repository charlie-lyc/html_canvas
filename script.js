const canvas = document.getElementById('canvas')

// canvas.width = 200
// canvas.height = 300

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

/**
 * Checking for Support
 */
// if (canvas.getContext) {
//     const ctx = canvas.getContext("2d")
//     // drawing code here
// } else {
//     // canvas-unsupported code here
// }

/**
 * Now in Most Browsers
 */
const ctx = canvas.getContext('2d')

/////////////////////////////////////////////////////////////////////////////////////////////////
/*** BASIC ***/

/**
 * fillRect(xStartPoint, yStartPoint, width, height)
 */
// ctx.fillStyle = 'red'
// ctx.fillRect(10, 10, 100, 50)
// ctx.fillStyle = 'green'
// ctx.fillRect(120, 10, 100, 50)

/**
 * strokeRect()
 */
// ctx.lineWidth = '1'
// ctx.strokeStyle = 'blue'
// ctx.strokeRect(10, 70, 100, 50)
// ctx.lineWidth = '5'
// ctx.strokeStyle = 'yellow'
// ctx.strokeRect(120, 70, 100, 50)

/**
 * clearRect()
 */
// ctx.clearRect(25, 25, 70, 20)

/**
 * fillText()
 */
// ctx.fillStyle = 'purple'
// ctx.font = '30px Arial'
// ctx.fillText('Hello World!', 300, 50)

/**
 * strokeText()
 */
// ctx.lineWidth = '1'
// ctx.strokeStyle = 'orange'
// ctx.font = '30px Arial'
// ctx.strokeText('Hello Canvas!', 300, 110)

/////////////////////////////////////////////////////////////////////////////////////////////////
/*** PATHS ***/

/* Triangle */
// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.lineTo(150, 50)
// ctx.lineTo(100, 200)
// ctx.lineTo(50, 50)
// // ctx.closePath() // Same Result
// ctx.strokeStyle = 'coral'
// ctx.stroke()
// ctx.fillStyle = 'coral'
// ctx.fill()

// ctx.beginPath()
// ctx.moveTo(200, 50)
// ctx.lineTo(150, 200)
// ctx.lineTo(250, 200)
// ctx.lineTo(200, 50)
// ctx.closePath()
// ctx.stroke()

/* Rectangle */
// ctx.beginPath()
// ctx.rect(300, 50, 150, 100)
// ctx.strokeStyle = 'teal'
// ctx.stroke()
// ctx.fillStyle = 'teal'
// ctx.fill()

/* Arc [Circle] : (xCenter, yCenter, radius, startAngle, endAngle, isCounterClockwise=false) */
// ctx.beginPath()
// ctx.arc(100, 100, 40, 0, Math.PI * 2)
// ctx.stroke()

/**
 * Smile Face
 */
/*** Set Center ***/
const centerX = canvas.width / 2
const centerY = canvas.height / 2

/*** Begin Drawing ***/
// ctx.beginPath()

/* Draw Head */
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)

/* Move to Mouth */
// ctx.moveTo(centerX + 100, centerY)

/* Draw Mouth */
// ctx.arc(centerX, centerY, 100, 0, Math.PI)

/* Move to Left Eye */
// ctx.moveTo(centerX - 60, centerY - 80) // Circle Eye
// ctx.moveTo(centerX - 150, centerY - 50) // Arc Eye

/* Draw Left Eye */
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2) // Circle Eye
// ctx.arc(centerX - 100, centerY - 50, 50, Math.PI, 0) // Arc Eye

/* Move to Right Eye */
// ctx.moveTo(centerX + 100, centerY - 80) // Circle Eye
// ctx.moveTo(centerX + 50, centerY - 50) // Arc Eye

/* Draw Right Eye */
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2) // Circle Eye
// ctx.arc(centerX + 100, centerY - 50, 50, Math.PI, 0) // Arc Eye

/*** Show Drawing ***/
// ctx.stroke()

/**
 * Quadratic Curve : (xControlPoint, yControlPoint, xEndPoint, yEndPoint)
 */
// ctx.beginPath()
// ctx.moveTo(50, 20)
// ctx.quadraticCurveTo(230, 30, 50, 100)
// ctx.stroke()

// ctx.fillStyle = 'blue'
// ctx.beginPath();
// ctx.arc(50, 20, 5, 0, 2 * Math.PI) // Start point
// ctx.arc(50, 100, 5, 0, 2 * Math.PI) // End point
// ctx.fill();

// ctx.fillStyle = 'red'
// ctx.beginPath()
// ctx.arc(230, 30, 5, 0, 2 * Math.PI) // Control point
// ctx.fill()

/**
 * Speech Bubble
 */
// ctx.beginPath()
// ctx.moveTo(75, 25)
// ctx.quadraticCurveTo(25, 25, 25, 62.5)
// ctx.quadraticCurveTo(25, 100, 50, 100)
// ctx.quadraticCurveTo(50, 120, 30, 125)
// ctx.quadraticCurveTo(80, 120, 65, 100)
// ctx.quadraticCurveTo(125, 100, 125, 62.5)
// ctx.quadraticCurveTo(125, 25, 75, 25)
// ctx.stroke()

/**
 * Bezier Curve : (xCP1, yCP1, xCP2, yCP2, xEndPoint, yEndPoint)
 */
// ctx.beginPath()
// ctx.moveTo(50, 20)
// ctx.bezierCurveTo(230, 30, 150, 80, 250, 100)
// ctx.stroke()

// ctx.fillStyle = 'blue'
// ctx.beginPath()
// ctx.arc(50, 20, 5, 0, 2 * Math.PI) // Start point
// ctx.arc(250, 100, 5, 0, 2 * Math.PI) // End point
// ctx.fill()

// ctx.fillStyle = "red"
// ctx.beginPath()
// ctx.arc(230, 30, 5, 0, 2 * Math.PI) // Control point one
// ctx.arc(150, 80, 5, 0, 2 * Math.PI) // Control point two
// ctx.fill()

/////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Animation 1
 */
const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4,
}

function drawCircle() {
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
    ctx.fillStyle = 'purple'
    ctx.fill()
}
// drawCircle()

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear Canvas
    drawCircle() // Draw Circle
    circle.x += circle.dx // Change X Position
    circle.y += circle.dy // Change Y Position
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) { // Detect Right and Left Wall
        console.log('HIT THE SIDE WALL')
        circle.dx *= -1
    }
    if (circle.y - circle.size < 0 || circle.y + circle.size > canvas.height) { // Detect Top and Bottom Wall
        circle.dy *= -1
    }
    //////////////////////////////
    requestAnimationFrame(update)
    // console.log(123)
    //////////////////////////////
}
// update()

/////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Animation 2
 */
const image = document.getElementById('source')
const player = {
    x: 20,
    y: 200,
    w: 50,
    h: 70,
    dx: 0,
    dy: 0,
    speed: 5,
}

function moveRight() { 
    player.dx = player.speed
}
function moveLeft() {
    player.dx = - player.speed
}
function moveUp() {
    player.dy = - player.speed
}
function moveDown() {
    player.dy = player.speed
}
function keyDown(e) {
    // console.log(e.key)
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight()
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft()
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp()
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown()
    }
}

function keyUp(e) {
    // console.log(e.key)
    if (e.key === 'ArrowRight' || e.key === 'Right' || 
        e.key === 'ArrowLeft' || e.key === 'Left' ||
        e.key === 'ArrowUp' || e.key === 'Up' ||
        e.key === 'ArrowDown' || e.key === 'Down') {
        player.dx = 0
        player.dy = 0
    }
}

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function drawPlayer() {
    // ctx.drawImage(image, player.x, player.y)
    ctx.drawImage(image, player.x, player.y, player.w, player.h)
}
// drawPlayer()

// function update() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear Canvas
//     drawPlayer() // Draw Player
//     player.x += player.dx // Change X Position
//     player.y += player.dy // Change Y Position
//     if (player.x + player.w > canvas.width) { // When Hit the Right Wall
//         player.x = canvas.width - player.w
//     }
//     if (player.x < 0) { // When Hit the Left Wall
//         player.x = 0
//     }
//     if (player.y + player.h > canvas.height) { // When Hit the Bottom Wall
//         player.y = canvas.height - player.h
//     }
//     if (player.y < 0) { // When Hit the Top Wall
//         player.y = 0
//     }
//     requestAnimationFrame(update)
//     // console.log(123)
// }

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function newPosition() {
    player.x += player.dx
    player.y += player.dy
}
function detectWalls() {
    if (player.x + player.w > canvas.width) { // When Hit the Right Wall
        player.x = canvas.width - player.w
    }
    if (player.x < 0) { // When Hit the Left Wall
        player.x = 0
    }
    if (player.y + player.h > canvas.height) { // When Hit the Bottom Wall
        player.y = canvas.height - player.h
    }
    if (player.y < 0) { // When Hit the Top Wall
        player.y = 0
    }
}
function update() {
    clear()
    drawPlayer()
    newPosition()
    detectWalls()
    requestAnimationFrame(update)
}

update()
