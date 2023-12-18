import React from 'react';
import { SmallButtonContainer } from './styled';

type Props = {
  text: string;
  selected: number;
  service: string;
  setStatus: React.Dispatch<React.SetStateAction<number>>;
  tabIndex: number;
};

const SmallButton = ({
  text,
  selected,
  service,
  setStatus,
  tabIndex,
}: Props) => {
  return (
    <SmallButtonContainer
      selectedcode={selected}
      servicecode={service}
      onClick={() => setStatus(tabIndex)}
    >
      <div>{text}</div>
    </SmallButtonContainer>
  );
};

export default SmallButton;
