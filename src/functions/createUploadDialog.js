import generateSignature from 'react-cloudinary-upload-widget/src/functions/generateSignature'

// * put all new variables at the end
const createUploadDialog = (
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
) => {
  const widgetOptions = {
    showCompletedButton: true,
    multiple: multiple,
    singleUploadAutoClose: autoClose,
    showAdvancedOptions: true,
    showPoweredBy: false,
    styles: widgetStyles,
    googleDriveClientId: googleDriveClientId,
    sources: sources,
    ...(sourceKeys && sourceKeys),
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    folder: folder,
    cropping: cropping,
    resourceType: resourceType,
    // ...(generateSignatureUrl && { use_filename: use_filename }),
    ...(generateSignatureUrl && { eager: eager }),
    // ...(generateSignatureUrl && { unique_filename: unique_filename }),
    ...(generateSignatureUrl && {
      prepareUploadParams: async (cb, params) =>
        generateSignature(
          cb,
          params,
          {
            generateSignatureUrl,
            getCustomHeaders,
            accepts,
            contentType,
            withCredentials,
            customPublicId,
            eager,
            // apiKey,
            resourceType
            // unique_filename,
            // use_filename
          },
          logging
        )
    })
  }

  const resultCallback = (error, result) => {
    if (!error && result && result.event === 'success') {
      logging && console.log('Done! Here is the image info: ', result.info)
      logging && console.log(result)
      !!window.cloudinaryOnSuccessCallback &&
        window.cloudinaryOnSuccessCallback(result)
      if (destroy) {
        window.createUploadDialog.destroy()
        window.createUploadDialog = null
      }
    } else if (error) {
      window.cloudinaryOnFailureCallback
        ? window.cloudinaryOnFailureCallback({ error: error, result: result })
        : logging && console.log({ error: error, result: result })
      if (destroy) {
        window.createUploadDialog.destroy()
        window.createUploadDialog = null
      }
    } else if (!!resourceType && result.info === 'shown') {
      logging && console.log('setting resourceType')
    } else {
      logging && console.log(result)
    }
  }

  window.cloudinaryOnSuccessCallback = onSuccess
  window.cloudinaryOnFailureCallback = onFailure

  if (window.createUploadDialog) {
    window.createUploadDialog.update(widgetOptions)
  } else {
    window.createUploadDialog = window.cloudinary.createUploadWidget(
      widgetOptions,
      resultCallback
    )
  }

  window.createUploadDialog.open()
}

export default createUploadDialog
