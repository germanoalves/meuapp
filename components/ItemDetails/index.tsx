import React from 'react';
import { View, Text } from 'react-native';

export default function ItemDetails({ route }) {
 // console.log("Route params:", route.params);
  const { item } = route.params;

  return (
    <View>
      <Text>{item.attributes.nome}</Text>
      <Text>{item.attributes.idade}</Text>
      <Text>{item.attributes.fb}</Text>
      <Text>{item.attributes.ig}</Text>
    </View>
  );
}