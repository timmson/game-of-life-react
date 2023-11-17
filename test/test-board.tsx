import {tick} from "../src/board"

describe("Board should", () => {

	test("general", () => {
		const arrange: number[][] = [
			[0, 1, 1],
			[0, 1, 0],
			[0, 1, 1],
		]

		const result = tick(arrange)

		expect(result).toEqual([
			[0, 1, 1],
			[1, 0, 0],
			[0, 1, 1],
		])
	})

})


