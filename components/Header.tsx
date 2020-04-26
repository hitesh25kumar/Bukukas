import * as React from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';

interface componentNameProps {name}

const Header = (props: componentNameProps) => {
  const { name } = props;
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#323edd'/>
        <Text style={styles.username}>Hey, {name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
      width:'100%',
      backgroundColor:'#323edd',
      paddingVertical:'5%',
      display: 'flex',
      alignItems:'center'
  },
  headertxt:{color:'#fff',fontSize:17},
  username:{color:'#fff',fontSize:20,fontWeight:'bold'}
});
