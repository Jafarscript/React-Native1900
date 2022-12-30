import { View, Text , TouchableOpacity, Image} from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS  } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
        backgroundColor: COLORS.white,
        height: 40,
        width: 40,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
    }}
    onPress={handlePress}
    >
        <Image  
        source={imgUrl} 
        resizeMode='contain'
        style={{
            width: 24,
            height: 24,
        }}
        />
    </TouchableOpacity >
  )
}

export const RectButton = ({minWidth, fontSize, handlePress}, ...props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            minWidth: minWidth,
            borderRadius: SIZES.extraLarge,
            padding: SIZES.small,
            ...props,
        }}
        onPress={handlePress}
        >
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: fontSize,
            color: COLORS.white,
            textAlign: 'center'
        }}>
            Place a bid
        </Text>
        </TouchableOpacity >
    )
  }
