let score = 0;
let gameInterval;
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    scoreDisplay.innerText = 'Score: ' + score;
    startButton.disabled = true;
    gameInterval = setInterval(createBall, 1000);
}

function createBall() {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = getRandomColor();
    ball.style.width = ball.style.height = Math.random() * 50 + 30 + 'px';
    ball.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';
    ball.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';

    ball.addEventListener('click', function() {
        score++;
        scoreDisplay.innerText = 'Score: ' + score;
        this.remove();
    });

    gameArea.appendChild(ball);

    // Remove the ball after 3 seconds if not clicked
    setTimeout(() => {
        if (ball.parentNode) {
            ball.remove();
        }
    }, 3000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Clear the interval and reset the game after 30 seconds
setInterval(() => {
    if (startButton.disabled) {
        clearInterval(gameInterval);
        alert('Time is up! Your score: ' + score);
        startButton.disabled = false;
    }
}, 30000);