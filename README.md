# react-cloudinary-upload-widget

> react wrapper for cloudinary upload widget. Currently only working with unsigned uploads. Please check you have an upload preset set and it accepts unsigned uploads. Support for signed uploads will be added soon. 

[![NPM](https://img.shields.io/npm/v/react-cloudinary-upload-widget.svg)](https://www.npmjs.com/package/react-cloudinary-upload-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cloudinary-upload-widget
```

## Usage

```jsx
import React from 'react'

import Widget from 'react-cloudinary-upload-widget'

const Example = () => {
  return (
    <Widget
      cloudName={'example_cloudname'}
      uploadPreset={'preset1'}
      buttonText={'Upload'}
      style={null} //default styling will be overridden
    />
  )
}
```

## License

MIT © [bubbaspaarx](https://github.com/bubbaspaarx)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).



