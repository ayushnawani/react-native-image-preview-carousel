import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';

const PREVIEW_IMAGE_WIDTH = 100;
const PREVIEW_IMAGE_HORIZONTAL_MARGIN = 2.5;

const styleType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.array,
]);

/**
 * An Image Preview component
 */

export default class ImagePreviewCarousel extends Component {
  static propTypes = {
    containerStyle: styleType,

    mainFlatListContainerStyle: styleType,

    mainItemContainerStyle: styleType,

    mainImageStyle: styleType,

    previewFlatListContainerStyle: styleType,

    previewImageContainerStyle: styleType,

    previewImageStyle: styleType,

    selectedPreviewImageContainerStyle: styleType,
  };

  static defaultProps = {
    containerStyle: {},

    mainFlatListContainerStyle: {},

    mainItemContainerStyle: {},

    mainImageStyle: {},

    previewFlatListContainerStyle: {},

    previewImageContainerStyle: {},

    previewImageStyle: {},

    selectedPreviewImageContainerStyle: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      activeItem: {
        item: this.props.data[0],
        index: 0,
      },
      mainItemWidth: Dimensions.get('window').width,
    };
  }

  componentWillMount() {
    Dimensions.addEventListener('change', this.handleOrientation);
  }

  componentWillUnmount() {
    // Important to stop updating state after unmount
    Dimensions.removeEventListener('change', this.handleOrientation);
  }

  handleOrientation = event => {
    const { width } = event.window;

    this.setState(
      {
        mainItemWidth: width,
      },
      () => {
        this.previewList.scrollToIndex({
          animated: true,
          index: this.state.activeItem.index,
          viewPosition: 0.5,
        });
        this.headviewList.scrollToIndex({
          animated: true,
          index: this.state.activeItem.index,
          viewPosition: 0,
        });
      }
    );
  };

  renderMainItem = ({ item, index }) => {
    return (
      <View
        style={[
          { width: this.state.mainItemWidth },
          styles.mainItemContainerStyle,
          this.props.mainItemContainerStyle,
        ]}
      >
        <Image
          source={item}
          style={[styles.mainImageStyle, this.props.mainImageStyle]}
          resizeMode="contain"
        />
      </View>
    );
  };

  renderPreviewItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState(
            {
              activeItem: {
                item,
                index,
              },
            },
            () => {
              this.headviewList.scrollToIndex({
                animated: false,
                index,
                viewPosition: 0,
              });
            }
          );
        }}
        style={
          this.state.activeItem.index === index
            ? [
                styles.selectedPreviewImageContainer,
                this.props.selectedPreviewImageContainerStyle,
              ]
            : [
                styles.previewImageContainer,
                this.props.previewImageContainerStyle,
              ]
        }
      >
        <Image
          source={item}
          style={[styles.previewImageStyle, this.props.previewImageStyle]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    if (viewableItems && viewableItems[0]) {
      let { item, index } = viewableItems[0];
      this.setState(
        {
          activeItem: {
            item,
            index,
          },
        },
        () => {
          this.previewList.scrollToIndex({
            animated: true,
            index,
            viewPosition: 0.5,
          });
        }
      );
    }
  };

  getMainItemLayout = (data, index) => ({
    length: this.state.mainItemWidth,
    offset: this.state.mainItemWidth * index,
    index,
  });

  getPreviewItemLayout = (data, index) => ({
    length: PREVIEW_IMAGE_WIDTH + 2 * PREVIEW_IMAGE_HORIZONTAL_MARGIN,
    offset: (PREVIEW_IMAGE_WIDTH + 2 * PREVIEW_IMAGE_HORIZONTAL_MARGIN) * index,
    index,
  });

  viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
  };

  keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={[styles.containerStyle, this.props.containerStyle]}>
        <View
          style={[
            styles.mainFlatListContainerStyle,
            this.props.mainFlatListContainerStyle,
          ]}
        >
          <FlatList
            ref={ref => (this.headviewList = ref)}
            viewabilityConfig={this.viewabilityConfig}
            onViewableItemsChanged={this.onViewableItemsChanged}
            horizontal
            data={this.state.data}
            renderItem={this.renderMainItem}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            getItemLayout={this.getMainItemLayout}
            pagingEnabled={true}
            maximumZoomScale={1.0}
            directionalLockEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            {...this.props.mainFlatListProps}
          />
        </View>
        <View
          style={[
            styles.previewFlatListContainerStyle,
            this.props.previewFlatListContainerStyle,
          ]}
        >
          <FlatList
            ref={ref => {
              this.previewList = ref;
            }}
            getItemLayout={this.getPreviewItemLayout}
            horizontal
            data={this.state.data}
            renderItem={this.renderPreviewItem}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            {...this.props.previewFlatListProps}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainFlatListContainerStyle: {
    flex: 5,
  },

  previewImageStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewFlatListContainerStyle: {
    flex: 1.4,
    backgroundColor: 'rgb(38,38,38)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgb(21,32,40)',
  },
  previewImageContainer: {
    flex: 1,
    marginHorizontal: PREVIEW_IMAGE_HORIZONTAL_MARGIN,
    borderRadius: 5,
    width: PREVIEW_IMAGE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedPreviewImageContainer: {
    flex: 1,
    marginHorizontal: PREVIEW_IMAGE_HORIZONTAL_MARGIN,
    borderRadius: 5,
    width: PREVIEW_IMAGE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#F2F2F2',
  },

  mainItemContainerStyle: {
    flex: 1,
    height: '100%',
  },
  mainImageStyle: {
    height: '100%',
    width: '100%',
  },
});
