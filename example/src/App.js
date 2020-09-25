import React from 'react'
import { Widget } from 'react-cloudinary-upload-widget'

const App = () => (
  <Widget
    sources={['local', 'camera']}
    resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
    cloudName={'goatagency'} // your cloudinary account cloud name. Located on https://cloudinary.com/console/
    uploadPreset={'ml_default'} // check that an upload preset exists and check mode is signed or unisgned
    buttonText={'Open'} // default 'Upload Files'
    style={null} // inline styling only or style id='cloudinary_upload_button'
    generateSignatureUrl={
      'http://localhost:3000/api/v1/contents/generate_signature'
    } // e.g. 'http://my_domain.com/api/v1/media/generate_signature' -> check cloudinary docs for signing uploads
    apiKey={'333719262292942'} // cloudinary API key -> number format
    // folder // set cloudinary folder name to send file
    // cropping // set ability to crop images -> default = true
    // onSuccess // add success callback -> returns result
    // onFailure // add failure callback -> returns 'response.error' + 'response.result'
    // logging={false} // default = true
    // imageName // set a specific image name
    // eager // e.g. 'w_400,h_300,c_pad|w_260,h_200,c_crop'
    // accepts // for signed uploads only -> default = 'application/json'
    // contentType // for signed uploads only -> default = 'application/json'
    // withCredentials // default = true -> check axios documentation for more information
    // use_filename // tell Cloudinary to use the original name of the uploaded file as its public ID -> default = true,
    // unique_filename // setting it to false, you can tell Cloudinary not to attempt to make the Public ID unique, and just use the normalized file name -> default = true
  />
)

export default App
