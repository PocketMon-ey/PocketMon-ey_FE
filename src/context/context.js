import { createContext, useReducer, useState } from 'react';

export const LoanListContext = createContext();
export const LoanListDispatchContext = createContext();

export const UserContext = createContext();
export const UserDispatchContext = createContext();

const initialUser = {
  id: 1,
  name: '김금쪽',
  balance: 100000,
  level: 0,
  preferInterestRate: 2,
  familyId: 1,
};

const initialLoanList = [
  {
    id: 1,
    reason: '아이유 콘서트에 가고 싶어요',
    price: 100000,
    repayment: 90000,
    interestrate: 5,
    moneyPerMonth: 16000,
    period: 6,
    startDate: '2023.12.19',
    endDate: '2024.6.19',
    status: 0,
  },

  {
    id: 2,
    reason: '임영웅 콘서트에 가고 싶어요',
    price: 200000,
    repayment: 120000,
    interestrate: 5,
    moneyPerMonth: 16000,
    period: 6,
    startDate: '2023.12.19',
    endDate: '2024.6.19',
    status: 1,
  },

  {
    id: 3,
    reason: '닌텐도 스위치를 사고 싶어요',
    price: 300000,
    repayment: 240000,
    interestrate: 5,
    moneyPerMonth: 40000,
    period: 6,
    startDate: '2023.12.19',
    endDate: '2024.6.19',
    status: 2,
  },
];

function userReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return { ...state, balance: state.balance - 5000 };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function loanListReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, { id: state }];

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const GlobalContextProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, initialUser);
  const [loanList, loanListDispatch] = useReducer(
    loanListReducer,
    initialLoanList,
  );

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={userDispatch}>
        <LoanListContext.Provider value={loanList}>
          <LoanListDispatchContext.Provider value={loanListDispatch}>
            {children}
          </LoanListDispatchContext.Provider>
        </LoanListContext.Provider>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
