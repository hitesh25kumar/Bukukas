import React,{useState,useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header';
import Login from './Login';
import EventWrapper from './EventWapper';
import eventsData from '../Data/data';

interface HomeProps {navigation,filterData}

const Home = (props: HomeProps) => {
  const [login, showLogin] = useState(true);
  const [name, setUsername] = useState(undefined);
  const [filterType ,setFilter] = useState(false);
  
  const { navigation } = props;
  useEffect(() => {
    if(!name){
    getUserName()
    }
  },[]);

  const getUserName = async () => {
    try {
      const value = await AsyncStorage.getItem('username')
      
      if(value !== null) {
        
        setUsername(value)
        // value previously stored
        
      }
    } catch(e) {
      // error reading value
    }
  }

  const filterData = (value) => {
    setFilter(value);
  }


  return (
    
    <View style={styles.container}>
      {login && <Login hideLogin={() => showLogin(false)} setname={(value) => setUsername(value)}/>}
        <Header name={name} filterData={(value) => filterData(value)}/>
      <View style={styles.homeWrapper}>

    <EventWrapper  navigation={navigation} filterType={filterType}/>

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

