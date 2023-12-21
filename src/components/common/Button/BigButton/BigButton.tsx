import React from 'react';
import { BigButtonContainer } from './styled';

type Props = {
  text: string;
} & React.ComponentProps<'button'>;

const Button = ({ text, ...props }: Props) => {
  return (
    <BigButtonContainer {...props} type={text}>
      <div>{text}</div>
    </BigButtonContainer>
  );
};

export default Button;
