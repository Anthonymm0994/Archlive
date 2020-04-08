import React, {Component, useEffect } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TouchableOpacity,
    Button,
  } from "react-native";

const { width, height } = Dimensions.get("window");

export default class SummerhillRiot extends Component<Props> {


    render() {
      return (
        <>
        <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
          <Text
            style={{
              fontSize: 48,
              fontWeight: "700",
              paddingHorizontal: 20,
              textAlign: 'center',
              color: "#6e6262"
            }}
          >
            Summerhill Riot
          </Text>
          <Image source={require('../../Images/riot.jpg')} style={{ paddingHorizontal: 20, paddingTop: 10}}/>
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
          What happened on September 6, 1966 in the Summerhill neighborhood of Atl?
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          Amidst all the chaos and the so-called rioting that took place in Summerhill, two key players stick out as pivotal in the formation and handling of the complex situation: Mayor Ivan Allen, Jr., and Stokely Carmichael of the Student Nonviolent Coordinating Committee (SNCC). This section of the website primarily focuses on the role these two people played in the story of Summerhill and how the citizens of Atlanta and beyond responded to their actions.
          The vast majority of documents found within the Ivan Allen Digital Archive regarding Summerhill are letters or telegrams from a multitude of Atlanta citizens and organizations of all backgrounds. They offer their opinions and responses to the events that occurred, spanning from complete approval to complete disapproval regarding the actions of Allen, Carmichael, SNCC, or some combination of these parties. It is worth noting that the digital archive contains more letters and documents on Summerhill than anything else, surpassing all other major events that happened throughout Allen's two terms as mayor. With this, the archive shows just how many citizens felt compelled to respond to the event and how big of an effect the Summerhill Riot had on Allen’s administration, the city of Atlanta, and the evolving Civil Rights Movement.
​           These documents create an interesting narrative about Summerhill that expresses an overall favorability of Allen’s handling of the situation, even among those generally opposed to his mayorship, as well as deteriorating support for young, radical civil rights organizations like SNCC. Though many Atlantans began to express a growing concern over Carmichael’s leadership abilities and the activities of SNCC, the Summerhill Riot deepened some people’s loyalties to SNCC who felt that their grievances needed to be heard. Furthermore, despite most people praising Allen as a hero for his actions, the involvement of the police during the "riot" and the arrest of Carmichael gave citizens a chance to criticize Allen’s neglect of Black communities like Summerhill and his failure to understand the systemic inequities that continued to dominate the lives of Black Atlantans after the passage of the Civil Rights Act of 1964.
          </Text>
          <Text >
          
              {"\n"}
              {"\n"}
              {"\n"}
          
          </Text>
        </View>
        
      </ScrollView>

	  <View style={styles.fabMenuStyle}>

			<TouchableOpacity style={styles.SubmitButtonStyle}>
			<Text
			style={styles.TextStyle}>
			People
			</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.SubmitButtonStyle}   onPress={()=> this.props.navigation.navigate('ExploreMap')}>
			<Text
			style={styles.TextStyle}>
			Maps
			</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.SubmitButtonStyle}>
			<Text
			style={styles.TextStyle}>
			Documents
			</Text>
			</TouchableOpacity>
			</View>

      </>
      
    )
    }

}

const styles = {

  SubmitButtonStyle: {
    marginTop:15,
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:50,
      paddingRight:50,
      backgroundColor:'#6a7fa1',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
},
TextStyle:{
     color:'white',
     fontWeight: "400",
     textAlign:'center',
 },
fabMenuStyle: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -5,
    right:0,
    justifyContent: 'center',
    alignItems: 'center',
},

MapButton: {
  marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'darkslategray',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
},

MapButtonText: {
  color: 'white',
  fontSize: 20,
}
}
