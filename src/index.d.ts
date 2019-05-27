declare module 'react-native-image-preview-carousel' {
  import React from 'react';
  import {
    FlatListProps,
    ViewStyle,
    TextStyle,
    ImageStyle,
    StyleProp,
  } from 'react-native';

  interface ImagePreviewCarouselProps {
    data: Array<any>;

    containerStyle: StyleProp<ViewStyle>;

    mainFlatListContainerStyle: StyleProp<ViewStyle>;

    mainImageContainerStyle: StyleProp<ViewStyle>;

    mainImageStyle: StyleProp<ImageStyle>;

    previewFlatListContainerStyle: StyleProp<ViewStyle>;

    previewImageContainerStyle: StyleProp<ViewStyle>;

    previewImageStyle: StyleProp<ImageStyle>;

    selectedPreviewImageContainerStyle: StyleProp<ViewStyle>;

    mainFlatListProps: FlatListProps<any>;

    previewFlatListProps: FlatListProps<any>;
  }

  class ImagePreviewCarousel extends React.Component<
    ImagePreviewCarouselProps,
    any
  > {}

  export = ImagePreviewCarousel;
}
