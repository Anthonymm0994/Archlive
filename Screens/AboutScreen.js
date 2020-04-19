import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native'
import { NavigationActions, withOrientation } from 'react-navigation'

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.01;
const mapPaddingTop = screen.height * 0.65;
const mapPaddingLeft = screen.width * 0.05;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default class AboutScreen extends Component<Props> {

	render() {
		return(
			<View style={styles.container}>
			<ImageBackground source={require('../Images/IvanAllenRunThisCity.png')} style={styles.imageBackground}>
				<Text style={styles.placeholder}>Welcome to the Ivan Allen Digital Archives tour app! Explore Mayor Ivan Allen Jr.’s Atlanta by taking a guided tour or by exploring sites on your own. Browse archival material and connect with important Civil Rights sites and dive into the events of 1960s Atlanta.</Text>

						<TouchableOpacity style={styles.TourButton} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate(NavigationActions.navigate({
								routeName: 'tourStack',
								action: NavigationActions.navigate({ routeName: 'TourScreen' })
								}))}>
								<Text style={styles.tourText}>Take our guided tour!</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.ExploreButton} activeOpacity={0.3} onPress={()=> this.props.navigation.navigate(NavigationActions.navigate({
							routeName: 'exploreStack',
							action: NavigationActions.navigate({ routeName: 'Events' })
							}))}>
								<Text style={styles.tourText}>Explore on your own!</Text>
						</TouchableOpacity>
			</ImageBackground>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	backpress: {
		width: "22%",
		height: "15%",
		top: mapPaddingTop * -.425,
		right: mapPaddingLeft * -15.7,
		alignItems: "center",
		justifyContent: "center"
	},
	backimage: {
		width: "80%",
		height: "80%",
	},
	placeholder: {
		fontSize: 22,
		color: 'white',
		backgroundColor: 'black',
		opacity: 0.7,
		top: height - (height * 0.95),
		width: (width * 0.50),
		alignSelf: "flex-end",
		textAlign: "left"
	},
	guidedText: {
		fontSize: 28,
		color: 'white',
		fontFamily: 'didot',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		left: 3,
		bottom: 8,
	},
	tourText: {
		fontSize: 20,
		color: 'white',
		fontFamily: 'didot',
		fontWeight: 'bold',
		textAlign: "center",
	},
	imageBackground: {
		width: '100%',
		height: '100%',
	},
	TourButton: {
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:15,
		paddingRight:15,
		backgroundColor:'slategray',
		borderRadius:10,
		borderWidth: 2,
		borderColor: '#fff',
		position: 'absolute',
		top: mapPaddingTop * .95,
		left: width/2 - 150,
		height: 50,
		width: 300,
	},
	ExploreButton: {
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:15,
		paddingRight:15,
		backgroundColor:'slategray',
		borderRadius:10,
		borderWidth: 2,
		borderColor: '#fff',
		position: 'absolute',
		top: mapPaddingTop * 1.10,
		left: width/2 - 150,
		height: 50,
		width: 300,
	},
	transparentTour: {
		position: 'absolute',
		top: mapPaddingTop,
		left: width/2 - 130,
		height: 40,
		width: 250,
		backgroundColor: 'black',
		opacity: 0.4,
	},
	transparentGuide: {
		position: 'absolute',
		top: mapPaddingTop * 1.12,
		left: width/2 - 130,
		height: 40,
		width: 250,
		backgroundColor: 'black',
		opacity: 0.4,
	},
});
