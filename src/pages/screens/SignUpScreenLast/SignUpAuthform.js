import React, {useState} from "react";
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input from "../../../../utils/forms/input";


const AuthForm = () => {
    const [inputState, setInputState] = useState({
        type: 'Login',
        action: 'Login',
        actionMode: '새로 등록할게요~',
        hasErrors: false,
        value: "",
        type: "textinput",
        rules: {},
        valid: false
    });

    const [nameInput, setNameInput] = useState("")
    const [phoneNumInput, setPhoneNumInput] = useState("")
    const [certificationNumInput, setCertificationNumInput] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>이름</Text>
            <Input
                value={nameInput}
                type={"textinput"}
                autoCapitalize={'none'}
                keyboardType={'default'}
                placeholder='이름을 입력해주세요.'
                onChangeText={text => setNameInput(text)}/>
            <Text style={styles.titleText}>휴대폰 번호</Text>
            <Input
                value={phoneNumInput}
                type={"textinput"}
                autoCapitalize={'none'}
                keyboardType={'phone-pad'}
                secureTextEntry={true}
                onChangeText={text => setPhoneNumInput(text)}
                placeholder='휴대폰 번호를 입력해주세요.'/>
            <Text style={styles.titleText}>인증번호 확인</Text>
            <Input
                value={certificationNumInput}
                type={"textinput"}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                secureTextEntry={true}
                onChangeText={text => setCertificationNumInput(text)}
                placeholder='인증번호를 입력해주세요.'/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: hp('2%')
    },
    textForm: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#DBDBDB',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    titleText: {
        fontFamily: 'NotoSansKR-Bold',
        fontSize: 14,
        color: '#1F2C37',
        marginTop: 20
    }
})

export default AuthForm;