import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface LoanApplyData {
  reason: string;
  amount: string;
}

const initialState: LoanApplyData = {
  reason: '월급 빨리 받고싶어요.',
  amount: '99,900',
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
