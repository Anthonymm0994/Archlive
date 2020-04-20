import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Image} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import ImageSlider from 'react-native-image-slider';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const mapPaddingBottom = screen.height * 0.1;
const mapPaddingTop = screen.height * 0.01;
const mapPaddingLeft = screen.width * 0.01;
const { width, height } = Dimensions.get("window");
const instructions = Platform.select({
  ios: 'ios Home',
  android: 'Android home',
});

//list of events
//can add multiple images within images list
//could be a cool idea to do a slideshow of images on information page
let events = [
  {
    location : "Summerhill Riot",
    date : "Date: September 6, 1966",
    description : "Description: View of part of the crowd gathered in the Summerhill neighborhood of Atlanta, Georgia during a riot, including people identified as members of the Student Nonviolent Coordinating Committee speaking into microphones, while Atlanta Mayor Ivan Allen, Jr. (not pictured) attempts to lead people to Atlanta Stadium to calm the situation. \n \nThe Summerhill Riot is more heavily represented in the Ivan Allen Digital Archive than any other single event from the tenure of Mayor Allen. The number and range of documents in the archive reflect both the importance and the complexity of these events to Mayor Allen's legacy and the history of race relations in Atlanta. To date, there is no comphrensive resource on the events that became known as the Summerhill Riot. The Ivan Allen Digital Archive is the main repository of primary source material related to this historic event, making it a key resource in the development of the narratives about the Summerhill Riot. \n \n Here are some links to check out for more information: https://tomovalora.wixsite.com/mysite \n http://allenarchive.iac.gatech.edu/items/show/4208 \n http://allenarchive.iac.gatech.edu/exhibits/show/summerhill-riots",
    images : require('../../Images/TourSummerhill2.jpg'),
  },
  {
    location : "Fulton County Stadium",
    date : "Date: 1966 September 6",
    description : "Description: View of part of the crowd gathered in the Summerhill neighborhood of Atlanta, Georgia during a riot, including people identified as members of the Student Nonviolent Coordinating Committee speaking into microphones, while Atlanta Mayor Ivan Allen, Jr. (not pictured) attempts to lead people to Atlanta Stadium to calm the situation.",
    images : require('../../Images/summerhill_riot.jpg'),
  },
]

type Props = {};

//initalize the selectedLocation to empty location
let selectedLocation = {
  location : "empty",
  date : "date not yet added",
  description: "location & description not yet added",
  images : [require('../../Images/nophoto.png')],
}

//in case we don't have the location entered yet
const emptyLocation = {
  location : "empty",
  date : "date not yet added",
  description: "location & description not yet added",
  images : require('../../Images/nophoto.png'),
}


export default class TourInformationScreen extends Component<Props> {
  render() {
    //iterating through event list and finding the location we want or else it'll be set to empty state
    let location = this.props.navigation.getParam('location')
    console.log(location);
    for (let i = 0, l = events.length; i < l; i++) {
      if (events[i].location == location) {
        selectedLocation = {
          location: events[i].location,
          date: events[i].date,
          description: events[i].description,
          images: events[i].images,
        }
        events[i].visited = 1
        i = events.length
      } else {

        selectedLocation = emptyLocation;
      }
    }
    //rendering of each page
    return (
        <>
      <ScrollView scrollEventThrottle={16} style={{backgroundColor: "white"}}>
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
        <Text
          style={{
            marginTop: height * 0.04,
            fontSize: 48,
            fontWeight: "700",
            paddingHorizontal: 20,
            paddingTop: 10,
            textAlign: 'center',
            color: "#6e6262"
          }}
        >
          {selectedLocation.location}
        </Text>
        <Image source={selectedLocation.images} style={{ justifyContent: 'center', alignItems: 'center', width: "100%", height: 300}}/>
        <Text style={{
          fontSize: 20,
          fontWeight: "700",
          paddingHorizontal: 20,
          paddingTop: 5,
          color: 'black',
          textShadowColor: '#f0eded',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10,
          textAlign: 'center',
        }}>
        {selectedLocation.date}
        </Text>
        <Text style={{
          paddingTop: 10,
          paddingHorizontal: 15,
          color: "#6e6262",
          fontSize: 14
        }}>
        {selectedLocation.description}
        </Text>


      </View>


    </ScrollView>

    <View style={{position: 'absolute'}}>
    <TouchableOpacity style={styles.nextStop} onPress={() => {
        this.props.navigation.navigate('TourScreen2');
      }}>
        <Text
        style={styles.TextStyle}>
        Next Stop!
        </Text>
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.homepress} onPress={ () => {
        this.props.navigation.goBack(null);
        }}>
        <Image style={styles.backimage} resizeMode='contain'
        source={require('../../Images/backbutton2.png')}>
        </Image>
    </TouchableOpacity>

      </>
  )}

  }

  const styles = {
  nextStop: {
  flex: 1,
  paddingTop:8,
  paddingBottom:8,
  paddingLeft:1,
  paddingRight:8,
  marginLeft: width * 0.02,
  marginRight: width * 0.3,
  backgroundColor:'slategray',
  borderRadius:8,
  borderWidth: 2,
  alignSelf: "flex-end",
  alignItems: "flex-end",
  marginTop: (height * 0.06),
  justifyContent: 'flex-end',
  borderColor: 'white',
  },
  SubmitButtonStyle: {
  paddingTop:12,
  paddingBottom:12,
  paddingLeft:8,
  paddingRight:8,
  left: mapPaddingLeft * 14,
  top: height * 0.05,
  backgroundColor:'lightslategray',
  borderRadius:8,
  borderWidth: 1,
  borderColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  },
  backpress: {
  width: "100%",
  height: "100%",
  top: height * 0.1,
  alignItems: "center",
  justifyContent: "center"
  },
  backimage: {
  flex: 1,
  width: "100%",
  height: "100%",
  },

  homeImage: {
  flex: 1,
  width: "100%",
  height: "100%",
  },

  homepress: {
    width: "10%",
    height: "10%",
    top: height * -0.86,
    right: width * -0.86,
    alignItems: "center",
    justifyContent: "center"
  },
  TextStyle:{
   color:'white',
   fontWeight: "400",
   fontSize: 20,
   textAlign:'center',
   textDecorationLine: 'underline',
   fontFamily: 'didot',
  },
  fabMenuStyle: {
  position: 'absolute',
  },
  MapButton: {
  marginTop:10,
  paddingTop:25,
  paddingBottom:10,
  paddingLeft:15,
  paddingRight:15,
  backgroundColor:'darkslategray',
  borderRadius:5,
  borderWidth: 1,
  borderColor: '#fff'
  },
  MapButtonText: {
  color: 'white',
  fontSize: 20,
},
SubmitButtonStyle: {
  paddingTop:12,
  paddingBottom:12,
  paddingLeft:8,
  paddingRight:8,
  left: mapPaddingLeft * 14,
  top: height * 0.05,
  backgroundColor:'lightslategray',
  borderRadius:8,
  borderWidth: 1,
  borderColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
}}
