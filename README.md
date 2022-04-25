# recrop-element
React bindings for [image-crop-element](https://github.com/github/image-crop-element).

## Installation
```shell
npm install recrop-element
# or yarn
yarn add recrop-element
# or pnpm
pnpm add recrop-element
```

## Usage

#### Plain
```js
import ReImageCrop from 'recrop-element'

<ReImageCrop src='./your-img.jpg' />
```

#### Rounded crop area
```js
import ReImageCrop from 'recrop-element'

<ReImageCrop src='./your-img.jpg' rounded />
```

#### With loading state
```js
import ReImageCrop from 'recrop-element'

<ReImageCrop src='./your-img.jpg'
             loadingImage='./your-loading-img.jpg' 
/>
```

#### With autoupdate inputs
```js
import ReImageCrop from 'recrop-element'

<ReImageCrop src='./your-img.jpg'
             displayX 
             displayY
             displayWidth
             displayHeight
/>
```

#### Listen to the change event
```js
import ReImageCrop from 'recrop-element'

<ReImageCrop src='./your-img.jpg'
             onImageChange={(event) => {
                 console.log(
                    'Crop area changed.',
                    event.detail.x,
                    event.detail.y,
                    event.detail.width,
                    event.detail.height
                 )
             }}
/>