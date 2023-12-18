import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ConstractData {
  allAmount: string; //총 상환금액
  interestRate: string; //금리
  period: string; //대출기간
  monthlyRepaymentPrice: string; //매달 납입 금액
}
const initialState: ConstractData = {
  allAmount: '',
  interestRate: '',
  period: '',
  monthlyRepaymentPrice: '',
};
interface ConstractStore extends ConstractData {
  [index: string]: Function | Object;
  changeValue: (inputId: string, inputValue: string) => void;
}

export const loanApplyStore = create<ConstractStore>()(
  devtools((set) => ({
    ...initialState,
    changeValue: (inputId: string, inputValue: string) =>
      set(() => ({
        [inputId]: inputValue,
      })),
  })),
);
