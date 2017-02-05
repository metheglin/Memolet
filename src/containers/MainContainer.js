import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  Navigator,
  View,
  ScrollView,
  Text
} from 'react-native'
import GlobalNavigator from '../components/GlobalNavigator'
import MemoList from '../components/MemoList'
import MemoDetail from '../components/MemoDetail'
import Pen from '../components/Pen'

import * as navigators from '../actions/navigator'
import * as memo_list from '../actions/memo_list'
import * as memo_detail from '../actions/memo_detail'

const routes = {
  memo_list: { component: MemoList, index: 0 },
  memo_detail: { component: MemoDetail, index: 1 },
}

class MainContainer extends Component {
  renderScene(route, navigator) {
    let Component = route.component

    return (
      <Component 
        {...this.props}
        navigator={navigator} 
        route={route}
        onTransit={(key, data) => {
          const nextIndex = route.index + 1
          if ( route.index === routes[key].index ) {
            navigator.replace( routes[key] )
          }
          if ( route.index > routes[key].index ) {
            navigator.popN( route.index - routes[key].index )
          }
          if ( route.index < routes[key].index ) {
            navigator.push( Object.assign({}, routes[key], data) )
          }
        }} />
    )
  }
  renderPen() {
    if ( this.props.navigator.pen ) {
      return (<Pen {...this.props} />)
    }
  }
  render() {
        // <ScrollView style={styles.mainView}>
          // <MemoList {...this.props} test="a" />
        // </ScrollView>
    return (
      <View {...this.props} style={styles.container}>
        <Navigator
          initialRoute={routes.memo_list}
          initialRouteStack={Object.values(routes)}
          renderScene={this.renderScene.bind(this)} />
          
        <GlobalNavigator
          {...this.props}
          style={styles.globalNavigator}
          onRootTransit={this.props.onRootTransit} />
        {this.renderPen()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
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

    onSelectMemo: (id) => { dispatch(memo_detail.selectMemo(id)) },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)