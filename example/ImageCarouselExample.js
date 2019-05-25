import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';

import ImagePreviewCarousel from '../src';

const ROW_HEIGHT = 60;
const HEADER_HEIGHT = 100;

let source = [
  require('./images/pic1.png'),
  require('./images/pic2.png'),
  require('./images/pic3.png'),
  require('./images/pic4.png'),
  require('./images/pic5.png'),
  require('./images/pic6.png'),
  require('./images/pic7.png'),
  require('./images/pic8.png'),
  require('./images/pic9.png'),
  require('./images/pic10.png'),
  require('./images/pic11.png'),
  require('./images/pic12.png'),
  require('./images/pic13.png'),
  require('./images/pic14.png'),
  require('./images/pic15.png'),
  require('./images/pic16.png'),
  require('./images/pic17.png'),
  require('./images/pic18.png'),
  require('./images/pic19.png'),
  require('./images/pic20.png'),
  require('./images/pic21.png'),
  require('./images/pic22.png'),
  require('./images/pic23.png'),
  require('./images/pic24.png'),
  require('./images/pic25.png'),
  require('./images/pic26.png'),
  require('./images/pic29.png'),
  require('./images/pic30.png'),
];

export default class ImagePreviewCarouselExample extends Component {
  getItemLayout = (data, index) => ({
    length: ROW_HEIGHT + 20,
    offset: (ROW_HEIGHT + 20) * index + HEADER_HEIGHT,
    index,
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ImagePreviewCarousel
          data={source}
          selectedPreviewImageContainerStyle={{}}
          mainImageStyle={{ backgroundColor: '#F2F2F2' }}
          previewFlatListProps={{}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
