import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route }) => {
    const { url } = route.params;

    return (
        <View style={styles.container}>
            <WebView source={{ uri: url }} />
        </View>
    );
}

export default WebViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});