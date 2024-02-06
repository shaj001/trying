const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  if (gameState.every(cell => cell !== '')) {
    return 'draw';
  }
  return null;
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (gameState[index] === '' && !checkWinner()) {
    gameState[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    const winner = checkWinner();
    if (winner) {
      alert(winner === 'draw' ? 'It\'s a draw!' : `Player ${winner} wins!`);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
