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
