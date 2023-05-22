import axiosClient from "./axiosClient";
import { CONVERSATION } from "./urlConfig";

interface dataUpdate {
  id: string;
  data: {
    mobileNumber: string;
    title: string;
    description: string;
    thumbnail: string[];
  };
}

export const conversationApi = {
  getList: (params?: any) => {
    return axiosClient.get(`${CONVERSATION}/list`, { params });
  },
  create: (data: any) => {
    return axiosClient.post(`${CONVERSATION}/create`, data);
  },
  update: (data: dataUpdate) => {
    return axiosClient.put(`${CONVERSATION}/update/${data.id}`, data.data);
  },
};
