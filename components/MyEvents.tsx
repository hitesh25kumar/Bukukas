import React,{useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import Database from '../database';

const db = new Database();
interface MyEventsProps {navigation}

const MyEvents = (props: MyEventsProps) => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        console.log('my events api call');
        // Update the document title using the browser API
        getSubscribedEvents();
      },[]);

      const getSubscribedEvents = () => {
            db.listJoinedEvents().then((data) => {
                console.log('event details data: ', data);
                setEvents(data)
            }).catch((err) => {
              console.log(err);
            })
      }
    
    const {navigation } = props;
    console.log('events....',events);
  return (
    <View style={styles.container}>
        <EventCard navigation={navigation} events={events} ScreenType={undefined}/>
    </View>
  );
};

export default MyEvents;

const styles = StyleSheet.create({
  container: {flex:1}
});
