import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Menu from './components/menu';
import ItemDetails from './components/ItemDetails';
import CategoriesHome from './components/CategoriesHome';
import ItemsListFilter from './components/ItemsListFilter';
import ItemDetailsFilter from './components/ItemDetailsFilter';
import { Ionicons, AntDesign  } from '@expo/vector-icons';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={30}
              style={{ marginLeft: 10, color: "#fff" }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTransparent: true,
          headerTitle: () => (
            <Image
              source={require("./assets/images/logo.png")}
              style={{
                width: 120,
                height: 30,
                resizeMode: "contain",
                marginLeft: 50,
              }}
            />
          ),
          headerStyle: { backgroundColor: "transparent" },
          headerTitleStyle: { color: "#463FAF" },
        }}
      />
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{
          headerTitle: "Detalhes Profissional",
          headerStyle: { backgroundColor: "#463FAF" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: "Meu Menu",
          headerStyle: { backgroundColor: "#463FAF" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="CategoriesHome"
        component={CategoriesHome}
        options={({ route }) => ({ title: route.params.category })}
      />
      <Stack.Screen
        name="ItemsListFilter"
        component={ItemsListFilter} // aqui está correto, não precisa importar novamente
        options={({ route }) => ({
          title: "Categoria: " + route.params.category,
          headerStyle: {
            backgroundColor: '#463FAF',
          },
          headerTintColor: '#fff',
        })}
      />
      <Stack.Screen 
        name="ItemDetailsFilter" 
        component={ItemDetailsFilter} 
        options={({ route }) => ({
          title: "Detalhes do Profissional",
          headerStyle: {
            backgroundColor: '#463FAF',
          },
          headerTintColor: '#fff',
        })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={focused ? "#463FAF" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen name="Meu Menu" component={Menu} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign 
                name="user"
                size={size}
                color={focused ? "#463FAF" : "#ccc"}
              />
            ),
          }}        
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './components/home';
// import Menu from './components/menu';
// import ItemDetails from './components/ItemDetails';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home}/>
//       <Stack.Screen name="ItemDetails" component={ItemDetails}  
//         options={{
//         headerTitle: "Detalhes Profissional",
//         headerStyle: { backgroundColor: "#463FAF" },
//         headerTintColor: "white"
//   }}/>
//     </Stack.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeStack} />
//         <Drawer.Screen name="Menu" component={Menu} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './components/home';
// import Menu from './components/menu';
// import ItemDetails from './components/ItemDetails';



// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Menu" component={Menu} />
//         <Drawer.Screen name="ItemDetails" component={ItemDetails} />
     
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }