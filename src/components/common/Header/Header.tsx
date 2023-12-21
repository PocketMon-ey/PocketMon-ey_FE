import React from 'react';
import {
  HeaderContainer,
  HeaderTitleContainer,
  ImageContainer,
} from './styled';

// import LeftArrow from '../../../../public/images/left-arrow.png';
// import Home from '../../../../public/images/home.png';
import LeftArrow from '../../../assets/images/left-arrow.png';
import Home from '../../../assets/images/home.png';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  headerTitle: string;
};

const Header = ({ headerTitle }: Props) => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  return (
    <HeaderContainer>
      <div
        onClick={() => {
          if (path.includes('home')) {
            navigate('/');
          } else {
            navigate(-1);
          }
        }}
      >
        <ImageContainer src={LeftArrow} alt="뒤로가기" />
      </div>
      <HeaderTitleContainer>{headerTitle}</HeaderTitleContainer>
      <div
        onClick={() => {
          if (path.includes('parent')) {
            navigate('/parent/home');
          } else {
            navigate('/child/home');
          }
        }}
      >
        <ImageContainer src={Home}></ImageContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
