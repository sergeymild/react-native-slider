import * as React from 'react';

import { NativeSyntheticEvent, StyleSheet, View } from 'react-native';
import {
  OnValueChange,
  RangeSliderView,
  SliderView,
} from 'react-native-slider';
import { useCallback } from 'react';

export default function App() {
  const onValueChange = useCallback(
    (event: NativeSyntheticEvent<OnValueChange>) => {
      //console.log('[App.]', event.nativeEvent.from, event.nativeEvent.to);
    },
    []
  );

  return (
    <View style={styles.container}>
      <RangeSliderView
        onValueChange={onValueChange}
        params={{
          maximumValue: 98,
          minimumValue: 18,
          from: 10,
          to: 50,
          trackHeight: 2,
          thumbStrokeWidth: 2,
          thumbStrokeColor: '#4B4C4D',
          thumbFillColor: 'white',
          thumbElevation: 4,
          thumbRadius: 12,
          trackColorInactive: 'red',
          trackColorActive: 'yellow',
        }}
        style={styles.box}
      />

      <SliderView
        onValueChange={onValueChange}
        params={{
          maximumValue: 98,
          minimumValue: 18,
          from: 10,
          to: 50,
          trackHeight: 2,
          thumbStrokeWidth: 2,
          thumbStrokeColor: '#4B4C4D',
          thumbFillColor: 'white',
          thumbElevation: 4,
          thumbRadius: 12,
          trackColorInactive: 'red',
          trackColorActive: 'yellow',
        }}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '90%',
    height: 60,
    marginVertical: 20,
  },
});
