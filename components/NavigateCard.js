import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import {GOOGLE_MAPS_API_KEY} from '@env'
import { useDispatch } from 'react-redux';

//setdestinaiton and setoorigin are actions from redic
import { setDestination, setOrigin } from '../slices/navSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/base'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <Text style={tw`text-center text-xl py-5`} >Good Morning, Sayed</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
          <GooglePlacesAutocomplete 
                    styles={toInputBoxStyle}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    //search will be executed after stoping for 400 Liliseconds
                    debounce={400}
                    //minimum length of input to be start seaching for..
                    minLength={2}
                    enablePoweredByContainer={false}
                    //geolocation detail, co=ordinates
                    fetchDetails={true}
                    placeholder='Where To'
                    //queries data from api
                    query={{
                      key: GOOGLE_MAPS_API_KEY,
                      language: 'en',
                    }}
                    returnKeyType={"search"}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // console.log(data, details);
                        dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                        navigation.navigate('RideOptionCard')
                    }}
                />

          <NavFavourites/>
        </View>

        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`} >
          <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
            onPress={()=>navigation.navigate('RideOptionCard')}>
              <Icon name='car' type='font-awesome' color={"white"} size={16}/>
              <Text style={tw`text-white text-center`} >Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name='fast-food-outline' type='ionicon' color={"black"} size={16} />
            <Text style={tw` text-center`} >Eats</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyle = StyleSheet.create({
        container: {
            flex:0,
            backgroundColor:"white",
            paddingTop: 20
        },
        textInput:{
            fontSize: 18,
            backgroundColor:"#DDDDDDDF",
            borderRadius:0
        },
        textInputContainer:{
            paddingHorizontal:20,
            paddingBottom: 0
        }

})