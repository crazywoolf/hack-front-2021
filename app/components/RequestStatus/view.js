import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import { RoundIcon, Button, H6 } from 'vienna-ui';
import { Checkmark, Close } from 'vienna.icons';
import { Container } from './styles';
import { ROUTES } from '../../constants';

export const RequestStatusView = (props) => {
  const { handleClose, isError } = props;

  return (
    <Fragment>
      <Container>
        <RoundIcon color={isError ? 'nice10' : 'miami10'} size='l'>
          {isError ? <Close size='l'/> : <Checkmark size='l' />}
        </RoundIcon>
        <H6>
          <Switch>
            <Route path={ROUTES.PAYMENT_SUCCESS} exact>Оплачено</Route>
            <Route path={ROUTES.PAYMENT_FAILED} exact>Ошибка оплаты<br/>или сервис недоступен</Route>
          </Switch>
        </H6>
      </Container>
      <Button design='outline' size='xxl' onClick={handleClose}>
        Закрыть
      </Button>
    </Fragment>
  );
}
