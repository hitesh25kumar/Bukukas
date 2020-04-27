import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import EventCard from './EventCard';

interface EventWrapperProps {
    navigation,filterType
}

const EventWrapper = (props: EventWrapperProps) => {
    const { navigation,filterType } = props;
  return (
    <View style={styles.container}>
      

      <EventCard navigation={navigation} ScreenType events={undefined} filterType={filterType} title='Discover Events near you'/>

    </View>
  );
};

export default EventWrapper;

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:'#F4F4F4',borderTopLeftRadius:18,borderTopRightRadius:18,},
  
});
