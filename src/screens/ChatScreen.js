import React, { useState, useCallback, useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions, SystemMessage, Send } from 'react-native-gifted-chat'
import { GiftedChat} from '../components/GiftedChat' 
const LoginScreen = () => {
    const [messages, setMessages] = useState([]);
    const [enteredMsg, setEnteredMsg] = useState("");

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={styles.parentView}>
            <GiftedChat
                // text={enteredMsg}
                // onInputTextChanged={text => setEnteredMsg(text)}
                style={styles.giftedViewStyle}
                messages={messages}
                // isTyping={true}
                inverted={true}
                placeholder="Type any text here"
                color="#FF0000"

                alwaysShowSend={true}
                onPressAvatar={user => {
                    console.log(user);
                }}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}

                // renderSend={props => {
                //     return (
                //         <Send {...props}>
                //             <TouchableOpacity onPress={(messages) => onSend(messages)} style={styles.sendBtn}>
                //                 <Text>Send</Text>
                //             </TouchableOpacity>
                //         </Send>
                //     )
                // }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        padding: 5
    },
    giftedViewStyle: {
    }
});

export default LoginScreen;