import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'
// import LoadStatus from '../utils/LoadStatus'
// import {
//   loadMemos,
//   receiveMemos
// } from '../actions/memo_list'

export default class MemoDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.memo_detail)
        // <TouchableOpacity 
        //   style={styles.digest}
        //   onPress={this.onPress}>
        // </TouchableOpacity>
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <Text>
            Created: 2017-02-06
            Updated: 2017-02-06
          </Text>
          <Text style={styles.content}>
            {this.props.memo_detail.attributes.content}
          </Text>
        </ScrollView>
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