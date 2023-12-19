import React from 'react';
import { EditButton, UserTabContainer, UserTabHeader } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';

const UserTab = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <UserTabContainer>
      <UserTabHeader>
        <div>
          {path.includes('parent') ? '김지훈(아이)' : '김지훈'}님의 가족 금리 :
          5%
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
        {path.includes('parent') ? '김지훈(아이)' : '김지훈'}님의 우대 금리 : 2%
      </div>
      <div>신용도 : 800 / 1000</div>
    </UserTabContainer>
  );
};

export default UserTab;
