import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

export const AppImageBackground = (props) => {

    const { children, style = {}, imageStyle } = props;

    return (
        <View style={style}>
            <FastImage  {...props}
                style={[
                    StyleSheet.absoluteFill,
                    {
                        width: style.width,
                        height: style.height,
                    },
                    imageStyle,
                ]}
            />
            {children}
        </View>
    );
}