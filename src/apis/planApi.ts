import axiosClient from './axiosClient'
import { PLAN } from './urlConfig'

export const planApi = {
  getList: (params?: any) => {
    return axiosClient.get(`${PLAN}/list`, {params})
  },
}
