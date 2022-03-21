import React from 'react'

const WidgetButton = ({ myWidgetFunction, style, className = '', buttonText, buttonType }) => (
  <>
    <button
      type={buttonType}
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
      className={className}
      onClick={() => myWidgetFunction()}
    >
      {buttonText || 'Upload files'}
    </button>
  </>
)
WidgetButton.defaultProps = {
  buttonType: 'button'
}
export default WidgetButton
