import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Image, 
  TouchableHighlight,
  Alert, 
  SafeAreaView,
  Dimensions,
  Platform, 
  Button} from 'react-native';
  import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

//SafeAreaView add padding on the top to ensure text is within safe area

export default function App() {

  const {landscape} =useDeviceOrientation();

  console.log(useDimensions())
  console.log(useDeviceOrientation())
  //console.log(Dimensions.get('screen'))
  const handlePress = () => console.log('text pressed')

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World!</Text>
      {/* <Image source={require('./assets/icon.png')}/> */}
        <View style={{
           width: '50%',
           height: landscape ? "100%" : "30%",
           backgroundColor: 'dodgerblue' 
           }}>

        </View>
      <TouchableHighlight onPress={()=> console.log('image tapped')}>
        {/* <Image source={{width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/> */}
      </TouchableHighlight>

      <Button title='click me!' onPress={()=> Alert.alert("My title", "My message", [
        {text: "yes"},
        {text: "No"}
        ])}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
