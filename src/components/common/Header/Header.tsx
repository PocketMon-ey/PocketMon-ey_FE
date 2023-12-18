import React from 'react';
import {
  HeaderContainer,
  HeaderTitleContainer,
  ImageContainer,
} from './styled';
import LeftArrow from '../../../assets/images/left-arrow.png';
import Home from '../../../assets/images/home.png';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  headerTitle: string;
};

const Header = ({ headerTitle }: Props) => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div onClick={() => navigate(-1)}>
        <ImageContainer src={LeftArrow} alt="뒤로가기" />
      </div>
      <HeaderTitleContainer>{headerTitle}</HeaderTitleContainer>
      <div
        onClick={() => {
          navigate('home');
        }}
      >
        <ImageContainer src={Home}></ImageContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
