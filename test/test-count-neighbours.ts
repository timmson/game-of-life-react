import {countNeighbours} from "../src/board"

describe("Count should", () => {

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

	test("Find 2 neighbours", () => {
		const arrange: number[][] = [
			[0, 1, 1],
			[0, 1, 0],
			[0, 1, 1],
		]

		const result = countNeighbours(arrange, 0, 0)

		expect(result).toEqual(2)
	})

	test("Find 3 neighbours", () => {
		const arrange: number[][] = [
			[1, 1, 0],
			[1, 1, 0],
			[0, 1, 1],
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

})
