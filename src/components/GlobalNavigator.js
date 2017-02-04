import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'
import {
  takePenUp
} from '../actions/navigator'

export default class GlobalNavigator extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView horizontal={true} >
          <TouchableOpacity
            style={styles.button}
            key="post"
            onPress={this.props.onPressPenUp}>
            <Text style={{ color: 'white' }}>POST</Text>
          </TouchableOpacity>
          {
            ['puma', 'lion', 'cat', 'caracal'].map((value,i)=>{
              return (
                <TouchableOpacity 
                  style={styles.button}
                  key={i+1} 
                  onPress={this.props.onTransit.bind(this, value)}>
                  <Text style={{ color: 'white' }}>{value}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  wrapper: { 
    backgroundColor: 'lightcoral',
  },
  button: {
    width: 80,
    height: 40,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  }
}