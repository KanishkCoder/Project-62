import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'
import db from '../config'

export default class HomeScreen extends React.Component {



  render(){
    return(
      <View>

      

        <AppHeader/>

        <SoundButton color={this.props.navigation.getParam('color')}/>

        <Text style={styles.studentChartContainer}>Aishu</Text>
        <Text style={styles.studentChartContainer}>Anjali</Text>
        <Text style={styles.studentChartContainer}>Ravi</Text>
        <Text style={styles.studentChartContainer}>Jacob</Text>

        <TouchableOpacity
          style={styles.button1A}
          onPress={() => {
  <Text>Absent</Text>
          }}>
          <Text style={styles.buttonText}>Absent1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2A}
          onPress={() => {
  <Text>Absent</Text>
          }}>
          <Text style={styles.buttonText}>Absent2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3A}
          onPress={() => {
  <Text>Absent</Text>
          }}>
          <Text style={styles.buttonText}>Absent3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4A}
          onPress={() => {
  <Text>Absent</Text>
          }}>
          <Text style={styles.buttonText}>Absent4</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button1P}
          onPress={() => {
  <Text>Present</Text>
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2P}
          onPress={() => {
             <Text>Present</Text>
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3P}
          onPress={() => {
  <Text>Present</Text>
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4P} 
          onPress={() => {
             <Text>Present</Text>
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studentChartContainer: {
     flexDirection: 'row',
     padding: 1,
     alignItems: 'center',
     marginTop: 40
  },
  button1A: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: -110,
    marginLeft: 200,
    width: 90,
    height: 30,
    backgroundColor: 'aishuAbsentColor'
  },
  button2A: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: -110,
    marginLeft: 200,
    width: 90,
    height: 30,
    backgroundColor: 'anjaliAbsentColor'
  },
  button3A: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: -110,
    marginLeft: 200,
    width: 90,
    height: 30,
    backgroundColor: 'raviAbsentColor',
  },
  button4A: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: -110,
    marginLeft: 200,
    width: 90,
    height: 30,
    backgroundColor: 'jacobAbsentColor'
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    
  },
  button1P: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: -70,
    marginTop: 105,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'white'
  },
  button2P: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: -70,
    marginTop: 105,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'white'
  },
  button3P: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: -70,
    marginTop: 105,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'white'
  },
  button4P: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: -70,
    marginTop: 105,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'white'
  },
  button2Text: {
    textAlign: 'center',
    color: 'black',
  },
});