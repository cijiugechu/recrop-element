import "@github/image-crop-element";
import { useEffect } from "react";

interface ReImgaeCropProps {
    src: string,
    rounded: boolean,
    loadingImage?: string,
    onImageChange?: (event: CustomEvent<ChangeDetail>) => void,
}

interface ReImgaeCropElementProps {
    src: string,
    rounded: boolean,
    loadingImage?: string
}

interface ChangeDetail {
  x: number
  y: number
  width: number
  height: number
  [propName: string]: number
}

// interface CustomImageChangeEventMap {
//     'image-crop-change': CustomEvent<ChangeDetail>
// }

declare global {
  interface DocumentEventMap {
    "image-crop-change": CustomEvent<ChangeDetail>;
  }
}

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'image-crop': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & ReImgaeCropElementProps;
      }
    }
  }


const ReImgaeCrop = (props: ReImgaeCropProps) => {
    const {
        src,
        rounded,
        loadingImage,
        onImageChange
    } = props

    useEffect(() => {
        if(onImageChange){
          document.addEventListener('image-crop-change', onImageChange)

        }

        return () => {
            if(onImageChange){
              document.removeEventListener('image-crop-change', onImageChange)
            }
        }
    }, [])

    return (
        <image-crop src={src}
                    rounded={rounded}
        >
          {loadingImage ? <img src={loadingImage} data-loading-slot /> : null}
        </image-crop>
    )
}

export type {
    ReImgaeCropProps,
}

export default ReImgaeCrop