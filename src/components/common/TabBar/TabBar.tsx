import React from 'react';
import { TabBarContainer } from './styled';
import SmallButton from '../Button/SmallButton/SmallButton';

type Props = {
  status: number;
  setStatus: React.Dispatch<React.SetStateAction<number>>;
};

const TabBar = ({ status, setStatus }: Props) => {
  return (
    <TabBarContainer>
      {['대기 중', '진행 중', '완료'].map((tabName, index) => (
        <SmallButton
          key={tabName}
          text={tabName}
          setStatus={setStatus}
          service="lo"
          selected={status === index ? 1 : 0}
          tabIndex={index}
        />
      ))}
    </TabBarContainer>
  );
};

export default TabBar;
