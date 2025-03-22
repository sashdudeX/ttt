const board = document.getElementById('board');
    const cells = [];
    let currentPlayer = 'X';

    function createBoard() {
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
        cells.push(cell);
      }
    }

    function handleCellClick(event) {
      const index = event.target.dataset.index;
      if (cells[index].textContent === '') {
        cells[index].textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
          alert(`${currentPlayer} wins!`);
          resetBoard();
        } else if (checkDraw()) {
          alert('It\'s a draw!');
          resetBoard();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }

    function checkWin(player) {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      return winPatterns.some(pattern => {
        return pattern.every(index => cells[index].textContent === player);
      });
    }

    function checkDraw() {
      return cells.every(cell => cell.textContent !== '');
    }

    function resetBoard() {
      cells.forEach(cell => cell.textContent = '');
      currentPlayer = 'X';
    }

    createBoard();
