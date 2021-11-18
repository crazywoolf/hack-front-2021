import React, {Fragment} from 'react';
import {P} from 'vienna-ui';
import { HandCash2, Card } from 'vienna.icons';
import {AmountBox, CustomButton, DetailsBox, HeaderBox, IconBox, Row, TitleBox} from './styles';
import {LogoSBP} from "../LogoSBP";
import {amount} from "../../constants";

export const InfoView = (props) => {
  const { info, handleClick } = props;

  return (
    <Fragment>
      <HeaderBox>
          <IconBox>
              <Card color="#fff" />
          </IconBox>
          <TitleBox>
              <P size="xxl" weight="bold">{info.fio}</P>
              <P size="l" color="seattle100">IKEA FAMILY: {info.id}</P>
          </TitleBox>
      </HeaderBox>

        <DetailsBox>
            <Row>
                <P size="l" color="seattle100">Сумма</P>
                <P size="l" color="primary">{String(amount.toFixed(2)).replace('.', ',')} ₽</P>
            </Row>
            <Row>
                <P size="l" color="seattle100">Скидка</P>
                <P size="l" color="primary">-{info.discount}%</P>
            </Row>
        </DetailsBox>

        <AmountBox>
            <Row>
                <P size="xl" weight="medium" color="seattle100">К оплате</P>
                <P size="xl" weight="medium" color="primary">
                    {String(((amount * (100 - info.discount) / 100)).toFixed(2)).replace('.', ',')} ₽
                </P>
            </Row>
        </AmountBox>

        <CustomButton
            bgColor="#22589E"
            marginBottom="16"
            bgHoverColor="#15417b"
            onClick={handleClick}>
            <LogoSBP />
            Оплата по СБП
        </CustomButton>
        <CustomButton design="outline">
            <HandCash2/>
            Оплата наличными
        </CustomButton>
    </Fragment>
  );
};
