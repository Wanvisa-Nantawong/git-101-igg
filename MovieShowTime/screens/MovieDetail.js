import React, { useEffect, useState }from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios'


export default function MovieDetail({ navigation, route }) {
    const [movies, setMovies] = useState({
        genre: []
    })
    

    useEffect(() => {
        const itemId = route.params.id
        axios.get(`https://movie-api.igeargeek.com/movies/${itemId}`)
            .then(res => {
            const movies = res.data;
            setMovies(movies)
        })
      }, [])


    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
            <WebView
                allowsFullscreenVideo
                source={{uri: movies.youtubeUrl}}
                style={{height:200, flex: 1}}
            />
            <View style={{flex: 2, padding:15, backgroundColor: '#3399ff'}}>
                <View style={{flexDirection:'row'}}>
                    <Image 
                    source={{uri: movies.posterUrl}} 
                    style={{ flex: 1, height: 180 }}
                    resizeMode={'stretch'}
                    />
                    <View style={{flex: 2, marginLeft: 15}}>
                        <Text style={{ color: 'white', fontSize:17}}>{movies.name}</Text>
                        <Text style={{color: 'white'}}>ประเภท : {movies.genre.join(',')}</Text>
                        <Text style={{color: 'white'}}>วันที่เข้าฉาย: {movies.showingAt} </Text>
                        <Text style={{color: 'white'}}>ระยะเวลา: {movies.duration} นาที </Text>

                    </View>
                    
                </View>

                <View style={{borderBottomColor:'white', borderBottomWidth:1,marginVertical:15}}>
                </View>
                <View style={{flex: 1}}>
                <Text style={{color: 'white'}}>เรื่องย่อ</Text>
                <Text style={{color: 'white', lineHeight:30}}>{movies.description}</Text>

                </View>

    <View style={{flex:1}}>

    </View>

            </View>
        </View>
        </ScrollView>
    )
}