import React, {useState} from 'react';
import { Close } from 'vienna.icons';
import { Route, Switch } from 'react-router-dom';
import { CloseBox, Container, Overlay } from './styles';
import { Info } from '../Info';
import { RequestStatus } from '../RequestStatus';
import {ROUTES} from "../../constants";
import { payment } from '../../api/payment';

export const PopupView = (props) => {
  const [loading, setLoading] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);

  const onSuccess = () => {
    setLoading(false);
    setRequestFailed(false);
  }

  const onFailed = () => {
    setLoading(false);
    setRequestFailed(true);
  }

  const handleClickPayment = () => {
    console.log('handleClickPayment');
    const { userId, history } = props;

    setLoading(true);

    payment(
      userId,
      () => {
        onSuccess();
        history.push(ROUTES.PAYMENT_SUCCESS);
      },
      () => {
        onFailed();
        history.push(ROUTES.PAYMENT_FAILED);
      }
    );
  }

  const { userId, onClose, info } = props;

  return (
    <Overlay>
      <Container>
        <Switch>
          <Route path={`/reader`} exact>
            <Info loading={loading} info={info} userId={userId} handleClick={handleClickPayment}/>
          </Route>
          <Route path={`/reader/status`}>
            <RequestStatus isError={requestFailed} handleClose={onClose}/>
          </Route>
        </Switch>
        <CloseBox>
          <Close size='l' onClick={onClose}/>
        </CloseBox>
      </Container>
    </Overlay>
  );
}
