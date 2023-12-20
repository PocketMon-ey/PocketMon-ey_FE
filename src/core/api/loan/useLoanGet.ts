import { loanServiceAxiosInstance } from '../axios';
import { AxiosResponse } from 'axios';
export interface LoanGetResponse {
  loanList: LoanItem[];
}

export type LoanItem = {
  reason: string;
  price: number;
  totalmoney: number;
  startDate: null;
  endDate: null;
  period: number;
  status: 0 | 1 | 2;
};
export const getLoan = async (status: 0 | 1 | 2) => {
  const { data } = await loanServiceAxiosInstance.get(`/loan/list/${status}`);
  return data.loanList;
};
