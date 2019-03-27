import styled from 'styled-components/native';
import Layout from '../../../constants/Layout';

export const Wrapper = styled.View`
  margin: ${Layout.buttonPadding};
  height: 60px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.TextInput`
  flex-grow: 1;
  height: 30px;
  borderBottomWidth: 1px;
  borderBottomColor: #E6E6E6;
`;

export const Placeholder = styled.Text`
  flex-grow: 1;
  color: #7A7A7A;
  font-size: 16px;
  font-family: poppins;
  height: 30px;
  lineHeight: 44px;
`;