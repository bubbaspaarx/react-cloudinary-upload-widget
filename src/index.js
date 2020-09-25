import React from 'react'
import UploadWidget from './components/UploadWidget'
// import genSignature from './functions/generateSignature'

// export const Widget = ({
//   cloudName,
//   uploadPreset,
//   buttonText,
//   style,
//   folder,
//   cropping,
//   uploadSignature,
//   onSuccess,
//   onFailure,
//   logging,
//   imageName,
//   eager,
//   url,
//   apiKey
// }) => (
//   <UploadWidget
//     cloudName={cloudName}
//     uploadPreset={uploadPreset}
//     buttonText={buttonText}
//     style={style}
//     folder={folder}
//     cropping={cropping}
//     uploadSignature={uploadSignature}
//     onSuccess={onSuccess}
//     onFailure={onFailure}
//     logging={logging}
//     imageName={imageName}
//     eager={eager}
//     url={url}
//     apiKey={apiKey}
//   />
// )

export const Widget = (props) => <UploadWidget {...props} />

// export const generateSignature = () => genSignature
