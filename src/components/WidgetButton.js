import React from 'react'

const WidgetButton = ({ myWidgetFunction, style, buttonText }) => (
  <>
    <button
      id='cloudinary_upload_button'
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
      onClick={() => myWidgetFunction()}
    >
      {buttonText || 'Upload files'}
    </button>
  </>
)
export default WidgetButton
