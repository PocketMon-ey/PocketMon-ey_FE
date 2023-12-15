import React from 'react';
import {
  HeaderContainer,
  HeaderTitleContainer,
  ImageContainer,
} from './styled';
import LeftArrow from '../../../assets/images/left-arrow.png';
import Home from '../../../assets/images/home.png';
import { useNavigate } from 'react-router-dom';

type Props = {
  headerTitle: string;
};

const Header = ({ headerTitle }: Props) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div onClick={() => navigate(-1)}>
        <ImageContainer src={LeftArrow} alt="뒤로가기" />
      </div>
      <HeaderTitleContainer>{headerTitle}</HeaderTitleContainer>
      <div onClick={() => navigate('/parent')}>
        <ImageContainer src={Home}></ImageContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
