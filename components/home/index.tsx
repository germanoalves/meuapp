import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { CarrosselHome}  from '../carrosselHome';
import { ItemsList } from '../ItemsList';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { CategoriesHome } from '../CategoriesHome';

export default function Home({ navigation }) {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.topHeader}>
      <View style={styles.header}>
        {/* <View>
          <TouchableOpacity
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.toggleDrawer()}
          >
            <Ionicons name="ios-menu" size={30} />
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.logo}>
          <Text>Logotipo do Projeto</Text>
        </View> */}
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text: React.SetStateAction<string>) => setInput(text)}
          inlineImageLeft="username"
          inlineImagePadding={2}
          underlineColorAndroid="transparent"
          value={input}
          placeholder="o que procuras?"
        />
      </View>
      </View>
      <View style={styles.subHead}>
        <TouchableOpacity style={styles.subHeadIconOne}>
          <Image
            style={styles.menuIconUser}
            source={require("../../assets/images/user.png")}
          />
          <Text>Se cadastrar</Text>
        </TouchableOpacity>
        <View>
          <Text>|</Text>
        </View>
        <TouchableOpacity style={styles.subHeadIconTwo}>
          <Image
            style={styles.menuIconSearch}
            source={require("../../assets/images/search.png")}
          />
          <Text>Prestadores</Text>
        </TouchableOpacity>
      </View>

        <CategoriesHome />

      <View style={styles.contentHome}>
        <CarrosselHome  navigation={navigation}/>
      </View>
      <ScrollView>
        <View>
          <ItemsList navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}




