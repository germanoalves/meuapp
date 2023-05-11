import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";

interface Props {
  navigation: any;
  route: any;
}

export default function ItemsListFilter ({ navigation, route }: Props)  {
  const API_URL = process.env.BASE_API_URL || "http://localhost:1337";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigationHooks = useNavigation();
  const { category } = route.params;  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}api/profissionals/?populate=%2A&filters[categoria][nome_categoria][$eq]=${category}`
        ); // Substitua pela URL do seu JSON
        const json = await response.json();
        setData(json.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }

  return (
    <View style={styles.containerItens}>      
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card} 
          onPress={() => {
            navigation.navigate('ItemDetailsFilter', { 
              itemId: item.id, 
              itemNome: item.attributes.nome, 
              itemBio: item.attributes.bio,
              itemTel: item.attributes.tel
            });
          }}        
        >
          <View style={styles.titleCardItem}>            
          <Image              
              source={require("../../assets/images/icon-user.png")}
              style={styles.IconUser}
            />
            <Text style={styles.itensCardName}>{item.attributes.nome}</Text>            
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );  
};









// import React, { useEffect, useState } from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { styles } from "./styles";

// interface Props {
//   navigation: any;
//   route: any;
// }

// export default function ItemsListFilter ({ navigation, route }: Props)  {
//   const API_URL = process.env.BASE_API_URL || "http://localhost:1337";
//   const [data, setData] = useState([]);
//   const navigationHooks = useNavigation();
//   const { category } = route.params;  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `${API_URL}api/profissionals/?populate=%2A&filters[categoria][nome_categoria][$eq]=${category}`
//         ); // Substitua pela URL do seu JSON
//         const json = await response.json();
//         setData(json.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <View style={styles.containerItens}>      
//       {data.map((item) => (
//         <TouchableOpacity
//           key={item.id}
//           style={styles.card}          
//         >
//           <View style={styles.titleCardItem}>            
//           <Image              
//               source={require("../../assets/images/icon-user.png")}
//               style={styles.IconUser}
//             />
//             <Text style={styles.itensCardName}>{item.attributes.nome}</Text>            
//           </View>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );  
// };






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
