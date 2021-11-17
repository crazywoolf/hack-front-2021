import styled from 'styled-components';
import {Button} from "vienna-ui";

export const HeaderBox = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

export const IconBox = styled.div`
  border-radius: 100%;
  background-color: #FF6425;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;
  margin-right: 12px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8F8F8;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 74px;
`;

export const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const CustomButton = styled(Button)`
  border-radius: 32px;
  height: 52px;
  background-color: ${props => props.bgColor || '#F5F5F5'};
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  
  &:hover,
  &:focus {
    ${props => props.bgHoverColor && 'background-color: ' + props.bgHoverColor + ';'}
  }
  
  svg {
    height: 24px;
    width: 20px;
  }
`;

