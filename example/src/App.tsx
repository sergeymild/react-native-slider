import * as React from 'react';
import { useCallback } from 'react';

import { NativeSyntheticEvent, StyleSheet, View } from 'react-native';
import {
  OnRangeValueChange,
  RangeSliderView,
  SliderView,
} from 'react-native-slider';

export default function App() {
  const onValueChange = useCallback(
    (event: NativeSyntheticEvent<OnRangeValueChange>) => {
      console.log('[App.]', event.nativeEvent.from, event.nativeEvent.to);
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
          minimumRange: 20,
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
        onValueChange={(value) => console.log('[App.]', value.nativeEvent.to)}
        params={{
          minimumValue: 30,
          maximumValue: 98,
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
    width: '100%',
    height: 60,
    marginVertical: 20,
  },
});
