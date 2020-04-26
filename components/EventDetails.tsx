import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet, ImageBackground,Dimensions,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JoiningConfirmPopup from './JoiningConfirmation';
import Database from '../database';

const db = new Database();
interface EventDetailsProps {route}

const { width,height} = Dimensions.get('window')
const EventDetails = (props: EventDetailsProps) => {
  const [events, setEvents] = useState([]);
  const [favourite, setfavourite] = useState(false);
    console.log('props: event details', props,events);
    const {route } = props;
    const {params } = route;
    const {ScreenType } = params;
    // const eventDetails ={}
    useEffect(() => {
      console.log('event details api call');
      // Update the document title using the browser API
      getSubscribedEvents();
    },[]);
    
    const getSubscribedEvents = () => {
      db.listJoinedEvents().then((data) => {
          console.log('event details data: details', data);
          setEvents(data)
      //   products = data;
      //   this.setState({
      //     products,
      //     isLoading: false,
      //   });
      }).catch((err) => {
        console.log(err);
      //   this.setState = {
      //     isLoading: false
      //   }
      })
}
const joinEvent = (id) => {
    let data = {
      id: id,
    }
    db.addEvent(data).then((result) => {
      console.log(result);
      // this.setState({
      //   isLoading: false,
      // });
      // this.props.navigation.goBack();
    }).catch((err) => {
      console.log(err);
      // this.setState({
      //   isLoading: false,
      // });
    })
  }



  return (
    <View style={styles.container}>
      {/* <JoiningConfirmPopup/> */}
      <ImageBackground resizeMode="cover" style={styles.eventDetailsImage} source={{uri:params && params.eventDetails.image}}>
          <View style={styles.entryType}><Text style={styles.entryTypetxt}>{params && params.eventDetails.entryType}</Text></View>

      </ImageBackground>
      <View style={styles.eventDetailsWrapper}>
         
          <View style={styles.eventDetailsBottomWrapper}>
              <View style={styles.eventDetailsInfo}>
                <View style={styles.eventnameWrapper}>
              <Text style={styles.eventName}>{params && params.eventDetails.eventName}</Text><Icon name="heart" size={30} color={favourite ? 'red' : "#888888"} backgroundColor="#fff" onPress={() => setfavourite(!favourite)}/>
              </View>
                  <View style={styles.dateTimeWrapper}>
                  <Icon name="calendar" size={20} color="#888888"/>
                  <View style={styles.detailsInnerWrapper}><Text style={styles.detailsInnerTitle}>{params && params.eventDetails.date}</Text><Text style={styles.detailsInnersubTitle}>{params && params.eventDetails.time}</Text></View>
                  
                  
                  </View>
                  <View style={styles.locationWrapper}>
                  <Icon name="map" size={20} color="#888888"/>
                  <View style={styles.detailsInnerWrapper}>

                  <Text style={styles.detailsInnerTitle}>{params && params.eventDetails.location}</Text>
                  <Text style={styles.detailsInnersubTitle}>Bangalore,India</Text>
                  </View>
                  </View>
                  <View style={styles.eventDetailsTopWrapper}>
                    <View style={styles.eventDetailsuserInfoInnerWrapper}>
          <Text style={styles.going}>{params && params.eventDetails.going}</Text><Text style={styles.detailssubtxt}>Going</Text>
          </View>
          <View style={styles.eventDetailsuserInfoInnerWrapper}>
              <Text style={styles.maybeGoing}>{params && params.eventDetails.maybeGoing}</Text><Text style={styles.detailssubtxt}>Maybe Going</Text>
             </View>
          </View>
          <View style={styles.aboutEventWrapper}>
  <Text style={styles.aboutEventtxt}>The total trip is for 5 days, Day 0 and Day 4 are travelling days where we will enjoy the scenic beauty of Himalayan ranges and beautiful rivers. Our stay wills</Text>
  </View>
              </View>
<TouchableOpacity disabled={events && events.includes(params && params.eventDetails.id)} style={[styles.rsvp,{backgroundColor: events && events.includes(params && params.eventDetails.id) ? '#888888' : '#323edd'}]} onPress={() => joinEvent(params && params.eventDetails.id)}>
    <Text style={styles.rsvpTxt}>{events && events.includes(params && params.eventDetails.id) ? 'JOINED' :'JOIN EVENT' }</Text>
</TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  container: {},
  eventDetailsImage:{width:'100%',height:height/3,display:'flex',alignItems:'flex-start',justifyContent:'flex-end'},
  eventName:{color:'#000',fontSize:20,fontWeight:'bold',marginBottom:'8%',width:'100%'},
  eventDetailsWrapper:{
width:'100%',height:'100%',top:-15,backgroundColor:'#323edd',zIndex:99,borderTopLeftRadius:18,borderTopRightRadius:18,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,display:'flex',alignItems:'center'
  },
  eventDetailsTopWrapper:{height:100,width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:'row',},
  eventDetailsBottomWrapper:{width:'100%', backgroundColor:'#fff',height:'100%',borderTopLeftRadius:18,borderTopRightRadius:18,padding:'3%',paddingTop:'5%',shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5},
  rsvp:{paddingHorizontal:'2%',backgroundColor:'#323edd',margin:'5%',paddingVertical:'3%',display:'flex',alignItems:'center',borderRadius:18,marginTop:'8%'},
  rsvpTxt:{color:'#fff',fontWeight:'bold',letterSpacing:1},
  going:{backgroundColor:'green',borderRadius:15,width:30,height:30,textAlign:'center',paddingVertical:5,color:'#fff'},
  maybeGoing:{backgroundColor:'red',borderRadius:15,width:30,height:30,textAlign:'center',paddingVertical:5,color:'#fff'},
  detailssubtxt:{color:'#000',marginLeft:'5%'},
  entryType:{position:'absolute',right:0,top:10,backgroundColor:'#323edd',paddingVertical:'2%',paddingHorizontal:'5%',display:'flex',alignItems:'center',justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20},
  entryTypetxt:{color:'#fff'},
  eventDetailsTitle:{width:'100%',fontWeight:'bold',fontSize:20,padding:'5%',color:'#000'},
  eventDetailsInfo:{width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'flex-start'},
  eventLocation:{color:'#000',fontSize:20,fontWeight:'bold',marginVertical:'5%'},
  detailsInnerTitle:{color:'#000',fontSize:20,width:'100%'},
  detailsInnersubTitle:{fontSize:17,color:'#888888'},
  dateTimeWrapper:{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',width:'100%',marginBottom:'5%'},
  detailsInnerWrapper:{paddingLeft:'5%'},
  eventnameWrapper:{width:'90%',display:'flex',flexDirection:'row',justifyContent:'space-between'},
  locationWrapper:{width:'90%',display:'flex',flexDirection:'row',alignItems:'center'},
  eventDetailsuserInfoInnerWrapper:{width:'50%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},
  aboutEventtxt:{color:'#888888',fontSize:17},
  aboutEventWrapper:{height:'10%'}
});
