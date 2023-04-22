import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { styles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CarrosselHome}  from './components/carrosselHome';
import { ItensHome } from './components/itensHome/index';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const [input, setInput] = useState('');

function Conference({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Conference Details página contendo qualquer coisa</Text>
        <Pressable
          onPress={() => navigation.navigate('Story')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
          <Text>Go to Story</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
          <Text>Open Drawer</Text>
        </Pressable>
      </View>
    );
  }

  function Story({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Our Story</Text>
        <Pressable
          onPress={() => navigation.navigate('Conference')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
          <Text>Go to Conference</Text>
        </Pressable>
      </View>
    );
  }

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MeuApp" component={Home} />
        <Drawer.Screen name="Conference" component={Conference} />
        <Drawer.Screen name="Story" component={Story} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  function Home({ navigation }) {
    return (      
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.menu}>
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.menuIcon}
                source={require('./assets/images/menu.png')}
              />
            </Pressable>
          </View>
          <View style={styles.logo}>
            <Text>Logotipo do Projeto</Text>
          </View>
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
        <View style={styles.subHead}>
        <TouchableOpacity style={styles.subHeadIconOne}>          
            <Image
              style={styles.menuIconUser}
              source={require('./assets/images/user.png')}
            />
            <Text>Se cadastrar</Text>          
          </TouchableOpacity>
        <View><Text>|</Text></View>
          <TouchableOpacity style={styles.subHeadIconTwo}>
            <Image
              style={styles.menuIconSearch}
              source={require('./assets/images/search.png')}
            />
            <Text>Prestadores</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentHome}>
          <CarrosselHome />
        </View>
        <ScrollView>
        <View>
          <ItensHome />          
        </View>  
        </ScrollView>      
      </View>
      
    );
  }
}
