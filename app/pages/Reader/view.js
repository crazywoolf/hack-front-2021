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
    }
  };

  onFailed = () => {
    this.setState({
      err: true,
      popupOpen: false
    });
  };

  onSuccess = (res) => {
    this.setState({
      err: false,
      popupOpen: true
    });
  };

  handleScan = (data) => {
    const { scanResult, popupOpen } = this.state;

    if (data && data !== scanResult && !popupOpen) {
      console.log({data});
      this.setState({
        scanResult: data,
        err: data === '',
        popupOpen: data !== ''
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

  onSuccess = () => {
    this.setState({
      popupOpen: true,
      scanResult: 123456
    })
  }

  handleClick = () => {
    getData(
        '123',
        () => {
          this.onSuccess();
        },
        () => console.log
    );
  }

  render() {
    const { err, scanResult, popupOpen } = this.state;

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

        <FeatureToggle>
          <Button design='accent' size='xxl' onClick={this.handleClick}>
            https нет. Допустим отсканил
          </Button>
        </FeatureToggle>

        {popupOpen && <Popup qrPath={scanResult} onClose={this.onClose}/>}
      </Fragment>
    );
  }
}
