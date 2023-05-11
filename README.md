# react-native-slider

S

## Installation

```sh
"react-native-slider":"sergeymild/react-native-slider#0.4.0"
```

## Usage

```js
import { SliderView, RangeSliderView } from "react-native-slider";

// ...

 const onValueChange = useCallback(
   (event: NativeSyntheticEvent<OnRangeValueChange>) => {
     console.log('[App.]', event.nativeEvent.from, event.nativeEvent.to);
   },[]
 );

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
     onValueChange={(event) => console.log('[App.]', value.event.to)}
     params={{
       minimumValue: 18,
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
