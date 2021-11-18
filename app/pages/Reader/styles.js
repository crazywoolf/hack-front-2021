import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 24px 130px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  z-index: 2;
`;

export const IconBox = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: #FFFFFF;
    border-radius: 100%;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
  }
`;

export const QRBox = styled.div`
  .QrReader section {
    padding-top: 100vh !important;
    padding-top: calc(var(--vh, 1vh) * 100) !important;

    > div {
      width: 241px !important;
      height: 241px !important;
      box-shadow: #FEE600 0 0 0 5px inset !important;
      box-sizing: content-box !important;
      border: none !important;
      border-color: rgba(0, 0, 0, 0.3) !important;
      border-style: solid !important;
      border-width: 218px calc((100vw - 241px) / 2) calc(100vh * 100 - 241px - 218px) !important;
      border-width: 218px calc((100vw - 241px) / 2) calc(var(--vh, 1vh) * 100 - 241px - 218px) !important;
    }
  }
`;

export const MarginBox = styled.div`
  margin-bottom: ${props => props.size}px;
`;

export const FeatureToggle = styled.div`
  ${props => props.noDisplay && 'display: none'};
  position: absolute;
  z-index: 2;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
