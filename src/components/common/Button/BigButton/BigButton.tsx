import React from 'react';
import { BigButtonContainer } from './styled';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <BigButtonContainer type={text}>
      <div>{text}</div>
    </BigButtonContainer>
  );
};

export default Button;
