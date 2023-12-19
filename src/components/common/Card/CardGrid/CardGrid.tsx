import React from 'react';
import { CardGridContainer } from './styled';
import Card from '../Card';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  loanList: object[]; // 이후 추가적으로 타입 설정해야함!!
};
const CardGrid = ({ loanList }: Props) => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const baseUrl = path.includes('parent')
    ? '/parent/loan/detail'
    : '/child/loan/detail';
  return (
    <CardGridContainer>
      {/* loanList 받으면 map으로 뿌려주면 끝*/}
      {/* {loanList.map((loan) => <Card />)} */}
      <div onClick={() => navigate(baseUrl)}>
        <Card />
      </div>
      <div onClick={() => navigate(baseUrl)}>
        <Card />
      </div>
      <div onClick={() => navigate(baseUrl)}>
        <Card />
      </div>
    </CardGridContainer>
  );
};

export default CardGrid;
