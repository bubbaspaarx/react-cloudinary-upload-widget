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
  },
  logging
) => {
  params = [].concat(params) //params can be a single object or an array of objects
  logging && console.log(params, 'Params')
  Promise.all(
    params.map((req) => {
      const uploadParams = req
      return getterFunction({
        url: generateSignatureUrl,
        data: {
          params_to_sign: {
            ...(req.filename_override && {
              filename_override: req.filename_override
            }),
            ...(eager && { eager: eager }),
            ...(customPublicId && { public_id: customPublicId }),
            ...(req.source && { source: req.source }),
            timestamp: req.timestamp,
            unique_filename: req.unique_filename,
            ...(req.upload_preset && {
              upload_preset: req.upload_preset
            }),
            ...(req.use_filename && { use_filename: req.use_filename })
          }
        },
        accepts: accepts,
        contentType: contentType,
        withCredentials: withCredentials
      }).then((response) => {
        logging && console.log(response, 'Signature Response')
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
    logging && console.log(results, 'Results')
    cb(results.length === 1 ? results[0] : results)
  })
}

export default generateSignature
