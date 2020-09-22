import React from 'react'

import useScript from './useScript'

const Widget = ({ cloudName, uploadPreset, buttonText, style }) => {
  useScript('https://widget.cloudinary.com/v2.0/global/all.js')

  const myWidget = () => {
    const widget =
      !!window.cloudinary &&
      window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info)
          }
        }
      )
    widget.open()
  }

  return (
    <>
      <button
        style={
          style || {
            color: 'white',
            border: 'none',
            width: '120px',
            backgroundColor: 'green',
            borderRadius: '4px',
            height: '25px'
          }
        }
        onClick={() => myWidget()}
      >
        {buttonText || 'Upload files'}
      </button>
    </>
  )
}

export default Widget
