import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      buttonColor:'red'
      }
  }
  


  resetDb1=()=>{
  var resetDatabase = db.ref('Aishu/').set({
    absent:false,present:false,aishuPresentColor:'white',aishuAbsentColor:'white'
  })
}
resetDb2=()=>{
  var resetDatabase = db.ref('Anjali/').set({
    absent:false,present:false,anjaliPresentColor:'white',anjaliAbsentColor:'white'
  })
}
resetDb3=()=>{
  var resetDatabase = db.ref('Jacob/').set({
    absent:false,present:false,jacobPresentColor:'white',jacobAbsentColor:'white'
  })
}
resetDb4=()=>{
  var resetDatabase = db.ref('Ravi/').set({
    absent:false,present:false,raviPresentColor:'white',raviAbsentColor:'white'
  })
}

 aishu1Pressed(){
  var aishu1 = db.ref('Aishu/' + '/')
  aishu1.update({
    'absent': 'true',
    aishuAbsentColor:'red'
  })
}

aishu2Pressed(){
  var aishu2 = db.ref('Aishu/' + '/')
  aishu2.update({
    'present': 'true',
    aishuPresentColor:'green'
  })
}
anjali1Pressed(){
  var anjali1 = db.ref('Anjali/' + '/')
  anjali1.update({
    'absent': 'true',
    anjaliAbsentColor:'red'
  })
}

anjali2Pressed(){
  var anjali2 = db.ref('Anjali/' + '/')
  anjali2.update({
    'present': 'true',
    anjaliPresentColor:'green'
  })
}
ravi1Pressed(){
  var ravi1 = db.ref('Ravi/' + '/')
  ravi1.update({
    'absent': 'true',
    raviAbsentColor:'red'
  })
}

ravi2Pressed(){
  var ravi2 = db.ref('Ravi/' + '/')
  ravi2.update({
    'present': 'true',
    raviPresentColor:'green'
  })
}
jacob1Pressed(){
  var jacob1 = db.ref('Jacob/' + '/')
  jacob1.update({
    'absent': 'true',
    jacobAbsentColor:'red'
  })
}

jacob2Pressed(){
  var jacob2 = db.ref('Jacob/' + '/')
  jacob2.update({
    'present': 'true',
    jacobPresentColor:'green'
  })
}

  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
      

        <AppHeader />

        <Text style={styles.studenChartContainer}>Aishu</Text>
        <Text style={styles.studenChartContainer}>Anjali</Text>
        <Text style={styles.studenChartContainer}>Ravi</Text>
        <Text style={styles.studenChartContainer}>Jacob</Text>

        <TouchableOpacity
          style={styles.button1A}
          onPress={() => {
            this.jacob1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2A}
          onPress={() => {
               this.ravi1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3A}
          onPress={() => {
            this.anjali1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4A}
          onPress={() => {
            this.aishu1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent4</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button1P}
          onPress={() => {
           this.aishu2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2P}
          onPress={() => {
             this.anjali2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3P}
          onPress={() => {
              this.ravi2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4P} 
          onPress={() => {
              this.jacob2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>

        <View style={{flex:1,}}>
      <Button title='Clear Aishu record' style={{
        width:100,
        height:100
      }} onPress={this.resetDb1} ></Button></View>

      <View style={{flex:1}}>
      <Button title='Clear Anjali record' style={{
        width:100,
        height:100
      }} onPress={this.resetDb2} ></Button></View>

      <View style={{flex:1}}>
      <Button title='Clear Jacob record' style={{
        width:100,
        height:100
      }} onPress={this.resetDb3} ></Button></View>

      <View style={{flex:1}}>
      <Button title='Clear Ravi record' style={{
        width:100,
        height:100,
        
      }} onPress={this.resetDb4} ></Button></View>

      </View>
    );
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
  studenChartContainer: {
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
    backgroundColor: 'red'
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
    backgroundColor: 'red'
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
    backgroundColor: 'red'
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
    backgroundColor: 'red'
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
    backgroundColor: 'green'
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
    backgroundColor: 'green'
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
    backgroundColor: 'green'
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
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'black',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 200,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
   button3Text: {
    textAlign: 'center',
    color: 'purple',
  },
 
});