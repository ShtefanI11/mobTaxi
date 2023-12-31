import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import { selectOrigin } from '../slices/navSlice'

const data = [
	{
		id: '123',
		title: "Get a ride",
		image: 'https://cdn2.iconfinder.com/data/icons/smartphone-app-to-order-services-online/416/mobile-app-001-512.png',
		screen: 'MapScreen',
	},
	{
		id: '456',
		title: "Order food",
		image: 'https://cdn-icons-png.flaticon.com/512/7217/7217494.png',
		screen: 'EatsScreen',
	},
]

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin);
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			horizontal
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(item.screen)}
					style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
					disabled={!origin}
				>
					<View style={tw`${!origin && 'opacity-20'}`}>
						<Image
							style={{ width: 120, height: 120, resizeMode: 'contain' }}
							source={{ uri: item.image }}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
						<Icon
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
							type='antdesign'
							name='arrowright'
							color='white'
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	)
}

export default NavOptions
