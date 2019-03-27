import styled from 'styled-components/native';
import Layout from '../../../constants/Layout';

export const Button = styled.TouchableOpacity`
  height: 60px;
  background-color: #323643;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: poppins;
`;

export const Wrapper = styled.View`
  margin: ${Layout.buttonPadding};
  height: 60px;
  border-radius: 10px;
`;