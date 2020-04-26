import React,{useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import Database from '../database';
import eventsData from '../Data/data';

const db = new Database();
interface MyEventsProps {navigation}

const MyEvents = (props: MyEventsProps) => {
    const [events, setEvents] = useState([]);
    const {navigation } = props;
    useEffect(() => {
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
    
    
  return (
    <View style={styles.container}>
        <EventCard navigation={navigation} events={events} ScreenType={undefined} eventsData={eventsData}/>
    </View>
  );
};

export default MyEvents;

const styles = StyleSheet.create({
  container: {flex:1}
});
