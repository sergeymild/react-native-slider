#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RangeSliderViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(params, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onValueChange,RCTBubblingEventBlock)
@end

@interface RCT_EXTERN_MODULE(SliderViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(params, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onValueChange,RCTBubblingEventBlock)
@end
