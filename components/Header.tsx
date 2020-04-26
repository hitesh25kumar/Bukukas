import React,{useState} from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import {Picker} from '@react-native-community/picker';

interface componentNameProps {name,filterData}

const Header = (props: componentNameProps) => {
  const { name,filterData } = props;
  const [value, setValue] = useState('Free');
  console.log('value: ', value);

  const filter = (itemValue) => {
    setValue(itemValue)
    filterData(itemValue)
  }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#323edd'/>
        <View style={styles.TopHeaderWrapper}>
        <Text style={styles.username}>Hey, {name}</Text>
        <View style={styles.pickerWrapper}>
        <Picker
  selectedValue={value}
  mode='dropdown'
  style={{height: 50, width: 150,color:'#fff',borderWidth:1,borderColor:'#fff'}}
  onValueChange={(itemValue, itemIndex) =>
    filter(itemValue)
  }
  >
  <Picker.Item label="Event Type" value="Event Type" />
  <Picker.Item label="Date" value="Date" />
  <Picker.Item label="Popular" value="Popular" />
</Picker>
</View>
</View>
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
  username:{color:'#fff',fontSize:20,fontWeight:'bold'},
  TopHeaderWrapper:{width:'100%',display: 'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:'5%'},
  pickerWrapper:{display:'flex'}
});
