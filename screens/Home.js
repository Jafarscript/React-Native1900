import { useState } from "react"
import { Text, View, FlatList, SafeAreaView } from "react-native"
import {COLORS, NFTData} from '../constants'
import { NFTcard, FocusStatusBar, HomeHeader} from "../components"

const Home = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
        <FocusStatusBar />

        <View style={{flex : 1}}>
            <View style={{zIndex : 0}}>
                <FlatList
                data={NFTData}
                renderItem={({item}) => <NFTcard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader />}
                 />
            </View>
        </View>

        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1
        }}>
            <View style={{height: 300, backgroundColor: COLORS.primary}} />
            <View style={{flex: 1, backgroundColor: COLORS.white}} />
        </View>
    </SafeAreaView>
    )
}

export default Home