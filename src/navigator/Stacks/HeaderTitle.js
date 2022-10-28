import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
// import { images } from 'theme'

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  judul: {
    alignItems: 'center',
    justifyContent: 'center',

  },
})

const HeaderTitle = () => (<Text style={styles.titleText}>SIAP</Text>)

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
