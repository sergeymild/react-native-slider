import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
  processColor,
  NativeSyntheticEvent,
} from 'react-native';
import React, { memo } from 'react';

const LINKING_ERROR =
  `The package 'react-native-slider' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type SliderProps = {
  params: {
    maximumValue: number;
    minimumValue: number;
    from: number;
    to: number;
    trackHeight: number;
    thumbStrokeWidth: number;
    thumbStrokeColor: string;
    thumbFillColor: string;
    thumbElevation: number;
    thumbRadius: number;
    tickColor?: string;
    trackColorActive: string;
    trackColorInactive: string;
  };
  style: ViewStyle;
  onValueChange?: (event: NativeSyntheticEvent<OnValueChange>) => void;
};

export type OnValueChange = { from: number; to: number };

const _RangeSliderView =
  UIManager.getViewManagerConfig('RangeSliderView') != null
    ? requireNativeComponent<SliderProps>('RangeSliderView')
    : () => {
        throw new Error(LINKING_ERROR);
      };

const _SliderView =
  UIManager.getViewManagerConfig('SliderView') != null
    ? requireNativeComponent<SliderProps>('SliderView')
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const RangeSliderView: React.FC<SliderProps> = memo((props) => {
  return (
    <_RangeSliderView
      style={props.style}
      onValueChange={props.onValueChange}
      params={{
        ...props.params,
        thumbStrokeColor: processColor(props.params.thumbStrokeColor) as any,
        thumbFillColor: processColor(props.params.thumbFillColor) as any,
        tickColor: processColor(props.params.tickColor) as any,
        trackColorActive: processColor(props.params.trackColorActive) as any,
        trackColorInactive: processColor(
          props.params.trackColorInactive
        ) as any,
      }}
    />
  );
});

export const SliderView: React.FC<SliderProps> = memo((props) => {
  return (
    <_SliderView
      style={props.style}
      onValueChange={props.onValueChange}
      params={{
        ...props.params,
        thumbStrokeColor: processColor(props.params.thumbStrokeColor) as any,
        thumbFillColor: processColor(props.params.thumbFillColor) as any,
        tickColor: processColor(props.params.tickColor) as any,
        trackColorActive: processColor(props.params.trackColorActive) as any,
        trackColorInactive: processColor(
          props.params.trackColorInactive
        ) as any,
      }}
    />
  );
});
