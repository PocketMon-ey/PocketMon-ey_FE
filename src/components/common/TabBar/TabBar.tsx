import React from 'react';
import { TabBarContainer } from './styled';
import SmallButton from '../Button/SmallButton/SmallButton';

const TabBar = () => {
  return (
    <TabBarContainer>
      <SmallButton text="대기 중" selected={1} service="lo" />
      <SmallButton text="진행 중" selected={0} service="lo" />
      <SmallButton text="완료" selected={0} service="lo" />
    </TabBarContainer>
  );
};

export default TabBar;
