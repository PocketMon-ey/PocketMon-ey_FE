import { loanServiceAxiosInstance } from '../axios';
import { AxiosResponse } from 'axios';

export type DetailResponse = {
  id: number;
  reason: string;
  price: number;
  totalPrice: number;
  remainPrice: number;
  interestRate: number;
  monthlyRepaymentPrice: number;
  period: number;
  startDate: string;
  endDate: string;
  repaymentCnt: number;
  status: number;
  rejectReason: null;
  createDate: string;
  updateDate: string;
  childId: number;
};
export const getLoan = async (status: 0 | 1 | 2) => {
  const { data } = await loanServiceAxiosInstance.get(`/loan/list/${status}`);
  return data.loanList;
};
export const getDetail = async (loanId: number) => {
  const response = await loanServiceAxiosInstance<DetailResponse>({
    method: 'GET',
    url: `/loan/${loanId}`,
  });
  return response.data;
};
