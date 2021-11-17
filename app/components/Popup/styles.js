import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(43, 45, 51, 0.89);
`

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 24px 48px;
  box-sizing: border-box;
  width: 100%;
  min-height: 424px;
  background-color: #fff;
  border-radius: 24px 24px 0 0;

  button {
    width: 100%;
  }
`;

export const CloseBox = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
