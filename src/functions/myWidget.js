import generateSignature from './generateSignature'

// * put all new variables at the end
const myWidget = (
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
) => {
  const widget =
    !!window.cloudinary &&
    window.cloudinary.createUploadWidget(
      {
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
        ...(generateSignatureUrl && { use_filename: use_filename }),
        ...(generateSignatureUrl && { eager: eager }),
        ...(generateSignatureUrl && { unique_filename: unique_filename }),
        ...(generateSignatureUrl && {
          prepareUploadParams: async (cb, params) =>
            await generateSignature(
              cb,
              params,
              {
                generateSignatureUrl,
                accepts,
                contentType,
                withCredentials,
                customPublicId,
                eager,
                apiKey,
                resourceType,
                unique_filename,
                use_filename
              },
              logging
            )
        })
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          logging && console.log('Done! Here is the image info: ', result.info)
          logging && console.log(result)
          !!onSuccess && onSuccess(result)
          destroy && widget.destroy()
        } else if (!!error) {
          !!onFailure
            ? onFailure({ error: error, result: result })
            : logging && console.log({ error: error, result: result })
          destroy && widget.destroy()
        } else if (!!resourceType && result.info === 'shown') {
          logging && console.log('setting resourceType')
          // document.querySelector(
          //   '.cloudinary_fileupload'
          // ).accept = `${resourceType}/*`
        } else {
          logging && console.log(result)
        }
      }
    )
  widget.open()
}

export default myWidget
