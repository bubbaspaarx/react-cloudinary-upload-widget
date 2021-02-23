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
}) => {
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
      multiple
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

// params_to_sign: [
//   ...(eager ? [`eager=${eager}`] : []),
//   ...(imageName ? [`public_id=${imageName}`] : []),
//   ...(req.source ? [`source=${req.source}`] : []),
//   `timestamp=${req.timestamp}`,
//   ...(req.upload_preset
//     ? [`upload_preset=${req.upload_preset}`]
//     : [])
export default UploadWidget
