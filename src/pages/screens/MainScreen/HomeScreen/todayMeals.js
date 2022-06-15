import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';

const MealList = () => {

    const _renderItem = ({item, index}) => {
        return (<View>
            <Text>{item.title}</Text>
        </View>)

    }

    return (
        <View>
            <Text>캐러셀 부분</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleArea: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        marginTop: hp('50%')
    },
    todayMealText: {
        fontSize: 20,
        fontFamily: 'SFPRODISPLAY-BOLD',
        color: '#12121D'
    },
    weekMeal: {
        fontSize: 12,
        alignItems: "center"
    }
})

export default MealList;