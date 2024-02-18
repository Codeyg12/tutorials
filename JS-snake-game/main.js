const board = document.getElementById('game-board')

let gridSize = 20
let snake = [{x: 10, y:10}]
let food = generateFood() 
let direction = 'right'
let gameInterval
let gameSpeedDelay = 200
let gameStarted = false

function draw() {
    board.innerHTML = ''
    drawSnake()
    drawFood()
}

// draw the snake
function drawSnake() {
    snake.forEach(segment => {
        const snakeEl = createGameElement('div', 'snake')
        setPosition(snakeEl, segment)
        board.appendChild(snakeEl)
    })
}

// create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag)
    element.className = className
    return element
}

// set the position of snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x
    element.style.gridRow = position.y
}

function drawFood() {
    const foodEl = createGameElement('div', 'food')
    setPosition(foodEl, food)
    board.appendChild(foodEl)
}

function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1
    const y = Math.floor(Math.random() * gridSize) + 1
    return {x, y}
}

function move() {
    const head = { ...snake[0] }
    switch (direction) {
        case 'right':
            head.x++
            break;
        case 'left':
            head.x--
            break;
        case 'down':
            head.y++
            break;
        case 'up':
            head.y--
            break;
    }

    snake.unshift(head)
    
    if (head.x === food.x && head.y === food.y) {
        food = generateFood()
        clearInterval()
        gameInterval = setInterval(() => {
            move()
            draw()
        }, gameSpeedDelay)
    } else {
        snake.pop()
    }
}

function startGame() {
    gameStarted = true
}

draw()