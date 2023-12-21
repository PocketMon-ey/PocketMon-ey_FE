import { loanServiceAxiosInstance } from '../axios';

export interface LoanPostResponse {
  id: number;
  reason: string;
  price: number;
  totalPrice: number;
  remainPrice: number;
  interestRate: number;
  monthlyRepaymentPrice: number;
  period: number;
  startDate: null;
  endDate: null;
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
export const postLoan = async (request: LoanItem) => {
  const response = await loanServiceAxiosInstance<LoanPostResponse>({
    method: 'POST',
    url: `/loan`,
    data: request,
  });
  return response.data;
  console.log(response.data);
};
