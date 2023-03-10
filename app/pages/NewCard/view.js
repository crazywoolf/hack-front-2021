import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {P} from 'vienna-ui';
import {Logo} from '../../components/Logo';
import {Container, QRBox, MarginBox} from './styles';
import {newCard} from "../../api/newCard";

export class NewCardPageView extends Component {
    constructor() {
        super();
        this.state = {
            qrUrl: ''
        }
    }

    componentDidMount() {
        newCard(
            (res) => {
                this.setState({qrUrl: res.qrUrl});
            },
            () => {
                this.setState({qrUrl: 'https://test.ecom.raiffeisen.ru/api/sbp/v1/qr/AD54104F9BD74D5581F334CDF69D81D5/image'});
            }
        );
    }

    render() {
        return (
            <Container>
                <MarginBox size={80}>
                    <Link to="/">
                        <Logo/>
                    </Link>
                </MarginBox>

                <P color='brand-white' margin='xxl' size='xl'>Отсканируйте QR-код</P>
                <QRBox qrUrl={this.state.qrUrl}/>
            </Container>
        );
    }
}
