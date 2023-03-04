package com.slider

import android.content.Context
import android.widget.FrameLayout
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter

fun SliderHostView.onValueChange(
  from: Float,
  to: Float
) {
  val event = Arguments.createMap()
  event.putDouble("from", from.toDouble())
  event.putDouble("to", to.toDouble())
  val reactContext = context as ReactContext
  reactContext.getJSModule(RCTEventEmitter::class.java).receiveEvent(id, "onValueChange", event)
}

class SliderHostView(context: Context) : FrameLayout(context),
  AppFlexibleSlider.OnValueChangeListener {
  var slider: AppFlexibleSlider

  init {
    slider = AppFlexibleSlider(context)
    addView(slider)
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()
    slider.addOnValueChangeListener(this)
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()
    slider.removeOnValueChangeListener(this)
  }

  override fun onValueChange(
    from: Float,
    to: Float,
    state: AppFlexibleSlider.ValueChangeState
  ) {
    onValueChange(from, to)
  }
}
