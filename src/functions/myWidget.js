const myWidget = (
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
  unique_filename
) => {
  debugger
  const defaultPublicId = 'image_upload'
  const widget =
    !!window.cloudinary &&
    window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        folder: folder,
        cropping: cropping,
        use_filename: use_filename,
        ...(generateSignatureUrl && { unique_filename: unique_filename }),
        ...(generateSignatureUrl && {
          prepareUploadParams: (cb, params) =>
            generateSignature(cb, params, {
              generateSignatureUrl,
              accepts,
              contentType,
              withCredentials,
              customPublicId,
              eager,
              apiKey
            })
        })
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          logging && console.log('Done! Here is the image info: ', result.info)
          logging && console.log(result)
          !!onSuccess && onSuccess(result)
        } else {
          !!onFailure
            ? onFailure({ error: error, result: result })
            : console.log('failed')
        }
      }
    )
  widget.open()
}

export default myWidget
