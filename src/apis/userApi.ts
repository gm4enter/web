import axiosClient from './axiosClient'
import { USER } from './urlConfig'

export const userApi = {
  getUser: (params?: any) => {
    return axiosClient.get(`${USER}`, {params})
  },
}
