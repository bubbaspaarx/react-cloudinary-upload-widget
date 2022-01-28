import React from 'react'
import WidgetButton from './WidgetButton'
import myWidget from '../functions/myWidget'

const UploadWidget = ({
  sources = [],
  sourceKeys = null,
  resourceType = 'auto',
  cloudName = null,
  uploadPreset = null,
  buttonText = null,
  style = null,
  widgetStyles = null,
  folder = null,
  cropping = true,
  generateSignatureUrl,
  onSuccess = null,
  onFailure = null,
  logging = true,
  customPublicId = null,
  eager = null,
  apiKey = null,
  accepts = 'application/json',
  contentType = 'application/json',
  withCredentials = true,
  use_filename = true,
  unique_filename = false,
  googleDriveClientId = null,
  multiple = false,
  buttonType = 'button',
  destroy = false,
  autoClose = true
}) => {
  // * put all new variables at the end
  const myWidgetFunction = () =>
    myWidget(
      sources,
      sourceKeys,
      resourceType,
      cloudName,
      uploadPreset,
      folder,
      cropping,
      generateSignatureUrl,
      onSuccess,
      onFailure,
      logging,
      customPublicId,
      eager,
      apiKey,
      accepts,
      contentType,
      withCredentials,
      use_filename,
      unique_filename,
      googleDriveClientId,
      multiple,
      widgetStyles,
      destroy,
      autoClose
    )

  return (
    <WidgetButton
      myWidgetFunction={myWidgetFunction}
      buttonText={buttonText}
      buttonType={buttonType}
      style={style}
    />
  )
}

export default UploadWidget
