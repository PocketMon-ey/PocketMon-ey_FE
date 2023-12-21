import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface LoanApplyData {
  childId: number;
  loanInterest: number;
  period: number;
  price: number;
  pricePerMonth: number;
  reason: string;
  totalPrice: number;
}

const initialState: LoanApplyData = {
  childId: 2,
  loanInterest: 0,
  period: 0,
  price: 0,
  pricePerMonth: 0,
  reason: '',
  totalPrice: 0,
};

export interface LoanApplyStore extends LoanApplyData {
  [index: string]: number | undefined | Function | Object;
  changeValue: (inputId: string, inputValue: string | number) => void;
}

export const loanApplyStore = create<LoanApplyStore>()(
  devtools((set) => ({
    ...initialState,
    changeValue: (inputId: string, inputValue: string | number) =>
      set(() => ({
        [inputId]: inputValue,
      })),
  })),
);
