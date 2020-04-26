import React,{useState} from 'react';
import { Text, View,FlatList,Dimensions,TouchableOpacity,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { gridStyles,listStyles } from '../StyleSheets/EventCard';
import eventsData from '../Data/data';
interface EventCardProps {navigation,events,ScreenType,eventsData}

const {width} = Dimensions.get('window')

const EventCard = (props: EventCardProps) => {
    const {events,ScreenType,eventsData } = props;
    console.log('events: ', events);
    const [layout, setView] = useState(false);
    const SeeEventDetails = (item) => {
        const { navigation } = props;
        navigation.navigate('EventDetails',{eventDetails:item,ScreenType})
    }
    const styles = layout ? listStyles : gridStyles;
    return (
        <View style={gridStyles.mainWrapper}>
            <View style={gridStyles.cardTopWrapper}>
  <Text style={gridStyles.EventCategoryTitle}>Discover Events near you</Text>
<Icon name="list"  size={30} onPress={() => setView(!layout)} style={{marginTop:'3%'}}/>
</View>
        <FlatList
        extraData
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
            <View style={styles.layout}>
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
    </View>
            </TouchableOpacity>
              }
           </React.Fragment>
    }
        keyExtractor={item => JSON.stringify(item.id)}
      />
       </View>    
    )
}

export default EventCard;
