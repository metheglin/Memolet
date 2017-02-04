import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Navigator,
  View,
  Text
} from 'react-native'
import MainContainer from './MainContainer'
import Test1Container from './Test1Container'
import Test2Container from './Test2Container'
import Test3Container from './Test3Container'

const routes = {
  default: { component: MainContainer, index: 0 },
  puma: { component: Test1Container, index: 1 },
  lion: { component: Test2Container, index: 2 },
  cat: { component: Test3Container, index: 2 },
  caracal: { component: Test3Container, index: 2 },
}

class App extends Component {

  renderScene(route, navigator) {
    let Component = route.component

    return (
      <Component 
        navigator={navigator} 
        route={route}
        onTransit={(key) => {
          const nextIndex = route.index + 1
          if ( route.index === routes[key].index ) {
            navigator.replace( routes[key] )
          }
          if ( route.index > routes[key].index ) {
            navigator.popN( route.index - routes[key].index )
          }
          if ( route.index < routes[key].index ) {
            navigator.push( routes[key] )
          }
        }} />
    )
  }

  render() {
    return (
      <Navigator
        style={{paddingTop: 20}}
        initialRoute={routes.default}
        initialRouteStack={Object.values(routes)}
        renderScene={this.renderScene} />
    );
  }
}
        // navigationBar={
        //   <Navigator.NavigationBar 
        //     style={{backgroundColor: 'gray'}}
        //     routeMapper={{
        //       LeftButton: (route, navigator, index, navState) => { 
        //         return (<Text>cancel</Text>)
        //       },
        //       RightButton: (route, navigator, index, navState) => {
        //         return (<Text>Done</Text>)
        //       },
        //       Title: (route, navigator, index, navState) => {
        //         return (<Text>Awesome nav bart</Text>)
        //       }
        //     }}
        //   />
        // }



export default App
