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

	sequence(x, board.length).forEach((i) =>
		sequence(y, board[i].length).forEach((j) => {
			neighbours += (x === i && y === j) ? 0 : board[i][j]
		})
	)

	return neighbours
}

export const sequence = (index: number, length: number) => {
	const start = Math.max(0, index - 1)
	const end = Math.min(index + 1, length - 1) + 1
	return Array.from({length: (end - start)}, (v, k) => k + start)
}

