import { View, Text , Image} from 'react-native'
import { EthPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsBid = ({bids}) => {
  return (
    <View style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2
    }}>
      <Image 
      source={bids.image}
      resizeMode='contain'
      style={{width: 48, height: 48}}
       />

      <View>
        <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary
        }}>
            Bid placed by {bids.name}
        </Text>
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
        }}>
            {bids.date}
        </Text>
      </View>

      <EthPrice price={bids.price} />
    </View>
  )
}

export default DetailsBid