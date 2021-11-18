import React, {Component} from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Body } from 'vienna-ui';
import {Container} from './styles';
import {MainPage} from "./pages/Main";
import {ReaderPage} from "./pages/Reader";
import {NewCardPage} from "./pages/NewCard";

export class App extends Component {
    render() {
        return (
            <Body>
                <Container>
                    <HashRouter>
                        <Switch>
                            <Route path={'/'} exact >
                                <MainPage/>
                            </Route>
                            <Route path={'/reader'} >
                                <ReaderPage/>
                            </Route>
                            <Route path={'/create-card'} exact >
                                <NewCardPage/>
                            </Route>
                        </Switch>
                    </HashRouter>
                </Container>
            </Body>
        )
    }
}
