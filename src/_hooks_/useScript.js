import { useEffect } from 'react'

export default (url) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      window.myWidget = null
    }
  }, [url])
}
