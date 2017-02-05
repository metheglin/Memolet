import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
// import LoadStatus from '../utils/LoadStatus'
// import {
//   loadMemos,
//   receiveMemos
// } from '../actions/memo_list'

export default class MemoDigest extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   loadStatus: new LoadStatus(),
    //   items: null,
    // }
  }

  onPress() {
    // console.log("this.props.memoId")
    // console.log(this.props.memoId)
    this.props.onSelectMemo( this.props.memoId )
    this.props.onTransit("memo_detail", {id: this.props.memoId})
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity 
          style={styles.digest}
          onPress={this.onPress.bind(this)}>
          <Text style={styles.content}>{this.props.content}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  digest: {
    height: 50,
  },
  content: {

  }
}