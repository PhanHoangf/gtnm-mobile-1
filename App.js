import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Navigation from './src/components/bottom-navigation/Navigation';

export default function App() {
    return (
        <PaperProvider>
            {/* <View style={styles.container}>
                <Header></Header>
                <HomePage></HomePage>
            </View> */}
            <Navigation/>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
    },
});

AppRegistry.registerComponent(appName, () => App);
