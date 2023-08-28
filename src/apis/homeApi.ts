import axiosClient from './axiosClient'
import { ARTIST } from './urlConfig'

export const homeApi = {
  getList: (params?: any) => {
    return axiosClient.get(`${ARTIST}`, {params})
  },
}
