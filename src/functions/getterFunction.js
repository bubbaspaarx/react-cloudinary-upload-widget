import axios from 'axios'

const instance = axios.create()

instance.interceptors.response.use((response) => response.data)

export const getterFunction = ({
  url,
  data,
  accepts,
  contentType,
  withCredentials
}) => {
  instance.defaults.headers.common['Accepts'] = accepts
  instance.defaults.headers.common['Content-Type'] = contentType
  instance.defaults.withCredentials = withCredentials
  const options = {
    url: url + '?nocache=' + new Date().getTime(),
    method: 'post',
    data: data
  }

  return instance(options)
}
