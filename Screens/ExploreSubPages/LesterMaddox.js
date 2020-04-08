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

export default class LesterMaddox extends Component<Props> {


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
            Governor Lester Maddox
          </Text>
          <Image source={require('../../Images/lestermaddox2.jpg')} style={{ justifyContent: 'center', alignItems: 'center', width: "100%", height: 400}}/>
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
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          A defining feature of Ivan Allen Jr.’s term as mayor was his “battles” against Lester Maddox. By portraying Maddox as his nemesis and distancing himself from Maddox’s ideology, Allen was able to solidify his stance as an integrationist and amplify his civil rights rhetoric.
            Throughout the 1960’s, public clashes between Allen and Maddox were constant. Allen began to take a public stand against Maddox when the two men ran against each other for Atlanta mayor in 1961. His criticism continued beyond 1966 when Maddox won the gubernatorial election, an outcome that was far from ideal in the eyes of Allen. 
​           By examining the interactions between the two men throughout this decade, one can gain a clearer picture of  Maddox’s racism through its contrast with Allen’s civil rights rhetoric, in addition to understanding the reasons why Maddox was unsuccessful in the election for mayor, but successful in the election for governor.
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
          Maddox and Allen: Road to the 1961 Election
          </Text>
          <Text style={{
            paddingTop: 10,
            paddingHorizontal: 15,
            color: "#6e6262",
            fontSize: 14
          }}>
          Although their paths crossed as competitors in the 1961 election, the lives that Allen and Maddox led before this encounter were extremely different. Rather than merely comparing the two men, it is interesting to examine their upbringings in relation to their stances on the race issue to understand how they inherited their beliefs from the surroundings they matured in.
            Ivan Allen was raised in a well-to-do, influential family with great stakes in community affairs. The sense of responsibility he felt for the world around him was evident when through his statement on community engagement in his memoir, Mayor: Notes from the Sixties where he said “The Ivan Allen Company needed me, my family needed me, the Chamber of Commerce needed me.” He makes it a priority to not only carry on the company his father started, but also to be a point of support for other local business owners through the Chamber of Commerce, thus showing his regard for those beyond himself. 
            In early 1961, when asked about Allen, Constitution editor, Eugene Patterson said that ““He is not content with what he can do for himself; he is concerned with what he can do for people. And that is a pretty noble thing.” Her statement makes it clear that his regard for others was not merely a facade that he put on in his memoir, but rather, it was a genuine interest in helping the community that he exhibited in his daily life. 
            His upbringing in position of care for the community and engagement with others helped to cultivate his advocacy for civil rights, as it was a means by which he could improve the social and economic situation of Atlanta which he felt that as a prominent resident of the city, was his responsibility.
            Lester Maddox, on the other hand, was the second of seven children from a non influential Georgia family. He never had strong connections to the business world like Allen did, and instead looked out for himself trying to make ends meet through various blue collar jobs such as when he worked at the Bell Aircraft Factory during World War 2. He was a constant victim of poverty until he and his wife used their life savings to open a restaurant called the Pickrick. He took a strong segregationist stance with his restaurant in the 1960’s, physically pushing African Americans out of the building to make it clear that they were not welcome.
            Maddox’s upbringing where he was taught to look out for himself and his own interests endowed him with traits that continued into his adulthood. By keeping African Americans separate from whites and viewing them as inferior and dangerous, he was able to stay ahead of them and maintain a perceived sense of superiority. Segregation, in this sense, was a method of self preservation in the eyes of Maddox that was cultivated in him by his upbringing. 
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
