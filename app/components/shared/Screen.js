import React from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native'
import COLORS from '../../configs/colors';

const Screen = ({children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: COLORS.background
    },
    view: {
        backgroundColor: COLORS.background
        // flex: 1
    }
})

export default Screen;
