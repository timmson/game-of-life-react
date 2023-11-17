import {dieOrLive} from "../src/functions"

describe("DieOrLive should", () => {

	test("die when there are less than 2 neighbours", () => {
		const result = dieOrLive(1,1)

		expect(result).toEqual(0)
	})

	test("not change when there are exact 2 neighbours", () => {
		const result = dieOrLive(0,2)

		expect(result).toEqual(0)
	})

	test("not change when there are exact 2 neighbours", () => {
		const result = dieOrLive(1,2)

		expect(result).toEqual(1)
	})

	test("live when there are exact 3 neighbours", () => {
		const result = dieOrLive(0,3)

		expect(result).toEqual(1)
	})

	test("die when there are more than 3 neighbours", () => {
		const result = dieOrLive(1,4)

		expect(result).toEqual(0)
	})

})
