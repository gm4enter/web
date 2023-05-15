import axiosClient from './axiosClient'
import { SITE } from './urlConfig'

export const siteApi = {
  getList: (params?: any) => {
    return axiosClient.get(`${SITE}/list`, {params})
  },
}
