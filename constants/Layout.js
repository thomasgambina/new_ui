import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  buttonPadding: '10px 50px',
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
