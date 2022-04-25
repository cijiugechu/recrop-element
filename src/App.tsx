import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import ReImgaeCrop from "./lib"

function App() {
	const handleChange = () => {
		console.log("handleChange")
	}

	return (
		<ReImgaeCrop src={logo} rounded={true} onImageChange={handleChange} />
	)
}

export default App
