import styled from 'styled-components';

export const TextBox = styled.div`
  position: relative;
  background-color: #F8F8F8;
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  max-width: 377px;
  margin-bottom: 28px;
  display: flex;

  p {
    line-height: 22px;
  }
`;

export const MarginLeft = styled.div`
  margin-left: 16px;
`

export const AbsoluteVerticalAlignBox = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`
