import * as React from 'react';
import { Text, View,TouchableOpacity, StyleSheet,Image } from 'react-native';

interface JoiningConfirmPopupProps {eventName,navigation,hidePopup}

const JoiningConfirmPopup = (props: JoiningConfirmPopupProps) => {
  const {eventName,navigation,hidePopup} = props;

  const exploreMore = () => {
    console.log('explore');
    hidePopup()
    navigation.navigate('MyTabs')
    return true;
  }

  return (
    <View style={styles.container}>
            <View style={styles.popupWrapper}>
            <Image source={require('../assets/images/confirm.png')} style={styles.img} resizeMode="contain"/>
      <Text style={styles.title}>Thank you for Joining</Text>
      <Text style={styles.eventname}>{eventName}</Text>
      <TouchableOpacity style={styles.confirmBtn} onPress={exploreMore}>
        <Text style={styles.btntxt}>Explore more events</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoiningConfirmPopup;

const styles = StyleSheet.create({
  container: {width:'100%', height:'100%',position:'absolute',backgroundColor:'rgba(0,0,0,0.8)',elevation:10,display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999},
  popupWrapper:{width:'80%',backgroundColor:'#fff',borderRadius:10,padding:'10%',display:'flex',alignItems:'center',justifyContent:'center'},
  title:{color:'#000',fontSize:18,marginBottom:'5%'},
  eventname:{color:'#000',fontSize:18,marginBottom:'5%',fontWeight:'bold',width:'100%',textAlign:'center'},
  confirmBtn:{paddingHorizontal:'10%',backgroundColor:'#323edd',margin:'5%',paddingVertical:'5%',display:'flex',alignItems:'center',borderRadius:18,zIndex:9999},
  btntxt:{color:'#fff',fontWeight:'bold',letterSpacing:1},
  img:{width:50,height:50,marginBottom:'5%'}
});
