import logo from "./logo.svg"
import "./App.css"
import ReImgaeCrop from "./lib"

const imgSrc = "https://github.github.io/image-crop-element/examples/ams.jpg"

function App() {
	return (
		<ReImgaeCrop
			src={imgSrc}
			loadingImage={logo}
			rounded={true}
			onImageChange={(event) => {
				console.log(
					"Crop area changed.",
					event.detail.x,
					event.detail.y,
					event.detail.width,
					event.detail.height
				)
			}}
			displayX
			displayY
			displayWidth
			displayHeight
		/>
	)
}

export default App
