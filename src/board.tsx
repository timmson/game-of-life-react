import {dieOrLive} from "./functions"

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

export const countNeighbours = (board: number[][], x: number, y: number): number => {
	let neighbours = 0

	Array(x - 1, x, x + 1).forEach((i) =>
		Array(y - 1, y, y + 1).forEach((j) => {
			try {
				neighbours += (x === i && y === j) ? 0 : (board[i][j] ? board[i][j] : 0)
			} catch (ignore) {

			}
		})
	)

	return neighbours
}
