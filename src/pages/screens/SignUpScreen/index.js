import React, {useState, useEffect} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AuthForm from "./SignUpAuthform";
import SignUpHeader from "./Header";
import Introduction from "./introduction";
import SignUpBtn from "./SignUpBtn";

const SignUp = ({navigation}) => {

    const [loading, setLoading] = useState(false)

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator/>
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <SignUpHeader/>
                </TouchableOpacity>
                <View>
                    <Introduction/>
                </View>
                <View style={styles.formArea}>
                    <AuthForm style={styles.formArea}/>
                </View>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('SignUpLast')}>
                    <SignUpBtn/>
                </TouchableOpacity>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%')
    },
    logoArea: {
        width: '100%',
        marginTop: hp('15%'),
        alignItems: 'center'
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%')
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    signuptextArea: {
        marginTop: hp("3%"),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    },
    signuptext: {
        fontFamily: 'NotoSansKR-Bold',
        color: "#AAACAE",
        fontSize: 14
    },
    loginBtn: {
        marginTop: hp('16%'),
        marginBottom: hp('4%')
    }
})

export default SignUp;