export class Board {

	private board: number[][]

	constructor(board: number[][]) {
		this.board = board
	}

	public getBoard(): number[][] {
		return this.board
	}

	public tick(): Board {
		const newBoard: number[][] = Array.from(Array(this.board.length)).map(() => Array.from(Array(this.board.length)).map(() => 0))

		this.board.forEach((row, i) => {
			row.forEach((value, j) => {
				const countOfNeighbours = this.countNeighbours(i, j)
				newBoard[i][j] = this.dieOrLive(value, countOfNeighbours)
			})
		})

		return new Board(newBoard)
	}

	public dieOrLive(value: number, countOfNeighbours: number) {
		switch (countOfNeighbours) {
		case 2:
			return value
		case 3:
			return 1
		default:
			return 0
		}
	}

	public countNeighbours(x: number, y: number): number {
		let neighbours = 0
		for (let i = x - 1; i <= x + 1; i++) {
			for (let j = y - 1; j <= y + 1; j++) {
				try {
					if (this.board[i][j]) {
						neighbours += (x === i && y === j) ? 0 : this.board[i][j]
					}
				} catch (ignore) {

				}
			}
		}
		return neighbours
	}

}
