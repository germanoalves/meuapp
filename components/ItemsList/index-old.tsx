import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const ItensHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapibase-production.up.railway.app/api/profissionals/?populate=%2A"
        ); // Substitua pela URL do seu JSON
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.containerItens}>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
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
        </View>
      ))}
    </View>
  );
};
