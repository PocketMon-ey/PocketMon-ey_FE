import React from 'react';
import { CardGridContainer } from './styled';
import Card from '../Card';

type Props = {
  loanList: object[]; // 이후 추가적으로 타입 설정해야함!!
};
const CardGrid = ({ loanList }: Props) => {
  return (
    <CardGridContainer>
      {/* loanList 받으면 map으로 뿌려주면 끝*/}
      {/* {loanList.map((loan) => <Card />)} */}

      <Card />
      <Card />
      <Card />
    </CardGridContainer>
  );
};

export default CardGrid;
