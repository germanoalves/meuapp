import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "./styles";

export const CategoriesHome = () => {
  const [data, setData] = useState([]);
  const navigationHooks = useNavigation();

  const API_URL = process.env.BASE_API_URL || "http://localhost:1337";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}api/categorias`); // Substitua pela URL do seu JSON
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //

  const handleItemClick = () => {};

  return (
    <ScrollView
      horizontal={true}
      style={styles.categories}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}         
          onPress={() => handleItemClick()}
        >
          <View style={styles.categorieItemSingle}>
            <Image
              style={styles.menuIconCategorie}
              source={require("../../assets/images/tags-category.png")}
            />
            <Text style={styles.categorieName}>
              {item.attributes.nome_categoria}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  
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
