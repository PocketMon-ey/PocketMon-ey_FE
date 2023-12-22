import { loanServiceAxiosInstance } from '../axios';

export interface LoanPutResponse {
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
}

export type LoanItem = {
  childId: number;
  loanInterest: number;
  period: number;
  price: number;
  pricePerMonth: number;
  reason: string;
  totalPrice: number;
};

export const loanRepayment = async (loanId: number) => {
  const response = await loanServiceAxiosInstance.put(`/loan/repayment`, {
    loanId: loanId,
  });

  return response.data;
};
