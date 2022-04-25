import "@github/image-crop-element"
import { useEffect } from "react"

interface ReImgaeCropProps {
	src: string
	rounded: boolean
	loadingImage?: string
	onImageChange?: (event: CustomEvent<ChangeDetail>) => void
	displayX?: boolean
	displayY?: boolean
	displayWidth?: boolean
	displayHeight?: boolean
}

interface ReImgaeCropElementProps {
	src: string
	rounded: boolean
	loadingImage?: string
}

interface ChangeDetail {
	x: number
	y: number
	width: number
	height: number
	[propName: string]: number
}

declare global {
	interface DocumentEventMap {
		"image-crop-change": CustomEvent<ChangeDetail>
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"image-crop": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			> &
				ReImgaeCropElementProps
		}
	}
}

const ReImgaeCrop = (props: ReImgaeCropProps) => {
	const {
		src,
		rounded,
		loadingImage,
		onImageChange,
		displayX,
		displayY,
		displayWidth,
		displayHeight
	} = props

	useEffect(() => {
		if (onImageChange) {
			document.addEventListener("image-crop-change", onImageChange)
		}

		return () => {
			if (onImageChange) {
				document.removeEventListener("image-crop-change", onImageChange)
			}
		}
	}, [])

	return (
		<image-crop src={src} rounded={rounded}>
			{loadingImage ? <img src={loadingImage} data-loading-slot /> : null}
			{displayX ? (
				<input type="text" data-image-crop-input="x" name="x" />
			) : null}
			{displayY ? (
				<input type="text" data-image-crop-input="y" name="y" />
			) : null}
			{displayWidth ? (
				<input type="text" data-image-crop-input="width" name="width" />
			) : null}
			{displayHeight ? (
				<input
					type="text"
					data-image-crop-input="height"
					name="height"
				/>
			) : null}
		</image-crop>
	)
}

export type { ReImgaeCropProps }

export default ReImgaeCrop
