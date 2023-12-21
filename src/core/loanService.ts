import { Router, useNavigate } from 'react-router-dom';
import { postLoan } from './api/loan/useLoanPost';

export const useLoanService = () => {
  const navigate = useNavigate();
  const addComma = (price: number) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };
  const submitLoanApply = async () => {
    await postLoan({
      childId: 0,
      loanInterest: 0,
      period: 0,
      price: 0,
      pricePerMonth: 0,
      reason: 'string',
      totalPrice: 0,
    });
    navigate('/child/loan/actualPayment');
  };

  return {
    addComma,
    submitLoanApply,
  };
};
