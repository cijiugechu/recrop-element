import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import ReImgaeCrop from "./lib"

const imgSrc = "https://github.github.io/image-crop-element/examples/ams.jpg"

function App() {
	const handleChange = () => {
		console.log("handleChange")
	}

	return (
		<ReImgaeCrop
			src={imgSrc}
			loadingImage={logo}
			rounded={true}
			onImageChange={handleChange}
			displayX
			displayY
			displayWidth
			displayHeight
		/>
	)
}

export default App
