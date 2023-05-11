import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { CarrosselHome}  from '../carrosselHome';
import { ItemsList } from '../ItemsList';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import  CategoriesHome  from '../CategoriesHome';
import { StatusBar } from 'react-native';

export default function Home({ navigation }) {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar
    barStyle = "light-content"
    hidden = {false}
    backgroundColor = "#463FAF"
    translucent = {false}
    networkActivityIndicatorVisible = {true}
/>
        <View style={styles.topHeader}>
      <View style={styles.header}>       
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
          placeholderTextColor={'white'}
        />
      </View>
      </View>
      <View style={styles.subHead}>
        <TouchableOpacity style={styles.subHeadIconOne}>
          <Image
            style={styles.menuIconUser}
            source={require("../../assets/images/user.png")}
          />
          <Text style={{color: '#463FAF'}}>Se cadastrar</Text>
        </TouchableOpacity>
        <View>
          <Text>|</Text>
        </View>
        <TouchableOpacity style={styles.subHeadIconTwo}>
          <Image
            style={styles.menuIconSearch}
            source={require("../../assets/images/search.png")}
          />
          <Text style={{color: '#463FAF'}}>Prestadores</Text>
        </TouchableOpacity>
      </View>        
        <CategoriesHome navigation={navigation}/>
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




