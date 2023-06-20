import React from 'react';
import { View, Share } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { heightPixel } from '../../Common/Utils/PixelNormalization';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { AppText, AppIcon } = require('../../Common/');

export const LoveAndShare = (props) => {

  const onShare = async () => {
    const result = await Share.share({
      message:
        'Check this great online shopping app,' + GLOBAL.GOOGLE_PLAY_LINK,
    })
  };

  return (
    <View style={{ position: 'absolute', top: 5, right: 5, justifyContent: 'space-between', width: '12%', height: heightPixel(80) }}>
      <TouchableOpacity onPress={onShare}>
        <AppIcon color={GLOBAL.Color.c1} name={'share-variant'} size={35} />
      </TouchableOpacity>
    </View>
  );
}