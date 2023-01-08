import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env'
import { useDispatch } from 'react-redux';

//setdestinaiton and setoorigin are actions from redic
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {

    const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
                style={{
                    width:100,
                    height:100,
                    resizeMode:'contain'
                }}
                source={{
                    uri:"https://links.papareact.com/gzs" , 
                }}
            />

            <GooglePlacesAutocomplete 
                styles={{
                    container: {
                        flex:0,
                        // borderWidth:0.2,
                        // borderColor:"gray",
                        // borderRadius:20,
                        // padding:7
                    
                    },
                    textInput:{
                        fontSize: 18
                    }
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                //search will be executed after stoping for 400 Liliseconds
                debounce={400}
                //minimum length of input to be start seaching for..
                minLength={2}
                enablePoweredByContainer={false}
                //geolocation detail, co=ordinates
                fetchDetails={true}
                placeholder='Where from'
                //queries data from api
                query={{
                  key: GOOGLE_MAPS_API_KEY,
                  language: 'en',
                }}
                returnKeyType={"search"}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                    dispatch(setDestination(null))
                }}
            />
            <NavOptions/>
            <NavFavourites/>
        </View>
       
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"blue"
    }
})