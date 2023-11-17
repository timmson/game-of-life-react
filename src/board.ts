export const tick = (board: number[][]): number[][] => {
	const newBoard: number[][] = []

	board.forEach((row, i) => {
		newBoard[i] = []
		row.forEach((value, j) => {
			const countOfNeighbours = countNeighbours(board, i, j)
			newBoard[i][j] = dieOrLive(value, countOfNeighbours)
		})
	})

	return newBoard
}

export const dieOrLive = (value: number, countOfNeighbours: number) => {
	switch (countOfNeighbours) {
	case 2:
		return value
	case 3:
		return 1
	default:
		return 0
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
export const extract = <T extends any>(array: T[], index: number) =>
	array.slice(Math.max(0, index - 1), Math.min(index + 1, array.length - 1) + 1)

