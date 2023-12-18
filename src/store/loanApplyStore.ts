import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface LoanApplyData {
  reason: string;
  amount: string;
}

const initialState: LoanApplyData = {
  reason: '',
  amount: '',
};

export interface LoanApplyStore extends LoanApplyData {
  [index: string]: Function | Object;
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
