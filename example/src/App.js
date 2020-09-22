import React from 'react'
import Widget from 'react-cloudinary-upload-widget'

const App = () => {
  return (
    <>
      <Widget
        cloudName={'goatagency'}
        uploadPreset={'preset1'}
        buttonText={'Upload'}
        style={null}
      />
    </>
  )
}
export default App
