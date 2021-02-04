import generateSignature from './generateSignature'

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
  multiple
) => {
  const widget =
    !!window.cloudinary &&
    window.cloudinary.createUploadWidget(
      {
        // showCompletedButton: true,
        multiple: multiple,
        singleUploadAutoClose: true,
        showAdvancedOptions: true,
        showPoweredBy: false,
        googleDriveClientId: googleDriveClientId,
        sources: sources,
        ...(sourceKeys && sourceKeys),
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        folder: folder,
        cropping: cropping,
        resourceType: resourceType,
        ...(generateSignatureUrl && { use_filename: use_filename }),
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
                resourceType
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
        } else if (!!error) {
          !!onFailure
            ? onFailure({ error: error, result: result })
            : logging && console.log({ error: error, result: result })
        } else if (!!resourceType && result.info === 'shown') {
          console.log('setting resourceType')
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
