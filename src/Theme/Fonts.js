/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'
import { FontSize } from './Variables'

export default StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small,
    fontFamily: 'Lato-Regular'
  },
  textRegular: {
    fontSize: FontSize.regular,
    fontFamily: 'Lato-Regular'
  },
  textLarge: {
    fontSize: FontSize.large,
    fontFamily: 'Lato-Regular'
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontFamily: 'Lato-Bold'
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontFamily: 'Lato-Bold'
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontFamily: 'Lato-Bold'
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
})
