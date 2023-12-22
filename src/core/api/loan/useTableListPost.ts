import { loanServiceAxiosInstance } from '../axios';
import { AxiosResponse } from 'axios';

export type TableItem = {
  month: number;
  pricePerMonth: number;
  totalPrice: number;
};
export const postTableList = async (loanInterest: number, price: number) => {
  const response = await loanServiceAxiosInstance.post(`/loan/tableList`, {
    loanInterest: loanInterest,
    price: price,
  });
  console.log('loanInterest', loanInterest);
  return response.data.list;
};
