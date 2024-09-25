import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path} from 'react-native-svg';

const CalendarIcon = () => (
    <View style={styles.icon}>
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
            <Path d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM2 8V18H18V8H2ZM4 12H9V16H4V12Z" fill="#4A3780" />
        </Svg>
    </View>
);
const styles = StyleSheet.create({

    icon: {
        height: 58,
        width: 58,
        backgroundColor: '#E7E2F3',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
export default CalendarIcon;
