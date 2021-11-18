import React, {Fragment, Component} from 'react';
import QrReader from 'react-qr-reader';
import {Button, P} from 'vienna-ui';
import {WarningFilled} from 'vienna.icons';
import { Logo } from '../../components/Logo';
import {Container, QRBox, MarginBox, IconBox, FeatureToggle} from './styles';
import { Popup } from '../../components/Popup';
import {getData} from '../../api/getData';

export class ReaderView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scanResult: '',
      err: false,
      popupOpen: false,
      info: null,
    }
  };

  onFailed = () => {
    this.setState({
      err: true,
      popupOpen: false
    });
  };

  onSuccess = (res) => {
    console.log({res});
    this.setState({
      err: false,
      popupOpen: true,
      info: res,
    });
  };

  handleScan = (data) => {
    const { scanResult, popupOpen } = this.state;
    if (data && data !== scanResult && !popupOpen) {
      console.log({data});

      getData(
          data,
          (info) => {
            this.onSuccess(info);
          },
          (info) => {
            this.onSuccess(info);
          }
      );

      this.setState({
        scanResult: data,
      });
    }
  };

  handleError = (err) => {
    this.setState({
      err: true
    });
  };

  onClose = () => {
    this.setState({
      popupOpen: false,
      scanResult: '',
      err: false,
      qrType: '',
    })

    this.props.history.push('/reader');
  };

  handleClick = () => {
    getData(
        '123',
        (data) => {
          this.onSuccess(data);
        },
        (data) => {
          this.onSuccess(data);
          // this.onFailed(data);
        }
    );
  }

  render() {
    const { err, scanResult, popupOpen, info } = this.state;

    return (
      <Fragment>
        <Container>
          <MarginBox size={80}>
            <Logo />
          </MarginBox>

          <MarginBox size={325}>
            <P color='brand-white' size='xl'>Отсканируйте QR-код</P>
          </MarginBox>
          {err && (
            <Fragment>
              <IconBox>
                <WarningFilled size='l' color="#EE505A"/>
              </IconBox>
              <P color='brand-white' size='xl'>
                Неопознанный QR-код
              </P>
            </Fragment>
          )}
        </Container>

        <QRBox>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            className='QrReader'
          />
        </QRBox>

        <FeatureToggle noDisplay>
          <Button design='accent' size='xxl' onClick={this.handleClick}>
            не считался qr?. Жми
          </Button>
        </FeatureToggle>

        {popupOpen && info && <Popup info={info} userId={scanResult || info.id} onClose={this.onClose}/>}
      </Fragment>
    );
  }
}
