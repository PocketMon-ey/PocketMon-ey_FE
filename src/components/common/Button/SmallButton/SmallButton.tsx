import React from 'react';
import { SmallButtonContainer } from './styled';

type Props = {
  text: string;
  selected: number;
  service: string;
};
const SmallButton = ({ text, selected, service }: Props) => {
  return (
    <SmallButtonContainer selectedcode={selected} servicecode={service}>
      <div>{text}</div>
    </SmallButtonContainer>
  );
};

export default SmallButton;
