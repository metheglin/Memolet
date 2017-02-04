import React, { Component } from 'react'
import {
  View,
  ListView,
  Text
} from 'react-native'
import LoadStatus from '../utils/LoadStatus'
import {
  loadMemos,
  receiveMemos
} from '../actions/memo_list'

export default class MemoList extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   loadStatus: new LoadStatus(),
    //   items: null,
    // }
  }

  componentDidMount() {
    // this.load()
    this.props.onLoadMemos()
  }

  // load() {
  //   loadMemos()
  //   // this.setState({ loadStatus: this.state.loadStatus.setRequestSent() })

  //   fetch('https://develop.moco.metheglin.jp/v1/memos', {
  //     headers: {
  //       'Authorization': 'Token 0f3a2f8566c845c7a5df62075c2de687'
  //     }
  //   }).then((response) => {
  //     this.setState({ 
  //       loadStatus: this.state.loadStatus.setRequestReceived( response )
  //     })

  //     if (! response.ok) {
  //       throw Error( response )
  //     }
  //     return response.json()
  //   }).then((json) => {
  //     this.setState({ items: json })
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }

  renderList() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    if ( ! this.props.memo_list.loadStatus.isLoaded() ) {
      return (<Text>Now Loading...</Text>)
    }

    if ( ! this.props.memo_list.loadStatus.isSuccess() ) {
      return (<Text>Network ERROR</Text>)
    }

    if ( ! this.props.memo_list.items || this.props.memo_list.items.length <= 0 ) {
      return (<Text>No result...</Text>)
    }

    let dataSource = ds.cloneWithRows(this.props.memo_list.items)
    return (
      <ListView 
        dataSource={dataSource}
        renderRow={(row) => {
          return <Text>{row.content}</Text>
        }} />
    )
  }

  render() {
    return (
      <View>{this.renderList()}</View>
    )
  }
}