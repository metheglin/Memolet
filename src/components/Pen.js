import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import {
  writeDown
} from '../actions/navigator'

export default class Pen extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      text: 'popopo'
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={this.props.onPressWriteDown.bind(this, this.state.text)}>
          <Text style={{ color: 'white' }}>WRITE</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={this.props.onPressPenDown}>
          <Text style={{ color: 'white' }}>DOWN</Text>
        </TouchableOpacity>
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