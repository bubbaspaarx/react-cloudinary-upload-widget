import React from 'react'
import UploadWidget from './components/UploadWidget'
import useScript from './_hooks_/useScript'

export const WidgetLoader = () => (
  <>{useScript('https://widget.cloudinary.com/v2.0/global/all.js')}</>
)
export const Widget = (props) => <UploadWidget {...props} />
