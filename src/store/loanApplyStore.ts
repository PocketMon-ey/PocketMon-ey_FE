import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface LoanApplyData {
  reason: string;
  price: number | undefined;
  totalPrice: number;
  period?: number;
  loanInterest?: number;
  pricePerMonth?: number;
}

const initialState: LoanApplyData = {
  reason: '',
  price: undefined,
  totalPrice: 0,
};

export interface LoanApplyStore extends LoanApplyData {
  [index: string]: number | undefined | Function | Object;
  changeValue: (inputId: string, inputValue: string) => void;
}

export const loanApplyStore = create<LoanApplyStore>()(
  devtools((set) => ({
    ...initialState,
    changeValue: (inputId: string, inputValue: string) =>
      set(() => ({
        [inputId]: inputValue,
      })),
  })),
);
