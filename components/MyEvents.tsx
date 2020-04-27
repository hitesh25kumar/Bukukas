import React,{useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
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

      const getSubscribedEvents = async() => {
          try {
            const value = await AsyncStorage.getItem('username')
            if(value !== null) {
              db.listJoinedEvents(value).then((data) => {
                console.log('event details data: ', data);
                setEvents(data)
            }).catch((err) => {
              console.log(err);
            })
              
            }
          } catch(e) {
            // error reading value
          }
        }
    
    
  return (
    <View style={styles.container}>
        <EventCard navigation={navigation} events={events} ScreenType={undefined} eventsData={eventsData} title="Event Followed by you"/>
    </View>
  );
};

export default MyEvents;

const styles = StyleSheet.create({
  container: {flex:1}
});
