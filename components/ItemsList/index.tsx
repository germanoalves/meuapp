import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "./styles";
import ItemDetails from "../ItemDetails";

interface Props {
  navigation: any;
}

export const ItemsList: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState([]);
  const navigationHooks = useNavigation();
  const API_URL = process.env.BASE_API_URL || "http://localhost:1337";
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}api/profissionals/?populate=%2A`
        ); // Substitua pela URL do seu JSON
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (item: never) => {
    
    navigationHooks.navigate('ItemDetails', { item });
  }

  return (
    <View style={styles.containerItens}>      
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => handleItemClick(item)}
        >
          <View style={styles.titleCardItem}>
            <Image
              style={styles.menuIconUserIndiv}
              source={require("../../assets/images/icon-user.png")}
            />
            <Text style={styles.itensCardName}>{item.attributes.nome}</Text>
          </View>
          <View style={styles.titleCardCat}>
            <Image
              style={styles.menuIconUserIndiv}
              source={require("../../assets/images/tags-category.png")}
            />
            <Text style={styles.itensCardCat}>
              {item.attributes.categoria.data.attributes.nome_categoria}
            </Text>
          </View>
          <View style={styles.titleCardBio}>
            <Image
              style={styles.menuIconUserIndiv}
              source={require("../../assets/images/icon_bio.png")}
            />
            <Text style={styles.itensCardBio}>{item.attributes.bio}</Text>
          </View>
          {/* Acesse outros atributos do objeto JSON aqui */}
        </TouchableOpacity>
      ))}
    </View>
  );

  
};
const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ItemsList" component={ItemsList} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// import React, { useEffect, useState } from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// import { styles } from "./styles";

// export const ItensHome = () => {
//   const [data, setData] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:1337/api/profissionals/?populate=%2A"
//         ); // Substitua pela URL do seu JSON
//         const json = await response.json();
//         setData(json.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleItemClick = ({item}) => {
//     navigation.navigate('Detalhes', { item });
//   }

//   return (
//     <View style={styles.containerItens}>
//       {/* <TouchableOpacity
//         style={{ paddingHorizontal: 10 }}
//         onPress={() => navigation.toggleDrawer()}
//       >
//         <Ionicons name="ios-menu" size={30} />
//       </TouchableOpacity> */}
//       {data.map((item) => (
//         <TouchableOpacity
//           key={item.id}
//           style={styles.card}
//           onPress={() => handleItemClick(item)}
//         >
//           <View style={styles.titleCardItem}>
//             <Image
//               style={styles.menuIconUserIndiv}
//               source={require("../../assets/images/icon-user.png")}
//             />
//             <Text style={styles.itensCardName}>{item.attributes.nome}</Text>
//           </View>
//           <View style={styles.titleCardCat}>
//             <Image
//               style={styles.menuIconUserIndiv}
//               source={require("../../assets/images/tags-category.png")}
//             />
//             <Text style={styles.itensCardCat}>
//               {item.attributes.categoria.data.attributes.nome_categoria}
//             </Text>
//           </View>
//           <View style={styles.titleCardBio}>
//             <Image
//               style={styles.menuIconUserIndiv}
//               source={require("../../assets/images/icon_bio.png")}
//             />
//             <Text style={styles.itensCardBio}>{item.attributes.bio}</Text>
//           </View>
//           {/* Acesse outros atributos do objeto JSON aqui */}
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };
