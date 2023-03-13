# react-cloudinary-upload-widget

[![NPM](https://img.shields.io/npm/v/react-cloudinary-upload-widget.svg)](https://www.npmjs.com/package/react-cloudinary-upload-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cloudinary-upload-widget
```

## Usage

```jsx
import React from 'react'

import { WidgetLoader, Widget } from 'react'-cloudinary-upload-widget'

const Example = () => {
  return (
    <>
      <WidgetLoader /> // add to top of file. Only use once.
      <Widget
        sources={['local', 'camera', 'dropbox']} // set the sources available for uploading -> by default
        // all sources are available. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        sourceKeys={{dropboxAppKey: '1dsf42dl1i2', instagramClientId: 'd7aadf962m'}} // add source keys
        // and ID's as an object. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={'example_cloudname'} // your cloudinary account cloud name.
        // Located on https://cloudinary.com/console/
        uploadPreset={'preset1'} // check that an upload preset exists and check mode is signed or unisgned
        buttonText={'Open'} // default 'Upload Files'
        style={{
              color: 'white',
              border: 'none',
              width: '120px',
              backgroundColor: 'green',
              borderRadius: '4px',
              height: '25px'
            }} // inline styling only or style id='cloudinary_upload_button'
        folder={'my_folder'} // set cloudinary folder name to send file
        cropping={false} // set ability to crop images -> default = true
        // https://support.cloudinary.com/hc/en-us/articles/203062071-How-to-crop-images-via-the-Upload-Widget-#:~:text=Click%20on%20the%20%22Edit%22%20link,OK%22%20and%20Save%20the%20changes.
        // more information here on cropping. Coordinates are returned or upload preset needs changing
        multiple={true} // set to false as default. Allows multiple file uploading
        // will only allow 1 file to be uploaded if cropping set to true
        autoClose={false} // will close the widget after success. Default true
        onSuccess={successCallBack} // add success callback -> returns result
        onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
        logging={false} // logs will be provided for success and failure messages,
        // set to false for production -> default = true
        customPublicId={'sample'} // set a specific custom public_id.
        // To use the file name as the public_id use 'use_filename={true}' parameter
        eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
        use_filename={false} // tell Cloudinary to use the original name of the uploaded
        // file as its public ID -> default = true,

        widgetStyles={{
          palette: {
            window: '#737373',
            windowBorder: '#FFFFFF',
            tabIcon: '#FF9600',
            menuIcons: '#D7D7D8',
            textDark: '#DEDEDE',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#B3B3B3',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#909090'
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: 'https://fonts.googleapis.com/css?family=Fira+Sans',
              active: true
            }
          }
        }} // ability to customise the style of the widget uploader
        destroy={true} // will destroy the widget on completion


        // 👇 FOR SIGNED UPLOADS ONLY 👇

        generateSignatureUrl={'http://my_domain.com/api/v1/media/generate_signature'} // pass the api
        // endpoint for generating a signature -> check cloudinary docs and SDK's for signing uploads
        apiKey={00000000000000} // cloudinary API key -> number format
        accepts={'application/json'} // for signed uploads only -> default = 'application/json'
        contentType={'application/json'} // for signed uploads only -> default = 'application/json'
        withCredentials={true} // default = true -> check axios documentation for more information
        unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make
        // the Public ID unique, and just use the normalized file name -> default = true

      />
    </>
  )
}
```

## Example Backend for Signed Uploads (ruby)

In the latest release. We have changed from a 'get' request to a 'post' request due to this request being blocked by many WAF's/Firewalls. This means you'll need to change you signature endpoint to a 'post' and potentially change how the params are unpacked.

example of backend process to create signature for signing uploads to cloudinary. The params will need to be turned into a hash in order to work with Cloudinary's sdk.

Check cloudinary documentation for more information on signing uploads, generating signatures and the various language specific SDK's available for this process.

This example is from their ruby SDK

```ruby
  def generate_signature
    render json: Cloudinary::Utils.api_sign_request(params[:params_to_sign]to_unsafe_hash, ENV['CLOUDINARY_SECRET'])
  end
```

## License

MIT © [bubbaspaarx](https://github.com/bubbaspaarx)

---


