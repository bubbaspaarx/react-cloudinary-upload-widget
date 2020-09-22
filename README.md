# react-cloudinary-upload-widget

> react wrapper for cloudinary upload widget

[![NPM](https://img.shields.io/npm/v/react-cloudinary-upload-widget.svg)](https://www.npmjs.com/package/react-cloudinary-upload-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cloudinary-upload-widget
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'react-cloudinary-upload-widget'

const Example = () => {
  const example = useMyHook()
  return (
          <Widget
        cloudName={"my_cloud_name"}
        uploadPreset={""}
        buttonText={buttonText}
        style={style}
      />
  )
}
```

## License

MIT © [bubbaspaarx](https://github.com/bubbaspaarx)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).



