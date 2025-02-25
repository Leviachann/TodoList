import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const ListIcon = () => (
    <View style={styles.icon}>
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <Rect width="48" height="48" rx="24" fill="#DBECF6" />
      <G clipPath="url(#clip0_2_99)">
        <Path
          d="M32 34H16C15.7348 34 15.4804 33.8946 15.2929 33.7071C15.1054 33.5196 15 33.2652 15 33V15C15 14.7348 15.1054 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14H32C32.2652 14 32.5196 14.1054 32.7071 14.2929C32.8946 14.4804 33 14.7348 33 15V33C33 33.2652 32.8946 33.5196 32.7071 33.7071C32.5196 33.8946 32.2652 34 32 34ZM31 32V16H17V32H31ZM20 19H28V21H20V19ZM20 23H28V25H20V23ZM20 27H28V29H20V27Z"
          fill="#194A66"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_99">
          <Rect width="24" height="24" fill="white" transform="translate(12 12)" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);
const styles = StyleSheet.create({

    icon: {
        height: 58,
        width: 58,
        backgroundColor: '#DBECF6',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
export default ListIcon;
