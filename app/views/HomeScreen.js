import React, {useState} from 'react';
import {View, ImageBackground,Text,StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../helpers/Dimensions';
import { Picker } from '@react-native-picker/picker';
import useHomeScreenViewModel from './../viewmodel/HomeScreenViewModel'
const HomeScreen = () => {
    const {
        dataObj,
        location,
        cities,
        onChange
    } = useHomeScreenViewModel();
  return (
    <View style={styles.mainContainer}>
      <View
        style={styles.header}>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue, itemIndex) =>
            onChange(itemValue)
          }>
                  {cities.map(item => {
                      return (
                        <Picker.Item label={item} value={item} />
              )
          })}
         
       
        </Picker>
      </View>
      <ImageBackground
        source={require('./../../assets/Images/background-image.png')}
        style={styles.bgimg}
              resizeMode="cover">
              <View
                  style={styles.sideContainer}
              >
                  <View style={{flexDirection:'row'}}>
                      <Text style={{ fontSize: moderateScale(90), color: 'white' }}>{dataObj?.temp.toFixed(1)}{'\u00B0'}</Text>
                      <Text style={{ fontSize: moderateScale(60), color: 'white' }}>C</Text>
                  </View>
                  <Text style={{ fontSize: moderateScale(25), color: 'white' }}>Wind Speed: {dataObj?.wind.toFixed(1)} km/h</Text>
                  <Text style={styles.descriptionText}>Pressure: {dataObj?.pressure} mb</Text>
                  <Text style={styles.descriptionText}>Humidity: {dataObj?.humidity}%</Text>
                  <Text style={styles.descriptionText}>Feels Like: {dataObj?.feelsLike.toFixed(0)}</Text>

                  </View>
        </ImageBackground>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
    mainContainer: {
      flex:1
    },
    header: {
        width: horizontalScale(375),
        height: verticalScale(70),
        backgroundColor: '#323130'
    },
    bgimg: {
        width: horizontalScale(375),
        height: verticalScale(742)
    },
    sideContainer: {
        width: horizontalScale(265),
        height: verticalScale(742),
        backgroundColor: 'rgba(50, 49, 48, .7)',
        justifyContent: 'center',
        alignItems:'center'
    },
    descriptionText: {
        fontSize: moderateScale(25),
        color: 'white',
        marginTop: verticalScale(10)
    },
  });
  