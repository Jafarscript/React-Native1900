import { View, Text, TextInput, Image} from 'react-native'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";


const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}
    >
      <View 
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      >
        <Image
        source={assets.logo}
        resizeMode='contain'
        style={{height: 45, width:90}}
         />

        <View style={{width: 45, height: 45}}>  
        <Image 
        source={assets.person01}
        resizeMode='contain'
        style={{width: '100%', height: '100%'}}
        />
        <Image 
        source={assets.badge}
        resizeMode='contain'
        style={{position: 'absolute', bottom: 0, right: 0, width: 15, height: 15}}
        />
        </View>
      </View>

      <View style={{marginVertical: SIZES.font}}>
        <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white}}>
          Hello Muizat 👋
        </Text>
        <Text style={{fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2}}>
          Let's find a masterpiece
        </Text>
      </View>

      <View style={{marginTop: SIZES.font}}>
        <View style={{
          width: '100%',
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          borderRadius: SIZES.font,
          paddingVertical: SIZES.small - 2,
        }}>
          <Image source={assets.search}
          resizeMode='contain'
          style={{width: 20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput
          placeholder='Search NFTs'
          placeholderTextColor='#454747'
          style={{flex: 1}}
          onChangeText= {onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader