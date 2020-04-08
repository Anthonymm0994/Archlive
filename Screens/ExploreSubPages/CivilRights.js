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

export default class CivilRights extends Component<Props> {


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
              paddingTop: 10,
              textAlign: 'center',
              color: "#6e6262"
            }}
          >
            The Civil Rights Act
          </Text>
          <Image source={require('../../Images/civilrights2.jpg')} style={{ justifyContent: 'center', alignItems: 'center', width: "100%", height: 300}}/>
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
          The Public Accommodations Bill
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          The Public Accommodations Bill states that discrimination of minority groups based on race, color, religion, or national origin is outlawed. When President Kennedy first reached to Allen about testifying for the Public Accommodations Bill, Allen was hesitant. Allen knew how polarized the political climate of Atlanta was, and saw his potential testimony as a serious threat to his chances of winning reelection for mayor, which is seen when Allen writes in his memoir, Mayor; Notes on the Sixties, "Please tell the president what I said and ask him to weigh it. Discuss it with him personally, Morris, and be sure he fully understands all of the angles. And then if calls on me and still wants me to do it, If he recognizes that I can’t be re-elected and that my testimony isn’t going to pass the bill, then I’ll go” (105). Allen believed that this testimony was a sort of self sacrifice of his political career for the Civil Rights Movement, and his willingness to do this shows how deeply Allen cared about the movement.
            In July of 1963, Allen gave the testimony in front of a Senate Committee in favor of this bill to end segregation throughout the nation.
          </Text>


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
          Allen's Thoughts From Mayor: Notes on the Sixties
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          Allen reflected on what it meant to be the Mayor of Atlanta during the Civil Rights Movement when he wrote, “A mayor is right on the scene, easily accessible, and the problems that come to him are immediate. There is sadly little time to theorize or pass the buck to a committee for study… So I had to claw and scratch my way through the civil-rights struggle and learn the hard way” (101). This shows that Allen understood that he had to act on what he thought was right, even if there were negative responses.
            When Allen decided that he was going to give his testimony on behalf of the Public Accommodations Bill, he knew that he would face a backlash from the Atlanta community and beyond. This is obvious in his memoir, Mayor: Notes on the Sixties, when he recalls himself saying to Morris, “if I go I won't stand a chance of getting re-elected in 'sixty-five. It would be suicide for me to go, and you know it” (105). While Allen anticipated the negative responses that are seen above, he also believed that sacrifices had to be made in order to achieve racial equality.
            After his testimony, Allen received similar reactions from his friends and family as he received from the strangers in these letters. According to Allen, when he went to North Carolina the weekend following the testimony, he "began to see how deeply the animosity toward the bill and my testimony and myself really ran. I could see my friends that weekend off in the corner by themselves, obviously deeply concerned about what I had done" (114). Allen's family openly criticized his choices which is seen when Allen writes, "Even some of my relatives got into the act, letting it be known that this was the last insult-that there was no way they could deny what Ivan had done this time" (115). While Allen anticipated the backlash from the community as a whole, he did not expect the isolation he felt from his friends and family.
          </Text>

          <View style ={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'}}>

          <TouchableOpacity style={styles.SubmitButtonStyle}>
          <Text
          style={styles.TextStyle}>
          Links
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SubmitButtonStyle}>
          <Text
          style={styles.TextStyle}>
          Multimedia
          </Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.fabMenuStyle}>
      <View>
          <TouchableOpacity style={styles.MapButton}
          onPress={()=> this.props.navigation.navigate('ExploreMap1')}>
          <Text style={styles.MapButtonText}>Explore the Interactive Map!</Text>
          </TouchableOpacity>
      </View>
  </View>

        </>
    )}

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


fabMenuStyle: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right:0,
    justifyContent: 'center',
    alignItems: 'center',
},
TextStyle:{
     color:'white',
     fontWeight: "400",
     textAlign:'center',
 },
 fabMenuStyle: {
  flexDirection: 'row',
  position: 'absolute',
  top: -5,
  right:0,
  justifyContent: 'center',
  alignItems: 'center',
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
}
}
