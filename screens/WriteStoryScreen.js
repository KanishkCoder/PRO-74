import React from 'react';
import { Alert, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import db from '../confige'
import { Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions'

export default class WriteStoryScreen extends React.Component{
constructor(props){
    super(props);
    this.state={
        author: '',
        storyText: '',
        title: ''
    };
}

submitStory=()=>{
    db.collection('stories').add({
        author: this.state.author,
        storyText: this.state.storyText,
        title: this.state.title
    });
    this.setState({
        author: '',
        storyText: '',
        title: ''
    });ToastAndroid.show('STORY SUBMMITED',ToastAndroid.SHORT)
};


    render(){
            return(
                <KeyboardAvoidingView style={styles.container}>
                    <Header
                    backgroundColor={'pink'}
                    centerComponent = {{
                        text: 'Bed Time Stories',
                        style: {color:'white', fontSize:20}
                    }}
                />
                <TextInput
                placeholder="Story Title"
                onChangeText={(text)=>{
                    this.setState({
                        title: text
                    })
                }}
                value={this.state.title}
                style={styles.title}
                />
                <TextInput
                placeholder="Author"
                onChangeText={(text)=>{
                    this.setState({
                        author: text
                    })
                }}
                value={this.state.author}
                style={styles.author}
                />
                <TextInput
                placeholder="Write your Story"
                onChangeText={(text)=>{
                    this.setState({
                        storyText: text
                    })
                }}
                value={this.state.storyText}
                style={styles.storyText}
                multiline={true}
                />
                <TouchableOpacity
                style={styles.submitButton}
                onPress={this.submitStory}>
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
                
            )
        }
    }
        
        


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    title:{
        height:40,
        borderWidth:2,
        marginTop:40,
        margin:10
    },
    author:{
        height:40,
        borderWidth:2,
        margin: 10
    },
    storyText:{
        height:250,
        borderWidth:2,
        margin: 10
    },
    submitButton:{
        flexDirection:'row',
        margin:20,
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor:'white'
    },
    storyBox:{
        width:200,
        height:200,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor:'white'
    },
    submitButtonText:{
        backgroundColor: '#66BB6A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    }
});