import {countNeighbours, dieOrLive} from "./functions"

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
				const countOfNeighbours = countNeighbours(this.board, i, j)
				newBoard[i][j] = dieOrLive(value, countOfNeighbours)
			})
		})

		return new Board(newBoard)
	}

}

