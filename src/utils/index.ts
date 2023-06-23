import { LoginType } from "../types/login.type";

interface TypeArray {
  _id: string;
  [key: string]: any;
}

export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const mereListById = (array1: TypeArray[], array2: TypeArray[]) => {
  const set1 = new Set(array1.map((item) => item._id));
  const array3 = array2.filter((item) => !set1.has(item._id));
  return [...array1, ...array3];
};
export const setTokensLocalStorage = (token: LoginType) => {
  localStorage.setItem("accessToken", token.accessToken);
  localStorage.setItem("refreshToken", token.refreshToken);
  localStorage.setItem("expiresIn", JSON.stringify(token.expiresIn));
};
