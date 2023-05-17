@objc(RangeSliderViewManager)
class RangeSliderViewManager: RCTViewManager {
    
    override func view() -> (RangeSliderView) {
        return RangeSliderView()
    }
    
    @objc
    override static func requiresMainQueueSetup() -> Bool {
        return false
    }
}

@objc(SliderViewManager)
class SliderViewManager: RCTViewManager {
    
    override func view() -> SliderView {
        return SliderView()
    }
    
    @objc
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}

class SliderView : UIView {
    let slider = RangeSeekSlider()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubview(slider)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc
    var onValueChange: RCTBubblingEventBlock?
    
    @objc
    func setParams(_ params: [String: Any]) {
        slider.maxValue = RCTConvert.cgFloat(params["maximumValue"])

        slider.selectedMaxValue = RCTConvert.cgFloat(params["to"])

        slider.lineHeight = RCTConvert.cgFloat(params["trackHeight"])
        
        if params["step"] != nil {
            slider.enableStep = true
            slider.step = RCTConvert.cgFloat(params["step"])
        }
        
        slider.colorBetweenHandles = RCTConvert.uiColor(params["trackColorActive"])
        slider.tintColor = RCTConvert.uiColor(params["trackColorInactive"])
        slider.handleColor = RCTConvert.uiColor(params["thumbFillColor"])
        slider.handleBorderColor = RCTConvert.uiColor(params["thumbStrokeColor"])
        slider.handleBorderWidth = RCTConvert.cgFloat(params["thumbStrokeWidth"])
        slider.handleDiameter = RCTConvert.cgFloat(params["thumbRadius"]) * 2
        slider.selectedHandleDiameterMultiplier = 1
        slider.disableRange = true
        slider.hideLabels = true
        slider.onValueChange = { [weak self] _, max in
            self?.onValueChange?(["to": max])
        }
        slider.refresh()
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        slider.frame = .init(origin: .zero, size: frame.size)
    }
    
}


class RangeSliderView : UIView {
    
    let slider = RangeSeekSlider()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubview(slider)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc
    var onValueChange: RCTBubblingEventBlock?
    
    @objc
    func setParams(_ params: [String: Any]) {
        slider.minValue = CGFloat(params["minimumValue"] as! Double)
        slider.maxValue = CGFloat(params["maximumValue"] as! Double)
        
        slider.selectedMinValue = RCTConvert.cgFloat(params["from"])
        slider.selectedMaxValue = RCTConvert.cgFloat(params["to"])
        
        slider.minDistance = CGFloat(params["minimumRange"] as! Double)
        
        slider.lineHeight = CGFloat(params["trackHeight"] as! Double)
        
        if params["step"] != nil {
            slider.enableStep = true
            slider.step = RCTConvert.cgFloat(params["step"])
        }
        
        slider.colorBetweenHandles = RCTConvert.uiColor(params["trackColorActive"])
        slider.tintColor = RCTConvert.uiColor(params["trackColorInactive"])
        slider.handleColor = RCTConvert.uiColor(params["thumbFillColor"])
        slider.handleBorderColor = RCTConvert.uiColor(params["thumbStrokeColor"])
        slider.handleBorderWidth = RCTConvert.cgFloat(params["thumbStrokeWidth"])
        slider.handleDiameter = RCTConvert.cgFloat(params["thumbRadius"]) * 2
        slider.selectedHandleDiameterMultiplier = 1
        slider.hideLabels = true
        slider.onValueChange = { [weak self] min, max in
            self?.onValueChange?(["from": min, "to": max])
        }
        slider.refresh()
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        slider.frame = .init(origin: .zero, size: frame.size)
    }
}
