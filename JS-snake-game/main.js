const board = document.getElementById('game-board')

let snake = [{x: 10, y:10}]

function draw() {
    board.innerHTML = ''
    drawSnake()
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

draw()