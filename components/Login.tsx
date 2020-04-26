import React,{useState} from 'react';
import { Text, View, StyleSheet,Dimensions,TouchableOpacity,TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

interface LoginProps {hideLogin}
const {width, height} = Dimensions.get('window')

const Login = (props: LoginProps) => {
    const [name, setName] = useState('');
const {hideLogin} = props;
const storeLoginData = async () => {
  console.log('login');
  try {
    await AsyncStorage.setItem('username', name)
  } catch (e) {
    // saving error
  }
  hideLogin()
}

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
  >
        <View style={styles.loginWrapper}>

        <Text style={styles.loginTitle}>Enter your Name to Continue</Text>
        <TextInput autoCapitalize='words' 
      style={styles.input}
      onChangeText={text => setName(text)}
      value={name}
    />
        <TouchableOpacity style={styles.loginbtn} disabled={name === ''} onPress={() => storeLoginData()}>
    <Text style={styles.btntxt}>Login</Text>
</TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {width,height,position: 'absolute',zIndex:1,backgroundColor:'rgba(0,0,0,0.7)',display:'flex',alignItems:'center',justifyContent:'center'},
  loginWrapper:{width:'80%',backgroundColor:'#fff',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',paddingVertical:'5%'},
  loginTitle:{fontSize:18,paddingTop:'2%'},
  loginbtn:{paddingHorizontal:'10%',backgroundColor:'#323edd',margin:'5%',paddingVertical:'3%',display:'flex',alignItems:'center',borderRadius:18},
  btntxt:{color:'#fff',fontWeight:'bold',letterSpacing:1},
  input:{width:'80%',height:40,borderWidth:1,marginVertical:'8%',borderRadius:5}
  
});
