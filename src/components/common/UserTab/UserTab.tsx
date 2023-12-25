import React from 'react';
import { EditButton, UserTabContainer, UserTabHeader } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  familyrate: number | undefined;
  primerate: number | undefined;
};

const UserTab = ({ familyrate, primerate }: Props) => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <UserTabContainer>
      <UserTabHeader>
        <div>
          {path.includes('parent') ? '김금쪽(아이)' : '김금쪽'}님의 가족 금리 :{' '}
          {familyrate}%
        </div>
        {path.includes('parent') ? (
          <EditButton onClick={() => navigate('/parent/loan/rate')}>
            <div>금리 조정</div>
          </EditButton>
        ) : (
          <></>
        )}
      </UserTabHeader>
      <div>
        {path.includes('parent') ? '김금쪽(아이)' : '김금쪽'}님의 우대 금리 :{' '}
        {primerate}%
      </div>
      <div>신용도 : 800 / 1000</div>
    </UserTabContainer>
  );
};

export default UserTab;
