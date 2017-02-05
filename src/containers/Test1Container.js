import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import GlobalNavigator from '../components/GlobalNavigator'
// import MemoList from '../components/MemoList'

export default class Test1Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainView}>
          <Text>Test1</Text>
          
        </ScrollView>
        <GlobalNavigator
          style={styles.globalNavigator}
          onRootTransit={this.props.onRootTransit} />
      </View>
    )
  }
}

const styles = {
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  mainView: {
    backgroundColor: 'gray'
    // height: 600,
  },
  globalNavigator: {
    // backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // width: 100,
    // height: 30,
  }
}