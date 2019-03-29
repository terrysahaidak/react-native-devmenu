/* global __DEV__ */

import React from 'react';
import {
  StyleSheet,
  NativeModules,
  PanResponder,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function panResponderHandler(numberOfTouches) {
  return (evt, gestureState) => {
    if (
      gestureState.numberActiveTouches === numberOfTouches &&
      typeof NativeModules.DevMenu !== 'undefined'
    ) {
      NativeModules.DevMenu.show();
    }
    return false;
  };
}

function noop() {}

class DevMenuOnTouch extends React.PureComponent {
  static defaultProps = {
    numberOfTouches: 3,
  };

  constructor(props) {
    super(props);

    const handler = panResponderHandler(props.numberOfTouches);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: handler,
      onMoveShouldSetPanResponderCapture: noop,
      onPanResponderMove: noop,
      onPanResponderRelease: noop,
      onPanResponderEnd: noop,
    });
  }

  render() {
    if (!__DEV__) {
      return this.props.children;
    }

    return (
      <View
        pointerEvents="box-none"
        style={styles.container}
        {...this.panResponder.panHandlers}
      >
        {this.props.children}
      </View>
    );
  }
}

export default DevMenuOnTouch;
