import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const ClockIcon = () => (
  <View style={styles.icon}>
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_2_114)">
        <Path
          d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39762 1.66669 9.99999C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
          stroke="#4A3780"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 5V10L13.3333 11.6667"
          stroke="#4A3780"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_114">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
});

export default ClockIcon;
