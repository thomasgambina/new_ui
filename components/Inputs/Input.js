import React from 'react';
import { Wrapper, Input, Placeholder } from './Styles/InputStyles';

export default class StyledInput extends React.Component {
    render() {
        return (
            <Wrapper>
                <Placeholder>placeholder</Placeholder>
                <Input />
            </Wrapper>
        );
    }
}