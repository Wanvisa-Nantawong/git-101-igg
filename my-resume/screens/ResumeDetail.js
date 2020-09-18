import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {StyleSheet, View, Text } from 'react-native'
import ResumeForm from './ResumeForm'

export default (props) => {
    
    const [resume, setResume] = useState({
        name:'',
        nickname:'',
        age:'',
        skill:'',
    })

    useEffect(() => {
        const id = props.route.params.id
        axios.get('https://movie-api.igeargeek.com/users/profile/' + id)
        .then((res) => {
            console.log('res', res.data)
        }).catch((error) => {
            console.log('error', error)
        })

    }, []
    )

    return (
        <View style={StyleSheet.container}>
            <View style={styles.taxtLine}>
                <Text>Full name : {resume.name}</Text>
            </View>
            <View style={styles.taxtLine}>
                <Text>Nickname : {resume.nickname}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {padding: 30 ,backgroundColor:'white', minHeight:'100%'},
    taxtLine: {marginBottom: 20}
})