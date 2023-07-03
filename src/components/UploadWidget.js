import React from 'react'
import WidgetButton from './WidgetButton'
import createUploadDialog from 'react-cloudinary-upload-widget/src/functions/createUploadDialog'

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
  getCustomHeaders = null,
  onSuccess = null,
  onFailure = null,
  logging = true,
  customPublicId = null,
  eager = null,
  withCredentials = true,
  apiKey = null,
  accepts = 'application/json',
  contentType = 'application/json',
  // use_filename = true,
  // unique_filename = false,
  googleDriveClientId = null,
  multiple = false,
  buttonType = 'button',
  destroy = false,
  autoClose = true
}) => {
  // * put all new variables at the end
  const openUploadDialogFunction = () =>
    createUploadDialog(
      sources,
      sourceKeys,
      resourceType,
      cloudName,
      uploadPreset,
      folder,
      cropping,
      generateSignatureUrl,
      getCustomHeaders,
      onSuccess,
      onFailure,
      logging,
      customPublicId,
      eager,
      // apiKey,
      accepts,
      contentType,
      withCredentials,
      // use_filename,
      // unique_filename,
      googleDriveClientId,
      multiple,
      widgetStyles,
      destroy,
      autoClose
    )

  return (
    <WidgetButton
      myWidgetFunction={openUploadDialogFunction}
      buttonText={buttonText}
      buttonType={buttonType}
      style={style}
    />
  )
}

export default UploadWidget
