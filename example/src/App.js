import React from 'react'
import { useMyHook } from 'react-cloudinary-upload-widget'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App