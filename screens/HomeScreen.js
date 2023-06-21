import { GOOGLE_MAPS_APIKEY } from '@env';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: 'contain',
					}}
					source={{
						uri: 'https://img.freepik.com/premium-vector/taxi-service-badge-taxi-map-pointer-vector-icon-for-business-and-advertising-public-transport-design_435184-1169.jpg'
					}} />

				<GooglePlacesAutocomplete
					nearbyPlacesAPI='GooglePlacesSearch'
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							frontSize: 18,
						},
					}}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description
							}))
						dispatch(setDestination(null))
					}}
					fetchDetails={true}
					returnKeyType={"search"}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: 'uk'
					}}
					debounce={400}
					placeholder='Where From?'
				/>

				<NavOptions />
				<NavFavourites />
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})