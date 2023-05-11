import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingVertical: 19,
          backgroundColor: "#463FAF"
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={{ fontSize: 18, color: '#fff', marginLeft: 40, fontWeight: "500" }}>
          Meu Menu
        </Text>
      </TouchableOpacity>
      <Text>aqui ficará alguns dados do usuário</Text>
    </View>
  );
}
