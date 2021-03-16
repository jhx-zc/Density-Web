import axios, { AxiosInstance } from 'axios'

export function GenHttpService(): AxiosInstance {
  return axios.create({
    timeout: 45000,
    method: 'post',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/octet-stream',
    },
    responseType: 'arraybuffer',
  })
}
