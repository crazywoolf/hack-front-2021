import React, {Fragment} from 'react';
import { Button, H6, P } from 'vienna-ui';
import { DownSmall } from 'vienna.icons';
import { AbsoluteVerticalAlignBox, MarginLeft, TextBox } from './styles';

export const InfoView = (props) => {
  const { locale, loading, handleClick } = props;

  return (
    <Fragment>
      {/*<H6 margin='xxl'>*/}
      {/*  {locales[LocalesTokens.SUBSCRIPTION_TITLE][locale]}*/}
      {/*</H6>*/}

      {/*<P size='l' color='seattle60' margin='m'>*/}
      {/*  {locales[LocalesTokens.APPOINTMENT][locale]}*/}
      {/*</P>*/}
      {/*<TextBox>*/}
      {/*  <P size='xl' color='brand-primary'>*/}
      {/*    {locales[LocalesTokens.LINKING][locale]}*/}
      {/*  </P>*/}
      {/*</TextBox>*/}

      {/*<P size='l' color='seattle60' margin='m'>*/}
      {/*  {locales[LocalesTokens.DEBIT_ACCOUNT][locale]}*/}
      {/*</P>*/}
      {/*<TextBox>*/}
      {/*  <RaifLogo />*/}
      {/*  <MarginLeft>*/}
      {/*    <P size='l' color='seattle60' margin='xxs'>*/}
      {/*      {locales[LocalesTokens.CURRENT_ACCOUNT][locale]}*/}
      {/*    </P>*/}
      {/*    <P size='xl' color='brand-primary'>*/}
      {/*      {locales[LocalesTokens.RANDOM_BALANCE][locale]}*/}
      {/*    </P>*/}
      {/*    <AbsoluteVerticalAlignBox>*/}
      {/*      <DownSmall size='l' />*/}
      {/*    </AbsoluteVerticalAlignBox>*/}
      {/*  </MarginLeft>*/}
      {/*</TextBox>*/}

      {/*<Button design='accent' size='xxl' loading={loading} onClick={handleClick}>*/}
      {/*  {locales[LocalesTokens.SUBSCRIPTION_BUTTON][locale]}*/}
      {/*</Button>*/}
    </Fragment>
  );
};
