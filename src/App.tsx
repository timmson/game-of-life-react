import React, {useState} from "react"
import {Board} from "./Board"

function App() {

	const initBoard = (size: number) => Array.from(Array(size)).map((i) => Array.from(Array(size)).map((j) => Math.round(Math.random())))

	const [state, setState] = useState({board: initBoard(10)})

	const tick = () => {
		const newBoard = new Board(state.board).tick().getBoard()
		setState({...state, board: newBoard})
	}

	const reset = () => setState({...state, board: initBoard(10)})

	return (
		<div className="App">
			<h1 className="2xl:text-4xl md:text-4xl font-bold">
				Game of Life
			</h1>
			<div className="flex flex-row justify-center mt-5">
				<div className="grid grid-cols-10 justify-center 2xl:text-6xl sm:text-6xl">
					{
						state.board.map((row, i) =>
							row.map((cell, j) =>
								<div key={i + j} className="border border-gray-300 p-2">{cell === 1 ? "🔴" : "⚪"}</div>
							)
						)
					}
				</div>
			</div>
			<div className="flex flex-row justify-center mt-5">
				<button className="bg-green-500 hover:bg-green-700 text-white text-2xl font-bold py-2 px-4 rounded"
					onClick={() => tick()}>
					Step
				</button>
				<button
					className="bg-orange-500 hover:bg-orange-700 text-white text-2xl font-bold py-2 px-4 rounded ml-2"
					onClick={() => reset()}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default App
