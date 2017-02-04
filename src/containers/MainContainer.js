import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import GlobalNavigator from '../components/GlobalNavigator'
import MemoList from '../components/MemoList'
import Pen from '../components/Pen'

import * as navigators from '../actions/navigator'
import * as memo_list from '../actions/memo_list'

class MainContainer extends Component {
  renderPen() {
    if ( this.props.navigator.pen ) {
      return (<Pen {...this.props} />)
    }
  }
  render() {
    return (
      <View {...this.props} style={styles.container}>
        <ScrollView style={styles.mainView}>
          <MemoList {...this.props} test="a" />
          
        </ScrollView>
        <GlobalNavigator
          {...this.props}
          style={styles.globalNavigator}
          onTransit={this.props.onTransit} />
        {this.renderPen()}
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

// storeからstateをとりだし、コンポーネントがもとめるpropsのかたちに
// 整形して引き渡す関数
function mapStateToProps( state ) {
  return state
}

function mapDispatchToProps( dispatch ) {
  return {
    onPressPenUp: () => { dispatch(navigators.takePenUp()) },
    onPressPenDown: () => { dispatch(navigators.takePenDown()) },
    onPressWriteDown: (text) => { dispatch(navigators.writeDown(text)) },

    onLoadMemos: () => { dispatch(memo_list.loadMemos()) },
    onReceiveMemos: () => { dispatch(memo_list.receiveMemos()) },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)