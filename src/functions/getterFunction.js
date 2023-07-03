import axios from 'axios'

const instance = axios.create()

instance.interceptors.response.use((response) => response.data)

export const getterFunction = ({
  url,
  data,
  accepts,
  contentType,
  withCredentials,
  getCustomHeaders
}) => {
  if (!getCustomHeaders) {
    instance.defaults.headers.common['Accepts'] = accepts
    instance.defaults.headers.common['Content-Type'] = contentType
    instance.defaults.withCredentials = withCredentials
    const options = {
      url: url + '?nocache=' + new Date().getTime(),
      method: 'post',
      data: data
    }

    return instance(options)
  } else {
    getterCustomHeaders(url, data, getCustomHeaders)
  }
}

const getterCustomHeaders = async ({
  url,
  data,
  getCustomHeaders
}) => {
  const headers = { 'Content-Type': 'application/json' }

  if (getCustomHeaders) {
    const customHeaders = await getCustomHeaders()

    for (const [key, value] of Object.entries(customHeaders)) {
      headers[key] = value
    }
  }

  const endpoint = url + '?nocache=' + new Date().getTime()

  // eslint-disable-next-line no-undef
  const response = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers
  })

  if (!response.ok) {
    throw new Error('Error fetching media upload signature.')
  }

  return response.json()
}
