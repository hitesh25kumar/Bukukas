import * as React from 'react';
import { Text, View,FlatList, StyleSheet,Dimensions,TouchableOpacity,ImageBackground } from 'react-native';

import eventsData from '../Data/data';
interface EventCardProps {navigation,events,ScreenType}



const EventCard = (props: EventCardProps) => {
    const {events,ScreenType } = props;
    console.log('events: ', events);
    // console.log('props: ', props,eventData);
    const SeeEventDetails = (item) => {
        const { navigation } = props;
        navigation.navigate('EventDetails',{eventDetails:item,ScreenType})
    }

    return (
        <FlatList
                style={styles.container}
                showsVerticalScrollIndicator={false}
        data={eventsData}
        renderItem={({ item }) => 
        <React.Fragment key={item.id}>
        {(ScreenType || (events && events.includes(item.id))) &&
            <TouchableOpacity onPress={() => SeeEventDetails(item)} style={styles.eventCardWrapper}>
            <ImageBackground source={{uri: item.image}} imageStyle={styles.imageStyle} style={styles.eventImage} resizeMode='cover'>
            <View style={styles.entryType}><Text style={styles.entryTypetxt}>{item.entryType}</Text></View>
    
            </ImageBackground>
            <View style={styles.eventNameWrapper}>
                <Text style={styles.eventName}>{item.eventName}</Text>
              
            </View>
            <View style={styles.eventDetailsWrapper}>
            <View style={styles.eventLocationWrapper}>
            <View style={styles.eventLocationInnerWrapper}>
        <Text style={styles.venue}>{item.venue}</Text>
        <Text style={styles.eventLocation}>{item.location}</Text>
        </View>
        <Text style={styles.eventTimings}>{item.date} | {item.time}</Text>
            </View>
              <View style={styles.eventActionWrapper}>
                  <View style={styles.eventActionLeftWrapper}>
    
                  <View style={styles.eventaction}><Text style={styles.going}>{item.going}</Text><Text>Going</Text></View>
                  <View style={styles.eventaction}><Text style={styles.maybeGoing}>{item.maybeGoing}</Text><Text>Maybe Going</Text></View>
                  </View>
              </View>
            </View>
    
            </TouchableOpacity>
              }
           </React.Fragment>
    }
        keyExtractor={item => item.id}
      />
           
    )
}

export default EventCard;

const styles = StyleSheet.create({
  container: {flex: 1,padding:'5%',marginBottom:'5%'},
  eventCardWrapper:{width:'100%',backgroundColor:'#fff',shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5,borderRadius:8,marginBottom:'5%'},
  eventImage:{width:'100%',height:150},
  imageStyle:{borderTopLeftRadius:8,borderTopRightRadius:8},
  eventNameWrapper:{width:'100%',padding:'3%',paddingBottom:0},
  eventName:{fontWeight:'bold',fontSize:17},
  eventDetailsWrapper:{width:'100%',paddingHorizontal:'5%',paddingVertical:'3%'},
  eventLocationInnerWrapper:{display:'flex',width:'50%'},
  eventLocationWrapper:{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.5,paddingBottom:'5%',borderColor:'#DEDEE7'},
  eventLocation:{color:'#333333',fontSize:15,width:'100%'},
  venue:{fontSize:15,width:'100%',color:'#000',fontWeight:'bold'},
  eventTimings:{color:'#333333',fontSize:15,display:'flex',alignItems:'center',justifyContent:'center',padding:'2%'},
  eventActionWrapper:{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:'2%'},
  eventActionLeftWrapper:{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:'2%'},
  eventActionRightWrapper:{width:'40%',display:'flex',alignItems:'center',justifyContent:'center'},
  rsvpbtn:{backgroundColor:'#323edd',paddingVertical:'5%',paddingHorizontal:'10%',borderRadius:15,fontSize:15},
  going:{backgroundColor:'green',borderRadius:15,width:30,height:30,marginRight:'5%',textAlign:'center',paddingVertical:5,color:'#fff'},
  maybeGoing:{backgroundColor:'red',borderRadius:15,width:30,height:30,marginLeft:'5%',marginRight:'5%',textAlign:'center',paddingVertical:5,color:'#fff'},
  checkDetails:{color:"#fff"},
  entryTypetxt:{color:'#fff'},
  entryType:{position:'absolute',right:0,top:10,backgroundColor:'#323edd',paddingVertical:'2%',paddingHorizontal:'5%',display:'flex',alignItems:'center',justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20},
  eventaction:{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}
});
