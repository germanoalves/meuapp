import React from 'react';
import { View, Text } from 'react-native';

type ItemDetailsFilterProps = {
  route: {
    params: {
      itemId: number,
      itemNome: string,
      itemBio: string
      itemTel: string,
    }
  }
}

export default function ItemDetailsFilter({ route }: ItemDetailsFilterProps) {
  const { itemId, itemNome, itemBio,itemTel } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{itemNome}</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{itemBio}</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{itemTel}</Text>
      {/* <Text>itemId: {itemId}</Text> */}
    </View>
  );
}
