import { StyleSheet, Dimensions } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: { alignItems: 'center', height: ScreenHeight * 0.95, width: ScreenWidth }
});