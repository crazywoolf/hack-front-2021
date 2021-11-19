import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 24px 65px;
  box-sizing: border-box;
  max-width: 425px;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;

  button {
    width: 100%;
    margin: 16px 0;
  }
`;

export const QRBox = styled.div`
  width: 241px;
  height: 241px;
  border: #FEE600 5px solid;
  ${props => props.qrUrl && 'background-image: url("' + props.qrUrl + '")'};
  ${props => props.qrUrl && 'background-color: #fff;'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin-bottom: auto;
`;

export const MarginBox = styled.div`
  margin-bottom: ${props => props.size}px;
`;
