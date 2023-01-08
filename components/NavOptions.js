import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'


const data = [
    {
        id:"123",
        title:"Get a ride",
        image: "https://links.papareact.com/3pn",
        screen:"MapScreen"
    },
    {
        id:"456",
        title:"Order food",
        image: "https://links.papareact.com/28w",
        screen:"EatScreem"
    }
]

export default function NavOptions() {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

  return (
    <FlatList
        data={data}
        horizontal
        //unique idetifier to identify items
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => (
            <TouchableOpacity  
                disabled={!origin}
                onPress={()=>navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                
                {/* reduce the opacity if the user hasn't selected origin yet */}
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                    style={{width:120, height:120, resizeMode:'contain'}}
                    source={{
                        uri:item.image
                    }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-5 w-10 mt-4`}
                        type='antdesign'
                        name='arrowright'
                        color="white"
                    />
                </View>
            </TouchableOpacity>
        )}
     />
  )
}