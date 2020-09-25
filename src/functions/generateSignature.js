import { getterFunction } from './getterFunction'

const generateSignature = (
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
  }
) => {
  params = [].concat(params) //params can be a single object or an array of objects
  Promise.all(
    params.map((req) => {
      const uploadParams = req
      return getterFunction({
        url: generateSignatureUrl,
        data: {
          params_to_sign: {
            ...(eager && { eager: eager }),
            ...(customPublicId && { public_id: customPublicId }),
            ...(req.source && { source: req.source }),
            timestamp: req.timestamp,
            unique_filename: req.unique_filename,
            ...(req.upload_preset && {
              upload_preset: req.upload_preset
            }),
            use_filename: req.use_filename
          }
        },
        accepts: accepts,
        contentType: contentType,
        withCredentials: withCredentials
      }).then((response) => {
        return Object.assign(
          {
            signature: response,
            api_key: apiKey,
            resource_type: resourceType
          },
          uploadParams
        )
      })
    })
  ).then((results) => {
    cb(results.length === 1 ? results[0] : results)
  })
}

export default generateSignature
