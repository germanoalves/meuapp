import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function detalhesHome ({ route })  {
  // Acessar o objeto item passado como parâmetro
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View>
      {/* Renderizar os dados do item */}
      <Text>{item.nome}</Text>
      <Text>{item.idade}</Text>
      {/* Adicionar outros dados como "fb" e "ig" */}
      <Text>{item.fb}</Text>
      <Text>{item.ig}</Text>
    </View>
  );
};