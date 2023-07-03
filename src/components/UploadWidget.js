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
  apiKey = null,
  accepts = 'application/json',
  contentType = 'application/json',
  withCredentials = true,
  useFilename = true,
  uniqueFilename = false,
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
      apiKey,
      accepts,
      contentType,
      withCredentials,
      useFilename,
      uniqueFilename,
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
