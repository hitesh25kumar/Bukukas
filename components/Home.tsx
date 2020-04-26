import React,{useState,useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header';
import Login from './Login';
import EventWrapper from './EventWapper';

interface HomeProps {navigation}

const Home = (props: HomeProps) => {
  const [login, showLogin] = useState(true);
  const [name, setUsername] = useState(undefined);
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

  return (
    
    <View style={styles.container}>
      {login && <Login hideLogin={() => showLogin(false)}/>}
        <Header name={name}/>
      <View style={styles.homeWrapper}>

           <EventWrapper  navigation={navigation}/>

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

