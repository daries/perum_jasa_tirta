import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'

import DrawerNavigator from './Drawer'

const Navigator = () => {
  const { checked, loggedIn, token } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true, token: 'adaajjajjajauuu' }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)
  console.log('[##] token', token)

  return checked ? (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  )
}

export default Navigator
