import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HerderHome from '../../../components/Heders/HerderHome'
import { COLORS } from '../../../theme'


const Home = () => {
  return (
    <View style={{flex:1 , backgroundColor:COLORS.grayLight,}}>
      <HerderHome/>
      <View style={{flex:1 , backgroundColor:'#eee'}}>

      <Text>Home is home </Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})