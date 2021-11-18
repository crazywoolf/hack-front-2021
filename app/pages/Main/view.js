import React from 'react';
import {Button, P} from 'vienna-ui';
import {Card, CodeQr} from 'vienna.icons';
import {Logo} from '../../components/Logo';
import {Container, QRBox, MarginBox} from './styles';

export const MainPageView = (props) => {
    const handleClick = () => {
        props.history.push('/reader');
    }

    const handleCardClick = () => {
        props.history.push('/create-card');
    }

    return (
        <Container>
            <MarginBox size={80}>
                <Logo/>
            </MarginBox>

            <P color='brand-white' margin='xxl' size='xl'>Отсканируйте QR-код</P>
            <QRBox/>

            <Button design='accent' size='xxl' onClick={handleCardClick}>
                <Card/>
                Выпустить карту
            </Button>

            <Button design='accent' size='xxl' onClick={handleClick}>
                <CodeQr/>
                Сканировать QR
            </Button>
        </Container>
    );
}
