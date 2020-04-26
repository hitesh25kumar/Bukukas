import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface JoiningConfirmPopupProps {}

const JoiningConfirmPopup = (props: JoiningConfirmPopupProps) => {
  return (
    <View style={styles.container}>
            <View style={styles.popupWrapper}>
      <Text style={styles.title}>Thank you for Joining this event</Text>
      </View>
    </View>
  );
};

export default JoiningConfirmPopup;

const styles = StyleSheet.create({
  container: {width:'100%', height:'100%',position:'absolute',backgroundColor:'red',elevation:10,display:'flex',alignItems:'center',justifyContent:'center'},
  popupWrapper:{width:'80%',backgroundColor:'#fff',borderRadius:10,height:300,display:'flex',alignItems:'center',justifyContent:'center'},
  title:{color:'#000',fontSize:18}
});
