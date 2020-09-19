import React from 'react'
import { View, Text , TouchableHighlight, Button, TouchableOpacity} from 'react-native'


export default function MovieList({navigation}) {
    return (
        <View>
            <TouchableHighlight
            onPress={() => navigation.navigate('MovieDetail')}>
            <Text>Go to Movie Detail Page</Text>
               </TouchableHighlight>
        </View>
    )
}