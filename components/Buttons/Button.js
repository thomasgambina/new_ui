import React from 'react';
import { Button, ButtonText, Wrapper } from './Styles/ButtonStyles';
import Ripple from 'react-native-material-ripple';

export default class StyledButton extends React.Component {
    render() {
        return (
            <Wrapper>
                <Ripple>
            <Button>
                <ButtonText>button</ButtonText>
            </Button>
                </Ripple>
            </Wrapper>
        );
    }
}