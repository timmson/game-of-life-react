import {Board, countNeighbours} from "../src/board"

describe("Board should", () => {

	test("Find 0 neighbours", () => {
		const arrange: number[][] = [
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
		]

		const result = countNeighbours(arrange, 1, 1)

		expect(result).toEqual(0)
	})

	test("Find 1 neighbours", () => {
		const arrange: number[][] = [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
		]

		const result = countNeighbours(arrange, 1, 1)

		expect(result).toEqual(1)
	})

	test("Find 3 neighbours", () => {
		const arrange: number[][] = [
			[1, 1, 0],
			[1, 1, 0],
			[0, 0, 0],
		]

		const result = countNeighbours(arrange, 0, 0)

		expect(result).toEqual(3)
	})

	test("Find 5 neighbours", () => {
		const arrange: number[][] = [
			[0, 1, 1],
			[0, 1, 0],
			[0, 1, 1],
		]

		const result = countNeighbours(arrange, 1, 2)

		expect(result).toEqual(5)
	})

	test("general", () => {
		const arrange: number[][] = [
			[0, 1, 1],
			[0, 1, 0],
			[0, 1, 1],
		]

		const result = new Board(arrange).tick().getBoard()

		expect(result).toEqual([
			[0, 1, 1],
			[1, 0, 0],
			[0, 1, 1],
		])
	})

})


