import { StatusBar } from 'expo-status-bar';
import { View,Text  } from 'react-native';
import { SignIn } from './screen/SignIn';

import { Login } from './LoginRegister/Login';
import { Register } from './LoginRegister/Register';
// import Sign from './Signin';

export default function App () {
  return (
    <View>
      {/* <Text>food</Text> */}
      {/* <SignIn/> */}
      {/* <Todo /> */}
      {/* <Login/> */}
      <Register/>
    </View>
  );
}