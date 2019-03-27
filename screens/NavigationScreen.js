import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Button,
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import StyledButton from '../components/Buttons/Button';
import StyledInput from '../components/Inputs/Input';
import LottieView from 'lottie-react-native';



export default class NavigationScreen extends React.Component {
    static navigationOptions = {
        title: 'Homes',
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <StyledInput />
                    <StyledInput />
                    <StyledInput />
                    <StyledButton />
                            <LottieView style={styles.ani} source={require('../assets/annimations/3641-start-button.json')} autoPlay loop />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    ani: {
        height: 100,
        paddingLeft: 30,
    }
});
