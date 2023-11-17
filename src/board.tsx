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

        Array(x - 1, x, x + 1).forEach((i) =>
            Array(y - 1, y, y + 1).forEach((j) => {
                try {
                    neighbours += (x === i && y === j) ? 0 : (this.board[i][j] ? this.board[i][j] : 0)
                } catch (ignore) {

                }
            })
        )

        return neighbours
    }

    public range(start: number, end: number) {
        return Array(end - start)
    }

}
