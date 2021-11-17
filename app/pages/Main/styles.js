import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 24px 52px;
  box-sizing: border-box;
  max-width: 425px;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;

  button {
    width: 100%;
    margin: auto 0;
  }
`;

export const QRBox = styled.div`
  width: 241px;
  height: 241px;
  border: #FEE600 5px solid;
  background-image: url("img/qr-code.png");
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: auto;
`;

export const MarginBox = styled.div`
  margin-bottom: ${props => props.size}px;
`;
