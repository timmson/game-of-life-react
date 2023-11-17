import {sequence} from "../src/board"

describe("Board should", () => {

	test("sequence range[0] from array[0]", () => {
		const expected = [0]

		const actual = sequence(0, [0].length)

		expect(actual).toEqual(expected)
	})

	test("sequence range[0,1] from array[0, 1, 2, 3, 4]", () => {
		const expected = [0, 1]

		const actual = sequence(0, [0, 1, 2, 3, 4].length)

		expect(actual).toEqual(expected)
	})

	test("sequence range[3,4] from array[0, 1, 2, 3, 4]", () => {
		const expected = [3, 4]

		const actual = sequence(4, [0, 1, 2, 3, 4].length)

		expect(actual).toEqual(expected)
	})

	test("sequence range[1,2,3] from array[0, 1, 2, 3, 4]", () => {
		const expected = [1, 2, 3]

		const actual = sequence(2, [0, 1, 2, 3, 4].length)

		expect(actual).toEqual(expected)
	})

})
