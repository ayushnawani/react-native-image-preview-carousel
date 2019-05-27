# react-native-image-preview-carousel

An Image Preview component

## Installation

`npm install react-native-image-preview-carousel`

## Basic Usage

```
import ImagePreviewCarousel from 'react-native-image-preview-carousel';

let source = [
require('./images/pic1.png'),
require('./images/pic2.png'),
require('./images/pic3.png'),
require('./images/pic4.png'),
require('./images/pic5.png')
]

<ImagePreviewCarousel
 data={source}
 selectedPreviewImageContainerStyle={{}}
 mainImageStyle={{ backgroundColor: '#F2F2F2'}}
 previewFlatListProps={{}} />
```

## Example

Please check the [example](https://github.com/ayushnawani/react-native-image-preview-carousel/blob/master/example/ImageCarouselExample.js) folder.

![](https://github.com/ayushnawani/react-native-image-preview-carousel/blob/master/example/demo.gif)

## Props

### `data`

type `array`
required: YES
description: Array of Images

### `mainFlatListProps`

type `object`
defaultValue: `{}`
description: You can pass all the flatlist props to Main Image Flatlist

### `previewFlatListProps`

type `object`
defaultValue: `{}`
description: You can pass all the flatlist props to Preview Image Flatlist

### `containerStyle`

type: `style`
defaultValue: `{}`

### `mainFlatListContainerStyle`

type: `style`
defaultValue: `{}`

### `mainImageStyle`

type: `style`
defaultValue: `{}`

### `mainImageContainerStyle`

type: `style`
defaultValue: `{}`

### `previewFlatListContainerStyle`

type: `style`
defaultValue: `{}`

### `previewImageContainerStyle`

type: `style`
defaultValue: `{}`

### `previewImageStyle`

type: `style`
defaultValue: `{}`

### `selectedPreviewImageContainerStyle`

type: `style`
defaultValue: `{}`
