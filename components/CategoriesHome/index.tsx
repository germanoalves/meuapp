import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "./styles";



export const CategoriesHome = ({ navigation }) => {
  const [data, setData] = useState([]);
  const navigationHooks = useNavigation();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/categorias"
        ); // Substitua pela URL do seu JSON
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

//   

  return (
    <View style={styles.containerItens}> 

      <ScrollView 
        horizontal={true} style={styles.categories}
        showsHorizontalScrollIndicator={false}>

      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => handleItemClick(item)}
        >
          <View style={styles.categorieItemSingle}>           
          <Image
              style={styles.menuIconCategorie}
              source={require("../../assets/images/tags-category.png")}
            /><Text style={styles.categorieName}>{item.attributes.nome_categoria}</Text>
          </View>
        </TouchableOpacity>
      ))}

      </ScrollView>
    </View>
  );  
};

// const Stack = createStackNavigator();

// export const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="ItemsList" component={ItemsList} />
//         <Stack.Screen name="ItemDetails" component={ItemDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };