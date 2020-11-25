import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
export default function VerticalSeparator(props){
    return(
        <View style={[
            style.separator,
            {
                borderTopColor:(props.color) ? props.color : '#eaeae'
            }
        ]}>
            <Text>Esto es un separador</Text>
        </View>
    )
}

const style = StyleSheet.create({
    separator:{
        borderTopWidth:1,
    }
})