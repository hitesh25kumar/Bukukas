import React,{useState,useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Header from './Header';
import Login from './Login';
import EventWrapper from './EventWapper';
import eventsData from '../Data/data';

interface HomeProps {navigation}

const Home = (props: HomeProps) => {
  const [login, showLogin] = useState(true);
  const [name, setUsername] = useState(undefined);
  const [data,setData] = useState(eventsData);
  console.log('data:>>>>>>> ', data);
  const { navigation } = props;
  useEffect(() => {
    console.log('home api call');
    // Update the document title using the browser API
    if(!name){
    getUserName()
    }
  },[]);

  const getUserName = async () => {
    try {
      const value = await AsyncStorage.getItem('username')
      console.log('value:.. ', value);
      if(value !== null) {
        console.log('value: ', value);
        setUsername(value)
        // value previously stored
        
      }
    } catch(e) {
      // error reading value
    }
  }

  const filterData = (value) => {
    console.log('value: ....', data);
    if(value === 'Date'){
      const sortedData =  eventsData.sort(function(x, y){
        return x.timestamp - y.timestamp;
    })
      console.log('sortedData: ', sortedData,data);
      setData(sortedData)
    }
    if(value === 'Event Type'){
      const sortedData = eventsData.sort((a,b) => (a.entryType > b.entryType) ? 1 : ((b.entryType > a.entryType) ? -1 : 0)); 
      console.log('sortedData: ', sortedData,data);
      setData(sortedData) 
    }
    console.log('sorted data: ....', data);
  }

  return (
    
    <View style={styles.container}>
      {login && <Login hideLogin={() => showLogin(false)}/>}
        <Header name={name} filterData={(value) => filterData(value)}/>
      <View style={styles.homeWrapper}>

      <Swipeable onSwipeableLeftOpen={() => console.log('swipe left')} childrenContainerStyle={{width: '100%', height: '100%',marginBottom:'5%'}}>
     <EventWrapper  navigation={navigation} eventsData={data}/>
</Swipeable>
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:'#323edd'},
  homeWrapper:{
      flex:1,
      borderTopLeftRadius:18,
      borderTopRightRadius:18
  }
});

