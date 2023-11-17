import {extract} from "../src/board"

describe("BoardArray should", () => {

	test("extract range[0] from array[0]", () => {
		const expected = [0]

		const actual = extract([0], 0)

		expect(actual).toEqual(expected)
	})

	test("extract range[0,1] from array[0, 1, 2, 3, 4]", () => {
		const expected = [0, 1]

		const actual = extract([0, 1, 2, 3, 4], 0)

		expect(actual).toEqual(expected)
	})

	test("extract range[3,4] from array[0, 1, 2, 3, 4]", () => {
		const expected = [3, 4]

		const actual = extract([0, 1, 2, 3, 4], 4)

		expect(actual).toEqual(expected)
	})

	test("extract range[1,2,3] from array[0, 1, 2, 3, 4]", () => {
		const expected = [1, 2, 3]

		const actual = extract([0, 1, 2, 3, 4], 2)

		expect(actual).toEqual(expected)
	})

})
