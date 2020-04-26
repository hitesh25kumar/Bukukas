import * as React from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'
import EventCard from './EventCard';
interface EventWrapperProps {
    navigation
}

const EventWrapper = (props: EventWrapperProps) => {
    const { navigation } = props;
  return (
    <View style={styles.container}>
        <Text style={styles.EventCategoryTitle}>Discover Events near you</Text>

      <Swipeable onSwipeableLeftWillOpen={() => console.log('swipe left1')} onSwipeableLeftOpen={() => console.log('swipe left')} childrenContainerStyle={{width: '100%', height: '100%',marginBottom:'5%'}}>
      <EventCard navigation={navigation} ScreenType events={undefined}/>
      </Swipeable>
    </View>
  );
};

export default EventWrapper;

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:'#F4F4F4',borderTopLeftRadius:18,borderTopRightRadius:18},
  EventCategoryTitle:{fontSize:23,fontWeight:'bold',paddingTop:15,paddingLeft:'5%'}
});
