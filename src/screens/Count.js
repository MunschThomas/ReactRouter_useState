import { useState, useEffect } from "react"

import "./Count.css"

const Count = () => {
	const [count, setCount] = useState(0)
	useEffect(() => {
		console.log("chaton 02")
	}, [count])
	useEffect(() => {
		console.log("chaton 03")
	}, [])

	return (
		<div className="count">
			{console.log("chaton 01")}
			<h1>Count : {count}</h1>
			<button className="count-btn" onClick={() => setCount(count + 1)}>
				+
			</button>
			<button className="count-btn" onClick={() => setCount(count - 1)}>
				-
			</button>
		</div>
	)
}

export default Count
