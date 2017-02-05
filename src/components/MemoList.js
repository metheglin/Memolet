import React, { Component } from 'react'
import {
  View,
  ScrollView,
  ListView,
  Text
} from 'react-native'
import LoadStatus from '../utils/LoadStatus'
import {
  loadMemos,
  receiveMemos
} from '../actions/memo_list'
import MemoDigest from './MemoDigest'

export default class MemoList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onLoadMemos()
  }

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
          return (
            <MemoDigest 
              onSelectMemo={this.props.onSelectMemo}
              onTransit={this.props.onTransit}
              memoId={row.id}
              content={row.content} />
          )
        }} />
    )
  }

  render() {
    return (
      <View>{this.renderList()}</View>
    )
  }
}