import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'
import EventCard from './EventCard';
interface EventWrapperProps {
    navigation,eventsData
}

const EventWrapper = (props: EventWrapperProps) => {
    const { navigation,eventsData } = props;
  return (
    <View style={styles.container}>
      

      <Swipeable onSwipeableLeftOpen={() => console.log('swipe left')} childrenContainerStyle={{width: '100%', height: '100%',marginBottom:'5%'}}>
      <EventCard navigation={navigation} ScreenType events={undefined} eventsData={eventsData}/>
      </Swipeable>
    </View>
  );
};

export default EventWrapper;

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:'#F4F4F4',borderTopLeftRadius:18,borderTopRightRadius:18,paddingBottom:'15%'},
  
});
