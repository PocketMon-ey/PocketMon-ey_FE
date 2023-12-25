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
import QuestionMark from '../../../assets/images/question_mark.png';
import swal from 'sweetalert';

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
          } else if (path.includes('list')) {
            if (path.includes('parent')) {
              navigate('/parent/home');
            } else {
              navigate('/child/home');
            }
          } else if (path.includes('parent/mission/reject')) {
            window.webkit.messageHandlers.back.postMessage('test');
          } else {
            navigate(-1);
          }
        }}
      >
        <ImageContainer src={LeftArrow} alt="뒤로가기" />
      </div>
      <HeaderTitleContainer>{headerTitle}</HeaderTitleContainer>
      {path.includes('list') ? (
        <div
          onClick={() =>
            swal(
              '금리',
              '금리란 자금이 거래되는 금융시장에서 공급자가' +
                '\n 수요자에게 빌려준 데 대한 대가로 지급하는 이자금액 또는 이자율을 뜻해요. ' +
                '\n금리란 한마디로 돈의 가격이예요.',
              'info',
            ).then(() =>
              swal(
                '가족금리',
                '가족금리란 가족 구성원 전체에게 적용되는 금리예요.' +
                  '\n 보호자가 설정할 수 있어요.',
                'info',
              ).then(() =>
                swal(
                  '우대금리',
                  '특별한 조건을 충족하면 대출을 더 싸게 이용할 수 있는 혜택이예요.',
                  'info',
                ),
              ),
            )
          }
        >
          <ImageContainer src={QuestionMark}></ImageContainer>
        </div>
      ) : (
        <></>
      )}
      <div
        onClick={() => {
          if (path.includes('parent')) {
            navigate('/parent/home');
          } else {
            navigate('/child/home');
          }
          if (path.includes('parent/mission/reject')) {
            window.webkit.messageHandlers.home.postMessage('test');
          }
        }}
      >
        <ImageContainer src={Home}></ImageContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
