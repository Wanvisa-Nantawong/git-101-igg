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

   
    _onSubmit = () => {
        this.validate({
            name:{required: true},
            nickname:{required: true},
            age:{required: true, numbers: true},
            skill:{required: true}
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <View>
                <Text style={styles.getErrorMessages}>
                    {this.getErrorMessages()}
                </Text>
            </View>
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
                <Button 
                title="Create Resume" 
                onPress={this._onSubmit}
                ></Button>
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
    textAreaInput: { height:100, borderColor:'gray',borderWidth: 1},

    getErrorMessages: {color: 'red' ,marginBottom: 20 }

})