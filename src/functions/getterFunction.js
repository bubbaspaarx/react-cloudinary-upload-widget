import axios from 'axios'

export const getterFunction = ({
  url,
  data,
  accepts,
  contentType,
  withCredentials
}) => {
  axios.interceptors.response.use((response) => response.data)
  axios.defaults.headers.common['Accepts'] = accepts
  axios.defaults.headers.common['Content-Type'] = contentType
  axios.defaults.withCredentials = withCredentials
  const options = {
    url: url + '?nocache=' + new Date().getTime(),
    method: 'get',
    params: data
  }

  return axios(options)
}
