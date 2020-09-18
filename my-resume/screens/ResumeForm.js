import React from 'react'
import ValidationComponent from 'react-native-form-validator'
import {View, StyleSheet, Text, TextInput ,Button } from 'react-native'

export default class ResumeForm extends ValidationComponent{
    state = {
        name:'',
        nickname:'',
        age:'',
        skill:''
    }

    render() {
        return (
        <View style={styles.container}>
            <View>
                <Text>Full name</Text>
                <TextInput 
                style={styles.textInput}
                onChangeText={(text) => this.setState({ name: text})}
                value={this.state.name}>

                </TextInput>
                <View style={{ marginTop :20}} >
                    <Text>nickname</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ nickname: text })}></TextInput>

                </View>
                <View style={{ marginTop :20}} >
                    <Text>age</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ age: text })}
                    value={this.state.age}></TextInput>

                </View>

                <View style={{ marginTop :20}} >
                    <Text>skill</Text>
                    <TextInput 
                    style={styles.textAreaInput}
                    onChangeText={(text) => this.setState({ skill: text })}
                    value={this.state.skill}
                    multiline={true}></TextInput>

                </View>
                               
            </View>

            <View style={{ marginTop: 20 }}>
                <Button title="Create Resume"></Button>
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:30, borderColor: 'white',minHeight:'100%'
    },
    textInput: {
        height:40, borderColor:'gray', borderWidth : 1
    },
    textAreaInput: { height:100, borderColor:'gray',borderWidth: 1}

})